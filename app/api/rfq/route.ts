import { NextRequest, NextResponse } from "next/server";
import { company } from "@/lib/content";

export const runtime = "nodejs";

// Basic in-memory rate limiting per server instance.
// For production behind multiple instances, replace with a shared store
// (e.g. Upstash Redis) — see README "Environment Variables".
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = {
  name: 120,
  company: 160,
  email: 160,
  phone: 40,
  service: 80,
  location: 160,
  description: 4000,
};

function clean(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  // Strip control characters and cap length — defends against header
  // injection and oversized payloads without over-engineering the form.
  return value.replace(/[\r\n\t]+/g, " ").trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados pedidos. Tente novamente dentro de instantes." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const name = clean(body.name, MAX_LEN.name);
  const company = clean(body.company, MAX_LEN.company);
  const email = clean(body.email, MAX_LEN.email);
  const phone = clean(body.phone, MAX_LEN.phone);
  const service = clean(body.service, MAX_LEN.service);
  const location = clean(body.location, MAX_LEN.location);
  const description = clean(body.description, MAX_LEN.description);

  if (!name || !email || !service || !description) {
    return NextResponse.json(
      { error: "Por favor preencha todos os campos obrigatórios." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  const submission = {
    name,
    company,
    email,
    phone,
    service,
    location,
    description,
    receivedAt: new Date().toISOString(),
    ip,
  };

  console.log("[RFQ submission]", submission);

  const emailResult = await sendNotificationEmail(submission);

  if (!emailResult.ok) {
    // The submission is valid but we couldn't deliver it — say so plainly
    // rather than pretending it worked, and point to a fallback channel.
    return NextResponse.json(
      {
        error:
          "Não foi possível enviar o pedido por email neste momento. Tente novamente ou contacte-nos directamente por WhatsApp ou telefone.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

type RfqSubmission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  description: string;
  receivedAt: string;
  ip: string;
};

async function sendNotificationEmail(
  submission: RfqSubmission
): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Not configured yet — see README "Ligar o Formulário RFQ a um Serviço
    // de Email". The submission is still captured in the server logs above
    // so nothing is lost, but no email goes out until RESEND_API_KEY is set.
    console.warn(
      "[RFQ] RESEND_API_KEY não está definida — email não enviado. Ver README."
    );
    return { ok: false };
  }

  const notifyTo = process.env.RFQ_NOTIFICATION_EMAIL || company.email;
  const fromAddress =
    process.env.RESEND_FROM_EMAIL || "Site Milas Engenharia <onboarding@resend.dev>";

  const subjectLine = `Novo pedido de orçamento — ${submission.company || submission.name}`;

  const textBody = [
    `Nome: ${submission.name}`,
    `Empresa: ${submission.company || "—"}`,
    `Email: ${submission.email}`,
    `Telefone: ${submission.phone || "—"}`,
    `Serviço pretendido: ${submission.service}`,
    `Localização do projecto: ${submission.location || "—"}`,
    "",
    "Descrição do projecto:",
    submission.description,
    "",
    `Recebido em: ${submission.receivedAt}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: sans-serif; line-height: 1.6; color: #12140F;">
      <h2 style="margin-bottom: 4px;">Novo pedido de orçamento</h2>
      <p style="color: #666; margin-top: 0;">Recebido em ${submission.receivedAt}</p>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Nome</strong></td><td>${escapeHtml(submission.name)}</td></tr>
        <tr><td><strong>Empresa</strong></td><td>${escapeHtml(submission.company) || "—"}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(submission.email)}</td></tr>
        <tr><td><strong>Telefone</strong></td><td>${escapeHtml(submission.phone) || "—"}</td></tr>
        <tr><td><strong>Serviço</strong></td><td>${escapeHtml(submission.service)}</td></tr>
        <tr><td><strong>Localização</strong></td><td>${escapeHtml(submission.location) || "—"}</td></tr>
      </table>
      <p><strong>Descrição do projecto:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(submission.description)}</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: notifyTo,
        // Lets whoever reads the notification hit "Reply" and it goes
        // straight to the person who submitted the form.
        reply_to: submission.email,
        subject: subjectLine,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      console.error("[RFQ] Resend API error", res.status, errorBody);
      return { ok: false };
    }

    return { ok: true };
  } catch (err) {
    console.error("[RFQ] Failed to reach email provider", err);
    return { ok: false };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

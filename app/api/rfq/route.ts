import { NextRequest, NextResponse } from "next/server";

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

  // --------------------------------------------------------------------
  // DELIVERY HOOK
  // No email/SMS provider is wired up yet — wire one here using
  // environment variables (never hardcode credentials). For example,
  // with Resend (https://resend.com):
  //
  //   const RESEND_API_KEY = process.env.RESEND_API_KEY;
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${RESEND_API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from: "RFQ Website <rfq@yourdomain.co.mz>",
  //       to: process.env.RFQ_NOTIFICATION_EMAIL,
  //       subject: `Novo pedido de orçamento — ${submission.company || submission.name}`,
  //       text: JSON.stringify(submission, null, 2),
  //     }),
  //   });
  //
  // See README.md → "Environment Variables" and "Ligar o Formulário RFQ".
  // --------------------------------------------------------------------
  console.log("[RFQ submission]", submission);

  return NextResponse.json({ ok: true });
}

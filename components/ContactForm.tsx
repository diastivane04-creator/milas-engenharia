"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "Estradas e Pavimentação",
  "Edificações",
  "Estruturas Metálicas",
  "Consultoria",
  "Desenho de Projectos",
  "Outro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot spam check — bots fill hidden fields, real users never see them
    if (data.get("company_website")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      service: data.get("service"),
      location: data.get("location"),
      description: data.get("description"),
    };

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Não foi possível enviar o pedido.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Ocorreu um erro inesperado.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-moss/40 bg-moss/10 p-8">
        <h3 className="font-display font-bold text-xl text-ink">Pedido enviado.</h3>
        <p className="mt-2 font-body text-ink/70">
          Obrigado pelo contacto. A nossa equipa irá responder o mais brevemente possível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field — hidden from real users via CSS, not display:none so basic bots still fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Não preencher este campo</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Nome" name="name" required autoComplete="name" />
        <Field label="Empresa" name="company" autoComplete="organization" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Telefone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="eyebrow text-ink/60">
            Serviço pretendido
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-2 w-full rounded-sm border border-ink/20 bg-white px-4 py-3 font-body text-ink focus-visible:outline-2 focus-visible:outline-moss"
          >
            <option value="">Seleccione um serviço</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <Field label="Localização do projecto" name="location" />
      </div>

      <div>
        <label htmlFor="description" className="eyebrow text-ink/60">
          Descrição do projecto
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="mt-2 w-full rounded-sm border border-ink/20 bg-white px-4 py-3 font-body text-ink focus-visible:outline-2 focus-visible:outline-moss"
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-clay font-body text-sm">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-sm bg-moss px-7 py-4 eyebrow text-paper hover:bg-moss-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "A enviar…" : "Submeter Pedido"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-ink/60">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-sm border border-ink/20 bg-white px-4 py-3 font-body text-ink focus-visible:outline-2 focus-visible:outline-moss"
      />
    </div>
  );
}

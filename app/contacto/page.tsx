import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Entre em contacto com a Milas Engenharia e Obras Públicas para pedidos de orçamento e informações sobre os nossos serviços em Moçambique.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-ink text-paper contour-field-dark">
        <div className="mx-auto max-w-content px-5 sm:px-8 pt-24 pb-16">
          <p className="eyebrow text-moss-light mb-6">Contacto</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl max-w-2xl leading-[1.05] text-balance">
            Vamos construir o futuro, juntos.
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Pedido de Orçamento" title="Fale connosco" />

            <div className="mt-10 space-y-6">
              <ContactBlock label="Localização">{company.location}</ContactBlock>
              <ContactBlock label="Email">
                <a href={`mailto:${company.email}`} className="hover:text-moss-dark">
                  {company.email}
                </a>
              </ContactBlock>
              <ContactBlock label="Telefone">
                <div className="flex flex-col gap-1">
                  {company.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-moss-dark">
                      {phone}
                    </a>
                  ))}
                </div>
              </ContactBlock>
              <ContactBlock label="WhatsApp">
                <a
                  href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
                    company.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-moss-dark"
                >
                  Iniciar conversa
                </a>
              </ContactBlock>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-ink/10 pb-5">
      <p className="eyebrow text-ink/50">{label}</p>
      <div className="mt-2 font-body text-lg text-ink/85">{children}</div>
    </div>
  );
}

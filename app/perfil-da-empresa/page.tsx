import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Perfil da Empresa",
  description:
    "Descarregue o perfil oficial da Milas Engenharia e Obras Públicas, Lda em PDF.",
  alternates: {
    canonical: "/perfil-da-empresa",
  },
};

export default function PerfilEmpresaPage() {
  return (
    <section className="bg-ink text-paper contour-field-dark min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <SectionHeading
            tone="dark"
            eyebrow="Documento Oficial"
            title="Perfil da Empresa"
            description={`Descarregue o perfil completo da ${company.name} em PDF — com a nossa apresentação, áreas de actuação, capacidade técnica e referências institucionais.`}
          />
          <a
            href="/downloads/Milas-Engenharia-Perfil-da-Empresa.pdf"
            download
            className="mt-10 inline-flex items-center gap-3 rounded-sm bg-moss px-7 py-4 eyebrow text-paper hover:bg-moss-light hover:text-ink transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v13m0 0-4.5-4.5M12 16l4.5-4.5M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Descarregar Perfil (PDF)
          </a>
          <p className="mt-6 text-sm text-paper/50 font-body">
            Ficheiro PDF · Actualizado com a informação mais recente da empresa
          </p>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { teamPillars, mission } from "@/lib/content";

export const metadata: Metadata = {
  title: "Qualidade & Segurança",
  description:
    "O compromisso da Milas Engenharia com a segurança no trabalho, o rigor técnico e a qualidade de execução em cada obra.",
  alternates: {
    canonical: "/qualidade-seguranca",
  },
};

export default function QualidadeSegurancaPage() {
  return (
    <>
      <section className="bg-ink text-paper contour-field-dark">
        <div className="mx-auto max-w-content px-5 sm:px-8 pt-24 pb-16">
          <p className="eyebrow text-moss-light mb-6">Qualidade &amp; Segurança</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl max-w-2xl leading-[1.05] text-balance">
            Rigor técnico em cada obra
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/75 font-body leading-relaxed">
            {mission.valores}
          </p>
        </div>
      </section>

      <section className="bg-paper contour-field">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24">
          <SectionHeading
            eyebrow="Compromisso"
            title="Segurança, qualidade e acompanhamento contínuo"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {teamPillars.map((p) => (
              <div key={p.title} className="border-t-2 border-moss pt-6">
                <h3 className="font-display font-bold text-xl text-ink">{p.title}</h3>
                <p className="mt-3 font-body text-ink/70 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss-dark text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display font-bold text-2xl">Segurança no trabalho</h3>
              <p className="mt-3 font-body text-paper/75 leading-relaxed">
                Uso de equipamento de protecção individual e procedimentos de segurança
                aplicados de forma consistente em todas as frentes de obra, com equipas
                dedicadas e supervisão directa por projecto.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl">Controlo de qualidade</h3>
              <p className="mt-3 font-body text-paper/75 leading-relaxed">
                Acompanhamento contínuo do progresso de cada obra, com equipas técnicas
                certificadas responsáveis pela execução e verificação da qualidade em
                todas as etapas — do desenho do projecto ao assentamento final.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

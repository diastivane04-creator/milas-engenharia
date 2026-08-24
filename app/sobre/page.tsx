import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { company, mission, teamIntro, teamPillars, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Milas Engenharia e Obras Públicas: missão, visão, valores e a equipa técnica por trás das nossas obras em Moçambique.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-ink text-paper contour-field-dark">
        <div className="mx-auto max-w-content px-5 sm:px-8 pt-24 pb-20">
          <p className="eyebrow text-moss-light mb-6">Sobre a Milas Engenharia</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl max-w-3xl leading-[1.05] text-balance">
            Engenharia sólida. Obras que duram.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-paper/75 font-body leading-relaxed">
            {company.descriptionLong}
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-3xl sm:text-4xl">{s.value}</p>
                <p className="eyebrow mt-2 text-paper/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-paper contour-field">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24">
          <SectionHeading eyebrow="Missão · Visão · Valores" title="Os princípios que guiam a nossa obra" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="border-t-2 border-moss pt-6">
              <h3 className="font-display font-bold text-xl text-ink">Missão</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">{mission.missao}</p>
            </div>
            <div className="border-t-2 border-moss pt-6">
              <h3 className="font-display font-bold text-xl text-ink">Visão</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">{mission.visao}</p>
            </div>
            <div className="border-t-2 border-moss pt-6">
              <h3 className="font-display font-bold text-xl text-ink">Valores</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">{mission.valores}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/equipa-operador.jpg"
              alt="Operador da Milas Engenharia em equipamento pesado, com equipamento de protecção"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="A Nossa Equipa"
              title="Pessoas qualificadas no terreno"
              description={teamIntro}
            />
            <div className="mt-8 space-y-6">
              {teamPillars.map((p) => (
                <div key={p.title} className="border-b border-ink-line pb-5">
                  <h3 className="font-display font-bold text-lg">{p.title}</h3>
                  <p className="mt-2 text-paper/65 font-body leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

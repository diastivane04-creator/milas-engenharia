import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { projectHighlights, pavingProcess } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projectos",
  description:
    "Trabalho no terreno da Milas Engenharia: grandes empreendimentos, estruturas em betão armado, infraestruturas hidráulicas e pavimentação em Moçambique.",
  alternates: {
    canonical: "/projectos",
  },
};

export default function ProjectosPage() {
  return (
    <>
      <section className="bg-ink text-paper contour-field-dark">
        <div className="mx-auto max-w-content px-5 sm:px-8 pt-24 pb-16">
          <p className="eyebrow text-moss-light mb-6">Projectos em Destaque</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl max-w-2xl leading-[1.05] text-balance">
            Trabalho no terreno
          </h1>
        </div>
      </section>

      <section className="bg-paper contour-field">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {projectHighlights.map((p) => (
              <div key={p.title}>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width: 640px) 33vw, 90vw" />
                </div>
                <h2 className="font-display font-bold text-xl mt-5 text-ink">{p.title}</h2>
                <p className="mt-2 text-ink/65 font-body leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-20">
          <SectionHeading
            tone="dark"
            eyebrow="Pavimentação"
            title="Pavimentação em blocos e vias urbanas"
            description="Do fornecimento de material ao assentamento final — execução completa de pavimentação em blocos para vias urbanas e espaços públicos."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pavingProcess.map((step) => (
              <div key={step.step}>
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden">
                  <Image src={step.image} alt={step.title} fill className="object-cover" sizes="(min-width: 640px) 50vw, 90vw" />
                  <span className="absolute top-4 left-4 eyebrow bg-ink/80 text-moss-light px-3 py-1.5 rounded-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mt-5">{step.title}</h3>
                <p className="mt-2 text-paper/65 font-body leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

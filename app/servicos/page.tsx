import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { services, fleet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Estradas e pavimentação, edificações, estruturas metálicas, consultoria e desenho de projectos — as áreas de actuação da Milas Engenharia em Moçambique.",
  alternates: {
    canonical: "/servicos",
  },
};

export default function ServicosPage() {
  return (
    <>
      <section className="bg-ink text-paper contour-field-dark">
        <div className="mx-auto max-w-content px-5 sm:px-8 pt-24 pb-16">
          <p className="eyebrow text-moss-light mb-6">Áreas de Actuação</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl max-w-2xl leading-[1.05] text-balance">
            O que fazemos
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/75 font-body leading-relaxed">
            Cinco frentes de trabalho, apoiadas por equipas técnicas certificadas e frota própria de equipamento pesado.
          </p>
        </div>
      </section>

      {services.map((service, index) => {
        const dark = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={dark ? "bg-ink text-paper" : "bg-paper contour-field"}
          >
            <div className="mx-auto max-w-content px-5 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className={dark ? "order-1" : "order-1 lg:order-2"}>
                <p className={`eyebrow ${dark ? "text-moss-light" : "text-moss-dark"}`}>
                  {service.code} · {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  className={`font-display font-bold text-3xl sm:text-4xl mt-4 leading-tight ${
                    dark ? "text-paper" : "text-ink"
                  }`}
                >
                  {service.title}
                </h2>
                <p className={`mt-5 font-body leading-relaxed text-lg ${dark ? "text-paper/75" : "text-ink/70"}`}>
                  {service.detail}
                </p>
              </div>
              <div className={`relative aspect-[4/3] rounded-sm overflow-hidden ${dark ? "order-2" : "order-2 lg:order-1"}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* FLEET */}
      <section className="bg-moss-dark text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-20">
          <SectionHeading
            tone="dark"
            eyebrow="Capacidade Técnica"
            title="Equipamento próprio e frota pesada"
          />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {fleet.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body border-b border-paper/15 pb-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-moss-light shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink max-w-md text-balance">
            Precisa de um orçamento para o seu projecto?
          </h2>
          <Link
            href="/contacto"
            className="inline-flex items-center rounded-sm bg-moss px-7 py-4 eyebrow text-paper hover:bg-moss-dark transition-colors shrink-0"
          >
            Pedir Orçamento
          </Link>
        </div>
      </section>
    </>
  );
}

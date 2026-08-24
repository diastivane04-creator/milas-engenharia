import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import {
  company,
  stats,
  services,
  fleet,
  projectHighlights,
  differentiators,
  clients,
  clientsTextOnly,
  clientsIntro,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-grader-wide.jpg"
            alt="Motoniveladora Milas Engenharia em trabalho de terraplanagem em Moçambique"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
          <div className="absolute inset-0 contour-field-dark" aria-hidden="true" />
        </div>

        <div className="relative mx-auto max-w-content px-5 sm:px-8 pt-28 pb-24 sm:pt-36 sm:pb-32">
          <p className="eyebrow text-moss-light mb-6">
            Maputo, Moçambique · Perfil da Empresa
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl leading-[1.02] max-w-3xl text-balance">
            {company.tagline}
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-paper/80 font-body leading-relaxed">
            {company.descriptionShort}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-sm bg-moss px-7 py-4 eyebrow hover:bg-moss-light hover:text-ink transition-colors"
            >
              Pedir Orçamento
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center rounded-sm border border-paper/30 px-7 py-4 eyebrow hover:border-paper hover:bg-paper/5 transition-colors"
            >
              Ver Áreas de Actuação
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-moss-dark text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-10 grid grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-extrabold text-4xl sm:text-5xl">{s.value}</p>
              <p className="eyebrow mt-2 text-paper/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="bg-paper contour-field">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="Quem Somos"
              title="Engenharia sólida. Obras que duram."
              description={company.descriptionLong}
            />
            <Link
              href="/sobre"
              className="mt-8 inline-flex items-center gap-2 eyebrow text-moss-dark hover:text-moss"
            >
              Conhecer a nossa história →
            </Link>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/equipamento-grader-closeup.jpg"
              alt="Equipamento pesado Milas Engenharia em obra de terraplanagem"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24">
          <SectionHeading
            tone="dark"
            eyebrow="Áreas de Actuação"
            title="O que fazemos"
            description="Cinco frentes de trabalho, uma só equipa técnica, do desenho do projecto à execução no terreno."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink-line">
            {services.map((s) => (
              <div key={s.slug} className="bg-ink p-7 flex flex-col justify-between min-h-[220px]">
                <div>
                  <p className="eyebrow text-moss-light">{s.code}</p>
                  <h3 className="font-display font-bold text-xl mt-4 leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-6 text-sm text-paper/65 font-body leading-relaxed">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/servicos"
            className="mt-10 inline-flex items-center gap-2 eyebrow text-moss-light hover:text-paper"
          >
            Ver todos os detalhes dos serviços →
          </Link>
        </div>
      </section>

      {/* FLEET / CAPACIDADE TÉCNICA */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/hero-grader-portrait.png"
              alt="Motoniveladora John Deere 670G da Milas Engenharia em estrada de terra vermelha"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Capacidade Técnica"
              title="Equipamento próprio e frota pesada"
              description="A Milas Engenharia dispõe de motoniveladoras e equipamento pesado para terraplanagem, abertura e manutenção de vias, assegurando autonomia operacional e cumprimento dos prazos contratuais."
            />
            <ul className="mt-8 space-y-3">
              {fleet.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-ink/80 border-b border-ink/10 pb-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-moss shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="bg-paper contour-field">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24">
          <SectionHeading
            eyebrow="Projectos em Destaque"
            title="Trabalho no terreno"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {projectHighlights.map((p) => (
              <div key={p.title}>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 90vw"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mt-5 text-ink">{p.title}</h3>
                <p className="mt-2 text-ink/65 font-body leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/projectos"
            className="mt-10 inline-flex items-center gap-2 eyebrow text-moss-dark hover:text-moss"
          >
            Ver mais projectos →
          </Link>
        </div>
      </section>

      {/* WHY MILAS */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24">
          <SectionHeading tone="dark" eyebrow="Porquê a Milas" title="O nosso diferencial" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {differentiators.map((d, i) => (
              <div key={d.title} className="border-t border-moss-light/40 pt-5">
                <p className="eyebrow text-moss-light">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display font-bold text-lg mt-3">{d.title}</h3>
                <p className="mt-2 text-sm text-paper/65 font-body leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-24">
          <SectionHeading eyebrow="Clientes e Parceiros" title="Confiança institucional" description={clientsIntro} />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-ink/10 rounded-sm p-6 flex items-center justify-center h-28"
                title={c.name}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-ink/60 font-body text-sm">
            {clientsTextOnly.map((name) => (
              <span key={name} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-moss-dark text-paper">
        <div className="mx-auto max-w-content px-5 sm:px-8 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl max-w-lg text-balance">
            Vamos construir o futuro, juntos.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-sm bg-paper text-ink px-7 py-4 eyebrow hover:bg-paper/90 transition-colors"
            >
              Pedir Orçamento
            </Link>
            <Link
              href="/perfil-da-empresa"
              className="inline-flex items-center rounded-sm border border-paper/40 px-7 py-4 eyebrow hover:border-paper transition-colors"
            >
              Descarregar Perfil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ink text-paper contour-field-dark min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-24">
        <p className="eyebrow text-moss-light mb-6">Erro 404</p>
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl max-w-xl leading-[1.05] text-balance">
          Página não encontrada
        </h1>
        <p className="mt-6 max-w-md text-lg text-paper/70 font-body leading-relaxed">
          A página que procura não existe ou foi movida. Escolha um dos destinos abaixo.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="inline-flex items-center rounded-sm bg-moss px-6 py-3.5 eyebrow hover:bg-moss-light hover:text-ink transition-colors">
            Início
          </Link>
          <Link href="/servicos" className="inline-flex items-center rounded-sm border border-paper/30 px-6 py-3.5 eyebrow hover:border-paper transition-colors">
            Serviços
          </Link>
          <Link href="/projectos" className="inline-flex items-center rounded-sm border border-paper/30 px-6 py-3.5 eyebrow hover:border-paper transition-colors">
            Projectos
          </Link>
          <Link href="/contacto" className="inline-flex items-center rounded-sm border border-paper/30 px-6 py-3.5 eyebrow hover:border-paper transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </section>
  );
}

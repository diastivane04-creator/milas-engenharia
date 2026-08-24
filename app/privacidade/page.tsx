import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da Milas Engenharia e Obras Públicas, Lda sobre a recolha e utilização de dados submetidos através do site.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacidadePage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-24 max-w-3xl">
        <p className="eyebrow text-moss-dark mb-4">Legal</p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink">
          Política de Privacidade
        </h1>
        <div className="mt-10 space-y-6 font-body text-ink/75 leading-relaxed">
          <p>
            <strong>Este é um documento provisório.</strong> Substitua este conteúdo pelo
            texto legal definitivo, revisto por um jurista, antes de publicar o site.
          </p>
          <p>
            A {company.name} recolhe apenas a informação submetida voluntariamente através
            do formulário de pedido de orçamento (nome, empresa, email, telefone, localização
            e descrição do projecto), utilizada exclusivamente para responder ao pedido.
          </p>
          <p>
            Para questões relacionadas com o tratamento dos seus dados, contacte-nos através
            de{" "}
            <a href={`mailto:${company.email}`} className="text-moss-dark underline">
              {company.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

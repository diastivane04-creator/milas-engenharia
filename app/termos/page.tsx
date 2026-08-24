import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Termos e Condições",
  robots: { index: false, follow: true },
};

export default function TermosPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-24 max-w-3xl">
        <p className="eyebrow text-moss-dark mb-4">Legal</p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink">
          Termos e Condições
        </h1>
        <div className="mt-10 space-y-6 font-body text-ink/75 leading-relaxed">
          <p>
            <strong>Este é um documento provisório.</strong> Substitua este conteúdo pelo
            texto legal definitivo, revisto por um jurista, antes de publicar o site.
          </p>
          <p>
            A utilização deste site pressupõe a aceitação destes termos. O conteúdo é
            fornecido pela {company.name} para fins informativos sobre os seus serviços de
            engenharia civil e mecânica em Moçambique.
          </p>
          <p>
            Para esclarecimentos, contacte{" "}
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

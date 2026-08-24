import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/content";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-ink-line">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Image
              src="/images/logo-white.png"
              alt="Milas Engenharia e Obras Públicas, Lda"
              width={150}
              height={128}
              className="h-14 w-auto mb-5"
            />
            <p className="text-paper/70 font-body leading-relaxed max-w-sm">
              {company.descriptionShort}
            </p>
          </div>

          <div>
            <p className="eyebrow text-moss-light mb-4">Navegação</p>
            <ul className="space-y-2 font-body text-paper/75">
              <li><Link href="/sobre" className="hover:text-paper">Sobre</Link></li>
              <li><Link href="/servicos" className="hover:text-paper">Serviços</Link></li>
              <li><Link href="/projectos" className="hover:text-paper">Projectos</Link></li>
              <li><Link href="/qualidade-seguranca" className="hover:text-paper">Qualidade &amp; Segurança</Link></li>
              <li><Link href="/perfil-da-empresa" className="hover:text-paper">Perfil da Empresa</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-moss-light mb-4">Contacto</p>
            <ul className="space-y-2 font-body text-paper/75">
              <li>{company.location}</li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-paper">
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-paper">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-paper/50 text-sm font-body">
            © {YEAR} {company.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm font-body text-paper/50">
            <Link href="/privacidade" className="hover:text-paper/80">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-paper/80">Termos e Condições</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

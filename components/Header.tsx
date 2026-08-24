"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projectos", label: "Projectos" },
  { href: "/qualidade-seguranca", label: "Qualidade & Segurança" },
  { href: "/perfil-da-empresa", label: "Perfil da Empresa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-b border-ink-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Milas Engenharia — página inicial">
            <Image
              src="/images/logo-white.png"
              alt="Milas Engenharia e Obras Públicas, Lda"
              width={140}
              height={120}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow text-paper/80 hover:text-moss-light transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-sm bg-moss px-5 py-3 eyebrow text-paper hover:bg-moss-light hover:text-ink transition-colors"
            >
              Pedir Orçamento
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 text-paper"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6L20 20M20 6L6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 8H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 18H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="lg:hidden bg-ink border-t border-ink-line">
          <nav className="mx-auto max-w-content px-5 py-6 flex flex-col gap-1" aria-label="Navegação móvel">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow text-paper/85 hover:text-moss-light py-3 border-b border-ink-line/60"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-5 inline-flex items-center justify-center rounded-sm bg-moss px-5 py-3 eyebrow text-paper"
            >
              Pedir Orçamento
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

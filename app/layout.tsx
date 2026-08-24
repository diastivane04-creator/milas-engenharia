import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company, siteUrl, metaDescription } from "@/lib/content";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Milas Engenharia | Construção Civil e Obras Públicas em Moçambique",
    template: `%s | ${company.shortName}`,
  },
  description: metaDescription,
  keywords: [
    "engenharia civil Moçambique",
    "construção de estradas Maputo",
    "empresa de construção Moçambique",
    "pavimentação Moçambique",
    "estruturas metálicas Moçambique",
    "obras públicas Maputo",
    "terraplanagem Moçambique",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: siteUrl,
    siteName: company.name,
    title: "Milas Engenharia | Construção Civil e Obras Públicas em Moçambique",
    description: metaDescription,
    images: [{ url: "/images/hero-grader-wide.jpg", width: 1000, height: 750 }],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: metaDescription,
    images: ["/images/hero-grader-wide.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "l48sUqpG1HOqHpKC2n0yixVODsPzlXLKYUx9-sK8DA0",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  description: company.descriptionShort,
  url: siteUrl,
  logo: `${siteUrl}/images/logo-white.png`,
  email: company.email,
  telephone: company.phones[0],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maputo",
    addressCountry: "MZ",
  },
  areaServed: "Moçambique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-MZ" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-paper focus:text-ink focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Saltar para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

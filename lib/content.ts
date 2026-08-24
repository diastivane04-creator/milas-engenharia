// ============================================================================
// MILAS ENGENHARIA E OBRAS PÚBLICAS, LDA — CONTENT MODEL
// ----------------------------------------------------------------------------
// This file is the single source of truth for every fact shown on the site:
// company details, stats, services, projects, clients and contact info.
// Every value below comes from the company profile supplied by Milas.
// To update the website's content, edit this file — no other file needs to
// change for text/data edits.
// ============================================================================

export const company = {
  name: "Milas Engenharia e Obras Públicas, Lda",
  shortName: "Milas Engenharia",
  tagline: "Engenharia sólida. Obras que duram.",
  descriptionShort:
    "Empresa moçambicana de engenharia civil e mecânica, vocacionada para a construção e manutenção de infraestruturas rodoviárias, edificações e estruturas metálicas.",
  descriptionLong:
    "A Milas Engenharia e Obras Públicas, Lda é uma empresa moçambicana de engenharia civil e mecânica, vocacionada para a construção e manutenção de infraestruturas rodoviárias, edificações e estruturas metálicas. Combinamos equipas técnicas qualificadas, frota própria de equipamento pesado e uma gestão rigorosa de projectos para entregar obras de qualidade a entidades públicas, municípios e organizações internacionais em Moçambique.",
  location: "Maputo, Moçambique",
  email: "milas.engenharia@gmail.com",
  phones: ["+258 84 256 8096", "+258 87 256 8069"],
  whatsappNumber: "258842568096", // international format, no symbols, for wa.me links
  whatsappMessage:
    "Olá Milas Engenharia, gostaria de obter mais informações sobre os vossos serviços.",
} as const;

export const stats = [
  { value: "+5", label: "Anos de Actividade" },
  { value: "6", label: "Áreas de Actuação" },
  { value: "6+", label: "Clientes Institucionais" },
] as const;

export const mission = {
  missao:
    "Executar obras de engenharia civil e mecânica com qualidade, segurança e cumprimento de prazos, contribuindo para o desenvolvimento de infraestruturas em Moçambique.",
  visao:
    "Ser reconhecida como uma referência nacional em construção e manutenção de infraestruturas, pela solidez técnica e confiança dos nossos clientes.",
  valores:
    "Rigor técnico, integridade, segurança no trabalho, compromisso com o cliente e responsabilidade socioambiental em cada projecto.",
};

export type Service = {
  code: string;
  slug: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export const services: Service[] = [
  {
    code: "EST",
    slug: "estradas-pavimentacao",
    title: "Estradas e Pavimentação",
    summary:
      "Manutenção e construção de estradas, asfaltadas, terraplanagem e pavimentação.",
    detail:
      "Executamos obras de terraplanagem, abertura e manutenção de vias, e pavimentação em blocos para vias urbanas e espaços públicos — do fornecimento de material ao assentamento final, com equipas técnicas dedicadas a cada frente de obra.",
    image: "/images/pavimentacao-estrada.jpg",
  },
  {
    code: "EDF",
    slug: "edificacoes",
    title: "Edificações",
    summary: "Construção de edifícios residenciais, comerciais e industriais.",
    detail:
      "Construção de complexos de edifícios institucionais e comerciais de grande escala, com gestão de projecto orientada para o cumprimento de prazos e controlo de qualidade contínuo em obra.",
    image: "/images/hero-grader-wide.jpg",
  },
  {
    code: "MET",
    slug: "estruturas-metalicas",
    title: "Estruturas Metálicas",
    summary: "Fabrico e montagem de estruturas metálicas para obras diversas.",
    detail:
      "Fabrico e montagem de estruturas metálicas integradas nas obras de construção civil, executadas pelas nossas equipas técnicas certificadas.",
    image: "/images/estruturas-betao-armado.jpg",
  },
  {
    code: "CON",
    slug: "consultoria",
    title: "Consultoria",
    summary: "Consultoria técnica e acompanhamento especializado de obras e projectos.",
    detail:
      "Acompanhamento técnico especializado de obras e projectos, apoiando entidades públicas, municípios e organizações na execução rigorosa das suas infraestruturas.",
    image: "/images/equipa-operador.jpg",
  },
  {
    code: "PRJ",
    slug: "desenho-de-projectos",
    title: "Desenho de Projectos",
    summary: "Concepção e desenho técnico de projectos de engenharia e arquitectura.",
    detail:
      "Concepção e desenho técnico de projectos de engenharia e arquitectura, com recurso a equipamento topográfico de precisão para levantamentos rigorosos no terreno.",
    image: "/images/infra-hidraulica-canal.jpg",
  },
];

export const fleet = [
  "Motoniveladoras John Deere 670G",
  "Equipamento de terraplanagem",
  "Retroescavadoras e equipamento auxiliar",
  "Equipamento topográfico de precisão",
  "Transporte pesado sobre pranchas",
  "Equipas técnicas certificadas",
];

export type ProjectHighlight = {
  title: string;
  description: string;
  image: string;
};

export const projectHighlights: ProjectHighlight[] = [
  {
    title: "Grandes Empreendimentos",
    description:
      "Construção de complexos de edifícios institucionais e comerciais de grande escala.",
    image: "/images/hero-grader-wide.jpg",
  },
  {
    title: "Estruturas em Betão Armado",
    description:
      "Equipas técnicas especializadas em armação e betonagem de estruturas.",
    image: "/images/estruturas-betao-armado.jpg",
  },
  {
    title: "Infraestruturas Hidráulicas",
    description:
      "Reabilitação de pontes e estruturas de drenagem após intempéries.",
    image: "/images/infra-hidraulica-canal-2.jpg",
  },
];

export const pavingProcess = [
  {
    step: "01",
    title: "Fornecimento de Material",
    description:
      "Transporte e distribuição de blocos de pavimentação até à frente de obra.",
    image: "/images/pavimentacao-estrada.jpg",
  },
  {
    step: "02",
    title: "Assentamento",
    description:
      "Equipas técnicas a executar o assentamento do pavimento com rigor e precisão.",
    image: "/images/pavimentacao-blocos.jpg",
  },
];

export const teamPillars = [
  {
    title: "Segurança em primeiro lugar",
    description:
      "Uso de equipamento de protecção e procedimentos de segurança em todas as obras.",
  },
  {
    title: "Equipas dedicadas",
    description: "Operadores e técnicos alocados por projecto, com supervisão directa.",
  },
  {
    title: "Qualidade de execução",
    description:
      "Acompanhamento contínuo do progresso e controlo de qualidade em obra.",
  },
];

export const teamIntro =
  "O nosso maior activo é a nossa equipa: operadores de equipamento pesado, técnicos de obra e engenheiros com experiência prática em condições reais de terreno em todo o país.";

export const differentiators = [
  {
    title: "Frota e Equipamento Próprio",
    description:
      "Autonomia operacional com motoniveladoras e equipamento pesado próprio.",
  },
  {
    title: "Segurança e Qualidade",
    description:
      "Procedimentos rigorosos de segurança e controlo de qualidade em todas as obras.",
  },
  {
    title: "Cumprimento de Prazos",
    description:
      "Planeamento e gestão de projecto orientados para entrega dentro do prazo.",
  },
  {
    title: "Experiência Institucional",
    description:
      "Historial de trabalho com entidades públicas, municípios e ONGs.",
  },
];

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: "Administração Nacional de Estradas (ANE)", logo: "/images/client-ane.png" },
  { name: "ONGAWA — Organização Não Governamental", logo: "/images/client-ongawa.png" },
  { name: "Conselho Municipal da Matola", logo: "/images/client-matola.png" },
  { name: "Conselho Municipal de Maputo", logo: "/images/client-maputo.png" },
  {
    name: "Direcção Provincial de Obras Públicas de Maputo",
    logo: "/images/client-dpop.jpg",
  },
];

export const clientsTextOnly = ["Gabinete do Secretário do Estado", "SDPI — Serviço Distrital"];

export const clientsIntro =
  "Trabalhamos com entidades públicas, municípios e organizações nacionais e internacionais em projectos de infraestrutura em Moçambique.";

// Canonical production URL. Falls back to the live Vercel deployment so
// sitemap.xml, robots.txt, canonical tags, and Open Graph/Twitter metadata
// are always correct even before a custom domain is connected.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://milas-engenharia.vercel.app";

// Search-engine-facing description, kept under ~160 characters per SEO best
// practice. Distinct from company.descriptionShort (used in visible page
// copy) so the on-page text is never changed for SEO purposes.
export const metaDescription =
  "Milas Engenharia e Obras Públicas, Lda: engenharia civil e mecânica em Moçambique. Estradas, edificações, estruturas metálicas e obras públicas.";

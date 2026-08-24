import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

// Priority reflects how central each page is to the business — not an
// SEO ranking signal Google uses directly, but a widely-followed
// convention that helps crawlers budget their attention sensibly.
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/sobre", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projectos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.8, changeFrequency: "monthly" },
  { path: "/qualidade-seguranca", priority: 0.6, changeFrequency: "monthly" },
  { path: "/perfil-da-empresa", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" },
  { path: "/termos", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

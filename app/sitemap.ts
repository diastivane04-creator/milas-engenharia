import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/projectos",
    "/qualidade-seguranca",
    "/perfil-da-empresa",
    "/contacto",
    "/privacidade",
    "/termos",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

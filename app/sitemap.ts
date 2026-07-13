import type { MetadataRoute } from "next";
import { getCategories } from "@/lib/getCategories";
import { getVisas } from "@/lib/getVisas";
import { getSiteUrl } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/contact", "/privacy-policy"];
  const categories = getCategories();
  const visas = getVisas();

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((path) => ({
      url: getSiteUrl(path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.5,
    })),
    ...categories.map((category) => ({
      url: getSiteUrl(`/visas/${category.slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...visas.map((visa) => {
      const category = categories.find((c) => c.id === visa.category);
      return {
        url: getSiteUrl(`/visas/${category?.slug}/${visa.id}`),
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      };
    }),
  ];

  return entries;
}

import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteConfig";
import { sections } from "@/lib/contentMap";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/affiliate-disclosure",
  ];

  const sectionPaths = sections.map((s) => s.href);
  const liveLinks = sections.flatMap((s) =>
    s.links.filter((l) => l.status === "live").map((l) => l.href)
  );

  const urls = [...new Set([...staticPaths, ...sectionPaths, ...liveLinks])];

  return urls.map((path) => ({
    url: getSiteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.includes("calculator") ? 0.9 : 0.7,
  }));
}

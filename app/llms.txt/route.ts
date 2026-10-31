import { getSiteUrl, siteConfig, siteEmail } from "@/lib/siteConfig";
import { sections } from "@/lib/contentMap";
import { getCategoriesWithVisas } from "@/lib/getCategories";
import { visaPageDescription, visaPageTitle } from "@/lib/visaSeo";
import { getPosts } from "@/lib/blog";

/*
  /llms.txt — a plain Markdown map of the site for AI agents (llmstxt.org).

  Generated from the same sources as the sitemap — the content map, the visa
  library, and Soro's post index — so it lists exactly the pages that exist and
  cannot drift from them. "Soon" links are left out for the same reason they
  are left out of the sitemap.

  It has no effect on Google Search. Lighthouse's Agentic Browsing category
  audits it, and an agent that reads it reaches the right page without
  crawling the navigation.
*/

export const dynamic = "force-static";
// Blog posts arrive from Soro without a deploy; match the sitemap's cadence.
export const revalidate = 3600;

export async function GET() {
  const listed = new Set<string>();
  const link = (title: string, path: string, note?: string) => {
    listed.add(path);
    return `- [${title}](${getSiteUrl(path)})${note ? `: ${note}` : ""}`;
  };

  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.name} publishes educational guides on US visas, taxes, banking, sending money home, investing, and insurance for people moving to the United States, plus free calculators that run in the browser. It is not legal, tax, or financial advice. Every guide shows when it was last reviewed and links the official sources it relies on. Corrections: ${siteEmail}.`,
    "",
    "## Visa library",
    "",
    link("US visa types explained", "/visas", "Directory of every visa guide"),
  ];

  for (const { category, visas } of getCategoriesWithVisas()) {
    lines.push(link(category.label, `/visas/${category.slug}`, category.description));
    for (const visa of visas) {
      lines.push(
        link(visaPageTitle(visa), `/visas/${category.slug}/${visa.id}`, visaPageDescription(visa))
      );
    }
  }

  for (const section of sections) {
    lines.push("", `## ${section.label}`, "", link(section.h1, section.href, section.description));
    for (const l of section.links) {
      // One entry per URL: the remittance calculator sits in two sections.
      if (l.status === "live" && !listed.has(l.href)) {
        lines.push(link(l.title, l.href, l.description));
      }
    }
  }

  lines.push(
    "",
    "## About",
    "",
    link(`About ${siteConfig.name} and our editorial standards`, "/about"),
    link("Contact and corrections", "/contact"),
    link("Affiliate disclosure", "/affiliate-disclosure"),
    link("Privacy policy", "/privacy-policy")
  );

  // A Soro outage must not take this file down with it; a 5xx fails the
  // Lighthouse audit, and the guides above stand on their own.
  try {
    const posts = await getPosts();
    if (posts.length > 0) {
      lines.push("", "## Optional", "", link("Blog", "/blog", "Shorter posts on specific questions"));
      for (const post of posts) {
        lines.push(link(post.title, `/blog/${post.slug}`, post.excerpt || undefined));
      }
    }
  } catch (error) {
    console.error("llms.txt: could not load blog posts", error);
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

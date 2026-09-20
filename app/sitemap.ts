import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteConfig";
import { sections } from "@/lib/contentMap";
import { getCategoriesWithVisas } from "@/lib/getCategories";
import { getContentDate } from "@/lib/contentDates";
import { getPosts, postDateOnly } from "@/lib/blog";

/*
  Sitemap.

  Three things changed from the previous version:

  1. `lastModified` came from `new Date()`, which told crawlers that every URL
     changed on every deploy. That is a false signal, and Google discounts a
     sitemap whose lastmod values it learns not to trust. Dates now come from
     lib/contentDates.ts (and each visa's own review date), so they reflect
     actual editorial changes.
  2. The ten visa guides and their category hubs were missing entirely, despite
     being the deepest content on the site.
  3. `changeFrequency` and `priority` were near-uniform. They now reflect how
     often each page type genuinely changes — reference content that gets a
     scheduled review is not "weekly".
*/

type Entry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: Entry[] = [];

  const push = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"],
    lastModified?: string
  ) => {
    entries.push({
      url: getSiteUrl(path),
      lastModified: new Date(lastModified ?? getContentDate(path).reviewed),
      changeFrequency,
      priority,
    });
  };

  // Homepage
  push("/", 1, "weekly");

  // Top-level hubs
  push("/visas", 0.9, "monthly");
  for (const section of sections) {
    push(section.href, 0.8, "monthly");
  }

  /*
    Blog. The post index comes from Soro (lib/blog.ts) and revalidates hourly,
    so a new post reaches the sitemap without a deploy. The hub's lastmod is
    the newest post's date, which is when it genuinely last changed. A Soro
    outage must not take the whole sitemap down with it, hence the catch.
  */
  let posts: Awaited<ReturnType<typeof getPosts>> = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("sitemap: could not load blog posts", error);
  }
  push("/blog", 0.7, "weekly", posts[0] ? postDateOnly(posts[0].isoDate) : undefined);
  for (const post of posts) {
    push(`/blog/${post.slug}`, 0.6, "monthly", postDateOnly(post.isoDate));
  }

  // Visa categories and guides. Reference content on a review cadence.
  for (const { category, visas } of getCategoriesWithVisas()) {
    push(`/visas/${category.slug}`, 0.7, "monthly");
    for (const visa of visas) {
      push(
        `/visas/${category.slug}/${visa.id}`,
        0.8,
        "monthly",
        visa.lastReviewedDate
      );
    }
  }

  // Live guides and calculators referenced by the content map. "soon" links
  // point at pages that do not exist yet and are deliberately excluded.
  const liveLinks = new Set(
    sections.flatMap((s) =>
      s.links.filter((l) => l.status === "live").map((l) => l.href)
    )
  );
  for (const href of liveLinks) {
    push(href, href.startsWith("/calculators/") ? 0.9 : 0.8, "monthly");
  }

  // Company and legal. Indexable and useful for trust, but low priority.
  push("/about", 0.5, "yearly");
  push("/contact", 0.4, "yearly");
  push("/privacy-policy", 0.2, "yearly");
  push("/affiliate-disclosure", 0.2, "yearly");

  // Guard against a path being added to two lists above.
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

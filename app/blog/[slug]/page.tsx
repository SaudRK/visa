import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import SoroBlog from "@/components/SoroBlog";

/*
  Blog post shell.

  Soro links each post at /blog/<slug>, so this route exists purely to serve the
  embed a 200 at those URLs instead of the site's 404. One segment deep only —
  an optional catch-all would also answer 200 for /blog/a/b/c and hand Google a
  soft 404 for every junk path under /blog.

  There is no `generateStaticParams`: the post list lives in Soro, not in this
  repo, so the segment renders on demand. The trade-off is that the title and
  description here are derived from the slug rather than from the post's own
  copy, which is the best a server that cannot see the content can do — it at
  least keeps each post URL off a single duplicated title.
*/

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

/** "h1b-tax-brackets-2026" → "H1b Tax Brackets 2026" */
function titleFromSlug(slug: string): string {
  const words = decodeURIComponent(slug).replace(/[-_]+/g, " ").trim();
  if (!words) return "Blog";
  return words
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return buildPageMetadata({
    title,
    description: `${title} — a guide from ${siteConfig.name} on US visas, taxes, and settling in the United States.`,
    path: `/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;

  return (
    <div className="page-shell section">
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: titleFromSlug(slug), path: `/blog/${slug}` },
        ]}
      />
      <SoroBlog />
    </div>
  );
}

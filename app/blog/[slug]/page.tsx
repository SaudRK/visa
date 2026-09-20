import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/metadata";
import { buildArticleJsonLd } from "@/lib/jsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { clampDescription } from "@/lib/visaSeo";
import {
  formatPostDate,
  getPostBySlug,
  getPostContent,
  getPosts,
  postDateOnly,
  relatedGuidesFor,
} from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

/*
  Blog post.

  Each Soro post gets a real page: its own URL, title, description, dates,
  featured image, Article schema, and server-rendered body. The set of slugs
  is pre-rendered at build; a post Soro publishes afterwards renders on first
  request (dynamicParams stays on) and any slug not in Soro's index is a hard
  404 rather than an empty shell.
*/

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const description = clampDescription(
    post.excerpt || `${post.title} — from ${siteConfig.name}.`,
    158
  );
  // " | SettleinUS" is 13 characters. Soro's titles run 40–63, so the suffix
  // pushes some past Google's ~60-character budget; those render bare.
  const BRAND_SUFFIX_LENGTH = 13;

  return buildPageMetadata({
    title: post.title,
    absoluteTitle: post.title.length + BRAND_SUFFIX_LENGTH > 60,
    description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: postDateOnly(post.isoDate),
    modifiedTime: postDateOnly(post.isoDate),
    ...(post.image ? { image: { url: post.image, alt: post.title } } : {}),
  });
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [content, related] = [await getPostContent(post.id), relatedGuidesFor(post)];
  const path = `/blog/${post.slug}`;
  const dateOnly = postDateOnly(post.isoDate);

  return (
    <>
      <JsonLd
        schema={{
          ...buildArticleJsonLd({
            title: post.title,
            description: post.excerpt,
            path,
            datePublished: dateOnly,
            dateModified: dateOnly,
            section: "Blog",
          }),
          ...(post.image ? { image: post.image } : {}),
        }}
      />

      <article className="page-shell section">
        <Breadcrumbs
          items={[
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]}
        />

        <header className="max-w-3xl">
          <p className="mono-label">
            <time dateTime={dateOnly}>{formatPostDate(post.isoDate)}</time>
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="lede mt-5">{post.excerpt}</p>
          ) : null}
          <div className="mt-5 h-1 w-14 bg-accent" />
        </header>

        {post.image ? (
          <div className="relative mt-8 aspect-[1200/630] overflow-hidden border border-line bg-surface">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div
          className="prose-width mt-10 space-y-5 text-[1.05rem] leading-relaxed text-muted [&_a]:font-semibold [&_a]:text-accent [&_a:hover]:underline [&_h2]:mt-10 [&_h2]:border-l-4 [&_h2]:border-accent [&_h2]:pl-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          // Vendor HTML, sanitised in lib/blog.ts before it reaches this prop.
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <section className="prose-width mt-12 border-t-2 border-ink pt-6">
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Go deeper on this site
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-semibold text-accent hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <aside className="prose-width mt-12 border-2 border-ink bg-soft p-5 text-sm leading-relaxed text-muted">
          <p>{siteConfig.disclaimerText}</p>
          <p className="mt-3">
            Published <time dateTime={dateOnly}>{formatPostDate(post.isoDate)}</time>.{" "}
            <Link href="/blog" className="font-semibold text-accent hover:underline">
              All posts
            </Link>
            .
          </p>
        </aside>
      </article>
    </>
  );
}

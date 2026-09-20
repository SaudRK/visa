import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { buildItemListJsonLd, buildWebPageJsonLd } from "@/lib/jsonLd";
import { formatPostDate, getPosts, postDateOnly } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

/*
  Blog index.

  Server-rendered from Soro's post index (see lib/blog.ts for why the embed
  was replaced). Laid out as the same ruled contents list the section hubs
  use, so the blog reads as part of the publication rather than a widget
  bolted onto it. Revalidates hourly through the fetch in getPosts().
*/

const PATH = "/blog";
// No brand in the title — the root layout's template appends it.
const TITLE = "US Visa, Tax & Immigrant Money Blog";
const DESCRIPTION =
  "New guides and updates on US visas, H-1B and F-1 taxes, building credit, and sending money home, written for people settling in the United States.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <JsonLd
        schema={[
          buildWebPageJsonLd({
            title: TITLE,
            description: DESCRIPTION,
            path: PATH,
          }),
          buildItemListJsonLd(
            posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))
          ),
        ]}
      />

      <div className="border-b border-line bg-light">
        <div className="page-shell section">
          <Breadcrumbs items={[{ name: "Blog", path: PATH }]} />
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-navy md:text-4xl">
            Notes on visas, taxes, and settling in
          </h1>
          <p className="lede mt-4 max-w-2xl">{DESCRIPTION}</p>
        </div>
      </div>

      <div className="page-shell section">
        <ol className="border-t-2 border-ink">
          {posts.map((post) => (
            <li key={post.id} className="border-b border-line">
              <article className="grid gap-5 py-7 md:grid-cols-[1fr_9rem] md:gap-8">
                <div>
                  <p className="mono-label">
                    <time dateTime={postDateOnly(post.isoDate)}>
                      {formatPostDate(post.isoDate)}
                    </time>
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-ink md:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt ? (
                    <p className="muted mt-3 max-w-2xl leading-relaxed">
                      {post.excerpt}
                    </p>
                  ) : null}
                  <p className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-semibold text-accent hover:underline"
                    >
                      Read the article
                    </Link>
                  </p>
                </div>
                {post.image ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-hidden="true"
                    tabIndex={-1}
                    className="relative hidden aspect-[4/3] overflow-hidden border border-line bg-surface md:block"
                  >
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="9rem"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
              </article>
            </li>
          ))}
        </ol>

        {posts.length === 0 ? (
          <p className="muted mt-8">
            No posts yet. The visa library, tax guides, and calculators are the
            best places to start in the meantime.
          </p>
        ) : null}

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/visas" className="btn">
            Browse visa guides
          </Link>
          <Link href="/calculators" className="btn btn-ghost">
            Free calculators
          </Link>
        </div>
      </div>
    </>
  );
}

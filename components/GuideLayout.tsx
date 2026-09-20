import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { getContentDate, formatReviewMonth } from "@/lib/contentDates";
import { buildArticleJsonLd, buildFaqJsonLd } from "@/lib/jsonLd";
import type { Faq } from "@/lib/types";
import type { Crumb } from "./Breadcrumbs";
import Breadcrumbs from "./Breadcrumbs";
import FaqAccordion from "./FaqAccordion";
import JsonLd from "./JsonLd";

interface GuideLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Site-relative path — drives breadcrumbs, Article schema, and review dates. */
  path: string;
  /** Intermediate + current breadcrumbs. "Home" is prepended automatically. */
  crumbs: Crumb[];
  /** Official references for the claims on the page (E-E-A-T). */
  sources?: { label: string; href: string }[];
  /**
   * Questions the page genuinely answers. Rendered as an accordion after the
   * body and mirrored into FAQPage structured data, which must match the
   * visible text exactly — so both come from this one array.
   */
  faqs?: Faq[];
  children: ReactNode;
}

/**
 * Shared shell for editorial guides.
 *
 * Owns the things every guide needs and none of them should re-implement:
 * breadcrumbs, Article structured data, a machine-readable review date, the
 * affiliate disclosure, and the YMYL disclaimer.
 */
export default function GuideLayout({
  eyebrow,
  title,
  description,
  path,
  crumbs,
  sources,
  faqs,
  children,
}: GuideLayoutProps) {
  const { published, reviewed } = getContentDate(path);

  return (
    <>
      <JsonLd
        schema={[
          buildArticleJsonLd({
            title,
            description,
            path,
            datePublished: published,
            dateModified: reviewed,
            section: eyebrow,
          }),
          faqs && faqs.length > 0 ? buildFaqJsonLd(faqs) : null,
        ]}
      />

      <article className="page-shell section">
        <Breadcrumbs items={crumbs} />

        <header className="bento mb-8 grid-cols-1 md:grid-cols-5">
          <div className="cell md:col-span-3">
            <p className="mono-label">{eyebrow}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="mt-4 h-1 w-14 bg-accent" />
          </div>
          <div className="cell cell-soft md:col-span-2">
            <p className="mono-label">Last reviewed</p>
            <p className="text-2xl font-bold tracking-tight">
              <time dateTime={reviewed}>{formatReviewMonth(reviewed)}</time>
            </p>
            <p className="muted mt-2 text-sm">{description}</p>
          </div>
        </header>

        <div className="mb-8 border-2 border-ink bg-surface p-4 text-sm leading-relaxed text-muted">
          {siteConfig.affiliateDisclosure}{" "}
          <Link
            href="/affiliate-disclosure"
            className="font-bold text-ink underline underline-offset-2"
          >
            Affiliate Disclosure
          </Link>
          .
        </div>

        <div className="prose-width space-y-5 text-[1.05rem] leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:border-l-4 [&_h2]:border-accent [&_h2]:pl-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>

        {faqs && faqs.length > 0 ? (
          <div className="prose-width mt-12">
            <FaqAccordion faqs={faqs} />
          </div>
        ) : null}

        {/* Primary sources. On YMYL topics, showing where a claim comes from is
            the difference between a guide and an opinion. */}
        {sources && sources.length > 0 ? (
          <section className="prose-width mt-12">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Official sources
            </h2>
            <p className="mt-2 text-sm text-muted">
              Rules and figures change. These are the authoritative pages to
              check against before you act.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <aside className="prose-width mt-12 border-2 border-ink bg-soft p-5 text-sm leading-relaxed text-muted">
          <p>{siteConfig.disclaimerText}</p>
          <p className="mt-3">
            {siteConfig.reviewCadence}. Published{" "}
            <time dateTime={published}>{formatReviewMonth(published)}</time>,
            last reviewed{" "}
            <time dateTime={reviewed}>{formatReviewMonth(reviewed)}</time>.
          </p>
        </aside>
      </article>
    </>
  );
}

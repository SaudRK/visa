import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { getContentDate, formatReviewMonth } from "@/lib/contentDates";
import { buildCalculatorJsonLd, buildFaqJsonLd } from "@/lib/jsonLd";
import type { Faq } from "@/lib/types";
import Breadcrumbs from "./Breadcrumbs";
import FaqAccordion from "./FaqAccordion";
import JsonLd from "./JsonLd";

interface CalculatorShellProps {
  title: string;
  description: string;
  /** Site-relative path — drives breadcrumbs, schema, and the review date. */
  path: string;
  /** Related pages, so a tool page is not a dead end for readers or crawlers. */
  related?: { href: string; label: string }[];
  children: ReactNode;
  guide: ReactNode;
  /** Questions about the method and the result. Rendered and emitted as FAQPage. */
  faqs?: Faq[];
}

/**
 * Shared shell for the calculator pages.
 *
 * The tool itself is a client component, but everything a search engine needs —
 * the heading, the explanatory copy, breadcrumbs, and WebApplication schema — is
 * server-rendered into the static HTML, so the page is fully indexable without
 * running the calculator.
 */
export default function CalculatorShell({
  title,
  description,
  path,
  related,
  children,
  guide,
  faqs,
}: CalculatorShellProps) {
  const { reviewed } = getContentDate(path);

  return (
    <>
      <JsonLd
        schema={[
          buildCalculatorJsonLd({ title, description, path }),
          faqs && faqs.length > 0 ? buildFaqJsonLd(faqs) : null,
        ]}
      />

      {/*
        A calculator is an instrument, so it is framed like one rather than as a
        form inside a card. The masthead is type on paper; the tool itself is the
        only element on the page with a heavy 2px ink frame, which makes it read
        as the working surface. Everything after it — method, related reading,
        provenance — is ruled prose at a proper reading measure.
      */}
      <div className="atlas-grid border-b border-line">
        <div className="page-wide py-10 md:py-14">
          <Breadcrumbs
            items={[
              { name: "Calculators", path: "/calculators" },
              { name: title, path },
            ]}
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_17rem] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow">Free calculator</p>
              <h1 className="mt-4 max-w-[22ch] text-ink">{title}</h1>
              <span className="signal-line mt-6" />
            </div>

            <dl className="border-t-2 border-ink pt-5 text-sm">
              <dt className="mono-label">Purpose</dt>
              <dd className="muted mt-2 text-[0.92rem] leading-relaxed">
                {description}
              </dd>
              <dt className="mono-label mt-4 border-t border-line pt-3">
                Privacy
              </dt>
              <dd className="mt-1.5 text-[0.9rem] text-ink">
                Runs in your browser · nothing stored
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="page-wide section-tight">
        {/* Left-aligned, not centred: the masthead above sets a left edge, and a
            centred column under a left-aligned heading reads as two layouts. */}
        <div className="max-w-[46rem]">
          {/* The working surface. */}
          <div className="border-2 border-ink bg-surface p-5 sm:p-7">
            {children}
          </div>

          <div className="mt-12 space-y-4 text-[1.02rem] leading-[1.68] text-muted [&_h2]:mt-9 [&_h2]:font-display [&_h2]:text-[1.4rem] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">
            {guide}
          </div>

          {faqs && faqs.length > 0 ? (
            <div className="mt-14">
              <FaqAccordion faqs={faqs} />
            </div>
          ) : null}

          {related && related.length > 0 ? (
            <section className="mt-14">
              <div className="section-marker">
                <span>Related</span>
              </div>
              <h2 className="mt-6 text-ink">Related guides</h2>
              <ul className="index-list mt-6">
                {related.map((item, i) => (
                  <li key={item.href} className="list-none">
                    <Link href={item.href} className="index-row group">
                      <span className="index-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.1rem] leading-snug text-ink transition-colors group-hover:text-accent">
                        {item.label}
                      </span>
                      <svg
                        aria-hidden="true"
                        className="index-arrow h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Provenance — the page's one stamp. */}
          <aside className="mt-14 border-t-2 border-ink pt-5 text-[0.88rem] leading-relaxed text-muted">
            <p className="stamp">
              Rates reviewed{" "}
              <time dateTime={reviewed}>{formatReviewMonth(reviewed)}</time>
            </p>
            <p className="mt-4">{siteConfig.disclaimerText}</p>
          </aside>
        </div>
      </div>
    </>
  );
}

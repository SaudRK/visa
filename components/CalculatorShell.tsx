import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { getContentDate, formatReviewMonth } from "@/lib/contentDates";
import { buildCalculatorJsonLd } from "@/lib/jsonLd";
import Breadcrumbs from "./Breadcrumbs";
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
}: CalculatorShellProps) {
  const { reviewed } = getContentDate(path);

  return (
    <>
      <JsonLd
        schema={buildCalculatorJsonLd({ title, description, path })}
      />

      <div className="page-shell section">
        <Breadcrumbs
          items={[
            { name: "Calculators", path: "/calculators" },
            { name: title, path },
          ]}
        />

        <header className="bento mb-8 grid-cols-1 md:grid-cols-5">
          <div className="cell cell-ink md:col-span-3">
            <p className="mono-label !text-white/50">Free calculator</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
          </div>
          <div className="cell md:col-span-2">
            <p className="mono-label">Purpose</p>
            <p className="muted mt-2 text-sm leading-relaxed">{description}</p>
            <p className="mono-label mt-4">
              Runs in your browser · Nothing stored
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[760px]">
          <div className="border-2 border-ink bg-surface p-5 sm:p-7">
            {children}
          </div>

          <div className="mt-10 space-y-4 leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:border-l-4 [&_h2]:border-accent [&_h2]:pl-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
            {guide}
          </div>

          {related && related.length > 0 ? (
            <section className="mt-12">
              <h2 className="text-xl font-bold tracking-tight text-ink">
                Related guides
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.href} className="list-none">
                    <Link
                      href={item.href}
                      className="block border border-line bg-surface p-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
                    >
                      {item.label} <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <aside className="mt-12 border-2 border-ink bg-soft p-5 text-sm leading-relaxed text-muted">
            <p>{siteConfig.disclaimerText}</p>
            <p className="mt-3">
              Rates and formulas last reviewed{" "}
              <time dateTime={reviewed}>{formatReviewMonth(reviewed)}</time>.
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}

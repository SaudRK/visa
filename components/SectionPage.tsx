import Link from "next/link";
import type { SectionMeta } from "@/lib/contentMap";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
} from "@/lib/jsonLd";

/*
  Shared layout for the seven section hubs (/banking, /taxes, /send-money,
  /investing, /insurance, /calculators, /visa-guides).

  Redesigned from a grid of link cards into a ruled contents page, because that
  is what a hub actually is. Three consequences:

  1. The guide list is now the numbered index used across the site instead of
     boxed cards. A list of eight titles in eight boxes is eight objects to
     parse; the same list as ruled rows is one object with eight lines, and it
     scans in a single pass.
  2. Live and forthcoming guides now read differently at a glance — a
     forthcoming row is not a link, is dimmed, and carries a dashed marker, so
     the reader is never invited to click something that is not there.
  3. The intro prose gets a real reading measure beside a standing summary,
     rather than running the full page width under a masthead.

  Heading hierarchy is unchanged: one h1, h2 per real section, h3 per guide.
*/
export default function SectionPage({ section }: { section: SectionMeta }) {
  const liveLinks = section.links.filter((l) => l.status === "live");
  const soonCount = section.links.length - liveLinks.length;

  return (
    <>
      <JsonLd
        schema={[
          buildWebPageJsonLd({
            title: section.h1,
            description: section.description,
            path: section.href,
          }),
          liveLinks.length > 0
            ? buildItemListJsonLd(
                liveLinks.map((l) => ({ name: l.title, path: l.href }))
              )
            : null,
          section.faqs && section.faqs.length > 0
            ? buildFaqJsonLd(section.faqs)
            : null,
        ]}
      />

      {/* ── Masthead ── */}
      <div className="atlas-grid border-b border-line">
        <div className="page-wide py-10 md:py-14">
          <Breadcrumbs items={[{ name: section.label, path: section.href }]} />
          <p className="eyebrow">{section.label}</p>
          <h1 className="mt-4 max-w-[24ch] text-ink">{section.h1}</h1>
          <span className="signal-line mt-6" />
          <p className="lede mt-6">{section.description}</p>
        </div>
      </div>

      {/* ── Orientation: prose beside a standing summary ── */}
      <div className="page-wide section-tight">
        <div className="grid gap-10 lg:grid-cols-[1fr_16rem] lg:gap-16">
          <div className="prose-width space-y-5 text-[1.04rem] leading-[1.68] text-muted">
            {section.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          {/* Standing summary — the section's shape, in figures. */}
          <dl className="h-fit border-t-2 border-ink pt-5 text-sm lg:sticky lg:top-24">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
              <dt className="mono-label">Guides live</dt>
              <dd className="font-mono text-lg tabular-nums text-ink">
                {String(liveLinks.length).padStart(2, "0")}
              </dd>
            </div>
            {soonCount > 0 ? (
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
                <dt className="mono-label">In progress</dt>
                <dd className="font-mono text-lg tabular-nums text-muted">
                  {String(soonCount).padStart(2, "0")}
                </dd>
              </div>
            ) : null}
            {section.faqs && section.faqs.length > 0 ? (
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
                <dt className="mono-label">Questions answered</dt>
                <dd className="font-mono text-lg tabular-nums text-ink">
                  {String(section.faqs.length).padStart(2, "0")}
                </dd>
              </div>
            ) : null}
            <div className="pt-4">
              <dt className="mono-label">Cost</dt>
              <dd className="mt-1 text-[0.9rem] text-muted">
                Free · no account required
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── Contents ── */}
      <section className="band-deep">
        <div className="page-wide section">
          <div className="section-marker">
            <span>Contents</span>
          </div>
          <h2 className="mt-7 text-ink">Guides in this section</h2>

          <ul className="index-list mt-8">
            {section.links.map((link, i) => {
              const isLive = link.status === "live";
              const num = String(i + 1).padStart(2, "0");

              const body = (
                <>
                  <span className="index-num">{num}</span>
                  {/* div, not span: this column contains an h3, which is flow
                      content and cannot live inside phrasing content. */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                      <h3
                        className={
                          isLive
                            ? "text-ink transition-colors group-hover:text-accent"
                            : "text-muted"
                        }
                      >
                        {link.title}
                      </h3>
                      <span
                        className={`status-pill ${
                          isLive ? "status-live" : "status-soon"
                        }`}
                      >
                        {isLive ? "Live" : "Soon"}
                      </span>
                    </div>
                    <p className="muted mt-1.5 max-w-[62ch] text-[0.94rem]">
                      {link.description}
                    </p>
                  </div>
                  {isLive ? (
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
                  ) : (
                    <span aria-hidden="true" className="mono-label">
                      —
                    </span>
                  )}
                </>
              );

              /*
                Keyed by title, not href. React keys are serialised into the
                page's inline RSC payload, and Googlebot crawls URL-shaped
                strings it finds there — so keying a "soon" row by its href
                published a link to a page that does not exist yet, and each
                one surfaced in Search Console as a 404.
              */
              return (
                <li key={link.title} className="list-none">
                  {isLive ? (
                    <Link href={link.href} className="index-row group">
                      {body}
                    </Link>
                  ) : (
                    /* Not a link: nothing to open yet, so nothing to click. */
                    <div className="index-row cursor-default opacity-70">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Questions ── */}
      {section.faqs && section.faqs.length > 0 ? (
        <section className="page-wide section">
          <div className="section-marker">
            <span>Questions</span>
          </div>
          <h2 className="mt-7 max-w-[28ch] text-ink">Common questions</h2>

          {/*
            Ruled Q&A rather than an accordion. These answers are the page's
            substance and several are the reason it ranks — hiding them behind a
            click costs a reader two interactions to read one paragraph.
          */}
          {/* The 2.5rem numeral column matches .index-row, so questions and
              answers align to the same rail as every other list on the site. */}
          <dl className="mt-9 grid gap-x-16 gap-y-0 border-t border-line lg:grid-cols-2">
            {section.faqs.map((faq, i) => (
              <div key={faq.question} className="border-b border-line py-7">
                <dt className="grid grid-cols-[2.5rem_1fr] items-baseline">
                  <span className="index-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.2rem] font-semibold leading-snug tracking-[-0.016em] text-ink">
                    {faq.question}
                  </span>
                </dt>
                <dd className="muted mt-3 max-w-[58ch] pl-10 text-[0.96rem]">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
    </>
  );
}

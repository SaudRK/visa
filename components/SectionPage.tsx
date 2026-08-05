import Link from "next/link";
import type { SectionMeta } from "@/lib/contentMap";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
} from "@/lib/jsonLd";

/**
 * Shared layout for the section hubs (/banking, /taxes, …).
 *
 * The heading hierarchy is deliberate: one H1 stating the page's topic, H2s for
 * the page's real sections, H3 for each card. Previously every card title was an
 * H2, which gave the page a flat outline of unrelated link titles and no
 * readable structure for either a screen reader or a crawler.
 */
export default function SectionPage({ section }: { section: SectionMeta }) {
  const liveLinks = section.links.filter((l) => l.status === "live");

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

      <div className="page-shell section">
        <Breadcrumbs items={[{ name: section.label, path: section.href }]} />

        <div className="max-w-3xl">
          <p className="eyebrow">{section.label}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {section.h1}
          </h1>
          <div className="mt-4 h-1 w-14 bg-accent" />
          <p className="lede mt-5">{section.description}</p>
        </div>

        {/* Real introductory copy — a hub with only a card grid is a thin page. */}
        <div className="prose-width mt-8 space-y-4 text-[1.05rem] leading-relaxed text-muted">
          {section.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Guides in this section
          </h2>
          <ul className="bento mt-7 grid-cols-1 md:grid-cols-2">
            {section.links.map((link, i) => {
              const isLive = link.status === "live";
              const body = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <p className="mono-label">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <span
                      className={`status-pill ${
                        isLive ? "status-live" : "status-soon"
                      }`}
                    >
                      {isLive ? "Live" : "Soon"}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {link.title}
                    </h3>
                    <p className="muted mt-2 text-sm">{link.description}</p>
                  </div>
                  {isLive ? (
                    <span className="btn-link">
                      Open <span aria-hidden>→</span>
                    </span>
                  ) : (
                    <p className="mono-label">In progress</p>
                  )}
                </>
              );

              return (
                <li key={link.href} className="min-w-0 list-none">
                  {isLive ? (
                    <Link href={link.href} className="cell h-full">
                      {body}
                    </Link>
                  ) : (
                    <div className="cell cell-soft h-full">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {section.faqs && section.faqs.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Common questions
            </h2>
            <dl className="prose-width mt-8 space-y-8">
              {section.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-heading text-xl font-semibold text-ink">
                    {faq.question}
                  </dt>
                  <dd className="mt-2.5 leading-relaxed text-muted">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
      </div>
    </>
  );
}

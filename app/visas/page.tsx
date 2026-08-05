import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { getCategoriesWithVisas } from "@/lib/getCategories";
import {
  buildItemListJsonLd,
  buildWebPageJsonLd,
  buildFaqJsonLd,
} from "@/lib/jsonLd";
import { clampDescription } from "@/lib/visaSeo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

const PATH = "/visas";
const TITLE = "US Visa Types Explained";
const DESCRIPTION =
  "A plain-English guide to US visa categories — work, student, visitor, family, and green card routes — with requirements, fees, and timelines for each.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

/*
  Hub page for the visa library.

  Before this existed, /visas returned a 404 while ten detailed visa guides sat
  underneath it with nothing linking to them — orphaned pages that crawlers
  reach late and rank poorly. This page gives that cluster a single entry point,
  a place in the header navigation, and internal links from the homepage.
*/

const faqs = [
  {
    question: "What is the difference between a nonimmigrant and immigrant visa?",
    answer:
      "A nonimmigrant visa allows a temporary stay for a specific purpose — working, studying, or visiting — and normally requires you to intend to leave when it ends. An immigrant visa leads to a green card and permanent residence. Some nonimmigrant statuses, such as H-1B and L-1, allow you to hold immigrant intent at the same time; others, such as B-2 and F-1, generally do not.",
  },
  {
    question: "Which US visa lets me work?",
    answer:
      "Work authorization comes from your status, not from the visa stamp alone. Employer-sponsored statuses such as H-1B, L-1, and TN carry work authorization for that specific employer and role. Students on F-1 can work only within the limits of CPT or OPT authorization. Working outside what your status permits can end it and affect future applications.",
  },
  {
    question: "How long does a US visa application take?",
    answer:
      "Timelines vary widely by category, by whether the petition is filed with USCIS or processed at a consulate, and by current backlogs at the specific post handling your case. Each guide on this site includes a timeline section with the date it was last reviewed, but you should always confirm current processing times against the official USCIS and Department of State pages before planning travel.",
  },
  {
    question: "Do I need a lawyer to apply for a US visa?",
    answer:
      "Many straightforward applications are filed without a lawyer, and employer-sponsored petitions are usually handled by the employer's counsel. Professional help is worth it when your history includes prior denials, overstays, criminal matters, or a complex qualification argument. Nothing on this site is legal advice — use it to understand the pathway, then have your specific facts reviewed.",
  },
];

export default function VisasHubPage() {
  const groups = getCategoriesWithVisas();
  const allVisas = groups.flatMap((group) => group.visas);

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
            allVisas.map((visa) => ({
              name: `${visa.code} — ${visa.name}`,
              path: `/visas/${
                groups.find((g) => g.category.id === visa.category)!.category
                  .slug
              }/${visa.id}`,
            }))
          ),
          buildFaqJsonLd(faqs),
        ]}
      />

      <div className="border-b border-line">
        <div className="page-shell section">
          <Breadcrumbs items={[{ name: "Visas", path: PATH }]} />
          <p className="eyebrow">The visa library</p>
          <h1 className="mt-3 max-w-[22ch] text-ink">US visa types explained</h1>
          <div className="mt-5 h-1 w-14 bg-accent" />
          <p className="lede mt-5 max-w-2xl">
            Every US visa answers a different question: why you are coming, how
            long you intend to stay, and who is sponsoring you. Start with the
            category that matches your situation — each guide covers who
            qualifies, what the process looks like, what it costs, and how long
            it typically takes.
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            Once you know your status, the{" "}
            <Link
              href="/visa-guides"
              className="font-semibold text-accent hover:underline"
            >
              visa money guides
            </Link>{" "}
            cover what to do next — banking, taxes, and sending money home.
          </p>
        </div>
      </div>

      <div className="page-shell section">
        {groups.map(({ category, visas }) => (
          <section key={category.id} className="mb-14 last:mb-0">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-ink">{category.label}</h2>
                <p className="muted mt-2 max-w-2xl text-[0.95rem]">
                  {category.description}
                </p>
              </div>
              <Link
                href={`/visas/${category.slug}`}
                className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent transition-colors hover:text-ink"
              >
                All {category.label.toLowerCase()} →
              </Link>
            </div>

            <ul className="bento mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {visas.map((visa) => (
                <li key={visa.id} className="list-none">
                  <Link
                    href={`/visas/${category.slug}/${visa.id}`}
                    className="cell h-full"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="index-num">{visa.code}</span>
                      <span className="mono-label">
                        Reviewed {visa.lastReviewedDate}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-ink">{visa.name}</h3>
                      <p className="muted mt-2.5 text-[0.95rem]">
                        {clampDescription(visa.quickAnswer, 130)}
                      </p>
                    </div>
                    <span className="btn-link">Read the guide →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="border-t border-line">
        <div className="page-shell section">
          <h2 className="text-ink">Common questions about US visas</h2>
          <dl className="prose-width mt-8 space-y-8">
            {faqs.map((faq) => (
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
        </div>
      </section>
    </>
  );
}

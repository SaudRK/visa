import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getPopulatedCategories,
} from "@/lib/getCategories";
import { getVisasByCategory } from "@/lib/getVisas";
import { buildPageMetadata } from "@/lib/metadata";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
} from "@/lib/jsonLd";
import {
  categoryPageDescription,
  categoryPageHeading,
  categoryPageKeywords,
  categoryPageTitle,
  clampDescription,
} from "@/lib/visaSeo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

/*
  Only categories that actually contain guides are pre-rendered. The other five
  mapped categories used to render a "coming soon" placeholder — thin pages that
  competed for crawl budget and offered a visitor nothing. With `dynamicParams`
  off, those slugs now return a proper 404 until real content exists.
*/
export const dynamicParams = false;

export async function generateStaticParams() {
  return getPopulatedCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildPageMetadata({
    title: categoryPageTitle(category),
    description: categoryPageDescription(category),
    path: `/visas/${category.slug}`,
    keywords: categoryPageKeywords(category),
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const visas = getVisasByCategory(category.id);
  // A category with no guides is not a page worth serving.
  if (visas.length === 0) notFound();

  const path = `/visas/${category.slug}`;

  return (
    <div>
      <JsonLd
        schema={[
          buildWebPageJsonLd({
            title: categoryPageTitle(category),
            description: categoryPageDescription(category),
            path,
            keywords: categoryPageKeywords(category),
          }),
          buildItemListJsonLd(
            visas.map((visa) => ({
              name: `${visa.code} — ${visa.name}`,
              path: `${path}/${visa.id}`,
            }))
          ),
          category.faqs && category.faqs.length > 0
            ? buildFaqJsonLd(category.faqs)
            : null,
        ]}
      />

      <div className="atlas-grid border-b border-line">
        <div className="page-wide py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Visas", path: "/visas" },
              { name: category.label, path },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_14rem] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow">Visa category</p>
              <h1 className="mt-4 max-w-[22ch] text-ink">
                {categoryPageHeading(category)}
              </h1>
              <span className="signal-line mt-6" />
              <p className="lede mt-6">{category.description}</p>
            </div>

            {/* The category's shape as a figure, rather than a sentence. */}
            <div className="border-t-2 border-ink pt-4">
              <p className="font-display text-[3.5rem] leading-none tracking-[-0.04em] tabular-nums text-ink">
                {String(visas.length).padStart(2, "0")}
              </p>
              <p className="mono-label mt-2">
                {visas.length === 1 ? "guide" : "guides"} in this category
              </p>
              <p className="muted mt-4 text-[0.88rem] leading-relaxed">
                Each covers eligibility, the filing process, fees, documents, and
                typical timelines, with the date it was last reviewed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {category.intro && category.intro.length > 0 ? (
        <div className="page-wide section-tight pb-0!">
          <div className="prose-width space-y-5 text-[1.04rem] leading-[1.68] text-muted">
            {category.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}

      {/*
        The visa code is the index rail. A reader scanning this page is looking
        for "H-1B" or "L-1", not for item number three — so the code occupies the
        numeral column and does the work a sequence number cannot.
      */}
      <div className="page-wide section-tight">
        <ul className="index-list">
          {visas.map((visa) => (
            <li key={visa.id} className="list-none">
              <Link
                href={`${path}/${visa.id}`}
                className="group grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-3 border-b border-line py-6 pl-0.5 pr-2 transition-[background-color,padding-left] duration-200 hover:bg-soft hover:pl-3 md:grid-cols-[6.5rem_1fr_auto]"
              >
                <span className="index-num order-1 pt-1.5 md:order-none">
                  {visa.code}
                </span>
                <div className="order-3 min-w-0 md:order-none">
                  <h2 className="font-display text-[1.6rem] leading-tight tracking-[-0.024em] text-ink transition-colors group-hover:text-accent">
                    {visa.name}
                  </h2>
                  <p className="muted mt-2.5 max-w-[62ch] text-[0.95rem]">
                    {clampDescription(visa.quickAnswer, 220)}
                  </p>
                  <span className="mono-label mt-3 block">
                    Reviewed {visa.lastReviewedDate}
                  </span>
                </div>
                <svg
                  aria-hidden="true"
                  className="index-arrow order-2 mt-1.5 h-4 w-4 shrink-0 md:order-none"
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

        {/* Same ruled Q&A as the section hubs: the answers are the substance,
            so they are not hidden behind an accordion. */}
        {category.faqs && category.faqs.length > 0 ? (
          <section className="mt-16">
            <div className="section-marker">
              <span>Questions</span>
            </div>
            <h2 className="mt-7 max-w-[28ch] text-ink">Common questions</h2>
            <dl className="mt-9 grid gap-x-16 gap-y-0 border-t border-line lg:grid-cols-2">
              {category.faqs.map((faq, i) => (
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

        <div className="mt-14 border-t-2 border-ink pt-6">
          <h2 className="section-title max-w-[26ch]">
            Already know your status?
          </h2>
          <p className="muted mt-3 max-w-[62ch]">
            The visa guides cover getting the status. For what comes next —
            opening a bank account, understanding your first payslip, building
            credit, and sending money home — start with the{" "}
            <Link
              href="/visa-guides"
              className="font-semibold text-accent hover:underline"
            >
              visa money guides
            </Link>{" "}
            or browse{" "}
            <Link
              href="/calculators"
              className="font-semibold text-accent hover:underline"
            >
              the free calculators
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

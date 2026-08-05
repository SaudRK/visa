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
  buildItemListJsonLd,
  buildWebPageJsonLd,
} from "@/lib/jsonLd";
import { categoryPageTitle, clampDescription } from "@/lib/visaSeo";
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
    description: clampDescription(category.description),
    path: `/visas/${category.slug}`,
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
            description: category.description,
            path,
          }),
          buildItemListJsonLd(
            visas.map((visa) => ({
              name: `${visa.code} — ${visa.name}`,
              path: `${path}/${visa.id}`,
            }))
          ),
        ]}
      />

      <div className="atlas-grid border-b border-line">
        <div className="page-shell py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Visas", path: "/visas" },
              { name: category.label, path },
            ]}
          />
          <p className="eyebrow">Visa category</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
            US {category.label.toLowerCase()}
          </h1>
          <span className="signal-line mt-5" />
          <p className="mt-5 max-w-2xl lede">{category.description}</p>
          <p className="mt-4 max-w-2xl text-muted">
            {visas.length} {visas.length === 1 ? "guide" : "guides"} in this
            category. Each one covers eligibility, the filing process, fees,
            documents, and typical timelines, with the date it was last reviewed.
          </p>
        </div>
      </div>

      <div className="page-shell py-12 sm:py-16">
        <ul className="border border-line">
          {visas.map((visa) => (
            <li key={visa.id} className="border-b border-line last:border-b-0">
              <Link
                href={`${path}/${visa.id}`}
                className="block p-6 transition-colors hover:bg-surface"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="tag tag-ink">{visa.code}</span>
                  <span className="tag">Reviewed {visa.lastReviewedDate}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl tracking-tight">
                  {visa.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {clampDescription(visa.quickAnswer, 220)}
                </p>
                <p className="mt-4 text-sm font-semibold text-signal">
                  Read the full guide →
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-2 border-ink bg-surface p-6">
          <h2 className="font-display text-xl tracking-tight">
            Already know your status?
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
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

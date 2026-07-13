import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategoryBySlug } from "@/lib/getCategories";
import { getVisasByCategory } from "@/lib/getVisas";
import { buildPageMetadata } from "@/lib/metadata";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildPageMetadata({
    title: `${category.label} — U.S. Visa Guides`,
    description: category.description,
    path: `/visas/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const visas = getVisasByCategory(category.id);

  return (
    <div>
      <div className="atlas-grid border-b border-line">
        <div className="page-shell py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-signal">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{category.label}</span>
          </nav>
          <p className="eyebrow mt-6">Category</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
            {category.label}
          </h1>
          <span className="signal-line mt-5 max-w-[6rem]" />
          <p className="mt-5 max-w-2xl lede">{category.description}</p>
        </div>
      </div>

      <div className="page-shell py-12 sm:py-16">
        {visas.length > 0 ? (
          <ul className="border border-line">
            {visas.map((visa) => (
              <li key={visa.id} className="border-b border-line last:border-b-0">
                <Link
                  href={`/visas/${category.slug}/${visa.id}`}
                  className="block p-6 transition-colors hover:bg-surface"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="tag tag-ink">{visa.code}</span>
                    <span className="tag">Reviewed {visa.lastReviewedDate}</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl tracking-tight">
                    {visa.name}
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">
                    {visa.quickAnswer}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-signal">
                    Read the full guide →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="border border-line bg-surface p-8">
            <h2 className="font-display text-2xl tracking-tight">
              Guides coming soon
            </h2>
            <p className="mt-3 max-w-xl text-muted leading-relaxed">
              This category is mapped into the site. Detailed visa pages land
              here next — explore live work and student guides from the path
              finder meanwhile.
            </p>
            <Link href="/#find-path" className="btn btn-signal mt-6">
              Back to path finder
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

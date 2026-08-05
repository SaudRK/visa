import categoriesData from "@/content/categories.json";
import type { Category } from "./types";
import { getVisas } from "./getVisas";

export function getCategories(): Category[] {
  return categoriesData as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return getCategories().find((c) => c.id === id);
}

/**
 * Categories that actually contain published visa guides.
 *
 * Five of the seven mapped categories have no content yet. Pre-rendering them
 * produced five near-empty "coming soon" pages — thin, duplicative, and a drag
 * on how much of the site Google considers worth crawling. Routing and the
 * sitemap are both driven off this list so a category becomes indexable the
 * moment its first guide lands, and not before.
 */
export function getPopulatedCategories(): Category[] {
  const visas = getVisas();
  return getCategories().filter((category) =>
    visas.some((visa) => visa.category === category.id)
  );
}

/** A category paired with its visas, ordered for hub listings. */
export function getCategoriesWithVisas() {
  const visas = getVisas();
  return getPopulatedCategories().map((category) => ({
    category,
    visas: visas
      .filter((visa) => visa.category === category.id)
      // Parent statuses first (F-1 before F-1 OPT), then alphabetically by code.
      .sort((a, b) => {
        if (!a.parentVisaId && b.parentVisaId) return -1;
        if (a.parentVisaId && !b.parentVisaId) return 1;
        return a.code.localeCompare(b.code);
      }),
  }));
}

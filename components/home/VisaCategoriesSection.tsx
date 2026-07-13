import Link from "next/link";
import { getCategories } from "@/lib/getCategories";
import FlagBannerPlane from "@/components/illustrations/FlagBannerPlane";

const groups = [
  {
    label: "Visiting or working temporarily",
    categoryIds: ["visitor", "work"],
  },
  {
    label: "Studying in the U.S.",
    categoryIds: ["student"],
  },
  {
    label: "Family-based pathways",
    categoryIds: ["family-fiance", "family-green-card"],
  },
  {
    label: "Employment & humanitarian green cards",
    categoryIds: ["employment-green-card", "humanitarian"],
  },
];

export default function VisaCategoriesSection() {
  const categories = getCategories();

  return (
    <section id="visa-categories" className="bg-waves py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-text sm:text-4xl">
              U.S. Visa Guides by Category
            </h2>
            <p className="mt-3 max-w-xl text-text-muted">
              Choose the pathway that fits your situation. Each guide covers
              eligibility, process, fees, and common questions.
            </p>
          </div>
          <FlagBannerPlane className="hidden lg:flex" />
        </div>

        <div className="mt-12 space-y-10">
          {groups.map((group) => {
            const groupCategories = categories.filter((c) =>
              group.categoryIds.includes(c.id)
            );

            return (
              <div key={group.label}>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                  {group.label}
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {groupCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/visas/${category.slug}`}
                        className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                      >
                        <span className="text-lg font-bold text-primary group-hover:text-primary-light transition-colors">
                          {category.label}
                        </span>
                        <span className="mt-2 flex-1 text-sm text-text-muted leading-relaxed">
                          {category.description}
                        </span>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                          Explore guides
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <FlagBannerPlane />
        </div>
      </div>
    </section>
  );
}

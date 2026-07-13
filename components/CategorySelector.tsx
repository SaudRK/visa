import Link from "next/link";
import { getCategories } from "@/lib/getCategories";

const groups = [
  {
    label: "Visiting or working temporarily",
    categoryIds: ["visitor", "work"],
  },
  {
    label: "Studying",
    categoryIds: ["student"],
  },
  {
    label: "Family-based",
    categoryIds: ["family-fiance", "family-green-card"],
  },
  {
    label: "Employment & humanitarian green cards",
    categoryIds: ["employment-green-card", "humanitarian"],
  },
];

export default function CategorySelector() {
  const categories = getCategories();

  return (
    <div className="space-y-8">
      {groups.map((group) => {
        const groupCategories = categories.filter((c) =>
          group.categoryIds.includes(c.id)
        );

        return (
          <section key={group.label} aria-labelledby={`group-${group.label}`}>
            <h2
              id={`group-${group.label}`}
              className="text-lg font-semibold text-text/70"
            >
              {group.label}
            </h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {groupCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/visas/${category.slug}`}
                    className="block rounded-[var(--radius)] border border-primary/15 bg-white/50 p-5 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-heading text-lg font-semibold text-primary">
                      {category.label}
                    </span>
                    <span className="mt-1 block text-sm text-text/75">
                      {category.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

import { getCategories } from "@/lib/getCategories";
import { getVisas } from "@/lib/getVisas";
import HomeExperience from "@/components/home/HomeExperience";

export default function HomePage() {
  const categories = getCategories();
  const visas = getVisas();
  const categorySlugById = Object.fromEntries(
    categories.map((c) => [c.id, c.slug])
  );

  const featured = ["h1b", "f1", "tn", "e2", "l1", "f1-opt"]
    .map((id) => visas.find((v) => v.id === id))
    .filter((v): v is NonNullable<typeof v> => Boolean(v));

  const latest = [...visas].sort((a, b) =>
    b.lastReviewedDate.localeCompare(a.lastReviewedDate)
  );

  return (
    <HomeExperience
      categories={categories}
      featured={featured}
      latest={latest}
      categorySlugById={categorySlugById}
    />
  );
}

import Link from "next/link";
import { getVisaById } from "@/lib/getVisaById";
import { getCategoryById } from "@/lib/getCategories";
import SectionHeading from "./SectionHeading";

interface RelatedVisasProps {
  relatedVisaIds: string[];
  relatedWhen: { visaId: string; when: string }[];
}

export default function RelatedVisas({
  relatedVisaIds,
  relatedWhen,
}: RelatedVisasProps) {
  const whenMap = Object.fromEntries(relatedWhen.map((r) => [r.visaId, r.when]));
  const related = relatedVisaIds
    .map((id) => getVisaById(id))
    .filter((v) => v !== undefined);

  if (related.length === 0) return null;

  return (
    <section aria-labelledby="related-heading">
      <SectionHeading
        id="related-heading"
        eyebrow="Compare options"
        title="Related visas — and when to choose them instead"
        description="Similar pathways can look close on paper. These notes help you branch to the better fit."
      />
      <ul className="grid gap-3 md:grid-cols-2">
        {related.map((visa) => {
          const category = getCategoryById(visa.category);
          return (
            <li key={visa.id}>
              <Link
                href={`/visas/${category?.slug}/${visa.id}`}
                className="block h-full border border-line bg-surface p-5 transition-colors hover:border-ink hover:bg-bg"
              >
                <span className="tag tag-ink">{visa.code}</span>
                <h3 className="mt-3 font-display text-xl tracking-tight">
                  {visa.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {whenMap[visa.id] ?? visa.quickAnswer}
                </p>
                <p className="mt-4 text-sm font-semibold text-signal">
                  Read the {visa.code} guide →
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

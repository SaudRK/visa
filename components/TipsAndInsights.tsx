import type { Tip } from "@/lib/types";
import Callout from "./Callout";
import SectionHeading from "./SectionHeading";

interface TipsAndInsightsProps {
  tips: Tip[];
  didYouKnow: string[];
}

export default function TipsAndInsights({
  tips,
  didYouKnow,
}: TipsAndInsightsProps) {
  return (
    <section aria-labelledby="tips-heading" className="space-y-6">
      <SectionHeading
        id="tips-heading"
        eyebrow="Practical guidance"
        title="Tips from common cases"
        description="Patterns applicants and practitioners talk about often — not individualized legal advice."
      />

      <div className="grid gap-3">
        {tips.map((tip) => (
          <Callout key={tip.title} tone="tip" title={tip.title}>
            {tip.body}
          </Callout>
        ))}
      </div>

      {didYouKnow.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {didYouKnow.map((item) => (
            <div key={item} className="border border-sea/30 bg-sea-soft p-5">
              <p className="eyebrow">Did you know?</p>
              <p className="mt-3 leading-relaxed text-ink/90">{item}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

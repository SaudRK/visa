import Callout from "./Callout";
import SectionHeading from "./SectionHeading";

interface TimelineNoteProps {
  timelineText: string;
  updatedDate: string;
  lastReviewedDate: string;
  validityPeriod: string;
  extensionInfo: string;
  importantDeadlines: string[];
}

export default function TimelineNote({
  timelineText,
  updatedDate,
  lastReviewedDate,
  validityPeriod,
  extensionInfo,
  importantDeadlines,
}: TimelineNoteProps) {
  return (
    <section aria-labelledby="timeline-heading" className="space-y-6">
      <SectionHeading
        id="timeline-heading"
        eyebrow="Time & validity"
        title="Processing timeline"
        description="Timelines vary by service center, embassy, and petition history. Use these ranges to plan — not as guarantees."
      />

      <div className="flex flex-wrap gap-2">
        <span className="tag">
          Timeline as of <strong className="text-ink">{updatedDate}</strong>
        </span>
        <span className="tag">
          Reviewed <strong className="text-ink">{lastReviewedDate}</strong>
        </span>
      </div>

      <div className="border border-line bg-surface p-6">
        <p className="leading-relaxed text-ink/90">{timelineText}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-line bg-bg p-5">
          <p className="eyebrow">Validity period</p>
          <p className="mt-3 leading-relaxed text-ink/90">{validityPeriod}</p>
        </div>
        <div className="border border-line bg-bg p-5">
          <p className="eyebrow">Extensions & renewal</p>
          <p className="mt-3 leading-relaxed text-ink/90">{extensionInfo}</p>
        </div>
      </div>

      {importantDeadlines.length > 0 ? (
        <Callout tone="alert" title="Important deadlines">
          <ul className="mt-2 space-y-2">
            {importantDeadlines.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Callout>
      ) : null}
    </section>
  );
}

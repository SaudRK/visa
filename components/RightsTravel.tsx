import SectionHeading from "./SectionHeading";

interface RightsTravelProps {
  employmentRights: string;
  travelRestrictions: string;
  dependentsText: string;
}

export default function RightsTravel({
  employmentRights,
  travelRestrictions,
  dependentsText,
}: RightsTravelProps) {
  return (
    <section aria-labelledby="rights-heading" className="space-y-6">
      <SectionHeading
        id="rights-heading"
        eyebrow="Living with this status"
        title="Work, travel, and family"
      />
      <div className="grid gap-3">
        {[
          ["Employment rights & limits", employmentRights],
          ["Travel considerations", travelRestrictions],
          ["Family & dependents", dependentsText],
        ].map(([title, body]) => (
          <article key={title} className="border border-line bg-surface p-6">
            <h3 className="font-display text-xl tracking-tight">{title}</h3>
            <p className="mt-3 text-muted leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

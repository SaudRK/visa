interface AudienceSplitProps {
  whoIsFor: string[];
  whoShouldNotApply: string[];
}

export default function AudienceSplit({
  whoIsFor,
  whoShouldNotApply,
}: AudienceSplitProps) {
  return (
    <section aria-labelledby="audience-heading" className="grid gap-4 lg:grid-cols-2">
      <h2 id="audience-heading" className="sr-only">
        Who this visa is for
      </h2>
      <div className="border border-sea bg-sea-soft p-6">
        <p className="eyebrow text-sea">A strong fit if</p>
        <ul className="mt-4 space-y-3">
          {whoIsFor.map((item) => (
            <li key={item} className="grid grid-cols-[0.75rem_1fr] gap-3 text-[0.98rem] leading-relaxed">
              <span className="mt-2 h-2 w-2 bg-sea" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-alert/30 bg-alert-soft p-6">
        <p className="eyebrow text-alert">Probably not if</p>
        <ul className="mt-4 space-y-3">
          {whoShouldNotApply.map((item) => (
            <li key={item} className="grid grid-cols-[0.75rem_1fr] gap-3 text-[0.98rem] leading-relaxed">
              <span className="mt-2 h-2 w-2 bg-alert" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

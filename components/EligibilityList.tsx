interface EligibilityListProps {
  items: string[];
}

export default function EligibilityList({ items }: EligibilityListProps) {
  return (
    <section aria-labelledby="eligibility-heading">
      <p className="eyebrow mb-3">Requirements</p>
      <h2 id="eligibility-heading" className="section-title">
        Eligibility, in plain language
      </h2>
      <p className="mt-3 lede">
        You usually need to satisfy each of these points. Missing one does not
        always mean denial — but it does mean you should get case-specific advice
        before filing.
      </p>
      <ol className="mt-6 border border-line">
        {items.map((item, index) => (
          <li
            key={item}
            className="grid grid-cols-[3rem_1fr] border-b border-line last:border-b-0"
          >
            <span className="flex items-start justify-center border-r border-line bg-surface py-4 font-mono text-sm text-sea">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="p-4 leading-relaxed text-ink/90">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

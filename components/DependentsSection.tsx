interface DependentsSectionProps {
  text: string;
}

export default function DependentsSection({ text }: DependentsSectionProps) {
  return (
    <section aria-labelledby="dependents-heading">
      <h2 id="dependents-heading" className="text-2xl font-extrabold text-text">
        Family &amp; dependents
      </h2>
      <p className="mt-4 rounded-2xl bg-white p-5 text-text-muted shadow-[var(--shadow-card)]">
        {text}
      </p>
    </section>
  );
}

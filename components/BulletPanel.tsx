interface BulletPanelProps {
  id: string;
  title: string;
  eyebrow?: string;
  items: string[];
  tone?: "neutral" | "warning" | "alert";
}

export default function BulletPanel({
  id,
  title,
  eyebrow,
  items,
  tone = "neutral",
}: BulletPanelProps) {
  const wrap =
    tone === "alert"
      ? "border-alert/30 bg-alert-soft"
      : tone === "warning"
        ? "border-signal/30 bg-signal-soft"
        : "border-line bg-surface";

  const mark =
    tone === "alert"
      ? "bg-alert"
      : tone === "warning"
        ? "bg-signal"
        : "bg-ink";

  return (
    <section aria-labelledby={id} className={`border p-6 ${wrap}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 id={id} className="font-display text-2xl tracking-tight">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[0.75rem_1fr] gap-3 leading-relaxed text-ink/90">
            <span className={`mt-2 h-2 w-2 ${mark}`} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

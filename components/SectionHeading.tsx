interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-6 max-w-2xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description ? <p className="mt-3 lede">{description}</p> : null}
    </header>
  );
}

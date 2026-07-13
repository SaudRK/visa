interface VisaPageTocProps {
  items: { id: string; label: string }[];
}

export default function VisaPageToc({ items }: VisaPageTocProps) {
  return (
    <nav
      aria-label="On this page"
      className="visa-toc sticky top-24 hidden border border-line bg-surface p-5 xl:block"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        On this page
      </p>
      <ol className="mt-4 space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="hover:underline">
              <span className="mr-2 font-mono text-[10px] text-sea">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

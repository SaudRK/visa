interface VisaPageTocProps {
  items: { id: string; label: string }[];
}

export default function VisaPageToc({ items }: VisaPageTocProps) {
  return (
    /*
      A ruled rail rather than a bordered box. The numerals sit in their own
      2.25rem column so the labels form a clean left edge, and each row is a
      hairline — the same contents language used on the hubs and the homepage.
    */
    <nav
      aria-label="On this page"
      className="visa-toc sticky top-24 hidden border-t-2 border-ink pt-4 xl:block"
    >
      <p className="mono-label">On this page</p>
      <ol className="mt-3.5">
        {items.map((item, index) => (
          <li key={item.id} className="border-b border-line last:border-b-0">
            <a
              href={`#${item.id}`}
              className="group grid grid-cols-[2.25rem_1fr] items-baseline py-2 text-[0.875rem] leading-snug"
            >
              <span className="index-num !text-line-strong transition-colors group-hover:!text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-muted transition-colors group-hover:text-ink">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

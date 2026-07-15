import Link from "next/link";
import type { SectionMeta } from "@/lib/contentMap";

export default function SectionPage({ section }: { section: SectionMeta }) {
  return (
    <div className="page-shell section">
      <div className="mb-6 max-w-3xl">
        <p className="eyebrow">{section.label}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {section.label}
        </h1>
        <div className="mt-4 h-1 w-14 bg-accent" />
        <p className="lede mt-5">{section.description}</p>
      </div>

      <ul className="bento grid-cols-1 md:grid-cols-2">
        {section.links.map((link, i) => {
          const isLive = link.status === "live";
          const body = (
            <>
              <div className="flex items-center justify-between gap-3">
                <p className="mono-label">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span
                  className={`status-pill ${isLive ? "status-live" : "status-soon"}`}
                >
                  {isLive ? "Live" : "Soon"}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{link.title}</h2>
                <p className="muted mt-2 text-sm">{link.description}</p>
              </div>
              {isLive ? (
                <span className="btn-link">
                  Open <span aria-hidden>→</span>
                </span>
              ) : (
                <p className="mono-label">Queued</p>
              )}
            </>
          );

          return (
            <li key={link.href} className="min-w-0 list-none">
              {isLive ? (
                <Link href={link.href} className="cell h-full">
                  {body}
                </Link>
              ) : (
                <div className="cell cell-soft h-full">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

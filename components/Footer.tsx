import Link from "next/link";
import { footerColumns, siteConfig } from "@/lib/siteConfig";
import Wordmark from "./Wordmark";

/*
  The colophon.

  Structured like the back matter of a reference volume rather than a sitemap
  dump: an oversized wordmark and standing line, then the sections as ruled
  columns, then the publication statement. The vertical rules between columns
  are the same 1px hairlines used everywhere else, so the footer belongs to the
  same document as the pages above it.

  Every link from `footerColumns` is preserved — this is the site-wide internal
  link surface that keeps each indexable hub one hop from every page, and the
  column labels stay <p> rather than <h2> on purpose: four headings in the
  footer of every page would sit at the same outline level as that page's real
  sections and flatten its structure. The <nav> landmark plus `aria-labelledby`
  carries the accessibility need without that cost.
*/
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-navy text-white">
      <div className="page-wide">
        {/* Standing head */}
        <div className="grid gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-display text-[clamp(2.75rem,1.6rem+4vw,4.5rem)] leading-[0.94] tracking-[-0.035em] text-white">
              <Wordmark accentClassName="text-white/45" />
            </p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/55">
              {siteConfig.tagline}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/12 pt-7 lg:border-t-0 lg:pt-0">
            <div>
              <dt className="mono-label">Scope</dt>
              <dd className="mt-1.5 text-[0.9rem] text-white/70">
                United States
              </dd>
            </div>
            <div>
              <dt className="mono-label">Access</dt>
              <dd className="mt-1.5 text-[0.9rem] text-white/70">
                Free · no account
              </dd>
            </div>
            <div>
              <dt className="mono-label">Review cadence</dt>
              <dd className="mt-1.5 text-[0.9rem] text-white/70">
                Every six months
              </dd>
            </div>
            <div>
              <dt className="mono-label">Established</dt>
              <dd className="mt-1.5 font-mono text-[0.9rem] tabular-nums text-white/70">
                {year}
              </dd>
            </div>
          </dl>
        </div>

        {/* Sections — ruled columns */}
        <nav
          aria-label="Footer"
          className="grid gap-y-10 border-t border-white/12 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0"
        >
          {footerColumns.map((column, i) => (
            <div
              key={column.heading}
              className={
                i > 0
                  ? "lg:border-l lg:border-white/12 lg:pl-8"
                  : "lg:pr-8"
              }
            >
              <p id={`footer-${column.id}`} className="mono-label">
                <span className="text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>{" "}
                {column.heading}
              </p>
              <ul
                aria-labelledby={`footer-${column.id}`}
                className="mt-4 space-y-2"
              >
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.9rem] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Publication statement */}
        <div className="flex flex-col gap-2 border-t border-white/12 py-7 text-[0.78rem] leading-relaxed text-white/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <p>
            © {year} {siteConfig.name}. An independent educational resource.
          </p>
          <p className="sm:text-right">
            Not affiliated with USCIS, the IRS, or any U.S. government agency —
            educational information only.
          </p>
        </div>
      </div>
    </footer>
  );
}

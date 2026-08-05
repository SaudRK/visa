import Link from "next/link";
import { footerColumns, siteConfig } from "@/lib/siteConfig";
import Wordmark from "./Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        {/* Masthead row */}
        <div className="flex flex-col gap-4 border-b border-white/10 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-3xl font-medium tracking-tight text-white">
              <Wordmark accentClassName="text-white/50" />
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
              {siteConfig.tagline}
            </p>
          </div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
            Visas · Taxes · Money · Est. {year}
          </p>
        </div>

        {/* Link columns — deliberately broader than the header so every
            indexable hub has a site-wide internal link. */}
        <nav
          aria-label="Footer"
          className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {footerColumns.map((column) => (
            <div key={column.heading}>
              {/*
                Deliberately not a heading. Four <h2>s in the footer of every
                page sit at the same outline level as the page's real sections
                and flatten its structure; the <nav> landmark plus this group
                label carries the accessibility need without that cost.
              */}
              <p
                id={`footer-${column.id}`}
                className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/40"
              >
                {column.heading}
              </p>
              <ul
                aria-labelledby={`footer-${column.id}`}
                className="mt-4 space-y-2.5"
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

        {/* Colophon */}
        <div className="flex flex-col gap-2 py-7 text-[0.78rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. An independent educational resource.
          </p>
          <p>
            Not affiliated with USCIS or the IRS — educational information only.
          </p>
        </div>
      </div>
    </footer>
  );
}

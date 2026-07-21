import Link from "next/link";
import { navSections, siteConfig } from "@/lib/siteConfig";
import { sections } from "@/lib/contentMap";

export default function Footer() {
  const calcLinks =
    sections
      .find((s) => s.id === "calculators")
      ?.links.filter((l) => l.status === "live") ?? [];

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        {/* Masthead row */}
        <div className="flex flex-col gap-4 border-b border-white/10 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-3xl font-medium tracking-tight text-white">
              Finovly<span className="text-white/50">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
              {siteConfig.tagline}
            </p>
          </div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
            A field guide to money in America · Est. {year}
          </p>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {navSections.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9rem] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
              Calculators
            </p>
            <ul className="mt-4 space-y-2.5">
              {calcLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9rem] text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
              About
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="text-[0.9rem] text-white/70 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[0.9rem] text-white/70 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[0.9rem] text-white/70 transition-colors hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-[0.9rem] text-white/70 transition-colors hover:text-white">
                  Affiliate disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon */}
        <div className="flex flex-col gap-2 py-7 text-[0.78rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. An independent field guide.</p>
          <p>Educational only — not financial, tax, or legal advice.</p>
        </div>
      </div>
    </footer>
  );
}

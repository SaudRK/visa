import Link from "next/link";
import { navSections, siteConfig } from "@/lib/siteConfig";
import { sections } from "@/lib/contentMap";

export default function Footer() {
  const calcLinks =
    sections
      .find((s) => s.id === "calculators")
      ?.links.filter((l) => l.status === "live") ?? [];

  return (
    <footer className="mt-auto border-t-2 border-ink bg-ink text-white">
      <div className="page-shell grid gap-0 border-x-2 border-ink lg:grid-cols-4">
        <div className="border-b-2 border-white/15 p-6 lg:border-b-0 lg:border-r-2 lg:border-white/15">
          <p className="text-lg font-bold tracking-tight">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="border-b-2 border-white/15 p-6 lg:border-b-0 lg:border-r-2 lg:border-white/15">
          <p className="mono-label !text-white/45">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {navSections.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b-2 border-white/15 p-6 lg:border-b-0 lg:border-r-2 lg:border-white/15">
          <p className="mono-label !text-white/45">Calculators</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {calcLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <p className="mono-label !text-white/45">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure" className="hover:text-white">
                Affiliates
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-white/15">
        <div className="page-shell flex flex-col gap-2 py-4 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>Educational only · Not financial / tax / legal advice</p>
        </div>
      </div>
    </footer>
  );
}

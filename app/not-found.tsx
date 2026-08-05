import type { Metadata } from "next";
import Link from "next/link";

/*
  404 page.

  The route already returns a real 404 status, so no noindex is needed — Google
  drops 404s on its own. What matters here is recovery: the previous version
  offered two links, which sent most lost visitors straight back out. These cover
  every main entry point, and the internal links give crawlers that land on a
  stale URL a path back into the live structure.
*/
export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page does not exist. Browse US visa guides, tax explainers, and free calculators instead.",
};

const destinations = [
  {
    href: "/visas",
    label: "US visa types",
    blurb: "Work, student, and family categories with requirements and fees.",
  },
  {
    href: "/calculators",
    label: "Free calculators",
    blurb: "H-1B take-home pay, remittance costs, and tax residency.",
  },
  {
    href: "/taxes",
    label: "Taxes",
    blurb: "Resident vs nonresident status, filing, and treaties.",
  },
  {
    href: "/banking",
    label: "Banking & credit",
    blurb: "Opening accounts and building a US credit file.",
  },
  {
    href: "/send-money",
    label: "Sending money home",
    blurb: "Comparing transfer fees and exchange rate margins.",
  },
  {
    href: "/visa-guides",
    label: "Visa money guides",
    blurb: "First-year money checklists by visa status.",
  },
];

export default function NotFound() {
  return (
    <div className="page-shell section">
      <div className="bento grid-cols-1 md:grid-cols-3">
        <div className="cell cell-ink md:col-span-2">
          <p className="mono-label !text-white/50">Error 404</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            We could not find that page
          </h1>
          <p className="mt-4 text-white/65">
            The link may be out of date, or the address may have a typo. Nothing
            is lost — pick a starting point below.
          </p>
        </div>
        <div className="cell flex flex-col justify-between gap-4">
          <p className="muted text-sm">
            Looking for something specific that used to be here? Tell us and we
            will point you at it.
          </p>
          <Link href="/contact" className="btn btn-ghost">
            Contact us
          </Link>
        </div>
      </div>

      <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink">
        Popular starting points
      </h2>
      <ul className="bento mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item) => (
          <li key={item.href} className="list-none">
            <Link href={item.href} className="cell h-full">
              <h3 className="text-ink">{item.label}</h3>
              <p className="muted mt-2 text-[0.95rem]">{item.blurb}</p>
              <span className="btn-link">
                Open <span aria-hidden>→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

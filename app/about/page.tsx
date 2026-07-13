import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildPageMetadata({
  title: `About ${siteConfig.name}`,
  description: `Why ${siteConfig.name} exists — clear, sourced U.S. immigration guidance for applicants who need calm clarity before they file.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <div className="atlas-grid border-b border-line">
        <div className="page-shell py-14 sm:py-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
            Guidance that respects how consequential this is
          </h1>
          <span className="signal-line mt-5 max-w-[7rem]" />
          <p className="mt-5 max-w-2xl lede">
            {siteConfig.name} exists because immigration decisions are expensive,
            emotional, and easy to misunderstand.
          </p>
        </div>
      </div>

      <div className="page-shell grid gap-10 py-14 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            We write structured guides for people who need practical answers
            before they hire counsel or file forms: Is this visa for me? What
            goes wrong? What does it cost? How long might it take?
          </p>
          <p>
            Every live visa page links to official sources, shows when timing
            notes were updated, and carries a clear disclaimer.
          </p>
          <Link href="/#find-path" className="btn btn-signal">
            Find your path
          </Link>
        </div>
        <aside className="h-fit border border-line bg-surface p-6">
          <p className="eyebrow">What we optimize for</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Applicant-first explanations</li>
            <li>Comparison between related visas</li>
            <li>Checkable dates and sources</li>
            <li>No fake certainty about processing times</li>
            <li>Fast static pages that stay readable on mobile</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

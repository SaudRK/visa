import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/siteConfig";

interface GuideLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
  children: ReactNode;
}

export default function GuideLayout({
  eyebrow,
  title,
  description,
  updated = "July 2026",
  children,
}: GuideLayoutProps) {
  return (
    <article className="page-shell section">
      <header className="bento grid-cols-1 md:grid-cols-5 mb-8">
        <div className="cell md:col-span-3">
          <p className="mono-label">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="mt-4 h-1 w-14 bg-accent" />
        </div>
        <div className="cell cell-soft md:col-span-2">
          <p className="mono-label">Updated</p>
          <p className="text-2xl font-bold tracking-tight">{updated}</p>
          <p className="muted mt-2 text-sm">{description}</p>
        </div>
      </header>

      <div className="mb-8 border-2 border-ink bg-surface p-4 text-sm leading-relaxed text-muted">
        {siteConfig.affiliateDisclosure}{" "}
        <Link
          href="/affiliate-disclosure"
          className="font-bold text-ink underline underline-offset-2"
        >
          Affiliate Disclosure
        </Link>
        .
      </div>

      <div className="prose-width space-y-5 text-[1.05rem] leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:border-l-4 [&_h2]:border-accent [&_h2]:pl-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>

      <aside className="prose-width mt-12 border-2 border-ink bg-soft p-5 text-sm leading-relaxed text-muted">
        {siteConfig.disclaimerText}
      </aside>
    </article>
  );
}

"use client";

import Link from "next/link";
import type { Category, Visa } from "@/lib/types";
import { siteConfig } from "@/lib/siteConfig";
import ParallaxProvider, { ParallaxLayer } from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";

interface HomeExperienceProps {
  categories: Category[];
  featured: Visa[];
  latest: Visa[];
  categorySlugById: Record<string, string>;
}

const audience = [
  { label: "Students", href: "/visas/study", detail: "F-1 · OPT · M-1" },
  { label: "Workers", href: "/visas/work", detail: "H-1B · L-1 · TN · R-1 · H-2" },
  { label: "Investors", href: "/visas/work/e2", detail: "E-2 treaty path" },
  { label: "Families", href: "/visas/family-green-card", detail: "Family green cards" },
  { label: "Humanitarian", href: "/visas/protection", detail: "Protection pathways" },
];

const journeys = [
  {
    title: "Study, then work",
    body: "F-1 → OPT → H-1B when employer sponsorship appears.",
    href: "/visas/study/f1",
    code: "01",
  },
  {
    title: "Transfer inside a company",
    body: "Multinational history can make L-1 cleaner than lottery H-1B.",
    href: "/visas/work/l1",
    code: "02",
  },
  {
    title: "Invest and build",
    body: "Treaty nationals build and direct a substantial enterprise on E-2.",
    href: "/visas/work/e2",
    code: "03",
  },
  {
    title: "North America professionals",
    body: "Listed USMCA professions move via TN without a lottery.",
    href: "/visas/work/tn",
    code: "04",
  },
];

export default function HomeExperience({
  categories,
  featured,
  latest,
  categorySlugById,
}: HomeExperienceProps) {
  return (
    <ParallaxProvider>
      <section className="parallax-stage atlas-grid min-h-[92vh] border-b border-line">
        <ParallaxLayer speed={-0.12} className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[22%] h-40 w-40 border border-ink/15" />
          <div className="absolute right-[12%] top-[30%] h-56 w-56 border border-sea/20" />
          <div className="absolute bottom-[20%] left-[28%] h-24 w-72 border border-signal/25" />
        </ParallaxLayer>

        <ParallaxLayer speed={0.08} className="pointer-events-none absolute inset-0">
          <div className="hero-horizon" />
          <div className="absolute right-[6%] top-[18%] font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            lat 38.89 · lon -77.03
          </div>
        </ParallaxLayer>

        <div className="page-shell relative z-10 grid min-h-[92vh] content-center gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">U.S. immigration atlas</p>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(3.4rem,9vw,6.8rem)]">
              {siteConfig.name}
            </h1>
            <span className="signal-line mt-6 max-w-xs" />
            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              Find the clearest path into the United States — compare visas,
              fees, timelines, and risks before you file anything.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#find-path" className="btn btn-signal">
                Open path finder
              </Link>
              <Link href="#popular" className="btn btn-secondary">
                Browse guides
              </Link>
            </div>
          </div>

          <div className="border border-ink bg-ink p-6 text-[#f3f5f7] sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8b93a0]">
              Orientation
            </p>
            <p className="mt-4 font-display text-3xl leading-none tracking-tight">
              Three checks before forms.
            </p>
            <ol className="mt-6 space-y-4 text-sm text-[#c5cbd4]">
              <li className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-signal">01</span>
                <span>Goal: study, work, family, invest, or protection?</span>
              </li>
              <li className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-signal">02</span>
                <span>Do you already have a school, employer, or treaty investment?</span>
              </li>
              <li className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-signal">03</span>
                <span>Need temporary status now, residence later, or both in sequence?</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className="border-b border-line bg-surface">
        <div className="page-shell flex flex-wrap items-center gap-x-2 gap-y-2 py-4">
          <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Live guides
          </span>
          {[
            ["H-1B", "/visas/work/h1b"],
            ["F-1", "/visas/study/f1"],
            ["OPT", "/visas/study/f1-opt"],
            ["L-1", "/visas/work/l1"],
            ["TN", "/visas/work/tn"],
            ["E-2", "/visas/work/e2"],
            ["R-1", "/visas/work/r1"],
            ["H-2A", "/visas/work/h2a"],
            ["H-2B", "/visas/work/h2b"],
            ["M-1", "/visas/study/m1"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="border border-line bg-bg px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <section className="border-b border-line">
        <div className="page-shell grid gap-6 py-8 sm:grid-cols-3">
          {[
            ["10", "deep guides live"],
            ["7", "pathway categories"],
            ["Official", "source links on every page"],
          ].map(([stat, label], i) => (
            <Reveal key={label} delayMs={i * 80}>
              <p className="font-display text-4xl tracking-tight">{stat}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="find-path" className="page-shell py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">Path finder</p>
          <h2 className="mt-4 section-title max-w-3xl">
            Start with who you are — not with form codes
          </h2>
          <p className="mt-5 lede">
            Choose a lane. Each route opens researched guides with eligibility,
            denial patterns, documents, and timelines.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((item, i) => (
            <Reveal key={item.label} delayMs={i * 60}>
              <Link
                href={item.href}
                className="group block border border-line bg-surface p-6 transition-colors hover:border-ink hover:bg-bg"
              >
                <p className="font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-3xl tracking-tight group-hover:text-signal transition-colors">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
                <p className="mt-6 text-sm font-semibold">Enter lane →</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <p className="eyebrow mb-5">All categories</p>
          <ul className="grid gap-0 border border-line">
            {categories.map((category) => (
              <li key={category.id} className="border-b border-line last:border-b-0">
                <Link
                  href={`/visas/${category.slug}`}
                  className="grid gap-2 px-5 py-5 transition-colors hover:bg-surface sm:grid-cols-[minmax(0,14rem)_1fr_auto] sm:items-center"
                >
                  <span className="font-semibold">{category.label}</span>
                  <span className="text-sm text-muted">{category.description}</span>
                  <span className="font-mono text-xs text-sea">OPEN</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="popular" className="border-y border-line bg-surface">
        <div className="page-shell py-20 lg:py-28">
          <Reveal>
            <p className="eyebrow">Featured guides</p>
            <h2 className="mt-4 section-title">Popular visas, mapped in depth</h2>
          </Reveal>

          <ul className="mt-10 grid gap-4 lg:grid-cols-2">
            {featured.map((visa, i) => (
              <Reveal key={visa.id} delayMs={i * 70}>
                <li>
                  <Link
                    href={`/visas/${categorySlugById[visa.category]}/${visa.id}`}
                    className="block h-full border border-line bg-bg p-6 transition-transform hover:-translate-y-1 hover:border-ink"
                  >
                    <div className="flex flex-wrap gap-2">
                      <span className="tag tag-ink">{visa.code}</span>
                      <span className="tag">Updated {visa.timelineUpdatedDate}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl tracking-tight">
                      {visa.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {visa.quickAnswer}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-signal">
                      Open full guide →
                    </p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="journeys" className="page-shell py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">Sequences</p>
          <h2 className="mt-4 section-title">How people actually move</h2>
          <p className="mt-5 lede">
            Immigration is rarely one form. These journeys show common sequences.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 lg:grid-cols-2">
          {journeys.map((journey, i) => (
            <Reveal key={journey.title} delayMs={i * 70}>
              <li className="atlas-rail border border-line bg-surface p-6">
                <p className="font-mono text-[11px] text-signal">{journey.code}</p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {journey.title}
                </h3>
                <p className="mt-3 text-muted">{journey.body}</p>
                <Link
                  href={journey.href}
                  className="mt-5 inline-flex text-sm font-semibold hover:text-signal"
                >
                  Start journey →
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-line">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <p className="eyebrow">Why {siteConfig.name}</p>
            <h2 className="mt-4 section-title">Trust you can inspect</h2>
            <ul className="mt-8 space-y-5 text-muted">
              <li>
                <strong className="text-ink">Reviewed dates on every guide</strong>
                <span className="mt-1 block text-sm">
                  Timing notes and editorial checks stay visible.
                </span>
              </li>
              <li>
                <strong className="text-ink">Official sources linked</strong>
                <span className="mt-1 block text-sm">
                  USCIS and government references sit at the end of each page.
                </span>
              </li>
              <li>
                <strong className="text-ink">No fake certainty</strong>
                <span className="mt-1 block text-sm">
                  When fees or waits move, we say so instead of inventing precision.
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="border border-ink bg-ink p-6 text-[#f3f5f7] sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8b93a0]">
                Recently reviewed
              </p>
              <ul className="mt-5 space-y-4">
                {latest.slice(0, 5).map((visa) => (
                  <li
                    key={visa.id}
                    className="flex items-start justify-between gap-4 border-b border-[#2a303a] pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <Link
                        href={`/visas/${categorySlugById[visa.category]}/${visa.id}`}
                        className="font-semibold hover:text-signal"
                      >
                        {visa.code}
                      </Link>
                      <p className="mt-1 text-sm text-[#9aa3b0]">{visa.name}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-[#8b93a0]">
                      {visa.lastReviewedDate}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">Frequently searched</p>
          <h2 className="mt-4 section-title">Jump the map</h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            ["H-1B", "/visas/work/h1b"],
            ["F-1", "/visas/study/f1"],
            ["OPT", "/visas/study/f1-opt"],
            ["TN", "/visas/work/tn"],
            ["L-1", "/visas/work/l1"],
            ["E-2", "/visas/work/e2"],
            ["H-2A", "/visas/work/h2a"],
            ["H-2B", "/visas/work/h2b"],
            ["R-1", "/visas/work/r1"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-ink bg-ink text-white">
        <div className="page-shell flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl tracking-tight text-white">
              Still unsure which path fits?
            </h2>
            <p className="mt-4 text-[#b7bec8]">
              Use the finder, compare two related guides, then verify the official
              source before spending money on filings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#find-path" className="btn btn-signal">
              Find path
            </Link>
            <Link
              href="/contact"
              className="btn border border-white/30 bg-transparent text-white hover:bg-white hover:text-ink"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}

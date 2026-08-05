import Link from "next/link";
import { sections } from "@/lib/contentMap";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";
import HomeShell from "@/components/HomeShell";
import MoneyRain from "@/components/MoneyRain";

/*
  The homepage previously inherited the root layout's metadata, which meant its
  title was just the brand name — no statement of what the site is for, and
  nothing for a query to match on. It now declares its own.
*/
export const metadata = buildPageMetadata({
  title: `${siteConfig.name} — US Visa Guides, Taxes & Free Calculators`,
  description: siteConfig.description,
  path: "/",
});

/* Small arrow used across index rows */
function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* The reader's starting points, framed as a table of contents */
const startHere = [
  { no: "01", label: "Choosing a visa", meta: "Requirements · fees · timelines", href: "/visas" },
  { no: "02", label: "H-1B / Work visa", meta: "Taxes · 401(k) · investing", href: "/visa-guides/h1b" },
  { no: "03", label: "F-1 / Student", meta: "Banking · OPT taxes", href: "/visa-guides/f1" },
  { no: "04", label: "New green card", meta: "Credit · mortgages", href: "/visa-guides" },
  { no: "05", label: "Sending money home", meta: "Fees · FX · transfers", href: "/send-money" },
  { no: "06", label: "Taxes & residency", meta: "FBAR · FATCA · filing", href: "/taxes" },
];

const featuredCalcs = [
  {
    title: "Remittance fee calculator",
    href: "/calculators/remittance",
    description: "Compare fees and exchange rates across transfer services before you send money home.",
  },
  {
    title: "H-1B tax estimator",
    href: "/calculators/h1b-tax",
    description: "Estimate federal, state, and FICA taxes so you can plan your real take-home pay.",
  },
  {
    title: "Substantial presence test",
    href: "/calculators/substantial-presence",
    description: "Run the IRS day-count formula to see whether you count as a U.S. tax resident.",
  },
];

const latest = [
  {
    kicker: "Visa library",
    title: "H-1B visa requirements, fees and timeline",
    href: "/visas/work/h1b",
    excerpt:
      "Who qualifies as a specialty occupation, how the cap and lottery work, and what the petition costs.",
  },
  {
    kicker: "Visa library",
    title: "F-1 student visa, start to finish",
    href: "/visas/study/f1",
    excerpt:
      "Eligibility, documents, the interview, and what your status does and does not allow.",
  },
  {
    kicker: "Taxes",
    title: "H-1B taxes explained",
    href: "/taxes/h1b",
    excerpt:
      "Withholding, FICA, state income tax, and why identical offers differ by thousands.",
  },
  {
    kicker: "Banking",
    title: "How to build U.S. credit as an immigrant",
    href: "/banking/build-credit",
    excerpt:
      "A practical path from no credit history at all to a score you can use.",
  },
];

/*
  Section cards for the library grid. The visa library lives under /visas rather
  than in contentMap's `sections`, so it is prepended explicitly — it is the
  site's largest content cluster and needs a homepage link, not just a nav item.
*/
const pillars = [
  {
    id: "visas",
    href: "/visas",
    label: "Visas & Immigration",
    description:
      "Requirements, process, fees, and timelines for US work, student, and family visa categories.",
    count: "10 guides",
  },
  ...sections
    .filter((s) => s.id !== "calculators")
    .map((s) => ({
      id: s.id,
      href: s.href,
      label: s.label,
      description: s.description,
      count: `${s.links.length} guides`,
    })),
];

export default function HomePage() {
  return (
    <HomeShell>
      {/* ══════════════════════════════════════════════ */}
      {/* MASTHEAD                                        */}
      {/* ══════════════════════════════════════════════ */}
      <section className="border-b border-line">
        <div className="page-shell grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Thesis */}
          <div className="flex flex-col">
            <p className="eyebrow load-in" style={{ animationDelay: "0ms" }}>
              A field guide for new arrivals
            </p>

            <h1 className="load-in mt-6 max-w-[15ch] text-ink" style={{ animationDelay: "80ms" }}>
              Settling in America,{" "}
              <span className="text-accent">made clear.</span>
            </h1>

            <p
              className="load-in mt-7 max-w-[46ch] text-[1.075rem] leading-[1.6] text-muted"
              style={{ animationDelay: "160ms" }}
            >
              Plain-English visa guides, tax explainers, and free calculators for
              people moving to the United States — from working out which visa
              you need to understanding your first payslip. No sign-up, no sales
              pitch.
            </p>

            <div className="load-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <Link href="/visas" className="btn">
                Explore US visa types
                <Arrow />
              </Link>
              <Link href="/calculators" className="btn btn-ghost">
                Free calculators
              </Link>
            </div>

            <p className="load-in mono-label mt-auto pt-12" style={{ animationDelay: "320ms" }}>
              Free to use · No account · For H-1B, F-1 &amp; green-card holders
            </p>
          </div>

          {/* Signature: the index */}
          <div className="load-in lg:border-l lg:border-line lg:pl-16" style={{ animationDelay: "200ms" }}>
            <div className="flex items-baseline justify-between">
              <p className="mono-label">Start here</p>
              <p className="mono-label">Pick where you are</p>
            </div>

            <nav className="index-list mt-5" aria-label="Choose your situation">
              {startHere.map((item) => (
                <Link key={item.no} href={item.href} className="index-row group">
                  <span className="index-num">{item.no}</span>
                  <span className="min-w-0">
                    <span className="block font-heading text-[1.28rem] font-semibold leading-tight text-ink transition-colors group-hover:text-accent">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-mono text-[0.72rem] text-muted">
                      {item.meta}
                    </span>
                  </span>
                  <Arrow className="index-arrow" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* § 01 — TOOLS  (subtle money rain)               */}
      {/* ══════════════════════════════════════════════ */}
      <section className="page-shell section relative isolate">
        <MoneyRain soft />
        <div className="relative z-10">
          <div className="section-marker reveal">
            <span>§&nbsp;01 — The tools</span>
          </div>

          <div className="reveal mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-[18ch] text-ink">
              Calculators built for immigrant money decisions
            </h2>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-1.5 self-start font-mono text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent transition-colors hover:text-ink md:self-end"
            >
              All calculators <Arrow className="h-4 w-4" />
            </Link>
          </div>

          <ul className="bento stagger-children mt-10 grid-cols-1 md:grid-cols-3">
            {featuredCalcs.map((item, i) => (
              <li key={item.href} className="list-none">
                <Link href={item.href} className="cell h-full">
                  <div className="flex items-center justify-between">
                    <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="status-pill status-live">Live</span>
                  </div>
                  <div>
                    <h3 className="text-ink">{item.title}</h3>
                    <p className="muted mt-2.5 text-[0.95rem]">{item.description}</p>
                  </div>
                  <span className="btn-link">
                    Open calculator <Arrow className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* § 02 — THE LIBRARY                              */}
      {/* ══════════════════════════════════════════════ */}
      <section className="border-y border-line">
        <div className="page-shell section">
          <div className="section-marker reveal">
            <span>§&nbsp;02 — The library</span>
          </div>

          <h2 className="reveal mt-8 max-w-[18ch] text-ink">
            Everything, sorted the way a newcomer actually needs it
          </h2>
          <p className="reveal muted mt-4 max-w-2xl text-[0.98rem]">
            Start with the visa that applies to you, then work through the money
            side — accounts, taxes, credit, and transfers home.
          </p>

          <ul className="bento stagger-children mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <li key={pillar.id} className="list-none">
                <Link href={pillar.href} className="cell h-full">
                  <div className="flex items-center justify-between">
                    <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mono-label">{pillar.count}</span>
                  </div>
                  <div>
                    <h3 className="text-ink">{pillar.label}</h3>
                    <p className="muted mt-2.5 text-[0.95rem]">{pillar.description}</p>
                  </div>
                  <span className="btn-link">
                    Explore <Arrow className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* § 03 — LATEST                                   */}
      {/* ══════════════════════════════════════════════ */}
      <section className="page-shell section">
        <div className="section-marker reveal">
          <span>§&nbsp;03 — Latest guides</span>
        </div>

        <div className="stagger-children mt-8 border-t border-line">
          {latest.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              className="group grid grid-cols-[2.75rem_1fr_auto] items-start gap-4 border-b border-line py-6 pl-1 pr-2 transition-[background-color,padding-left] duration-200 hover:bg-soft hover:pl-3"
            >
              <span className="index-num pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="eyebrow">{post.kicker}</span>
                <span className="mt-1.5 block max-w-[42ch] font-heading text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </span>
                <span className="mt-2 block max-w-[52ch] text-[0.95rem] leading-relaxed text-muted">
                  {post.excerpt}
                </span>
              </span>
              <Arrow className="mt-1.5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* COLOPHON / CTA  (money rain, evergreen band)    */}
      {/* ══════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-accent">
        <MoneyRain />
        {/* Scrim: darkens the center where the text sits, so white copy stays
            legible over the rain, while bills still show at the edges. */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 68% 78% at 50% 50%, rgba(11,24,18,0.66), rgba(11,24,18,0.28) 58%, transparent 82%)",
          }}
        />
        <div className="page-shell section relative z-10 text-center text-white">
          <p className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.7)" }}>
            The colophon
          </p>
          <h2
            className="reveal mx-auto mt-5 max-w-[20ch] text-white"
            style={{ textShadow: "0 1px 12px rgba(11,24,18,0.45)" }}
          >
            Built by immigrants, for immigrants
          </h2>
          <p
            className="reveal mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/85"
            style={{ textShadow: "0 1px 10px rgba(11,24,18,0.4)" }}
          >
            Clear money systems instead of generic advice. Start building your
            financial footing in the U.S. today — everything here stays free.
          </p>
          <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/visas" className="btn btn-on-dark">
              Find your visa
              <Arrow />
            </Link>
            <Link href="/banking/build-credit" className="btn btn-hero-secondary">
              Start building credit
            </Link>
          </div>
        </div>
      </section>
    </HomeShell>
  );
}

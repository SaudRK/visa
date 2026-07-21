import Link from "next/link";
import { sections } from "@/lib/contentMap";
import HomeShell from "@/components/HomeShell";
import MoneyRain from "@/components/MoneyRain";

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
  { no: "01", label: "H-1B / Work visa", meta: "Taxes · 401(k) · investing", href: "/visa-guides/h1b" },
  { no: "02", label: "F-1 / Student", meta: "Banking · OPT taxes", href: "/visa-guides/f1" },
  { no: "03", label: "New green card", meta: "Credit · mortgages", href: "/visa-guides" },
  { no: "04", label: "Sending money home", meta: "Fees · FX · transfers", href: "/send-money" },
  { no: "05", label: "Living abroad", meta: "FBAR · FATCA · filing", href: "/taxes" },
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
    kicker: "Visa guide",
    title: "The complete financial guide for H-1B holders",
    href: "/visa-guides/h1b",
    excerpt: "Set up banking, retirement, and taxes in your first year on an H-1B.",
  },
  {
    kicker: "Visa guide",
    title: "The complete financial guide for F-1 students",
    href: "/visa-guides/f1",
    excerpt: "OPT income taxes, student banking, and money basics from day one.",
  },
  {
    kicker: "Banking",
    title: "How to build U.S. credit as an immigrant",
    href: "/banking/build-credit",
    excerpt: "A practical path from no credit history at all to a score you can use.",
  },
];

const pillars = sections.filter((s) => s.id !== "calculators");

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
              A field guide for new Americans
            </p>

            <h1 className="load-in mt-6 max-w-[14ch] text-ink" style={{ animationDelay: "80ms" }}>
              American money,{" "}
              <span className="text-accent">made clear.</span>
            </h1>

            <p
              className="load-in mt-7 max-w-[44ch] text-[1.075rem] leading-[1.6] text-muted"
              style={{ animationDelay: "160ms" }}
            >
              Plain-English guides and free calculators for immigrants finding
              their footing in the U.S. — banking, taxes, investing, and sending
              money home. No sign-up, no sales pitch.
            </p>

            <div className="load-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <Link href="/visa-guides" className="btn">
                Browse the guides
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

          <h2 className="reveal mt-8 max-w-[16ch] text-ink">
            Everything, sorted the way a newcomer actually needs it
          </h2>

          <ul className="bento stagger-children mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <li key={pillar.id} className="list-none">
                <Link href={pillar.href} className="cell h-full">
                  <div className="flex items-center justify-between">
                    <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mono-label">{pillar.links.length} guides</span>
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
            <Link href="/visa-guides" className="btn btn-on-dark">
              Find your visa guide
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

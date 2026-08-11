import Image from "next/image";
import Link from "next/link";
import { sections } from "@/lib/contentMap";
import { getVisas } from "@/lib/getVisas";
import { getCategoriesWithVisas } from "@/lib/getCategories";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";
import HomeShell from "@/components/HomeShell";
/*
  Statically imported, not read from /public. The import gives Next the
  intrinsic dimensions at build time — so the panel reserves the right height
  and the hero cannot shift as the photograph arrives — and the file is served
  from a content-hashed, immutably cached URL.
*/
import heroPortrait from "@/assets/guy-hero.png";

export const metadata = buildPageMetadata({
  title: `${siteConfig.name} — US Visa Guides, Taxes & Free Calculators`,
  description: siteConfig.description,
  path: "/",
});

/*
  ─────────────────────────────────────────────────────────────────────────────
  HOMEPAGE

  Six sections, five distinct rhythms. That is the point of the composition.

  The previous homepage ran three consecutive panel grids with identical
  geometry — same columns, same padding, same hover — which is what makes a page
  read as generated even when the content is good. Here each section is shaped
  by what it actually contains:

    Masthead   thesis and portrait — type on the left, the photograph on the
               right, with a strip of computed figures crossing the lower edge
    Start here dense ruled index, full width, the site's spine
    § 01 Tools open divided columns, no boxes at all
    § 02 Library asymmetric — the visa cluster is 10 guides, so it gets the
               feature panel and the rest are compact
    § 03 Latest editorial rows, kicker over serif headline
    Colophon   a dark statement page, type only

  Removed: the scroll-driven airplane and the falling-money field. Both were
  decorative motifs fighting the ruled-document language, and the money layers
  alone were ~550KB of PNG behind the site's most important text.
  ─────────────────────────────────────────────────────────────────────────────
*/

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

/* The reader's starting points, framed as a table of contents. */
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
    description:
      "Compare fees and exchange rates across transfer services before you send money home.",
  },
  {
    title: "H-1B tax estimator",
    href: "/calculators/h1b-tax",
    description:
      "Estimate federal, state, and FICA taxes so you can plan your real take-home pay.",
  },
  {
    title: "Substantial presence test",
    href: "/calculators/substantial-presence",
    description:
      "Run the IRS day-count formula to see whether you count as a U.S. tax resident.",
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

export default function HomePage() {
  // Counts are derived, not typed in, so the page cannot drift from the library.
  const visaCount = getVisas().length;
  const categories = getCategoriesWithVisas();
  const liveToolCount = sections
    .find((s) => s.id === "calculators")!
    .links.filter((l) => l.status === "live").length;

  /*
    The stat strip. The reference runs a row of client logos under its hero; we
    have no clients and will not invent any, so the strip carries the four
    figures that are actually true of the library and are all computed above.
  */
  const figures = [
    { value: String(visaCount), label: "Visa guides" },
    { value: String(liveToolCount), label: "Free calculators" },
    { value: String(sections.length), label: "Money sections" },
    { value: "6 mo", label: "Review cycle" },
  ];

  const pillars = [
    {
      id: "visas",
      href: "/visas",
      label: "Visas & Immigration",
      description:
        "Requirements, process, fees, and timelines for US work, student, and family visa categories.",
      count: `${visaCount} guides`,
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

  return (
    <HomeShell>
      {/* ════════════════ HERO — thesis + portrait ════════════════ */}
      <section className="atlas-grid relative">
        {/*
          pb-40 rather than pb-28. The figure strip below is pulled up by half
          its own height, and below 640px it wraps to two rows — roughly 220px,
          so half of it consumed almost the whole 112px of padding and the strip
          came to rest 3px off the portrait. The larger value clears it at every
          width; the strip is one row from sm up, where the surplus is welcome.
        */}
        <div className="page-wide grid gap-14 pt-14 pb-40 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-24 lg:pb-36">
          <div className="flex flex-col">
            <p className="eyebrow load-in">A field guide for new arrivals</p>

            <h1
              className="display-xl load-in mt-5 max-w-[14ch] text-ink"
              style={{ animationDelay: "70ms" }}
            >
              Settling in America,{" "}
              <span className="text-accent">made clear.</span>
            </h1>

            <p className="lede load-in mt-7" style={{ animationDelay: "140ms" }}>
              Plain-English visa guides, tax explainers, and free calculators for
              people moving to the United States — from working out which visa
              you need to understanding your first payslip. No sign-up, no sales
              pitch.
            </p>

            <div
              className="load-in mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "210ms" }}
            >
              <Link href="/visas" className="btn">
                Explore US visa types
                <Arrow />
              </Link>
              <Link href="/calculators" className="btn btn-ghost">
                Free calculators
              </Link>
            </div>

            <p
              className="load-in mt-9 text-[0.9rem] text-muted"
              style={{ animationDelay: "280ms" }}
            >
              Written for H-1B workers, F-1 students, and new green-card holders.
              Every guide carries the date it was last reviewed.
            </p>
          </div>

          {/*
            Focal visual. The reference direction is photography-led, and this
            is the photograph the project has: a person holding the two objects
            the entire site is about. It stands where the six-system card stack
            used to — that stack was a second set of navigation sitting beside
            the navigation, and every link it carried still appears further down
            this page in the library rail, so nothing was lost by removing it.

            Deliberately uncaptioned. The image is illustrative; it is not a
            customer, a testimonial, or a case study, and labelling it as any of
            those would be inventing a claim the project cannot support.
          */}
          <div className="load-in" style={{ animationDelay: "180ms" }}>
            <div className="portrait">
              <div className="portrait-subject">
                <Image
                  src={heroPortrait}
                  alt="A man holding a paper cut-out of the United States in the flag's stars and stripes, and a passport with travel documents tucked inside."
                  preload
                />
              </div>
            </div>
          </div>
        </div>

        {/*
          Figure strip, overlapping the hero's lower edge. Takes the reference's
          "credibility row under the hero" slot, but with computed figures
          instead of borrowed logos.
        */}
        <div className="page-wide absolute inset-x-0 bottom-0 translate-y-1/2">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line shadow-[var(--lift)] sm:grid-cols-4">
            {figures.map((f) => (
              <div
                key={f.label}
                className="bg-surface px-5 py-5 text-center sm:px-6"
              >
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="figure-xl block text-accent">{f.value}</span>
                  <span className="mono-label mt-1.5 block">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ════════════════ ORIENTATION — 2-col editorial + feature panel ════════════════ */}
      {/*
        No `.section` class here, and that is the point. `.section` sets
        `padding-block: 3.5rem`, and being unlayered it outranks Tailwind's
        padding utilities — so the `pt-28 md:pt-32` this element used to carry
        never applied at any width. The real gap was 56px throughout, which the
        figure strip's lower half (~55px, or ~110px once it wraps to two rows)
        ate entirely: it cleared the heading below by a single pixel on desktop
        and sat on top of it under 640px. Padding is stated in utilities alone
        here so the values are the ones that actually render.
      */}
      <section className="pt-44 pb-14 sm:pt-28 md:pt-32">
        <div className="page-wide grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <div className="reveal">
            <p className="eyebrow">Where to start</p>
            <h2 className="mt-5 max-w-[20ch] text-ink">
              Your status decides almost every money question you will ask
            </h2>
            <p className="muted mt-6 max-w-[52ch]">
              How you are taxed, which retirement accounts you can use, whether
              you can work a second job, what happens to your accounts if you
              leave — all of it follows from your visa. Generic personal-finance
              advice skips every one of those.
            </p>
            <p className="muted mt-4 max-w-[52ch]">
              So the library is organised the way your situation actually is.
              Find where you are below, or start from the visa itself.
            </p>
            <Link href="/visas" className="btn btn-ghost mt-8">
              Browse the visa library
              <Arrow className="h-4 w-4" />
            </Link>
          </div>

          {/* The index, as a raised feature panel with a stacked edge. */}
          <div className="reveal paper-stack rounded-[var(--radius-lg)]">
            <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--lift-sm)] sm:p-7">
              <p className="eyebrow">Start here</p>
              <nav
                className="index-list mt-4"
                aria-label="Choose your situation"
              >
                {startHere.map((item) => (
                  <Link
                    key={item.no}
                    href={item.href}
                    className="index-row group"
                  >
                    <span className="index-num">{item.no}</span>
                    <span className="min-w-0">
                      <span className="block font-display text-[1.08rem] leading-tight text-ink transition-colors group-hover:text-accent">
                        {item.label}
                      </span>
                      <span className="mono-label mt-0.5 block truncate">
                        {item.meta}
                      </span>
                    </span>
                    <Arrow className="index-arrow h-4 w-4" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ THE TOOLS — centred head + card row ════════════════ */}
      <section className="band-tint">
        <div className="page-wide section">
          <div className="section-head reveal">
            <p className="eyebrow">The tools</p>
            <h2 className="mt-5 text-ink">
              Calculators built for immigrant money decisions
            </h2>
            <p className="lede mt-5">
              Most financial calculators assume you have always lived here.
              These do not. All three run entirely in your browser — nothing you
              type is sent anywhere.
            </p>
          </div>

          <ul className="bento stagger-children mt-14 md:grid-cols-3">
            {featuredCalcs.map((item) => (
              <li key={item.href} className="list-none">
                <Link href={item.href} className="cell group h-full">
                  <div className="flex items-start justify-between gap-3">
                    <span className="status-pill status-live">Live</span>
                    <span className="tile-badge !static !h-8 !w-8 shrink-0">
                      <Arrow className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-ink transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="muted mt-2.5 text-[0.95rem]">
                      {item.description}
                    </p>
                  </div>
                  <span className="btn-link">Open calculator</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════ THE LIBRARY — asymmetric three-part ════════════════ */}
      <section className="page-wide section">
        <div className="section-head reveal">
          <p className="eyebrow">The library</p>
          <h2 className="mt-5 text-ink">
            Everything, sorted the way a newcomer actually needs it
          </h2>
        </div>

        {/*
          The reference's strongest composition: a list rail, a feature block,
          and a deep panel of figures, in one asymmetric row. Adapted here as
          money sections / the visa cluster / provenance — three different kinds
          of object at three different weights, rather than seven equal cards
          implying that everything matters the same amount.
        */}
        <div className="stagger-children mt-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr_0.75fr] lg:gap-6">
          {/* Rail: the money sections */}
          <div className="index-list">
            {pillars.slice(1).map((pillar, i) => (
              <Link key={pillar.id} href={pillar.href} className="index-row group">
                <span className="index-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[1.02rem] leading-tight text-ink transition-colors group-hover:text-accent">
                    {pillar.label}
                  </span>
                  <span className="mono-label mt-0.5 block">
                    {pillar.count}
                  </span>
                </span>
                <Arrow className="index-arrow h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Feature: the visa cluster, the deepest content on the site */}
          <Link
            href={pillars[0].href}
            className="cell cell-feature cell-ink group"
          >
            <p className="eyebrow">Largest cluster</p>
            <div>
              <h3 className="text-[1.8rem] leading-[1.06] text-white sm:text-[2.2rem]">
                {pillars[0].label}
              </h3>
              <p className="mt-4 max-w-[38ch] text-[0.98rem] leading-relaxed text-white/65">
                {pillars[0].description}
              </p>
            </div>
            <span className="btn-link !text-white">
              Browse {visaCount} guides
              <Arrow className="h-4 w-4" />
            </span>
          </Link>

          {/* Provenance: why the library can be trusted, in figures */}
          <div className="cell cell-soft justify-start gap-0">
            <p className="eyebrow">How it is kept</p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="mono-label">Sources</dt>
                <dd className="mt-1 text-[0.92rem] leading-snug text-ink">
                  Every guide links the USCIS or IRS page it came from
                </dd>
              </div>
              <div>
                <dt className="mono-label">Dated</dt>
                <dd className="mt-1 text-[0.92rem] leading-snug text-ink">
                  Each page shows when it was last reviewed
                </dd>
              </div>
              <div>
                <dt className="mono-label">Independent</dt>
                <dd className="mt-1 text-[0.92rem] leading-snug text-ink">
                  Not affiliated with any government agency
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ════════════════ CATEGORY DISCOVERY — tiles ════════════════ */}
      <section className="band-deep">
        <div className="page-wide section">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div className="reveal">
              <p className="eyebrow">Choose your category</p>
              <h2 className="mt-5 max-w-[18ch] text-ink">
                Start from the visa that applies to you
              </h2>
              <p className="muted mt-6 max-w-[46ch]">
                Each category collects the statuses that work the same way, with
                eligibility, filing steps, fees, and timelines for every one.
              </p>
              <Link href="/visas" className="btn btn-primary mt-8">
                All visa types
                <Arrow className="h-4 w-4" />
              </Link>
            </div>

            {/*
              Tiles for the categories that actually have content. Driven off
              getCategoriesWithVisas(), so a category appears here the moment its
              first guide lands and never before.
            */}
            <ul className="stagger-children grid gap-5 sm:grid-cols-2">
              {categories.map(({ category, visas }) => (
                <li key={category.id} className="list-none">
                  <Link
                    href={`/visas/${category.slug}`}
                    className="tile group block h-full bg-surface"
                  >
                    <span className="tile-badge">
                      <Arrow className="h-4 w-4" />
                    </span>
                    <span className="figure-xl block text-accent">
                      {String(visas.length).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 max-w-[16ch] text-ink transition-colors group-hover:text-accent">
                      {category.label}
                    </h3>
                    <p className="muted mt-2 text-[0.9rem] leading-snug">
                      {visas.map((v) => v.code).join(" · ")}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════ LATEST — editorial rows ════════════════ */}
      <section className="page-wide section">
        <div className="section-marker reveal">
          <span>Latest guides</span>
        </div>

        <div className="stagger-children mt-8">
          {latest.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 rounded-[var(--radius)] border-b border-line px-3 py-6 transition-colors duration-200 last:border-b-0 hover:bg-sage-tint"
            >
              <span className="index-num pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="eyebrow">{post.kicker}</span>
                <span className="mt-2 block max-w-[44ch] font-display text-[1.5rem] leading-[1.14] tracking-[-0.026em] text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </span>
                <span className="muted mt-2 block max-w-[56ch] text-[0.95rem]">
                  {post.excerpt}
                </span>
              </span>
              <Arrow className="mt-2 shrink-0 text-line-strong transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════ COLOPHON — full-bleed forest, type only ════════════════ */}
      <section className="page-wide pb-4">
        <div className="band-dark rounded-[var(--radius-xl)] px-6 py-14 sm:px-12 md:py-20">
          <div className="section-head">
            <p className="eyebrow">The colophon</p>
            <h2 className="mt-5 text-white">
              Built by immigrants, for immigrants
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[1.04rem] leading-relaxed text-white/65">
              Clear money systems instead of generic advice. Everything here
              stays free, carries the date it was last reviewed, and links to the
              government source it came from.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/visas" className="btn btn-on-dark">
                Find your visa
                <Arrow />
              </Link>
              <Link
                href="/banking/build-credit"
                className="btn btn-hero-secondary"
              >
                Start building credit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HomeShell>
  );
}

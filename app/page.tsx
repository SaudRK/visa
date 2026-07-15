import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { sections } from "@/lib/contentMap";

const audience = [
  {
    label: "H-1B / Work Visa",
    href: "/visa-guides/h1b",
    detail: "Taxes, 401(k), investing on a work visa",
    code: "01",
    span: "md:col-span-2",
  },
  {
    label: "F-1 / Student",
    href: "/visa-guides/f1",
    detail: "Banking, OPT income, first-year taxes",
    code: "02",
    span: "",
  },
  {
    label: "Green Card",
    href: "/visa-guides",
    detail: "Credit, mortgages, long-term plans",
    code: "03",
    span: "",
  },
  {
    label: "Send Money",
    href: "/send-money",
    detail: "Fees, FX, transfer apps",
    code: "04",
    span: "",
  },
  {
    label: "Expat Abroad",
    href: "/taxes",
    detail: "FBAR, FATCA, foreign income",
    code: "05",
    span: "md:col-span-2",
  },
];

const featuredCalcs = [
  {
    title: "Remittance fees",
    href: "/calculators/remittance",
    description: "Fee + FX cost before you send.",
    code: "CALC/01",
  },
  {
    title: "H-1B tax estimate",
    href: "/calculators/h1b-tax",
    description: "Federal, state, FICA, take-home.",
    code: "CALC/02",
  },
  {
    title: "Presence test",
    href: "/calculators/substantial-presence",
    description: "IRS day-count for tax residency.",
    code: "CALC/03",
  },
];

const latest = [
  {
    title: "H-1B financial guide",
    href: "/visa-guides/h1b",
    excerpt: "Year-one banking, taxes, retirement.",
  },
  {
    title: "F-1 financial guide",
    href: "/visa-guides/f1",
    excerpt: "Student banking, OPT taxes, remittances.",
  },
  {
    title: "Build U.S. credit",
    href: "/banking/build-credit",
    excerpt: "From zero history to usable score.",
  },
];

const pillars = sections.filter((s) => s.id !== "calculators");

export default function HomePage() {
  return (
    <div className="page-shell section space-y-10">
      {/* Hero bento */}
      <section className="bento grid-cols-1 md:grid-cols-6" aria-label="Hero">
        <div className="cell cell-ink md:col-span-4 min-h-[280px] md:min-h-[340px]">
          <div>
            <p className="mono-label !text-white/50">{siteConfig.name}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              {siteConfig.tagline}
            </h1>
            <div className="mt-5 h-1 w-16 bg-accent" />
          </div>
          <p className="max-w-lg text-base leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators" className="btn btn-on-dark">
              Open calculators
            </Link>
            <Link
              href="#audience"
              className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-ink"
            >
              Find your path
            </Link>
          </div>
        </div>
        <div className="cell cell-accent md:col-span-2 flex flex-col justify-between">
          <p className="mono-label !text-white/80">Signal</p>
          <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built for newcomers — not generic finance.
          </p>
          <p className="mono-label !text-white/80">{siteConfig.trustLine}</p>
        </div>
        <div className="cell cell-soft md:col-span-2">
          <p className="mono-label">Live tools</p>
          <p className="text-5xl font-bold tracking-tight">03</p>
          <p className="muted text-sm">Calculators ready</p>
        </div>
        <div className="cell md:col-span-2">
          <p className="mono-label">Guides</p>
          <p className="text-5xl font-bold tracking-tight">06+</p>
          <p className="muted text-sm">Foundation pages live</p>
        </div>
        <div className="cell md:col-span-2">
          <p className="mono-label">Pillars</p>
          <p className="text-5xl font-bold tracking-tight">07</p>
          <p className="muted text-sm">Money topics mapped</p>
        </div>
      </section>

      {/* Audience bento */}
      <section id="audience">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Index / audience</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              What best describes you?
            </h2>
          </div>
        </div>
        <div className="bento grid-cols-1 md:grid-cols-3">
          {audience.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`cell ${item.span}`}
            >
              <p className="mono-label">{item.code}</p>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{item.label}</h3>
                <p className="muted mt-2 text-sm">{item.detail}</p>
              </div>
              <span className="btn-link">
                Enter <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculators bento */}
      <section>
        <div className="mb-4">
          <p className="eyebrow">Tools</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Free calculators
          </h2>
        </div>
        <div className="bento grid-cols-1 md:grid-cols-3">
          {featuredCalcs.map((item) => (
            <Link key={item.href} href={item.href} className="cell">
              <p className="mono-label">{item.code}</p>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="muted mt-2 text-sm">{item.description}</p>
              </div>
              <span className="btn-link">
                Launch <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pillars bento */}
      <section>
        <div className="mb-4">
          <p className="eyebrow">Library</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Everything you need
          </h2>
        </div>
        <div className="bento grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Link key={pillar.id} href={pillar.href} className="cell">
              <p className="mono-label">
                {String(i + 1).padStart(2, "0")} / {pillar.label}
              </p>
              <p className="muted text-sm leading-relaxed">{pillar.description}</p>
              <span className="btn-link">
                Open <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest + CTA bento */}
      <section>
        <div className="mb-4">
          <p className="eyebrow">Reading</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Latest guides</h2>
        </div>
        <div className="bento grid-cols-1 md:grid-cols-6">
          {latest.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              className={`cell ${i === 0 ? "md:col-span-3" : "md:col-span-3 lg:col-span-3"}`}
            >
              <p className="mono-label">Guide</p>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{post.title}</h3>
                <p className="muted mt-2 text-sm">{post.excerpt}</p>
              </div>
              <span className="btn-link">
                Read <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
          <div className="cell cell-ink md:col-span-6">
            <p className="mono-label !text-white/50">Next</p>
            <p className="max-w-xl text-3xl font-bold tracking-tight text-white">
              Clear money systems for immigrants — no generic advice recycled.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-guides" className="btn btn-on-dark">
                Visa money guides
              </Link>
              <Link
                href="/banking/build-credit"
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-ink"
              >
                Build credit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const siteConfig = {
  /** Brand name — one word, capital U and S. Used in titles, schema, wordmark. */
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "SettleinUS",
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "settleinus.com",
  tagline: "Your practical guide to settling in the United States",
  /** Site-wide fallback meta description (kept under ~158 chars). */
  description:
    "Plain-English US visa guides, tax explainers, and free calculators for people moving to and settling in the United States. No sign-up required.",
  /** Short descriptor reused in schema.org and social profiles. */
  shortDescription:
    "US visa guides, settlement explainers, and free calculators for newcomers to the United States.",
  trustLine: "Built for H-1B workers, F-1 students, and new green card holders",
  /**
   * Social / knowledge-panel profiles for Organization.sameAs. Add a URL only
   * once the profile actually exists — a dead sameAs entry is a negative trust
   * signal. Intentionally empty until the accounts are claimed.
   */
  sameAs: [] as string[],
  /** Editorial review cadence surfaced on guides for transparency (E-E-A-T). */
  reviewCadence: "Reviewed and updated at least every six months",
  disclaimerText:
    "This site provides general educational information about US immigration and personal finance. It is not financial, tax, legal, or immigration advice. We are not a licensed financial advisor, tax preparer, CPA, attorney, or government agency, and we are not affiliated with USCIS, the IRS, the Department of State, or any U.S. government department. Rules, fees, and rates change. Verify details with official sources and qualified professionals before making decisions.",
  affiliateDisclosure:
    "Some pages may contain affiliate links. If you sign up for a product or service through our links, we may earn a commission at no extra cost to you. We only recommend products we believe can genuinely help readers. Learn more on our Affiliate Disclosure page.",
};

/** Public contact inbox — single source so pages and schema always agree. */
export const siteEmail = `hello@${siteConfig.domain}`;

/**
 * Absolute URL builder. Returns the bare origin (no trailing slash) for the
 * homepage so canonicals stay consistent with what Next.js renders.
 */
export function getSiteUrl(path = ""): string {
  const base = `https://${siteConfig.domain}`;
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Primary header navigation. Kept to six items so the desktop bar never wraps. */
export const navSections = [
  { href: "/visas", label: "Visas" },
  { href: "/banking", label: "Banking" },
  { href: "/taxes", label: "Taxes" },
  { href: "/send-money", label: "Send Money" },
  { href: "/investing", label: "Investing" },
  { href: "/calculators", label: "Calculators" },
] as const;

/**
 * Footer link columns. Deliberately broader than the header so every indexable
 * hub has at least one site-wide internal link pointing at it.
 */
export const footerColumns = [
  {
    id: "visas",
    heading: "Visas & immigration",
    links: [
      { href: "/visas", label: "All US visa types" },
      { href: "/visas/work", label: "Work visas" },
      { href: "/visas/study", label: "Student visas" },
      { href: "/visa-guides", label: "Visa money guides" },
    ],
  },
  {
    id: "money",
    heading: "Money & settling in",
    links: [
      { href: "/banking", label: "Banking & credit" },
      { href: "/taxes", label: "Taxes" },
      { href: "/send-money", label: "Sending money home" },
      { href: "/investing", label: "Investing" },
      { href: "/insurance", label: "Insurance" },
    ],
  },
  {
    id: "tools",
    heading: "Free calculators",
    links: [
      { href: "/calculators/h1b-tax", label: "H-1B tax calculator" },
      { href: "/calculators/remittance", label: "Remittance fee calculator" },
      {
        href: "/calculators/substantial-presence",
        label: "Substantial presence test",
      },
      { href: "/calculators", label: "All calculators" },
    ],
  },
  {
    id: "about",
    heading: "About",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/about", label: `About ${siteConfig.name}` },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
    ],
  },
] as const;

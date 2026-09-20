import type { Category, Visa } from "./types";

/*
  Abbreviations whose trailing period is not a sentence ending. Without this,
  "…transfer an executive to a related U.S. office" clamped to "…to a related
  U.S." — a fragment, shipped as the L-1 page's meta description.
*/
const ABBREVIATIONS = new Set([
  "u.s",
  "u.k",
  "e.g",
  "i.e",
  "etc",
  "vs",
  "approx",
  "no",
  "inc",
  "ltd",
  "co",
  "dept",
  "est",
  "st",
  "mr",
  "mrs",
  "ms",
  "dr",
  "jr",
  "sr",
]);

/** Is the period at `dot` a real sentence ending rather than an abbreviation? */
function isSentenceEnd(text: string, dot: number): boolean {
  const word = (text.slice(0, dot).match(/[^\s("']+$/) ?? [""])[0].toLowerCase();
  if (ABBREVIATIONS.has(word)) return false;
  // Any dotted initialism — "u.s", "n.y", "a.b" — regardless of the list above.
  if (/^(?:[a-z]\.)+[a-z]$/i.test(word)) return false;
  // A single capital is an initial ("J. Smith"), not the end of a sentence.
  if (/^[A-Z]$/.test(text.slice(dot - 1, dot))) return false;
  return true;
}

/**
 * Trim prose to a meta-description-friendly length without cutting mid-word.
 * Prefers ending on the last genuine sentence boundary that fits.
 */
export function clampDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  // Walk sentence-ending candidates backwards until one is not an abbreviation.
  const window = clean.slice(0, max + 1);
  const floor = max * 0.55;
  for (let i = window.lastIndexOf(". "); i > floor; i = window.lastIndexOf(". ", i - 1)) {
    if (isSentenceEnd(clean, i)) return clean.slice(0, i + 1);
  }

  const cut = clean.lastIndexOf(" ", max - 1);
  return `${clean.slice(0, cut > 0 ? cut : max - 1).replace(/[,;:.\s]+$/, "")}…`;
}

/**
 * Search-facing title for a visa detail page.
 *
 * Deliberately built from `visa.code` rather than the full `visa.name`: the code
 * is how people actually search ("h1b visa requirements"), and the full name
 * ("H-1B Specialty Occupation Visa") pushes the rendered title past Google's
 * truncation point once the brand suffix is appended.
 */
export function visaPageTitle(visa: Visa): string {
  return `${visa.code} Visa Requirements, Fees & Timeline`;
}

/**
 * Meta description for a visa detail page.
 *
 * Prefers the authored `metaDescription` in the visa's JSON. Machine-clamping
 * `quickAnswer` is the fallback, but it is explanatory prose written for a
 * reader who has already landed — it opens "The E-2 visa allows…" and, at 155
 * characters, frequently trails off mid-clause. The authored line instead front
 * loads what the page answers, which is what a searcher is scanning for.
 */
export function visaPageDescription(visa: Visa): string {
  return visa.metaDescription ?? clampDescription(visa.quickAnswer);
}

/** H1 for a visa detail page — matches the title's intent in natural prose. */
export function visaPageHeading(visa: Visa): string {
  return `${visa.name}: requirements, process and fees`;
}

/**
 * Search terms for a visa detail page.
 *
 * Authored `keywords` in the JSON win. The fallback is generated from the code
 * in both the hyphenated form the page uses and the bare form people type —
 * "h1b visa requirements" outnumbers "h-1b visa requirements" in autocomplete
 * for every code on the site.
 */
export function visaPageKeywords(visa: Visa): string[] {
  if (visa.keywords && visa.keywords.length > 0) return visa.keywords;
  const bare = visa.code.replace(/-/g, "").toLowerCase();
  return [
    `${visa.code} visa`,
    `${bare} visa`,
    `${bare} visa requirements`,
    `${bare} visa fees`,
    `${bare} visa processing time`,
    `${bare} visa application`,
  ];
}

/*
  Category SEO. The generated defaults read correctly only when the label is
  already a noun phrase ending in "Visas" — "US Work Visas: Types &
  Requirements" works, "US Students & Exchange: Types & Requirements" does not.
  Categories may therefore override the title, heading, and description.
*/
export function categoryPageTitle(category: Category): string {
  return category.seoTitle ?? `US ${category.label}: Types & Requirements`;
}

export function categoryPageHeading(category: Category): string {
  return category.h1 ?? `US ${category.label.toLowerCase()}`;
}

export function categoryPageDescription(category: Category): string {
  return category.metaDescription ?? clampDescription(category.description);
}

export function categoryPageKeywords(category: Category): string[] {
  if (category.keywords && category.keywords.length > 0) return category.keywords;
  const label = category.label.toLowerCase();
  return [`US ${label}`, `${label} USA`, `${label} requirements`, `types of ${label}`];
}

/**
 * Money guides that pair with a visa status.
 *
 * This mapping is the mechanism that keeps four H-1B pages from competing for
 * the same query: the visa page owns "H-1B visa requirements", and it points
 * explicitly at the pages that own the tax, calculator, and financial-planning
 * intents instead of trying to cover them itself.
 */
export const visaMoneyGuides: Record<
  string,
  { href: string; label: string; blurb: string }[]
> = {
  h1b: [
    {
      href: "/visa-guides/h1b",
      label: "H-1B financial guide",
      blurb: "What to set up with your money in your first year on H-1B.",
    },
    {
      href: "/taxes/h1b",
      label: "H-1B taxes explained",
      blurb: "Withholding, FICA, and state tax once you are on payroll.",
    },
    {
      href: "/calculators/h1b-tax",
      label: "H-1B tax calculator",
      blurb: "Estimate take-home pay from an offered salary.",
    },
  ],
  f1: [
    {
      href: "/visa-guides/f1",
      label: "F-1 financial guide",
      blurb: "Student banking, campus income, and money sent home.",
    },
    {
      href: "/taxes/f1",
      label: "F-1 student taxes",
      blurb: "Filing basics, FICA exemptions, and treaty questions.",
    },
  ],
  "f1-opt": [
    {
      href: "/taxes/f1",
      label: "F-1 student taxes",
      blurb: "How OPT and CPT wages are taxed.",
    },
    {
      href: "/calculators/substantial-presence",
      label: "Substantial presence test",
      blurb: "Check whether you count as a US tax resident yet.",
    },
  ],
  l1: [
    {
      href: "/visa-guides",
      label: "Visa money guides",
      blurb: "Dual-country planning for intracompany transfers.",
    },
    {
      href: "/send-money",
      label: "Sending money home",
      blurb: "Compare transfer costs beyond the advertised fee.",
    },
  ],
  e2: [
    {
      href: "/banking",
      label: "Banking & credit",
      blurb: "Opening business and personal accounts as a newcomer.",
    },
    {
      href: "/taxes",
      label: "Taxes for visa holders",
      blurb: "Residency status and what it changes about filing.",
    },
  ],
  tn: [
    {
      href: "/taxes",
      label: "Taxes for visa holders",
      blurb: "Cross-border filing basics for Canadian and Mexican professionals.",
    },
    {
      href: "/banking/build-credit",
      label: "Build US credit",
      blurb: "Starting a US credit file from scratch.",
    },
  ],
};

/** Fallback money links for visas without a dedicated guide yet. */
export const defaultMoneyGuides = [
  {
    href: "/banking/build-credit",
    label: "Build US credit as a newcomer",
    blurb: "A practical sequence from no credit file to a usable score.",
  },
  {
    href: "/taxes",
    label: "Taxes for visa holders",
    blurb: "Resident vs nonresident status and why it matters.",
  },
  {
    href: "/send-money",
    label: "Sending money home",
    blurb: "Fees, FX spreads, and choosing a transfer method.",
  },
];

export function getMoneyGuidesFor(visaId: string) {
  return visaMoneyGuides[visaId] ?? defaultMoneyGuides;
}

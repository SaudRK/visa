import type { Category, Visa } from "./types";

/**
 * Trim prose to a meta-description-friendly length without cutting mid-word.
 * Prefers ending on the first sentence boundary that fits.
 */
export function clampDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  // Prefer a clean sentence ending inside the budget.
  const sentenceEnd = clean.slice(0, max + 1).lastIndexOf(". ");
  if (sentenceEnd > max * 0.55) return clean.slice(0, sentenceEnd + 1);

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

export function visaPageDescription(visa: Visa): string {
  return clampDescription(visa.quickAnswer);
}

/** H1 for a visa detail page — matches the title's intent in natural prose. */
export function visaPageHeading(visa: Visa): string {
  return `${visa.name}: requirements, process and fees`;
}

export function categoryPageTitle(category: Category): string {
  return `US ${category.label}: Types & Requirements`;
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

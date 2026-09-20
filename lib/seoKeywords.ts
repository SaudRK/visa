/*
  Keyword map, one entry per indexable path.

  Sourced September 2026 from live Google autocomplete for each page's topic
  and from the titles competitors rank with for the same queries. The first
  entry on each list is the page's primary keyword from SEO.md §2; the rest are
  the variants people actually type — including the un-hyphenated "h1b" forms,
  because that is how the query is typed even though the page copy says H-1B.

  Three places read this map, all keyed by the same site-relative path:

    1. lib/metadata.ts   → <meta name="keywords"> and og:article:tag
    2. lib/jsonLd.ts     → the `keywords` property on WebPage/Article/WebApplication
    3. Anyone deciding what a page should be about before writing copy

  Google ignores the keywords meta tag for ranking. It is emitted anyway
  because Bing and several AI search crawlers still read it, because it costs
  nothing, and because the schema.org `keywords` property it also feeds does
  help entity disambiguation. What actually moves rankings is the title,
  description, and H1 agreeing with these terms — so when editing a list here,
  check the page's copy still earns it.

  Visa detail and category pages keep their keywords in content/*.json instead,
  next to the copy they describe; lib/visaSeo.ts reads those.
*/

export const pageKeywords: Record<string, string[]> = {
  "/": [
    "settle in USA",
    "moving to USA checklist",
    "how to get settled in USA",
    "US visa guides",
    "new immigrant USA finances",
    "H-1B tax calculator",
    "immigrant personal finance",
  ],

  // ── Visa library hub ────────────────────────────────────────────────────
  "/visas": [
    "US visa types",
    "US visa types list",
    "US visa types explained",
    "US visa types and requirements",
    "US visa types and fees",
    "US visa types for non immigrants",
    "nonimmigrant visa categories",
    "which US visa do I need",
  ],

  // ── Money hubs ──────────────────────────────────────────────────────────
  "/banking": [
    "banking for immigrants in the US",
    "bank account without SSN",
    "open bank account new immigrant",
    "bank account for international students without SSN",
    "build credit new immigrant",
    "ITIN bank account",
    "US bank account for non residents",
  ],
  "/taxes": [
    "US taxes for visa holders",
    "nonresident alien taxes",
    "nonresident alien tax return",
    "nonresident alien tax status",
    "resident vs nonresident alien",
    "Form 1040-NR",
    "substantial presence test",
    "ITIN",
    "FBAR",
  ],
  "/send-money": [
    "send money home from USA",
    "cheapest way to send money abroad",
    "send money from USA to India",
    "send money from USA to Pakistan",
    "send money from USA to Philippines",
    "send money from USA to Nigeria",
    "USD to INR money transfer",
    "exchange rate markup",
    "which money transfer is cheapest",
  ],
  "/investing": [
    "investing on a visa",
    "investing on H1B",
    "can H1B invest in stocks",
    "can you invest on H1B visa",
    "H1B 401k",
    "H1B leaving US 401k",
    "H1B 401k withdrawal",
    "Roth IRA H-1B",
    "brokerage for nonresidents",
  ],
  "/insurance": [
    "health insurance for visa holders",
    "health insurance for H1B visa holders",
    "H1B health insurance requirements",
    "H1B health insurance plans",
    "do H1B get health insurance",
    "health insurance for immigrants in USA",
    "H1B layoff health insurance",
    "car insurance new immigrant",
    "life insurance temporary visa",
  ],
  "/calculators": [
    "calculators for immigrants",
    "free immigrant financial tools",
    "H-1B tax calculator",
    "remittance fee calculator",
    "substantial presence test calculator",
    "nonresident alien tax withholding calculator",
    "OPT tax calculator",
  ],
  "/visa-guides": [
    "money guides by visa status",
    "first year in USA finances",
    "H-1B financial guide",
    "F-1 student financial guide",
    "how to get settled in USA",
    "new immigrant money checklist",
  ],

  // ── Guides ──────────────────────────────────────────────────────────────
  "/banking/build-credit": [
    "how to build credit as an immigrant",
    "build credit new immigrant",
    "building credit for immigrants",
    "how to build credit score from scratch",
    "no credit history USA",
    "secured credit card immigrant",
    "credit card for immigrant",
    "ITIN credit card",
    "build US credit history",
  ],
  "/taxes/h1b": [
    "H-1B taxes",
    "h1b taxes",
    "h1b tax rate",
    "h1b tax percentage",
    "h1b tax brackets",
    "h1b tax filing",
    "do h1b visa holders pay taxes",
    "how much taxes h1b visa holders pay",
    "tax deductions for h1b visa holders",
    "h1b first year tax filing",
    "h1b FICA",
    "h1b state tax",
  ],
  "/taxes/f1": [
    "F-1 student taxes",
    "f1 student tax filing",
    "f1 student tax exemption",
    "f1 student tax return",
    "f1 student tax after 5 years",
    "OPT tax",
    "OPT tax rate",
    "OPT tax exemption",
    "F-1 FICA exemption",
    "Form 1040-NR",
    "Form 8843",
    "1042-S",
  ],
  "/visa-guides/h1b": [
    "H-1B financial guide",
    "h1b first year",
    "h1b first year tax filing",
    "h1b first year money",
    "h1b 401k",
    "h1b 401k match",
    "h1b build credit",
    "h1b send money home",
    "h1b health insurance",
  ],
  "/visa-guides/f1": [
    "F-1 student financial guide",
    "international student finances USA",
    "international student money USA",
    "bank account for international students without SSN",
    "bank account for international students in USA",
    "international student build credit",
    "OPT money",
    "international student send money home",
  ],

  // ── Tools ───────────────────────────────────────────────────────────────
  "/calculators/h1b-tax": [
    "H-1B tax calculator",
    "h1b tax calculator",
    "h1b salary calculator after tax",
    "h1b salary after tax",
    "h1b take home pay calculator",
    "h1b visa holder tax calculator",
    "h1b tax calculator texas",
    "h1b taxes in texas",
    "h1b tax percentage",
    "h1b salary after tax by state",
  ],
  "/calculators/remittance": [
    "remittance fee calculator",
    "money transfer fee comparison",
    "international money transfer fee comparison",
    "money transfer exchange rate comparison",
    "international wire transfer fee comparison",
    "which money transfer is cheapest",
    "USD to INR money transfer charges",
    "transfer cost calculator",
    "exchange rate markup calculator",
  ],
  "/calculators/substantial-presence": [
    "substantial presence test calculator",
    "substantial presence test",
    "183 day rule calculator",
    "substantial presence test IRS",
    "substantial presence test for tax purposes",
    "substantial presence test F1 student",
    "US tax residency calculator",
    "resident alien test",
    "days in US calculator tax",
  ],

  // ── Blog ────────────────────────────────────────────────────────────────
  "/blog": [
    "US immigration blog",
    "H-1B news",
    "F-1 OPT news",
    "US visa updates",
    "immigrant personal finance blog",
    "settle in USA",
  ],

  // ── Company / legal — branded only; these pages should not chase topics ──
  "/about": ["about SettleinUS", "SettleinUS editorial standards", "US visa guide publisher"],
  "/contact": ["contact SettleinUS", "SettleinUS corrections"],
  "/privacy-policy": ["SettleinUS privacy policy"],
  "/affiliate-disclosure": ["SettleinUS affiliate disclosure"],
};

/** Keywords for a path. Empty for paths not in the map, so callers can skip the tag. */
export function getPageKeywords(path: string): string[] {
  return pageKeywords[path] ?? [];
}

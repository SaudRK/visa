/*
  Editorial dates, in one place.

  The sitemap's <lastmod>, the dateModified in Article schema, and the "Last
  reviewed" line a visitor sees all have to agree, or the accuracy signal turns
  into a liability. Previously the sitemap stamped `new Date()` at build time,
  which told crawlers every page changed on every deploy — a claim that is
  false, and one Google learns to ignore.

  Update the `reviewed` date here when a page's substance actually changes, not
  when its markup does.
*/

export interface ContentDate {
  published: string;
  reviewed: string;
}

const DEFAULT_DATE: ContentDate = {
  published: "2026-07-14",
  reviewed: "2026-07-14",
};

export const contentDates: Record<string, ContentDate> = {
  "/": { published: "2026-07-14", reviewed: "2026-08-06" },

  // Visa library
  "/visas": { published: "2026-08-06", reviewed: "2026-08-06" },

  // Section hubs — substantive intro copy and FAQs added 2026-08-06.
  "/banking": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/taxes": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/send-money": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/investing": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/insurance": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/calculators": { published: "2026-07-14", reviewed: "2026-09-20" },
  "/visa-guides": { published: "2026-07-14", reviewed: "2026-09-20" },

  // Guides
  "/banking/build-credit": { published: "2026-07-14", reviewed: "2026-08-06" },

  // September 2026 release — the scaffolded "soon" pages, written.
  "/taxes/resident-vs-nonresident": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/taxes/itin": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/taxes/fbar": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/taxes/fatca": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/investing/on-a-visa": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/investing/401k-if-you-leave": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/investing/h1b-roth-ira": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/insurance/health": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/insurance/auto": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/insurance/life": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/visa-guides/l1": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/visa-guides/green-card": { published: "2026-09-20", reviewed: "2026-09-20" },
  "/taxes/h1b": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/taxes/f1": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/visa-guides/h1b": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/visa-guides/f1": { published: "2026-07-14", reviewed: "2026-08-06" },

  // Tools
  "/calculators/h1b-tax": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/calculators/remittance": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/calculators/substantial-presence": {
    published: "2026-07-14",
    reviewed: "2026-08-06",
  },
  "/calculators/f1-opt-tax": { published: "2026-09-20", reviewed: "2026-09-20" },

  // Blog. The posts live in Soro; only this hub has a date we control.
  "/blog": { published: "2026-09-07", reviewed: "2026-09-20" },

  // Company / legal
  "/about": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/contact": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/privacy-policy": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/affiliate-disclosure": {
    published: "2026-07-14",
    reviewed: "2026-08-06",
  },
};

export function getContentDate(path: string): ContentDate {
  return contentDates[path] ?? DEFAULT_DATE;
}

/** "2026-08-06" → "August 2026", for display next to a machine-readable date. */
export function formatReviewMonth(iso: string): string {
  const [year, month] = iso.split("-");
  const monthName = new Date(Number(year), Number(month) - 1, 1).toLocaleString(
    "en-US",
    { month: "long", timeZone: "UTC" }
  );
  return `${monthName} ${year}`;
}

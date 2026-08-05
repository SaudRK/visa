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
  "/calculators": { published: "2026-07-14", reviewed: "2026-08-06" },
  "/visa-guides": { published: "2026-07-14", reviewed: "2026-08-06" },

  // Guides
  "/banking/build-credit": { published: "2026-07-14", reviewed: "2026-08-06" },
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

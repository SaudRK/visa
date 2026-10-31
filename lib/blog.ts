/*
  Blog data, sourced from Soro.

  Soro writes and hosts the posts. Its embed script (the URL below) is a plain
  JavaScript file whose first statement is `var SORO_ARTICLES = [...]` — the
  full post index with titles, slugs, excerpts, dates, and images — and it
  exposes each post's body as JSON at /article/<id>. Those two endpoints are
  the whole integration.

  We fetch them server-side and render the posts as ordinary pages instead of
  mounting the embed, for one reason: the embed injects content after
  hydration, so a crawler fetching /blog got an empty <div>, and every post
  lived at /blog?post=<slug> — a query string that canonicalises to the hub.
  Fourteen posts, zero indexable URLs. Rendering here gives each post its own
  URL, title, description, dates, Article schema, and real HTML.

  Both fetches revalidate hourly, so a post Soro publishes appears without a
  deploy. If Soro is unreachable during a revalidation, Next keeps serving the
  last good render; during a build it fails loudly, which is preferable to
  shipping an empty blog.
*/

import sanitizeHtml from "sanitize-html";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** ISO 8601 publish timestamp, e.g. "2026-09-20T03:33:19.978+00:00". */
  isoDate: string;
  image: string | null;
}

const EMBED_TOKEN = "e3ddf659-e62b-4836-8648-da345135fa24";
const API_BASE = "https://app.trysoro.com";
const EMBED_URL = `${API_BASE}/api/embed/${EMBED_TOKEN}`;
const REVALIDATE_SECONDS = 3600;

interface RawArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  isoDate: string;
  image: string | null;
}

/** All published posts, newest first. */
export async function getPosts(): Promise<BlogPost[]> {
  const res = await fetch(EMBED_URL, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["blog"] },
  });
  if (!res.ok) {
    throw new Error(`Soro embed returned ${res.status}`);
  }
  const script = await res.text();

  // The array is emitted as a single JSON literal on one statement. Anchoring
  // on the declaration and the terminating "];" avoids parsing the whole file.
  const match = script.match(/var SORO_ARTICLES = (\[[\s\S]*?\]);\s*\n/);
  if (!match) {
    throw new Error("Soro embed did not contain SORO_ARTICLES");
  }

  const raw = JSON.parse(match[1]) as RawArticle[];
  return raw
    .filter((a) => a.id && a.slug && a.title && a.isoDate)
    .map((a) => ({
      id: a.id,
      title: a.title.trim(),
      slug: a.slug,
      excerpt: (a.excerpt ?? "").trim(),
      isoDate: a.isoDate,
      image: a.image || null,
    }))
    .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

/**
 * A post's body as HTML. Soro's output is paragraphs, h2/h3 headings, and
 * links; the sanitiser below is belt-and-braces against anything else ever
 * appearing in it, since we inject this into our own origin.
 */
export async function getPostContent(id: string): Promise<string> {
  const res = await fetch(`${EMBED_URL}/article/${id}`, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["blog"] },
  });
  if (!res.ok) {
    throw new Error(`Soro article ${id} returned ${res.status}`);
  }
  const data = (await res.json()) as { content?: string | null };
  return sanitize(data.content ?? "");
}

/**
 * Allowlist sanitiser. Soro's output today is p / h2 / h3 / a; the list is a
 * little wider so ordinary editorial markup survives if their generator
 * changes, and anything else — scripts, styles, iframes, event handlers,
 * javascript: URLs — is dropped rather than escaped.
 */
function sanitize(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "p", "h2", "h3", "h4", "a", "ul", "ol", "li", "strong", "em", "b", "i",
      "br", "blockquote", "table", "thead", "tbody", "tr", "th", "td",
    ],
    allowedAttributes: { a: ["href", "title"], th: ["scope"], td: ["colspan"] },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href ?? "";
        const external = /^https?:\/\//i.test(href) && !href.includes("settleinus.com");
        return {
          tagName,
          attribs: external ? { ...attribs, rel: "noopener noreferrer" } : attribs,
        };
      },
    },
  });
}

/** "2026-09-20T03:33:19.978+00:00" → "September 20, 2026" */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** "2026-09-20T03:33:19.978+00:00" → "2026-09-20", for schema and sitemaps. */
export function postDateOnly(iso: string): string {
  return iso.slice(0, 10);
}

/*
  Editorial cross-links from a post to the site's own guides, chosen by the
  post's subject. This is the point of having a blog on the domain at all: a
  post about OPT unemployment rules should hand its reader to the F-1 OPT
  guide and the F-1 tax page, and hand a crawler the same links.

  Order matters — the first rule that matches wins — so narrow subjects (a
  visa code, FBAR, a 401(k)) come before broad ones (students, H-1B, credit).
  The title is tried against every rule before the excerpt is, because
  excerpts mention side topics: matching title and excerpt together sent a TN
  post to the F-1 guides on the word "treaty", and an H-2A post to the H-1B
  guides on "FICA".
*/
const RELATED_RULES: { test: RegExp; links: { href: string; label: string }[] }[] = [
  {
    test: /\bopt\b|\bcpt\b|optional practical training/i,
    links: [
      { href: "/visas/study/f1-opt", label: "F-1 OPT requirements and timeline" },
      { href: "/taxes/f1", label: "F-1 student taxes explained" },
      { href: "/calculators/f1-opt-tax", label: "F-1 OPT tax calculator" },
    ],
  },
  {
    test: /\btn\b/i,
    links: [
      { href: "/visas/work/tn", label: "TN visa requirements" },
      { href: "/taxes/resident-vs-nonresident", label: "Resident vs nonresident alien" },
      { href: "/calculators/substantial-presence", label: "Substantial presence test" },
    ],
  },
  {
    test: /h-?2a/i,
    links: [
      { href: "/visas/work/h2a", label: "H-2A visa requirements" },
      { href: "/taxes", label: "US taxes for visa holders" },
      { href: "/send-money", label: "Sending money home from the US" },
    ],
  },
  {
    test: /r-?1\b|religious/i,
    links: [
      { href: "/visas/work/r1", label: "R-1 visa requirements" },
      { href: "/visas/work", label: "US work visas compared" },
      { href: "/taxes", label: "US taxes for visa holders" },
    ],
  },
  {
    test: /h-?4\b/i,
    links: [
      { href: "/visas/work/h1b", label: "H-1B visa requirements" },
      { href: "/taxes/itin", label: "ITIN: who needs one and how to apply" },
      { href: "/banking/build-credit", label: "How to build credit as an immigrant" },
    ],
  },
  {
    test: /\bl-?[12]s?\b/i,
    links: [
      { href: "/visas/work/l1", label: "L-1 visa requirements" },
      { href: "/visa-guides/l1", label: "L-1 financial guide" },
      { href: "/taxes/resident-vs-nonresident", label: "Resident vs nonresident alien" },
    ],
  },
  {
    test: /fbar|fincen/i,
    links: [
      { href: "/taxes/fbar", label: "FBAR: reporting foreign bank accounts" },
      { href: "/taxes/fatca", label: "FATCA and Form 8938" },
      { href: "/visa-guides/green-card", label: "New green card holder checklist" },
    ],
  },
  {
    test: /fatca|8938/i,
    links: [
      { href: "/taxes/fatca", label: "FATCA and Form 8938" },
      { href: "/taxes/fbar", label: "FBAR: reporting foreign bank accounts" },
      { href: "/taxes/resident-vs-nonresident", label: "Resident vs nonresident alien" },
    ],
  },
  {
    test: /401\s?\(?k\)?|retirement|\bira\b/i,
    links: [
      { href: "/investing/401k-if-you-leave", label: "What happens to a 401(k) if you leave" },
      { href: "/investing/h1b-roth-ira", label: "H-1B and Roth IRA basics" },
      { href: "/investing", label: "Investing in the US on a visa" },
    ],
  },
  {
    test: /brokerage|invest/i,
    links: [
      { href: "/investing/on-a-visa", label: "Investing in the US on a visa" },
      { href: "/investing", label: "Investing guides for visa holders" },
      { href: "/taxes/resident-vs-nonresident", label: "Resident vs nonresident alien" },
    ],
  },
  {
    test: /green card|permanent resident/i,
    links: [
      { href: "/visa-guides/green-card", label: "New green card holder checklist" },
      { href: "/taxes/fbar", label: "FBAR: reporting foreign bank accounts" },
      { href: "/banking/build-credit", label: "How to build credit as an immigrant" },
    ],
  },
  {
    test: /f-?1\b|international student|\bstudents?\b/i,
    links: [
      { href: "/taxes/f1", label: "F-1 student taxes explained" },
      { href: "/visas/study/f1", label: "F-1 visa requirements" },
      { href: "/visa-guides/f1", label: "F-1 student financial guide" },
    ],
  },
  {
    test: /resident alien|nonresident alien|substantial presence|w-4|withholding/i,
    links: [
      { href: "/taxes/resident-vs-nonresident", label: "Resident vs nonresident alien" },
      { href: "/calculators/substantial-presence", label: "Substantial presence test" },
      { href: "/taxes/h1b", label: "H-1B taxes: withholding and FICA" },
    ],
  },
  {
    test: /h-?1b|fica/i,
    links: [
      { href: "/taxes/h1b", label: "H-1B taxes explained" },
      { href: "/calculators/h1b-tax", label: "H-1B tax calculator" },
      { href: "/visa-guides/h1b", label: "H-1B financial guide" },
    ],
  },
  {
    test: /payroll|paycheck|pay ?stub/i,
    links: [
      { href: "/calculators/h1b-tax", label: "H-1B tax calculator" },
      { href: "/taxes/h1b", label: "H-1B taxes: withholding and FICA" },
      { href: "/taxes/resident-vs-nonresident", label: "Resident vs nonresident alien" },
    ],
  },
  {
    test: /itin/i,
    links: [
      { href: "/taxes/itin", label: "ITIN: who needs one and how to apply" },
      { href: "/taxes", label: "US taxes for visa holders" },
      { href: "/banking/build-credit", label: "How to build credit as an immigrant" },
    ],
  },
  {
    test: /credit|bank account|ssn|account without/i,
    links: [
      { href: "/banking/build-credit", label: "How to build credit as an immigrant" },
      { href: "/banking", label: "Banking and credit for immigrants" },
      { href: "/taxes/itin", label: "ITIN: who needs one and how to apply" },
    ],
  },
  {
    test: /transfer|remittance|send money|exchange rate/i,
    links: [
      { href: "/calculators/remittance", label: "Remittance fee calculator" },
      { href: "/send-money", label: "Sending money home from the US" },
      { href: "/banking", label: "Banking and credit for immigrants" },
    ],
  },
  {
    test: /insurance|health/i,
    links: [
      { href: "/insurance/health", label: "Health insurance for visa holders" },
      { href: "/insurance", label: "Insurance for visa holders and new immigrants" },
      { href: "/visa-guides/h1b", label: "H-1B financial guide" },
    ],
  },
  {
    test: /tax (forms?|software|returns?|filing)/i,
    links: [
      { href: "/taxes", label: "US taxes for visa holders" },
      { href: "/taxes/resident-vs-nonresident", label: "Resident vs nonresident alien" },
      { href: "/calculators/substantial-presence", label: "Substantial presence test" },
    ],
  },
];

const DEFAULT_RELATED = [
  { href: "/visas", label: "US visa types explained" },
  { href: "/taxes", label: "US taxes for visa holders" },
  { href: "/calculators", label: "Free calculators for immigrants" },
];

/** The topic rule for a post: its title decides, its excerpt breaks ties. */
function topicFor(post: BlogPost) {
  return (
    RELATED_RULES.find((r) => r.test.test(post.title)) ??
    RELATED_RULES.find((r) => r.test.test(post.excerpt))
  );
}

export function relatedGuidesFor(post: BlogPost) {
  return topicFor(post)?.links ?? DEFAULT_RELATED;
}

/*
  Other posts for the "More from the blog" list: same topic first, then the
  newest of the rest. Without it a post's only guaranteed inbound link was the
  /blog index, so most posts sat behind a single page and nothing tied related
  posts together for readers or crawlers.
*/
export function relatedPostsFor(post: BlogPost, posts: BlogPost[], limit = 3) {
  const topic = topicFor(post);
  const others = posts.filter((p) => p.id !== post.id);
  const sameTopic = topic ? others.filter((p) => topicFor(p) === topic) : [];
  const rest = others.filter((p) => !sameTopic.includes(p));
  return [...sameTopic, ...rest].slice(0, limit);
}

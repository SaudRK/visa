# SettleinUS

Plain-English US visa guides, tax explainers, and free calculators for people
moving to and settling in the United States.

Production domain: **settleinus.com**

## Stack

- Next.js 16 (App Router) — see `AGENTS.md`: this version differs from older
  Next.js, so read `node_modules/next/dist/docs/` before changing framework APIs
- React 19, TypeScript, Tailwind CSS v4
- Fully static: every route is prerendered at build time (`next build` reports
  `○ Static` / `● SSG`), which is what makes the content directly crawlable

No runtime dependencies beyond Next/React.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — also the SEO smoke test
npm run lint
```

Copy `.env.local.example` to `.env.local` only if you need to override the site
name or domain for a staging host. The production values are already the
defaults in `lib/siteConfig.ts`.

> Overriding `NEXT_PUBLIC_SITE_DOMAIN` on a preview deploy matters: the domain
> drives every canonical URL, so a preview host left on the production domain
> would tell Google the canonical version of a page lives elsewhere.

## Content model

| Location | What it holds |
| --- | --- |
| `content/visas/*.json` | The ten visa guides (eligibility, process, fees, documents, timelines, FAQs) |
| `content/categories.json` | Visa category taxonomy and slugs |
| `lib/contentMap.ts` | Section hubs — labels, H1s, intro copy, FAQs, and child links |
| `lib/contentDates.ts` | Published / last-reviewed dates. **Single source of truth** |

Adding a visa guide means dropping a JSON file into `content/visas/`. Routing,
the category hub, the `/visas` hub, and the sitemap all pick it up
automatically. A category with no guides is not published at all.

## SEO-load-bearing files

Changing these affects how the site is indexed, so read the comments in them
first:

- `lib/siteConfig.ts` — brand, domain, nav, footer link columns
- `lib/metadata.ts` — `buildPageMetadata()`: titles, canonicals, robots, OG/Twitter
- `lib/jsonLd.ts` — the schema.org graph
- `lib/contentDates.ts` — editorial dates (sitemap `lastmod` + `dateModified`)
- `app/layout.tsx` — title template, site-wide Organization/WebSite schema
- `app/sitemap.ts`, `app/robots.ts`
- `app/opengraph-image.tsx` — the generated social card

Page titles passed to `buildPageMetadata` should **omit** the brand: the root
layout's `title.template` appends `| SettleinUS`.

## Scripts

```bash
node scripts/optimize-decorative-images.js   # regenerate the WebP money tiles
```

`scripts/generate-visas-*.js` and `write-student-visas.js` are one-off content
generators kept for reference; they are not part of the build.

## Conventions

- Guides render through `components/GuideLayout.tsx`, calculators through
  `components/CalculatorShell.tsx`. Both handle breadcrumbs, structured data,
  review dates, and disclaimers — pass `path` and `crumbs` rather than
  re-implementing them.
- One `<h1>` per page, stating the page's actual topic (not just a nav label).
- Immigration and personal finance are YMYL topics. Cite primary sources
  (USCIS, IRS, Department of State, CFPB) via `GuideLayout`'s `sources` prop, and
  do not attribute content to named authors we cannot substantiate.

See `DECISIONS.md` for the reasoning behind the current architecture.

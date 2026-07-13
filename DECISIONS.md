# Build Decisions

## Content loading: `fs.readdirSync`

Visa JSON files are read at build time via `fs.readdirSync` in `lib/getVisas.ts`. This keeps adding new visa files a drop-in operation without updating import lists. All pages use `generateStaticParams` for full static generation.

## Design system vs original tokens

Visual system is now an “atlas signal” language: cool gray field, ink black, sea teal, citrus-orange signal accents, Syne + IBM Plex, sharp 2px corners, mono tags, parallax hero layers, and scroll reveals. Purple palettes and pill CTAs were intentionally removed.

## Expanded visa schema

Phase 1 visa JSON now includes practical applicant fields beyond the original launch schema (`whoIsFor`, `denialReasons`, `documents[].why`, `employmentRights`, etc.) while preserving the single visa template rule. `financeBlock` remains `null`.

## Brand placeholder

Default `siteConfig.name` is `VisaHarbor` until domain/name are finalized via env vars.

## OG image placeholder

`public/og-image.png` is referenced in metadata but not yet created. Add a 1200×630 branded image before launch.

## Search Console / Bing submission

Blocked until `NEXT_PUBLIC_SITE_DOMAIN` is finalized and the site is deployed.

## Fee and timeline values

Fee amounts are planning baselines drawn from publicly listed schedules and must be re-confirmed against official fee pages before publish. Guides show `timelineUpdatedDate` and `lastReviewedDate` for trust.

# Build Decisions

## Niche pivot (client report, June 2025)

The site material was changed from a pure visa-encyclopedia product to an **immigrant & expat finance** resource (banking, taxes, remittances, investing, insurance, calculators, visa-specific money guides), following the client transformation report.

## Brand naming

The report’s sample brand name is **not** used in this codebase. Branding stays config-only via `lib/siteConfig.ts` / `NEXT_PUBLIC_SITE_NAME`. Current placeholder: **New American Guide**. Tagline: **Finance Made Simple for New Americans**.

## Design system

Navy `#1B3A6B`, accent blue `#2E86C1`, light blue `#E8EFF9`, gray `#F5F7FA`, Plus Jakarta Sans — aligned to the report’s visual specs (8px buttons, 12px cards).

## Phase 1 live foundation

Live now: homepage audience/calculator/pillar layout, section landings, remittance calculator, H-1B tax estimator, substantial presence calculator, H-1B/F-1 financial guides, credit-building pillar, H-1B/F-1 tax guides, affiliate disclosure.

## Legacy visa JSON templates

Older `/visas/...` encyclopedia routes may still exist in the repo from the prior build. Primary navigation and sitemap now point at the finance IA. Remove or redirect legacy visa routes in a later cleanup if desired.

## Affiliates

No live affiliate network IDs are embedded yet. Disclosure copy and page are in place so links can be added after program approval with `rel="sponsored"`.

# Implementation Plan
**US Visa & Green Card Guidance Platform**
Version 1.1 — Build spec for AI coding agent / developer

> **Naming note:** the project name is not finalized. Nothing in this document, the codebase, file names, or content should hardcode a brand name. See Section 1 for how to keep naming a config-only decision so it never leaks into code, folder names, or SEO copy.

---

## 0. Read This First (Agent Instructions)

You are building a static-first, content-driven Next.js site for US visa and green card guidance.
Rules while building:
- Follow the file/folder structure in Section 3 EXACTLY. Do not invent new top-level folders.
- Build the data model (Section 2) before writing any UI. UI reads from data, never the reverse.
- Build ONE dynamic page template that renders any visa record. Never hand-code a second template for a "special" visa.
- Do not add authentication, databases, or a CMS backend in Phase 1. Content lives in local JSON files. This is intentional — it removes hosting complexity and lets the site ship fast.
- Do not add the finance/affiliate section, ad code, or bank partnership content in Phase 1. Leave the `financeBlock` field present but `null`.
- Never hardcode a brand/project name in code, filenames, copy, or metadata. Use a single config value (Section 1.1) everywhere a name would otherwise appear, so a rename later is a one-line change, not a find-and-replace across the repo.
- If a decision isn't covered in this document, choose the simplest option that keeps the site static and fast, and note the assumption in a `DECISIONS.md` file at the project root.

---

## 1. Project Identity

### 1.1 Naming is a config value, not a hardcoded string

The name/domain hasn't been chosen yet. To keep the eventual rename cheap and to avoid baking a soon-to-be-discarded name into SEO signals (page titles, meta descriptions, JSON-LD, sitemap), do the following instead of picking a name now:

- Create a single source of truth, e.g. `lib/siteConfig.ts`:
  ```ts
  export const siteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Visa Guide", // placeholder until finalized
    domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "example.com",
    tagline: "Understand your visa, one clear step at a time.",
  };
  ```
- Every place that would otherwise print a brand name (`<title>`, footer, JSON-LD `publisher`, OG tags, `robots.ts`, `sitemap.ts` base URL) imports from `siteConfig` — never a literal string.
- The repo folder itself, npm package name, and any component names should be generic (`visa-platform`, `app`, etc.), not tied to a candidate brand name — see Section 3.
- Once a name and domain are locked in, updating `siteConfig` and the environment variables is the entire rename. No further code changes should be required.
- Naming/domain selection (availability check, trademark check, SEO judgment on brandable vs. keyword-forward names) is a separate decision to make outside this document, once the name is finalized. It's deliberately out of scope here so the build isn't blocked on it.

### 1.2 Tagline
"Understand your visa, one clear step at a time." (generic enough to survive a rename; revisit once the name is set)

### 1.3 Legal disclaimer (required, not optional)

This is an immigration guidance site, not a law firm. Before any content ships:
- Every visa page and the footer must carry a clear "this is general information, not legal advice, and not affiliated with USCIS or the US government" disclaimer.
- Add a `disclaimerText` constant in `siteConfig` (or a dedicated `Disclaimer.tsx` component) rather than repeating the string inline, so the wording can be updated once and updates everywhere.

---

## 2. Data Model (build this first)

All content lives in `/content/visas/*.json`. One file per visa. No database in Phase 1.

### 2.1 Schema — `/content/schema.md` (document this, don't skip it)

```
{
  "id": "h1b",                        // matches filename, used in URL /visas/h1b
  "code": "H-1B",
  "name": "H-1B Specialty Occupation Visa",
  "category": "work",                 // one of: visitor, student, work, family-fiance, family-green-card, employment-green-card, humanitarian
  "parentVisaId": null,                // e.g. "f1-opt" record has parentVisaId: "f1"
  "quickAnswer": "2-3 sentence string. Who it's for + single most important fact.",
  "eligibility": ["bullet string", "bullet string"],
  "processSteps": [
    { "step": 1, "title": "string", "description": "string", "timeframe": "e.g. 2-4 weeks" }
  ],
  "fees": [
    { "name": "string", "amount": "string, e.g. $460", "payer": "employer | applicant" }
  ],
  "documents": ["checklist item string"],
  "timelineText": "current realistic processing range as prose",
  "timelineUpdatedDate": "2026-07",   // YYYY-MM, drives the 'as of' label
  "dependentsText": "who can accompany, under what status",
  "faqs": [ { "question": "string", "answer": "string" } ],
  "relatedVisaIds": ["f1", "l1"],
  "sourceUrl": "https://www.uscis.gov/...", // official source for the info on this page, shown near the disclaimer
  "financeBlock": null                 // Phase 5 only — leave null
}
```

### 2.2 Category metadata — `/content/categories.json`
One object per category used to build category landing pages and the homepage selector. These `id`/`slug` values are the single source of truth for category names across the whole site — the homepage selector (Section 5, Phase 1C) must use exactly these seven, not an ad-hoc shorter list.

```
[
  { "id": "work", "label": "Work Visas", "slug": "work", "description": "1 sentence" },
  { "id": "student", "label": "Students & Exchange", "slug": "study", "description": "1 sentence" },
  { "id": "visitor", "label": "Visitor Visas", "slug": "visit", "description": "1 sentence" },
  { "id": "family-fiance", "label": "Fiancé(e) & Family Nonimmigrant", "slug": "family-visit", "description": "1 sentence" },
  { "id": "family-green-card", "label": "Family Green Cards", "slug": "family-green-card", "description": "1 sentence" },
  { "id": "employment-green-card", "label": "Employment Green Cards", "slug": "employment-green-card", "description": "1 sentence" },
  { "id": "humanitarian", "label": "Humanitarian & Protection", "slug": "protection", "description": "1 sentence" }
]
```

---

## 3. Folder Structure

```
project-root/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # homepage: guided selector
│   ├── visas/
│   │   ├── [category]/
│   │   │   ├── page.tsx            # category landing page
│   │   │   └── [visaId]/
│   │   │       └── page.tsx        # individual visa page (the template)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── QuickAnswerBox.tsx
│   ├── EligibilityList.tsx
│   ├── ProcessSteps.tsx
│   ├── FeesTable.tsx
│   ├── TimelineNote.tsx
│   ├── DependentsSection.tsx
│   ├── FaqAccordion.tsx
│   ├── RelatedVisas.tsx
│   ├── CategorySelector.tsx        # homepage "which visa is for me"
│   ├── Disclaimer.tsx              # legal disclaimer, reused in footer + visa pages
│   └── Header.tsx / Footer.tsx
├── content/
│   ├── schema.md
│   ├── categories.json
│   └── visas/
│       ├── r1.json
│       ├── tn.json
│       ├── h2a.json
│       ├── h2b.json
│       ├── f1.json
│       ├── f1-opt.json
│       ├── m1.json
│       ├── h1b.json
│       ├── l1.json
│       └── e2.json
├── lib/
│   ├── siteConfig.ts                # name/domain/tagline/disclaimer — the only place branding lives
│   ├── getVisas.ts                  # reads /content/visas at build time
│   ├── getVisaById.ts
│   └── getCategories.ts
├── public/
│   └── favicon, og-image.png
├── DECISIONS.md
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 4. Tech Stack (fixed — do not substitute)

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14+, App Router | Static generation (`generateStaticParams`) gives fast pages, which matters for both SEO and the "calm, not overwhelming" feel |
| Styling | Tailwind CSS | Fast to build consistent, calm design tokens (Section 6) |
| Content | Local JSON files, no CMS/DB | Zero backend to break, agent can generate content directly as files |
| Hosting | Vercel (free tier is enough for launch) | One-command deploy, automatic HTTPS, fast global CDN — all help SEO |
| Rendering | Full static generation (SSG) at build time | Every visa page pre-rendered as HTML — this is the single biggest lever for both page speed and getting indexed |

Do not use client-side data fetching for visa content. Everything renders server-side at build time.

---

## 5. Build Order (phases — build in this exact sequence)

### Phase 1A — Scaffold (do this first, nothing else)
1. `npx create-next-app@latest <project-directory>` with TypeScript + Tailwind + App Router, ESLint enabled. Use a neutral folder/package name — not a candidate brand name.
2. Create the folder structure in Section 3 (empty files where noted), including `lib/siteConfig.ts` with placeholder values.
3. Write `content/schema.md` and `content/categories.json` exactly as specified in Section 2.
4. Add a `.env.local.example` with `NEXT_PUBLIC_SITE_NAME` and `NEXT_PUBLIC_SITE_DOMAIN` placeholders so the rename path is documented from day one.

### Phase 1B — Content (write data before UI)
5. Create the 10 visa JSON files listed in Section 3, populated using the schema. Fill in eligibility/process/fees/documents/timeline with accurate, current information — **do not fabricate fee amounts or processing times**; if unsure, write a placeholder like `"CHECK: fee amount"` so a human reviews it before publish. This matters more than speed: fee/timeline errors on a visa site directly hurt trust and can mislead someone with real deadlines.
6. Set `parentVisaId: "f1"` on the `f1-opt.json` record so cross-linking works automatically.
7. Add a real `sourceUrl` (usually a `uscis.gov` or `travel.state.gov` page) to every record — this backs the disclaimer and gives users somewhere authoritative to double-check.

### Phase 1C — Template + Routing
8. Build `lib/getVisas.ts`, `getVisaById.ts`, `getCategories.ts` — simple functions that `import` the JSON at build time (no fs reads needed if using static imports, but `fs.readdirSync` against `/content/visas` also works — pick one and note it in DECISIONS.md).
9. Build `app/visas/[category]/[visaId]/page.tsx` using `generateStaticParams` to pre-render all 10 pages. This single file is the template from Section 7 below — build every visa page through it, never a one-off page.
10. Build `app/visas/[category]/page.tsx` (category landing pages) — lists visas in that category with their `quickAnswer` line.
11. Build the homepage `app/page.tsx` — the guided selector. Use the exact seven categories from `categories.json` (work / study / visit / family-visit / family-green-card / employment-green-card / protection), not an abbreviated list — a mismatch between the selector and the real category set is a common source of dead-end links. Group visually into "Visiting or working temporarily," "Studying," "Family-based," and "Employment & humanitarian green cards" if seven raw options feels like too many at once.

### Phase 1D — SEO Plumbing (do not skip — this is what makes early traffic possible at all)
12. `app/sitemap.ts` — auto-generate sitemap.xml from the visa + category lists, using `siteConfig.domain` as the base URL.
13. `app/robots.ts` — allow all, point to sitemap.
14. Per-page `<title>` and `<meta description>` generated from `quickAnswer` and visa `name` via Next's `generateMetadata` per page — never a static title, and never a hardcoded brand name (pull it from `siteConfig`).
15. Add JSON-LD `FAQPage` structured data on each visa page, generated from the `faqs[]` array — this is what makes FAQs eligible for rich results in Google.
16. Add Open Graph tags (title, description, a single shared `og-image.png` is fine for launch).
17. Once the domain is finalized, register the site in **Google Search Console** and **Bing Webmaster Tools**, and manually submit the sitemap URL in both. Manual submission is the actual lever for fast indexing — a brand-new domain with no submitted sitemap can otherwise sit unindexed for weeks. This step is blocked until the domain decision lands; everything else in this document isn't.

### Phase 1E — Design Pass
18. Apply the color palette, typography, and spacing rules from Section 6 across all components.
19. Add the step-tracker visual to `ProcessSteps.tsx`.

### Phase 1F — Pre-launch checklist
20. Add `/about` and `/privacy-policy` pages (required for AdSense later, and for basic trust signals now). Keep both name-agnostic — pull any brand references from `siteConfig`.
21. Add `/contact` page with a simple mailto or form.
22. Add the legal disclaimer (Section 1.3) to the footer and to every visa page template.
23. Run Lighthouse — target 90+ on Performance and SEO before deploying. Also run `next build` with no type errors and no ESLint errors as a hard gate.
24. Once naming/domain is finalized: set the real `NEXT_PUBLIC_SITE_NAME`/`NEXT_PUBLIC_SITE_DOMAIN` env vars, deploy to Vercel, connect the custom domain, verify HTTPS.

**Everything past Phase 1F (finance section, AdSense, affiliate content, remaining 15 visa pages) is Phase 2+ and out of scope for this document — build it only after Phase 1F is live.**

---

## 6. Design Tokens (apply exactly — don't improvise new colors)

```css
--color-bg: #FAF9F6;          /* warm off-white, not clinical white */
--color-primary: #4A6FA5;     /* gentle blue */
--color-secondary: #7A9E7E;   /* sage green */
--color-text: #2E2E2E;        /* soft black, not pure #000 */
--color-warning: #C0392B;     /* red — reserved ONLY for hard deadlines */
--font-heading: 'Lora', serif;        /* warm, human, not corporate */
--font-body: 'Inter', sans-serif;     /* legible, not monospace/condensed */
--radius: 12px;                        /* soft corners throughout */
--max-content-width: 720px;            /* generous whitespace, no dense walls of text */
```

Rules:
- Never use `--color-warning` decoratively — only for actual filing deadlines.
- Line height on body text: 1.7 minimum.
- No more than ~65 characters per line on body text (constrain with max-width, not just container width).
- Every non-decorative image needs descriptive `alt` text; icons used as buttons need an `aria-label`.

---

## 7. The Visa Page Template (build exactly this order)

1. Quick Answer box (uses `quickAnswer`)
2. Eligibility (uses `eligibility[]`)
3. Step-by-step process with step-tracker visual (uses `processSteps[]`)
4. Fees & documents table (uses `fees[]`, `documents[]`)
5. Timeline, with visible "as of {timelineUpdatedDate}" label (uses `timelineText`)
6. Family & dependents (uses `dependentsText`)
7. FAQs as an accordion, also emitted as JSON-LD (uses `faqs[]`)
8. Related visas as internal links (uses `relatedVisaIds[]`)
9. Source & disclaimer footer — links to `sourceUrl` and renders the shared `Disclaimer.tsx` component
10. Finance checkpoint box — render ONLY if `financeBlock` is not null. In Phase 1 it's always null, so this section renders nothing. Do not delete the render logic — it's how Phase 5 becomes a content update instead of a redesign.

---

## 8. Phase 1 Launch Content List (10 pages — build these, nothing more)

Chosen for low competition + a couple of high-volume pages to prove the template handles both:

| id | code | category | why this one first |
|---|---|---|---|
| r1 | R-1 | work | thin competition, real underserved search |
| tn | TN | work | strong specific audience, low competition |
| h2a | H-2A | work | real recurring search, low competition |
| h2b | H-2B | work | same as H-2A |
| f1 | F-1 | student | highest-volume student visa, proves template at scale |
| f1-opt | F-1 OPT | student | own record, parentVisaId → f1, tests cross-linking |
| m1 | M-1 | student | distinct process, low effort once F-1 exists |
| h1b | H-1B | work | highest-demand work visa, proves template on a competitive keyword |
| l1 | L-1 | work | combined A/B tracks in one record |
| e2 | E-2 | work | high-value audience, sets up Phase 5 finance fit |

---

## 9. Honest Note on Timeline

Building the site — scaffold, 10 pages, deploy — can realistically happen in a few days if the agent has content for the JSON files ready to go. That part is achievable independent of naming.

**Organic Google traffic in one week is not realistic for a brand-new domain**, even with everything in Section 5 done correctly. What typically happens instead:
- A new domain usually takes 1–4 weeks just to get crawled and indexed, even with manual sitemap submission.
- Ranking for competitive terms (H-1B, F-1) usually takes months, since established sites (USCIS, established immigration blogs) already rank there.
- The R-1/TN/H-2A/H-2B pages are the realistic near-term opportunity — genuinely low competition, so they can rank faster once indexed, in weeks rather than months.
- Any traffic in week one will most likely come from sources other than organic Google search: direct shares, a Reddit/forum post, a social post, or a link from somewhere else — not from search ranking.
- Search Console/Bing submission (Phase 1D, step 17) can't happen until the domain is locked in, which pushes the earliest possible indexing date out by however long naming takes — worth deciding the name/domain soon rather than treating it as a low-priority afterthought.

None of this means the plan is wrong — it's a sound plan. It just means "traffic starts in a week" should be read as "the site is live and indexable in a week," not "Google will be sending visitors in a week." Building Phase 1D/1E/1F correctly (sitemap, structured data, manual Search Console submission) is exactly what shortens the gap between launch and first real search traffic.

---

## 10. Definition of Done for Phase 1

- [ ] All 10 visa pages live at `/visas/{category}/{visaId}` and pass a manual fact-check (no `CHECK:` placeholders left in fees/timeline)
- [ ] Homepage selector routes correctly into all seven categories from `categories.json`
- [ ] Sitemap.xml and robots.txt live and correct, built from `siteConfig.domain`
- [ ] No brand name is hardcoded anywhere outside `lib/siteConfig.ts` and its env vars
- [ ] Legal disclaimer present in the footer and on every visa page
- [ ] Site submitted in Google Search Console and Bing Webmaster Tools (once domain is finalized)
- [ ] Lighthouse Performance + SEO both 90+, `next build` clean with no type/lint errors
- [ ] Privacy policy and About/Contact pages live
- [ ] No finance/affiliate/ad content anywhere yet (`financeBlock` is `null` on every record)

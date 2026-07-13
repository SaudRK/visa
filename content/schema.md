# Visa Content Schema

Each visa record lives in `/content/visas/{id}.json`. The `id` matches the filename and is used in URLs: `/visas/{category-slug}/{id}`.

Extended Phase 1 content fields (beyond the original launch schema) are included so each page can answer practical applicant questions without inventing new page templates.

```json
{
  "id": "h1b",
  "code": "H-1B",
  "name": "H-1B Specialty Occupation Visa",
  "category": "work",
  "parentVisaId": null,
  "quickAnswer": "2-3 sentence overview",
  "whoIsFor": ["bullet"],
  "whoShouldNotApply": ["bullet"],
  "eligibility": ["bullet"],
  "denialReasons": ["bullet"],
  "commonMistakes": ["bullet"],
  "processSteps": [
    { "step": 1, "title": "string", "description": "string", "timeframe": "string" }
  ],
  "fees": [
    { "name": "string", "amount": "string", "payer": "employer | applicant", "note": "optional" }
  ],
  "documents": [
    { "item": "document name", "why": "why it matters" }
  ],
  "timelineText": "processing range as prose",
  "timelineUpdatedDate": "2026-07",
  "lastReviewedDate": "2026-07-14",
  "validityPeriod": "how long status lasts",
  "extensionInfo": "extension / renewal guidance",
  "employmentRights": "work authorization and limits",
  "travelRestrictions": "travel and reentry notes",
  "importantDeadlines": ["deadline note"],
  "dependentsText": "family and dependents",
  "tips": [{ "title": "string", "body": "string" }],
  "didYouKnow": ["insight"],
  "faqs": [{ "question": "string", "answer": "string" }],
  "relatedVisaIds": ["l1"],
  "relatedWhen": [{ "visaId": "l1", "when": "when to choose this instead" }],
  "sourceUrl": "https://www.uscis.gov/...",
  "financeBlock": null
}
```

## Category values

One of: `visitor`, `student`, `work`, `family-fiance`, `family-green-card`, `employment-green-card`, `humanitarian`

## URL mapping

Category `slug` from `categories.json` is used in URLs, not the category `id`. Example: F-1 student visa → `/visas/study/f1`.

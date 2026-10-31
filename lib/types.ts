export type VisaCategory =
  | "visitor"
  | "student"
  | "work"
  | "family-fiance"
  | "family-green-card"
  | "employment-green-card"
  | "humanitarian";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  timeframe: string;
}

export interface Fee {
  name: string;
  amount: string;
  payer: "employer" | "applicant";
  note?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface DocumentItem {
  item: string;
  why: string;
}

export interface Tip {
  title: string;
  body: string;
}

export interface Visa {
  id: string;
  code: string;
  name: string;
  category: VisaCategory;
  parentVisaId: string | null;
  quickAnswer: string;
  /**
   * Search-result copy for this page. Authored rather than derived, because
   * clamping `quickAnswer` to 155 characters produces explanatory prose aimed
   * at a reader who has already arrived. Falls back to the clamp when absent.
   */
  metaDescription?: string;
  /**
   * Search terms this guide targets — the code as people type it ("h1b visa
   * requirements"), plus the long-tail variants Google autocompletes for it.
   * Emitted as meta keywords, og:article:tag, and Article.keywords. Falls back
   * to a generated set from `code` when absent.
   */
  keywords?: string[];
  whoIsFor: string[];
  whoShouldNotApply: string[];
  eligibility: string[];
  denialReasons: string[];
  commonMistakes: string[];
  processSteps: ProcessStep[];
  fees: Fee[];
  documents: DocumentItem[];
  timelineText: string;
  timelineUpdatedDate: string;
  /** Date of the last full editorial review of the whole guide. */
  lastReviewedDate: string;
  /**
   * Dated corrections made since that review — a changed fee or rule checked
   * against its official source, without re-reviewing the rest of the page.
   * Shown beside the review stamp so the stamp never claims more than was
   * checked, and the newest one becomes the page's modified date.
   */
  updates?: { date: string; note: string; sourceUrl?: string }[];
  validityPeriod: string;
  extensionInfo: string;
  employmentRights: string;
  travelRestrictions: string;
  importantDeadlines: string[];
  dependentsText: string;
  tips: Tip[];
  didYouKnow: string[];
  faqs: Faq[];
  relatedVisaIds: string[];
  relatedWhen: { visaId: string; when: string }[];
  sourceUrl: string;
  financeBlock: null;
}

export interface Category {
  id: VisaCategory;
  label: string;
  slug: string;
  /** On-page lede. Also the fallback meta description. */
  description: string;
  /** Overrides the generated "US {label}: Types & Requirements" title. */
  seoTitle?: string;
  /** Overrides the generated "US {label}" H1. */
  h1?: string;
  /** Overrides the clamped `description` as search-result copy. */
  metaDescription?: string;
  /** Search terms for the category hub. Falls back to a set built from `label`. */
  keywords?: string[];
  /**
   * Explanatory copy under the lede. Without it a hub is a heading plus a list
   * of links — a thin page Google crawls and then declines to index.
   */
  intro?: string[];
  /** Questions the hub genuinely answers. Rendered and emitted as FAQPage. */
  faqs?: Faq[];
}

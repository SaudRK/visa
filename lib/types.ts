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
  lastReviewedDate: string;
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
  description: string;
}

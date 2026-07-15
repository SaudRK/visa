export type SectionId =
  | "banking"
  | "taxes"
  | "send-money"
  | "investing"
  | "insurance"
  | "calculators"
  | "visa-guides";

export interface ContentLink {
  title: string;
  href: string;
  description: string;
  priority?: "phase1" | "phase2" | "phase3";
  status?: "live" | "soon";
}

export interface SectionMeta {
  id: SectionId;
  label: string;
  href: string;
  description: string;
  links: ContentLink[];
}

export const sections: SectionMeta[] = [
  {
    id: "banking",
    label: "Banking & Credit",
    href: "/banking",
    description:
      "Open accounts, build U.S. credit history, and understand cards, loans, and mortgages without a long credit file.",
    links: [
      {
        title: "Best banks for immigrants",
        href: "/banking/best-banks",
        description: "Account options when you are new to the U.S. banking system.",
        priority: "phase1",
        status: "soon",
      },
      {
        title: "How to build credit as an immigrant",
        href: "/banking/build-credit",
        description: "A practical path from first tradeline to a usable score.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "Best credit cards for newcomers",
        href: "/banking/credit-cards",
        description: "Starter cards, ITIN options, and what to avoid.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "Credit builder loans",
        href: "/banking/credit-builder-loans",
        description: "When a builder product helps — and when it does not.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "ITIN mortgage guide",
        href: "/banking/itin-mortgage",
        description: "Home buying paths when you use an ITIN.",
        priority: "phase2",
        status: "soon",
      },
    ],
  },
  {
    id: "taxes",
    label: "Taxes",
    href: "/taxes",
    description:
      "Resident vs nonresident status, treaty basics, ITIN filing, FBAR/FATCA awareness, and visa-specific tax realities.",
    links: [
      {
        title: "H-1B tax guide",
        href: "/taxes/h1b",
        description: "Withholding, state taxes, and year-one surprises for workers.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "F-1 tax guide",
        href: "/taxes/f1",
        description: "Student filing rules, treaties, and OPT/CPT income basics.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "ITIN application overview",
        href: "/taxes/itin",
        description: "When you need an ITIN and how the process typically works.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "Resident vs nonresident alien",
        href: "/taxes/resident-vs-nonresident",
        description: "How presence and visa status can change your tax world.",
        priority: "phase1",
        status: "soon",
      },
      {
        title: "FBAR guide",
        href: "/taxes/fbar",
        description: "Foreign account reporting thresholds explained plainly.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "FATCA guide",
        href: "/taxes/fatca",
        description: "Form 8938 basics for people with foreign assets.",
        priority: "phase2",
        status: "soon",
      },
    ],
  },
  {
    id: "send-money",
    label: "Send Money Home",
    href: "/send-money",
    description:
      "Compare transfer apps, understand fees and FX spreads, and plan remittances without surprises.",
    links: [
      {
        title: "Wise vs Remitly vs Western Union",
        href: "/send-money/comparison",
        description: "A clear comparison of popular remittance options.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "Best transfer apps",
        href: "/send-money/best-apps",
        description: "Speed, fees, and corridors that matter to newcomers.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "Remittance fee calculator",
        href: "/calculators/remittance",
        description: "Estimate fee and FX cost before you send.",
        priority: "phase1",
        status: "live",
      },
    ],
  },
  {
    id: "investing",
    label: "Investing",
    href: "/investing",
    description:
      "Brokerage access on a visa, retirement accounts, and what happens to U.S. accounts if you leave.",
    links: [
      {
        title: "Investing on a visa",
        href: "/investing/on-a-visa",
        description: "What is commonly allowed and what to confirm with counsel.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "H-1B and Roth IRA basics",
        href: "/investing/h1b-roth-ira",
        description: "Eligibility patterns and pitfalls for temporary workers.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "Brokerages for nonresidents",
        href: "/investing/brokerages",
        description: "Account types and documentation newcomers often need.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "What happens to a 401(k) if you leave",
        href: "/investing/401k-if-you-leave",
        description: "Options people weigh when departing the U.S.",
        priority: "phase2",
        status: "soon",
      },
    ],
  },
  {
    id: "insurance",
    label: "Insurance",
    href: "/insurance",
    description:
      "Health, life, and auto coverage considerations when your U.S. history is still short.",
    links: [
      {
        title: "Health insurance for visa holders",
        href: "/insurance/health",
        description: "Marketplace, employer, and student plan basics.",
        priority: "phase3",
        status: "soon",
      },
      {
        title: "Life insurance for immigrants",
        href: "/insurance/life",
        description: "When coverage matters for family abroad and in the U.S.",
        priority: "phase3",
        status: "soon",
      },
      {
        title: "Car insurance with no U.S. history",
        href: "/insurance/auto",
        description: "How insurers treat foreign driving records.",
        priority: "phase3",
        status: "soon",
      },
    ],
  },
  {
    id: "calculators",
    label: "Calculators",
    href: "/calculators",
    description:
      "Free tools built for immigrant money decisions — remittances, taxes, and residency tests.",
    links: [
      {
        title: "Remittance fee calculator",
        href: "/calculators/remittance",
        description: "Compare estimated send costs across common fee models.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "H-1B tax estimator",
        href: "/calculators/h1b-tax",
        description: "Rough federal, state, and FICA estimates for planning.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "Substantial presence test",
        href: "/calculators/substantial-presence",
        description: "Apply the IRS day-count formula for tax residency.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "F-1 OPT tax calculator",
        href: "/calculators/f1-opt-tax",
        description: "Estimate taxes on OPT/CPT income for students.",
        priority: "phase1",
        status: "soon",
      },
    ],
  },
  {
    id: "visa-guides",
    label: "Visa Guides",
    href: "/visa-guides",
    description:
      "Financial playbooks by status — what to do with banking, taxes, and investing once you know your visa path.",
    links: [
      {
        title: "H-1B financial guide",
        href: "/visa-guides/h1b",
        description: "Money systems to set up in your first year of H-1B work.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "F-1 financial guide",
        href: "/visa-guides/f1",
        description: "Banking, taxes, and OPT money basics for students.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "Green card financial guide",
        href: "/visa-guides/green-card",
        description: "Credit, mortgages, and retirement after permanent residence.",
        priority: "phase2",
        status: "soon",
      },
      {
        title: "L-1 financial guide",
        href: "/visa-guides/l1",
        description: "Intracompany transfer money decisions and dual-country planning.",
        priority: "phase2",
        status: "soon",
      },
    ],
  },
];

export function getSection(id: SectionId) {
  return sections.find((s) => s.id === id);
}

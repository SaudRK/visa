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

export interface SectionFaq {
  question: string;
  answer: string;
}

export interface SectionMeta {
  id: SectionId;
  /** Short nav/card label. */
  label: string;
  href: string;
  description: string;
  /**
   * On-page H1. Deliberately separate from `label`: the nav needs "Banking",
   * but the heading has to state the page's actual topic so it matches the
   * title tag and the query it answers.
   */
  h1: string;
  /** Real introductory copy. A hub with only a card grid is a thin page. */
  intro: string[];
  /** Optional Q&As covering the queries this hub genuinely answers. */
  faqs?: SectionFaq[];
  links: ContentLink[];
}

export const sections: SectionMeta[] = [
  {
    id: "banking",
    label: "Banking & Credit",
    href: "/banking",
    description:
      "How to open a US bank account without an SSN and build credit history as a newcomer — starter cards, ITIN options, and what lenders look for.",
    h1: "Banking and credit for immigrants in the US",
    intro: [
      "Two things surprise almost everyone who moves to the United States: how much of daily life runs through a bank account, and how little your financial history from home counts for. Credit files are national. A decade of perfect repayment in another country usually does not transfer, so landlords, lenders, and card issuers see a blank file on day one.",
      "That blank file is temporary, but the order you tackle it in matters. Opening the wrong products early can leave you with fees you cannot cancel, a hard-pulled credit report, and nothing to show for it. The guides here walk through the sequence that generally works — a primary account you keep, one card you can pay in full, and patience while the file ages.",
      "Nothing on this page is a product recommendation dressed up as advice. Where a product category is genuinely useful we explain what it does and what it costs you, including the cases where the answer is to wait.",
    ],
    faqs: [
      {
        question: "Can I open a US bank account without an SSN?",
        answer:
          "Many banks accept an ITIN, and some accept a passport plus proof of address, because federal rules require identity verification rather than an SSN specifically. Policy varies by bank and sometimes by branch, so it is worth calling ahead and asking which documents that institution accepts for a non-citizen applicant. Bring your passport, visa documentation, and proof of a US address.",
      },
      {
        question: "How long does it take to build a US credit score?",
        answer:
          "Most scoring models need about six months of reported activity on at least one account before they can generate a score at all. Reaching a score that unlocks good rates on cards, car loans, or a mortgage usually takes longer — often one to two years of on-time payments and low balances. Time is the ingredient you cannot shortcut.",
      },
      {
        question: "Does carrying a balance help my credit score?",
        answer:
          "No. This is one of the most expensive myths for newcomers. Credit scores reward on-time payments and low utilisation, not interest paid. Paying your statement in full every month builds history just as effectively as carrying a balance, and costs you nothing in interest.",
      },
    ],
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
      "US taxes for visa holders and immigrants — resident vs nonresident status, the substantial presence test, treaties, ITINs, and FBAR.",
    h1: "US taxes for visa holders and immigrants",
    intro: [
      "US tax status is not the same thing as immigration status, and confusing the two is the single most common source of expensive mistakes. You can hold a nonimmigrant visa and still be a resident for tax purposes, which generally means reporting worldwide income rather than just what you earned in the United States.",
      "What decides it is usually the substantial presence test — a weighted count of days physically present across three years — with exceptions for certain student and exchange categories. Get that determination right first, because it drives which forms you file, which treaty benefits you can claim, and whether foreign accounts need reporting.",
      "These guides explain the concepts and the vocabulary so you can have a productive conversation with tax software or a professional. They are not a substitute for either, particularly in a dual-status year or when a treaty is in play.",
    ],
    faqs: [
      {
        question: "Am I a resident or nonresident for US tax purposes?",
        answer:
          "For most people it comes down to the substantial presence test: days in the US this year, plus one third of last year's days, plus one sixth of the year before. Reaching 183 weighted days generally makes you a resident for tax purposes, though F and J categories can exclude certain exempt days in their early years, and a closer-connection exception may apply. Our substantial presence calculator walks through the arithmetic.",
      },
      {
        question: "Do I have to file a US tax return if I earned nothing?",
        answer:
          "Possibly. Nonresidents in certain visa categories may still have a filing obligation even with no US income, and scholarship or stipend income can create one where wages did not. Filing when not strictly required is also often harmless and creates a paper trail. Check your specific category rather than assuming zero income means zero paperwork.",
      },
      {
        question: "What is an ITIN and do I need one?",
        answer:
          "An Individual Taxpayer Identification Number lets people who are not eligible for a Social Security number meet US tax filing obligations. If you are eligible for an SSN you should get that instead. ITINs are commonly needed by dependants and by people with US tax obligations but no work authorisation.",
      },
      {
        question: "Do I need to report my bank accounts back home?",
        answer:
          "If you are a US person for tax purposes and your foreign financial accounts exceed certain aggregate thresholds at any point in the year, FBAR and possibly FATCA reporting apply. These are separate from your tax return, have their own deadlines, and carry meaningful penalties for non-filing — so they are worth checking even if the accounts are small and dormant.",
      },
    ],
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
        status: "live",
      },
      {
        title: "Resident vs nonresident alien",
        href: "/taxes/resident-vs-nonresident",
        description: "How presence and visa status can change your tax world.",
        priority: "phase1",
        status: "live",
      },
      {
        title: "FBAR guide",
        href: "/taxes/fbar",
        description: "Foreign account reporting thresholds explained plainly.",
        priority: "phase2",
        status: "live",
      },
      {
        title: "FATCA guide",
        href: "/taxes/fatca",
        description: "Form 8938 basics for people with foreign assets.",
        priority: "phase2",
        status: "live",
      },
    ],
  },
  {
    id: "send-money",
    label: "Send Money Home",
    href: "/send-money",
    description:
      "The cheapest way to send money home from the USA — compare transfer fees, exchange rate markups, and delivery speed before you pick a provider.",
    h1: "Sending money home from the United States",
    intro: [
      "The advertised fee is rarely what a transfer actually costs. Most providers make money in two places: the upfront fee and the margin they add to the exchange rate. A service promoting “zero fees” can easily be the most expensive option once you compare the rate you receive against the mid-market rate.",
      "The practical habit is to compare total cost — what actually lands in the recipient's account — rather than the headline fee. That number changes with the corridor you are sending to, the amount, the payment method, and how fast you need it to arrive.",
      "Our remittance calculator lets you model the common fee structures side by side so you can see how a wide exchange rate margin outweighs a small flat fee. Run your real amount before you commit to a provider.",
    ],
    faqs: [
      {
        question: "What is the cheapest way to send money home from the US?",
        answer:
          "It depends on the destination country, the amount, and how you pay. As a rule, bank-account-funded transfers on mid-market-rate providers cost less than card-funded transfers or cash pickup, and larger amounts favour providers charging a percentage margin over those charging flat fees. The only reliable method is to compare the amount received across two or three providers on the day you send.",
      },
      {
        question: "Why is the exchange rate different from what I see on Google?",
        answer:
          "The rate on Google is the mid-market rate — the midpoint between buy and sell prices in the interbank market. Most consumer providers add a margin to that rate and keep the difference. This margin is often the largest part of what a transfer costs you, and it is not always disclosed as a fee.",
      },
      {
        question: "Are there limits on how much money I can send home?",
        answer:
          "Providers set their own transfer limits, and larger amounts trigger additional identity and source-of-funds verification. Separately, large gifts and transfers can carry US tax reporting implications depending on who is sending and receiving. Sending your own after-tax income to your own family is ordinary, but very large or unusual transfers are worth discussing with a tax professional.",
      },
    ],
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
      "Investing in the US on a visa — can H-1B holders buy stocks, 401(k) and Roth IRA rules, brokerage access, and what happens to your accounts if you leave.",
    h1: "Investing in the US while on a visa",
    intro: [
      "Holding a temporary visa does not, by itself, stop you from investing in the United States. Brokerage accounts, employer retirement plans, and index funds are generally available to visa holders who can satisfy identity and tax documentation requirements. The complications are rarely about permission — they are about tax treatment and what happens when you leave.",
      "Two questions matter more than picking investments. First, does your employer match retirement contributions? An unmatched decision about which fund to hold is far less consequential than leaving free matching money on the table. Second, what happens to each account if you move abroad, since some brokerages restrict or close accounts for non-US-resident holders.",
      "These guides cover the mechanics and the questions worth asking before you fund an account. Which specific investments suit you depends on facts we cannot see, and on your tax residency — which is why the tax section comes first.",
    ],
    faqs: [
      {
        question: "Can H-1B holders invest in US stocks?",
        answer:
          "Generally yes. Buying and selling publicly traded securities is passive investment income, not unauthorised employment, so it does not conflict with H-1B work restrictions. Active day trading as a business, however, sits in murkier territory, and running an investment business would be a different question — worth confirming with an immigration attorney if that is your plan.",
      },
      {
        question: "Should I contribute to a 401(k) if I might leave the US?",
        answer:
          "An employer match is usually worth capturing even for a short stay, because it is an immediate return no market can guarantee. What needs planning is the exit: you can typically leave the account invested, roll it over, or withdraw it with tax and early-withdrawal consequences. Understand which option you would use before you decide how much to contribute.",
      },
      {
        question: "What happens to my brokerage account if I leave the US?",
        answer:
          "It varies by institution. Some brokerages let non-resident clients keep accounts with restrictions on new purchases, some require transfer to an international arm, and some close accounts entirely. Because the answer is provider-specific, ask your brokerage directly before you move rather than after.",
      },
    ],
    links: [
      {
        title: "Investing on a visa",
        href: "/investing/on-a-visa",
        description: "What is commonly allowed and what to confirm with counsel.",
        priority: "phase2",
        status: "live",
      },
      {
        title: "H-1B and Roth IRA basics",
        href: "/investing/h1b-roth-ira",
        description: "Eligibility patterns and pitfalls for temporary workers.",
        priority: "phase2",
        status: "live",
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
        status: "live",
      },
    ],
  },
  {
    id: "insurance",
    label: "Insurance",
    href: "/insurance",
    description:
      "Health, life, and car insurance for H-1B, F-1, and other visa holders and new immigrants — what coverage you need and why quotes start high.",
    h1: "Insurance for visa holders and new immigrants",
    intro: [
      "Insurance is where a short US history costs you real money. Health coverage is the urgent one, because an uninsured hospital visit in the United States can run to five figures, and coverage rules differ sharply depending on whether you are employed, studying, or between statuses.",
      "Car insurance is the one people find most unfair. Insurers price on the driving record they can verify, and most cannot verify a licence history from another country — so twenty years of clean driving abroad often produces a first-year quote priced like a new driver. There are ways to reduce that, and it does come down over time.",
      "These guides explain what each type of coverage is for, when it becomes urgent, and which questions get you a usable quote rather than a placeholder one.",
    ],
    faqs: [
      {
        question: "Do I need health insurance on a US visa?",
        answer:
          "Some visa categories and many universities require proof of coverage as a condition of status or enrolment. Even where it is not required, the financial exposure from going uninsured in the US is severe enough that coverage is effectively a necessity rather than an option. Check your specific category's requirements and your school's or employer's plan first.",
      },
      {
        question: "Why is my car insurance quote so high as a new immigrant?",
        answer:
          "Insurers price on verifiable risk history, and a foreign driving record usually cannot be verified through the databases they use. That means you are underwritten closer to an inexperienced driver regardless of your actual experience. Some insurers do accept a letter of experience from your previous insurer, which is worth requesting before you leave your home country.",
      },
      {
        question: "Can I get life insurance on a temporary visa?",
        answer:
          "Often yes, though underwriting is more involved and some insurers set minimum US residency periods or restrict certain visa categories. It matters most if people depend financially on your income — including family in another country. Expect questions about your status, your travel patterns, and how long you intend to remain.",
      },
    ],
    links: [
      {
        title: "Health insurance for visa holders",
        href: "/insurance/health",
        description: "Marketplace, employer, and student plan basics.",
        priority: "phase3",
        status: "live",
      },
      {
        title: "Life insurance for immigrants",
        href: "/insurance/life",
        description: "When coverage matters for family abroad and in the U.S.",
        priority: "phase3",
        status: "live",
      },
      {
        title: "Car insurance with no U.S. history",
        href: "/insurance/auto",
        description: "How insurers treat foreign driving records.",
        priority: "phase3",
        status: "live",
      },
    ],
  },
  {
    id: "calculators",
    label: "Calculators",
    href: "/calculators",
    description:
      "Free calculators for immigrants and visa holders — H-1B take-home pay, remittance costs, and the IRS substantial presence test.",
    h1: "Free calculators for immigrants and visa holders",
    intro: [
      "Most financial calculators assume you have always lived in the United States. These do not. They are built around the specific arithmetic newcomers actually need: what an offered salary becomes after federal, state, and FICA withholding; what a transfer home really costs once the exchange rate margin is counted; and whether your days in the country have made you a tax resident.",
      "All of them run entirely in your browser. Nothing you type is sent to a server, stored, or attached to an account, and there is no sign-up. They are planning tools built on published rates and formulas, which means they are useful for deciding and budgeting, and not a substitute for tax software or a professional when you file.",
    ],
    faqs: [
      {
        question: "How accurate is the H-1B tax calculator?",
        answer:
          "It is a planning estimate, not a filing figure. It applies federal brackets, the standard deduction, Social Security and Medicare, and an illustrative state rate to an annual salary. It does not model itemised deductions, tax credits beyond a simple dependant allowance, city taxes, equity compensation, or a dual-status year. Expect it to land within a few percent of a real paycheck for a straightforward W-2 salary, and treat anything more complicated as a reason to run proper software.",
      },
      {
        question: "Do the calculators store what I type?",
        answer:
          "No. Every calculation runs in your browser. Nothing is sent to a server, saved, or linked to you. If you reload the page, your inputs are gone, which is the trade-off for that privacy.",
      },
      {
        question: "Is there a tax calculator for F-1 students on OPT?",
        answer:
          "Yes. The F-1 OPT tax calculator estimates federal and state tax on OPT or CPT wages and lets you toggle the FICA exemption, which is the main way a nonresident student's paycheck differs from an H-1B one. If you have passed five calendar years in the US you are usually no longer exempt, and the calculator lets you model that too.",
      },
      {
        question: "Which calculator tells me if I am a US tax resident?",
        answer:
          "The substantial presence test calculator. Enter your days in the US for the current year and the two before it, and it applies the IRS weighting — all of this year, a third of last year, a sixth of the year before — against the 183-day threshold. F-1 and J-1 students should read the exempt-individual note on that page first, because their early years may not count.",
      },
    ],
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
        status: "live",
      },
    ],
  },
  {
    id: "visa-guides",
    label: "Visa Guides",
    href: "/visa-guides",
    description:
      "Money guides organised by visa status — what to set up, estimate, and avoid in your first year on an H-1B, F-1, or green card.",
    h1: "Money guides by visa status",
    intro: [
      "Your visa status changes almost every financial question you will ask in your first year: how you are taxed, which retirement accounts you can use, whether you can work a second job, and what happens to your accounts if you leave. Generic personal finance advice skips all of it.",
      "These guides are organised the way your situation actually is — by status. Each one covers what to set up in the first weeks, what to estimate before your first payslip, and which decisions can safely wait until you have settled.",
      "If you are still working out which status applies to you, start with the visa library, which covers requirements, process, fees, and timelines for each category.",
    ],
    faqs: [
      {
        question: "What should I set up financially in my first month in the US?",
        answer:
          "In roughly this order: a checking account at a bank that accepts your passport and visa documents, a Social Security number if your status allows one, your employer's payroll and W-4 withholding, and one starter credit card you can pay in full each month. Health coverage should be in place before any of that if your employer plan has a waiting period. Everything else — investing, sending money home efficiently, insurance beyond health — can wait until those four exist.",
      },
      {
        question: "Does my visa status change how I am taxed?",
        answer:
          "Indirectly. Tax residency is decided by the green card test and the substantial presence test, not by your visa category — but your category determines which days count. F-1 and J-1 students exclude their early years, so they often stay nonresident for tax purposes long after an H-1B holder on the same arrival date has become resident. That difference affects which return you file, whether you pay Social Security and Medicare, and whether your worldwide income is in scope.",
      },
      {
        question: "Can I keep my bank accounts and investments back home?",
        answer:
          "Yes, but once you are a US tax resident they may need reporting. Foreign accounts whose combined value passes the FBAR threshold at any point in the year must be reported to FinCEN, and larger holdings may also trigger FATCA reporting on your tax return. Keeping the accounts is fine; forgetting to report them is what costs people money.",
      },
    ],
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
        status: "live",
      },
      {
        title: "L-1 financial guide",
        href: "/visa-guides/l1",
        description: "Intracompany transfer money decisions and dual-country planning.",
        priority: "phase2",
        status: "live",
      },
    ],
  },
];

export function getSection(id: SectionId) {
  return sections.find((s) => s.id === id);
}

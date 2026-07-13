const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "content", "visas");

const reviewed = {
  lastReviewedDate: "2026-07-14",
  timelineUpdatedDate: "2026-07",
  financeBlock: null,
};

function write(visa) {
  fs.writeFileSync(
    path.join(dir, `${visa.id}.json`),
    JSON.stringify({ ...reviewed, ...visa }, null, 2)
  );
  console.log("wrote", visa.id);
}

write({
  id: "e2",
  code: "E-2",
  name: "E-2 Treaty Investor Visa",
  category: "work",
  parentVisaId: null,
  quickAnswer:
    "The E-2 visa allows nationals of qualifying treaty countries to enter the U.S. to develop and direct a business in which they have invested — or are actively investing — a substantial amount of capital at risk. There is no fixed dollar minimum, but the investment must be proportional, committed, and more than marginal.",
  whoIsFor: [
    "Citizens of E-2 treaty countries investing in and directing a U.S. business",
    "Investors who can show funds are lawful, at risk, and already committed",
    "Owners with at least 50% ownership or operational control of the enterprise",
    "Essential treaty-national employees of a qualifying E-2 enterprise in some cases",
  ],
  whoShouldNotApply: [
    "Nationals of countries without an E-2 treaty with the United States",
    "People with only passive, speculative, or uncommitted funds",
    "Businesses that exist solely to earn a living for the investor and family with little growth potential",
    "Applicants seeking a direct green card path through E-2 alone",
  ],
  eligibility: [
    "Treaty-country nationality",
    "Substantial investment that is irrevocably committed and at risk",
    "A real, operating or nearly operating commercial enterprise",
    "Investor coming to develop and direct the business",
    "Enterprise that is more than marginal — generally expected to generate more than minimal living income and/or contribute meaningfully to the U.S. economy",
  ],
  denialReasons: [
    "Investment not substantial relative to the business cost",
    "Funds not clearly sourced or not yet at risk",
    "Business plan that looks speculative or nonviable",
    "Investor lacks control or a credible directing role",
    "Paper company with little evidence of real operations",
  ],
  commonMistakes: [
    "Parking money in a bank account and calling it an investment",
    "Under-documenting the lawful source of funds",
    "Submitting a template business plan with generic projections",
    "Assuming any dollar amount automatically qualifies",
  ],
  processSteps: [
    {
      step: 1,
      title: "Structure the enterprise and move capital at risk",
      description:
        "Form the company, execute leases or purchases, and place funds into committed business expenses or qualifying escrow structures.",
      timeframe: "Several weeks to months",
    },
    {
      step: 2,
      title: "Assemble the E-2 evidence package",
      description:
        "Compile nationality proof, source of funds, investment tracing, ownership documents, and a detailed business plan.",
      timeframe: "2–6 weeks",
    },
    {
      step: 3,
      title: "Apply at a U.S. consulate or file for change of status",
      description:
        "Most applicants consular process. Change of status via Form I-129 is possible for some people already in the U.S., but travel later still needs a visa stamp.",
      timeframe: "Post-dependent; often weeks after submission",
    },
    {
      step: 4,
      title: "Maintain and renew the E-2 enterprise",
      description:
        "Keep the business operating, document growth and staffing when possible, and renew before status ends.",
      timeframe: "Renewable indefinitely while requirements continue",
    },
  ],
  fees: [
    {
      name: "MRV visa application fee",
      amount: "$205",
      payer: "applicant",
    },
    {
      name: "Form I-129 fee for change/extend in U.S.",
      amount: "Varies",
      payer: "applicant",
      note: "Confirm current USCIS fees if filing inside the U.S.",
    },
    {
      name: "Visa issuance/reciprocity fee",
      amount: "Varies by nationality",
      payer: "applicant",
    },
  ],
  documents: [
    {
      item: "Passport showing treaty nationality",
      why: "E-2 nationality is mandatory.",
    },
    {
      item: "Business plan with actionable financials",
      why: "Shows viability, job creation potential, and the investor’s directing role.",
    },
    {
      item: "Wire trails, purchase contracts, leases, and invoices",
      why: "Prove the investment is real, committed, and at risk.",
    },
    {
      item: "Source-of-funds evidence",
      why: "Officers need a clean story of where the capital came from.",
    },
    {
      item: "Corporate formation and ownership documents",
      why: "Establish control and the existence of a bona fide enterprise.",
    },
  ],
  timelineText:
    "Well-prepared consular E-2 cases are often decided within weeks of the interview, but packaging the investment evidence takes longer than applicants expect. Change-of-status filings through USCIS follow petition processing times and do not produce a visa stamp for travel.",
  validityPeriod:
    "Visa validity depends on reciprocity with your country. Admission is typically granted in increments of up to two years and can be renewed while the enterprise continues to qualify.",
  extensionInfo:
    "Renewals require proof the business is still operating and the investor still directs it. Weak revenue, dormancy, or unexplained fund changes are common renewal problems.",
  employmentRights:
    "The E-2 investor works in furtherance of the treaty enterprise. Certain essential employees of the same nationality may also qualify. E-2 spouses may apply for work authorization.",
  travelRestrictions:
    "Reentry requires a valid E-2 visa stamp (unless visa-exempt) and continuing evidence of the enterprise. Avoid long absences that undermine the “develop and direct” narrative.",
  importantDeadlines: [
    "Do not claim funds still sitting unused in personal accounts as committed investment",
    "Start renewal evidence collection months before expiry",
    "If using change of status, plan travel carefully because you still need consular stamping later",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may receive E-2 dependent status. Spouses can apply for employment authorization. Children may study but generally cannot work.",
  tips: [
    {
      title: "Trace every dollar",
      body: "Source-of-funds and path-of-funds charts win or lose close cases. Make the money trail boringly clear.",
    },
    {
      title: "Invest before you apply when possible",
      body: "Paper commitments without irrevocable placement of capital are a frequent weak point.",
    },
  ],
  didYouKnow: [
    "There is no official minimum investment amount — proportionality and risk matter more than a magic number.",
    "E-2 is temporary and renewable, but it is not a direct substitute for EB-5 or other immigrant investor paths.",
  ],
  faqs: [
    {
      question: "How much do I need to invest?",
      answer:
        "No fixed minimum. The investment must be substantial relative to the total cost of the business and sufficient to ensure the investor’s financial commitment to success.",
    },
    {
      question: "Which nationalities qualify?",
      answer:
        "Only nationals of countries with an E-2 treaty. Some major economies, including India and mainland China, do not currently have E-2 treaties.",
    },
    {
      question: "Can E-2 lead to a green card?",
      answer:
        "Not directly. Some investors later pursue EB-5, employment-based, or family-based immigrant options, each with separate rules.",
    },
    {
      question: "Can employees get E-2 too?",
      answer:
        "Yes, in some cases — executives, supervisors, or essential-skills employees who share the treaty nationality of the owning enterprise.",
    },
  ],
  relatedVisaIds: ["l1", "h1b", "tn"],
  relatedWhen: [
    {
      visaId: "l1",
      when: "Choose L-1 if you are transferring as a manager or specialized worker within an existing multinational group.",
    },
    {
      visaId: "h1b",
      when: "Choose H-1B for specialty employment with an employer sponsor rather than an investor path.",
    },
    {
      visaId: "tn",
      when: "Choose TN for listed professional employment if you are Canadian or Mexican and not investing.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/temporary-workers/e-2-treaty-investors",
});

write({
  id: "r1",
  code: "R-1",
  name: "R-1 Religious Worker Visa",
  category: "work",
  parentVisaId: null,
  quickAnswer:
    "The R-1 visa allows a foreign national to work temporarily in the U.S. as a minister or in a religious occupation for a bona fide nonprofit religious organization. Initial stays can reach 30 months, with extensions possible up to five years total, and USCIS may conduct a site visit.",
  whoIsFor: [
    "Ministers and religious workers with at least two years of recent membership in the denomination",
    "People coming to work at least part-time for a qualifying U.S. nonprofit religious organization",
    "Organizations that can prove tax-exempt religious status and ability to compensate the worker",
  ],
  whoShouldNotApply: [
    "Applicants without the required two-year membership history",
    "Roles that are primarily secular even if hosted by a religious organization",
    "Organizations unable to document 501(c)(3) religious nonprofit status",
    "People seeking immediate permanent residence as the sole strategy without meeting immigrant religious-worker rules",
  ],
  eligibility: [
    "Membership in a religious denomination with a bona fide U.S. nonprofit religious organization for at least two years immediately before filing",
    "Coming to work as a minister or in a qualifying religious occupation",
    "At least 20 hours per week of compensated work for the petitioning organization",
    "Petitioning organization must be a bona fide nonprofit religious organization in the United States",
  ],
  denialReasons: [
    "Organization cannot prove qualifying religious nonprofit status",
    "Duties appear secular rather than religious",
    "Insufficient evidence of two-year membership",
    "Compensation or work-hour claims not supported",
    "Adverse findings from a USCIS site inspection",
  ],
  commonMistakes: [
    "Underestimating documentation of the religious nature of daily duties",
    "Weak proof of denomination membership timeline",
    "Assuming volunteer-only arrangements satisfy compensation rules",
    "Changing organizations without a new petition",
  ],
  processSteps: [
    {
      step: 1,
      title: "Confirm organizational eligibility and role",
      description:
        "Verify tax-exempt religious status, job duties, schedule, and compensation structure before filing.",
      timeframe: "1–3 weeks",
    },
    {
      step: 2,
      title: "File Form I-129 with supporting religious evidence",
      description:
        "Include denominational membership proof, organizational documents, and a detailed work description.",
      timeframe: "Preparation often several weeks",
    },
    {
      step: 3,
      title: "Complete any USCIS site visit and adjudication",
      description:
        "USCIS may inspect the premises. Premium processing may be available for faster decisions.",
      timeframe: "Weeks to months",
    },
    {
      step: 4,
      title: "Consular process or activate change of status",
      description:
        "Abroad, apply for an R-1 visa stamp after approval. Inside the U.S., change of status may be requested if eligible.",
      timeframe: "Additional weeks after approval",
    },
  ],
  fees: [
    {
      name: "Form I-129 filing fee",
      amount: "$460",
      payer: "employer",
      note: "Confirm current fee schedule.",
    },
    {
      name: "Asylum Program Fee (if applicable)",
      amount: "Varies",
      payer: "employer",
    },
    {
      name: "Premium processing (optional)",
      amount: "$2,805",
      payer: "employer",
    },
    {
      name: "MRV fee for consular applicants",
      amount: "$205",
      payer: "applicant",
    },
  ],
  documents: [
    {
      item: "IRS determination letter or equivalent nonprofit evidence",
      why: "Shows the petitioner is a bona fide tax-exempt religious organization.",
    },
    {
      item: "Letter detailing religious duties and compensation",
      why: "Establishes that the role is religious and paid according to the rules.",
    },
    {
      item: "Proof of two-year denominational membership",
      why: "Statutory membership requirement.",
    },
    {
      item: "Evidence of religious training or credentials",
      why: "Supports fitness for ministerial or religious occupational duties.",
    },
    {
      item: "Passport and status history",
      why: "Needed for petition and visa processing.",
    },
  ],
  timelineText:
    "R-1 timelines often exceed simple petition estimates because of possible site visits and detailed documentation review. Initial status can be granted for up to 30 months. Plan well ahead of intended start dates.",
  validityPeriod:
    "Initial R-1 admission or approval may run up to 30 months. Total stay is generally capped at five years.",
  extensionInfo:
    "Extensions require continued proof of the religious role, organizational status, and compensation. Track the five-year maximum carefully.",
  employmentRights:
    "You may work only for the petitioning religious organization in the approved religious capacity. A new organization requires a new petition.",
  travelRestrictions:
    "International travel typically requires a valid R-1 visa stamp and approval documents. Coordinate travel with pending petitions.",
  importantDeadlines: [
    "Do not begin work before status or admission authorizes it",
    "Prepare extension evidence early — religious-worker proof ages poorly if left to the last month",
    "Remember the five-year total limit",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may seek R-2 status. R-2 dependents may study but cannot work.",
  tips: [
    {
      title: "Document religious duties in daily-language detail",
      body: "Generic claims like “church work” invite RFEs. Describe liturgies, teaching, counseling, or other religious functions specifically.",
    },
    {
      title: "Prepare for a site visit as if it will happen",
      body: "Premises, schedules, and staff knowledge should match the petition narrative.",
    },
  ],
  didYouKnow: [
    "Some religious workers later explore special immigrant (EB-4) options after qualifying employment, subject to separate rules and visa-number limits.",
    "USCIS site inspections are a normal risk factor in R-1 cases — not a rare exception.",
  ],
  faqs: [
    {
      question: "What is the difference between a minister and a religious worker?",
      answer:
        "Ministers are authorized to conduct religious worship as clergy. Religious workers may perform religious occupations that are not ministerial but still primarily religious.",
    },
    {
      question: "Can I change religious employers?",
      answer:
        "Only after a new petition is approved for the new organization. Do not start with a new employer early.",
    },
    {
      question: "How long can I stay on R-1?",
      answer:
        "Up to 30 months initially, with extensions possible to a maximum of five years total in most cases.",
    },
    {
      question: "Is there a green card path?",
      answer:
        "Potentially through special immigrant religious worker categories after meeting separate requirements. It is not automatic with R-1 approval.",
    },
  ],
  relatedVisaIds: ["h1b", "h2a", "h2b"],
  relatedWhen: [
    {
      visaId: "h1b",
      when: "Choose H-1B for secular specialty occupations with a bachelor’s-degree professional role.",
    },
    {
      visaId: "h2a",
      when: "Choose H-2A for temporary agricultural work, not religious employment.",
    },
    {
      visaId: "h2b",
      when: "Choose H-2B for temporary non-agricultural seasonal or peak-load work.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/temporary-workers/r-1-nonimmigrant-religious-workers",
});

write({
  id: "h2a",
  code: "H-2A",
  name: "H-2A Temporary Agricultural Worker Visa",
  category: "work",
  parentVisaId: null,
  quickAnswer:
    "H-2A lets U.S. employers hire foreign nationals for temporary or seasonal agricultural work when enough qualified U.S. workers are unavailable. Employers must obtain a temporary labor certification from the Department of Labor before filing with USCIS. There is no annual numerical cap like H-2B.",
  whoIsFor: [
    "Agricultural employers with temporary or seasonal labor needs",
    "Workers from eligible countries who will fill certified H-2A roles",
    "Operations prepared to meet wage, housing, and recruitment obligations",
  ],
  whoShouldNotApply: [
    "Employers seeking permanent year-round staffing through H-2A",
    "Workers hoping for open U.S. employment unrelated to the certified job",
    "Non-agricultural roles (those may belong under H-2B if temporary need exists)",
  ],
  eligibility: [
    "Job must be temporary or seasonal agricultural work",
    "Employer must show insufficient available U.S. workers",
    "Employer must obtain temporary labor certification from DOL",
    "Worker must be a national of an eligible H-2A country unless an exception applies",
  ],
  denialReasons: [
    "Failure to prove temporary or seasonal need",
    "Recruitment or wage compliance problems",
    "Labor certification issues",
    "Worker ineligibility by country or prior immigration history",
  ],
  commonMistakes: [
    "Starting DOL recruitment too close to peak season",
    "Confusing H-2A agricultural rules with H-2B non-agricultural rules",
    "Underestimating housing and transportation obligations",
    "Workers assuming they can change employers freely without new sponsorship",
  ],
  processSteps: [
    {
      step: 1,
      title: "Employer obtains DOL temporary labor certification",
      description:
        "File the agricultural labor certification package, complete required recruitment, and offer at least the required wage.",
      timeframe: "Several weeks",
    },
    {
      step: 2,
      title: "Employer files Form I-129 with USCIS",
      description:
        "Submit the certified labor certification with the H-2A petition.",
      timeframe: "USCIS processing varies",
    },
    {
      step: 3,
      title: "Workers apply for visas and enter",
      description:
        "Approved workers consular process and enter for the certified employment period.",
      timeframe: "2–6 weeks common after petition approval, embassy-dependent",
    },
    {
      step: 4,
      title: "Work for the certified period and exit or extend",
      description:
        "Employment is tied to the certified need. Extensions are limited and total stay rules apply.",
      timeframe: "Usually up to 1 year per certification, with limits on total stay",
    },
  ],
  fees: [
    {
      name: "Form I-129 filing fee",
      amount: "$460",
      payer: "employer",
      note: "Confirm current fee.",
    },
    {
      name: "MRV visa fee",
      amount: "$205",
      payer: "applicant",
    },
    {
      name: "Recruitment, housing, and compliance costs",
      amount: "Varies",
      payer: "employer",
      note: "Often substantial beyond filing fees.",
    },
  ],
  documents: [
    {
      item: "DOL labor certification approval",
      why: "Threshold requirement before USCIS petition filing.",
    },
    {
      item: "Employer petition and contracts",
      why: "Show terms of work, wages, and temporary need.",
    },
    {
      item: "Worker passport from an eligible country",
      why: "Country eligibility matters for H-2A.",
    },
    {
      item: "Evidence supporting seasonal/temporary agricultural need",
      why: "Central to both DOL and USCIS review.",
    },
  ],
  timelineText:
    "Employers should begin DOL steps far ahead of harvest or seasonal demand. The full path — certification, petition, and consular processing — often takes multiple months end to end. There is no annual numerical cap, but process friction still creates timing risk.",
  validityPeriod:
    "Generally matches the certified employment period, often up to one year, with extension possibilities subject to total-stay limits.",
  extensionInfo:
    "Extensions may be available in increments but total H-2A time is typically capped before a required departure period. Confirm current maximum-stay rules before planning consecutive seasons.",
  employmentRights:
    "Workers are authorized only for the certified employer and agricultural role. Housing and wage protections are core program features employers must honor.",
  travelRestrictions:
    "Travel and reentry depend on valid visa documentation and continuing employment authorization tied to the petition.",
  importantDeadlines: [
    "Kick off DOL recruitment early — seasonal windows close fast",
    "Do not bring workers in before petition and visa authorization are complete",
    "Track total consecutive stay limits before offering another season",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may seek H-4 status. H-4 dependents may study but generally cannot work.",
  tips: [
    {
      title: "Treat compliance infrastructure as part of the petition",
      body: "Housing, wages, and recruitment records are not paperwork extras — they are the program.",
    },
    {
      title: "Separate H-2A and H-2B strategy deliberately",
      body: "Agricultural versus non-agricultural need is a threshold issue, not a labeling preference.",
    },
  ],
  didYouKnow: [
    "H-2A has no annual numerical cap like H-2B.",
    "Employers usually must provide housing or a housing allowance meeting program standards.",
  ],
  faqs: [
    {
      question: "Is there an H-2A cap?",
      answer: "No annual numerical cap applies to H-2A visas.",
    },
    {
      question: "What wages apply?",
      answer:
        "Employers generally must pay at least the highest of the adverse effect wage rate, prevailing wage, or applicable minimum wage standards.",
    },
    {
      question: "Can H-2A workers change employers?",
      answer:
        "Generally only with new authorized sponsorship. Do not assume portability like some other statuses.",
    },
    {
      question: "How long can someone stay?",
      answer:
        "Usually for the certified period up to one year, with limited extensions and an eventual required departure before restarting in many cases.",
    },
  ],
  relatedVisaIds: ["h2b", "r1", "h1b"],
  relatedWhen: [
    {
      visaId: "h2b",
      when: "Choose H-2B for temporary non-agricultural work such as hospitality or landscaping.",
    },
    {
      visaId: "h1b",
      when: "Choose H-1B for specialty professional roles requiring a degree-level specialty.",
    },
    {
      visaId: "r1",
      when: "Choose R-1 for qualifying religious occupations, not agricultural labor.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2a-temporary-agricultural-workers",
});

write({
  id: "h2b",
  code: "H-2B",
  name: "H-2B Temporary Non-Agricultural Worker Visa",
  category: "work",
  parentVisaId: null,
  quickAnswer:
    "H-2B allows U.S. employers to hire foreign workers for temporary non-agricultural jobs — such as hospitality, landscaping, or seafood processing — when qualified U.S. workers are unavailable. The program has an annual numerical cap and requires a temporary labor certification from DOL before the USCIS petition.",
  whoIsFor: [
    "Employers with one-time, seasonal, peak-load, or intermittent non-agricultural needs",
    "Workers from eligible countries ready to fill certified temporary roles",
    "Businesses prepared for recruitment, wage, and cap-season timing constraints",
  ],
  whoShouldNotApply: [
    "Employers with permanent year-round needs",
    "Agricultural employers (consider H-2A)",
    "Workers seeking unrestricted U.S. employment beyond the certified job",
  ],
  eligibility: [
    "Temporary need meeting one of the recognized H-2B standards",
    "Employer recruitment showing insufficient U.S. workers",
    "DOL temporary labor certification",
    "Worker nationality on the eligible-country list unless an exception applies",
  ],
  denialReasons: [
    "Temporary need not proven",
    "Cap limits reached for the half-year period",
    "Labor certification or recruitment defects",
    "Petition evidence inconsistent with the certified job",
  ],
  commonMistakes: [
    "Missing semi-annual cap filing windows",
    "Recasting permanent roles as temporary on paper only",
    "Confusing H-2B with uncapped H-2A",
    "Assuming supplemental cap allocations will always appear",
  ],
  processSteps: [
    {
      step: 1,
      title: "Establish temporary need and begin DOL certification",
      description:
        "Document seasonal or peak-load facts, complete required recruitment, and seek labor certification.",
      timeframe: "Several weeks",
    },
    {
      step: 2,
      title: "File Form I-129 within cap constraints",
      description:
        "After certification, file with USCIS while numbers remain available for the relevant half-year period.",
      timeframe: "Cap-sensitive",
    },
    {
      step: 3,
      title: "Workers obtain visas and enter for the job",
      description:
        "Consular processing follows petition approval. Employment is limited to the certified employer and dates.",
      timeframe: "Weeks after approval",
    },
    {
      step: 4,
      title: "Complete the temporary period or pursue limited extensions",
      description:
        "Extensions may be possible, but total consecutive stay limits and departure requirements apply.",
      timeframe: "Generally up to 1 year initially, with capped total stay",
    },
  ],
  fees: [
    {
      name: "Form I-129 filing fee",
      amount: "$460",
      payer: "employer",
      note: "Confirm current fee.",
    },
    {
      name: "MRV visa fee",
      amount: "$205",
      payer: "applicant",
    },
    {
      name: "Recruitment and compliance costs",
      amount: "Varies",
      payer: "employer",
    },
  ],
  documents: [
    {
      item: "DOL temporary labor certification",
      why: "Required foundation for the H-2B petition.",
    },
    {
      item: "Evidence of temporary need",
      why: "Seasonality, peak load, or one-time need must be substantiated.",
    },
    {
      item: "Worker identity and nationality documents",
      why: "Eligibility and consular processing depend on them.",
    },
    {
      item: "Employment terms and wage details",
      why: "Must align with the certified job opportunity.",
    },
  ],
  timelineText:
    "H-2B timing is driven by semi-annual cap seasons as well as DOL and USCIS processing. When demand exceeds available numbers, some employers wait for additional allocations or the next filing period. Start early and build contingency plans for peak seasons.",
  validityPeriod:
    "Usually matches the certified temporary period, commonly up to one year, subject to extension and total-stay limits.",
  extensionInfo:
    "Extensions may be available in increments toward a maximum consecutive stay, after which departure is typically required before returning in H-2B status.",
  employmentRights:
    "Authorization is employer- and job-specific. Workers generally cannot freelance or freely change employers without new authorized petitions.",
  travelRestrictions:
    "Travel requires valid visa documentation and continuing authorization tied to the temporary petition.",
  importantDeadlines: [
    "Watch both first-half and second-half fiscal-year cap windows",
    "Do not staff peak season on hope that late filings will clear",
    "Track total consecutive H-2B time before promising another season",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may seek H-4 status. H-4 dependents may study but generally cannot work.",
  tips: [
    {
      title: "Build a cap calendar before you recruit abroad",
      body: "An otherwise perfect case fails if numbers are gone. Align sales forecasts, DOL steps, and USCIS filing strategy together.",
    },
    {
      title: "Document temporariness with business evidence",
      body: "Weather seasons, tourist peaks, contracts, and staffing charts beat adjectives like “busy.”",
    },
  ],
  didYouKnow: [
    "Congress sets an annual H-2B cap of 66,000 visas, split across fiscal-year halves, with occasional supplemental allocations.",
    "H-2B is for non-agricultural work; agricultural temporary work generally belongs under H-2A.",
  ],
  faqs: [
    {
      question: "What is the H-2B annual cap?",
      answer:
        "Generally 66,000 per fiscal year, split between the first and second halves of the year. Supplemental numbers are sometimes authorized separately.",
    },
    {
      question: "What jobs use H-2B?",
      answer:
        "Common examples include hospitality, landscaping, forests support, amusement parks, and seafood processing — if temporary need is proven.",
    },
    {
      question: "How is H-2B different from H-2A?",
      answer:
        "H-2A is agricultural and uncapped numerically. H-2B is non-agricultural and capped.",
    },
    {
      question: "Can status be extended?",
      answer:
        "Limited extensions may be available, but total consecutive stay is capped and usually followed by a required departure period.",
    },
  ],
  relatedVisaIds: ["h2a", "h1b", "r1"],
  relatedWhen: [
    {
      visaId: "h2a",
      when: "Choose H-2A for temporary agricultural work without an annual numerical cap.",
    },
    {
      visaId: "h1b",
      when: "Choose H-1B for specialty professional employment rather than seasonal labor.",
    },
    {
      visaId: "r1",
      when: "Choose R-1 for qualifying religious worker roles.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2b-non-agricultural-workers",
});

console.log("batch 3 done");

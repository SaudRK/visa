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
  id: "m1",
  code: "M-1",
  name: "M-1 Vocational Student Visa",
  category: "student",
  parentVisaId: null,
  quickAnswer:
    "The M-1 visa is for full-time vocational or nonacademic training at a SEVP-certified school — such as technical, flight, or trade programs. Work authorization is far more limited than F-1, and transfers or program changes are tightly controlled.",
  whoIsFor: [
    "Students enrolled in vocational or technical programs rather than academic degrees",
    "Applicants who can fund the full program without relying on U.S. employment",
    "People seeking a fixed-length training path with a clear end date",
  ],
  whoShouldNotApply: [
    "Students pursuing university degree programs (use F-1)",
    "Applicants who need flexible CPT/OPT-style work options",
    "People expecting easy school transfers or open-ended practical training",
  ],
  eligibility: [
    "Acceptance to a SEVP-certified vocational or nonacademic program",
    "Valid M-1 Form I-20 from the school",
    "Proof of funds for tuition and living costs",
    "Intent consistent with temporary vocational study",
    "SEVIS I-901 payment before the visa interview",
  ],
  denialReasons: [
    "Insufficient funding evidence",
    "Program does not appear genuinely vocational or SEVP-appropriate",
    "Applicant seems focused on work rather than training",
    "Incomplete consular package or SEVIS issues",
  ],
  commonMistakes: [
    "Choosing M-1 when F-1 is the correct academic category",
    "Assuming F-1 OPT rules apply",
    "Missing the narrower practical-training limits after program completion",
    "Planning transfers the same way F-1 students do",
  ],
  processSteps: [
    {
      step: 1,
      title: "Secure admission and M-1 I-20",
      description:
        "Your vocational school issues an M-1 I-20 listing program length and costs.",
      timeframe: "Varies by school",
    },
    {
      step: 2,
      title: "Pay SEVIS and complete DS-160",
      description:
        "Pay I-901, submit DS-160, and schedule the consular interview.",
      timeframe: "1–4 weeks to appointment in many posts",
    },
    {
      step: 3,
      title: "Attend interview and travel",
      description:
        "Bring passport, I-20, funding proof, and admission documents. Enter only within allowed dates before the start date.",
      timeframe: "Often same-day visa decision",
    },
    {
      step: 4,
      title: "Maintain vocational status",
      description:
        "Stay enrolled full-time, follow school reporting, and do not work unless separately authorized.",
      timeframe: "Throughout the program",
    },
  ],
  fees: [
    { name: "SEVIS I-901 fee", amount: "$350", payer: "applicant" },
    { name: "MRV visa application fee", amount: "$185", payer: "applicant" },
  ],
  documents: [
    {
      item: "Passport and M-1 I-20",
      why: "Core identity and program evidence.",
    },
    {
      item: "DS-160 confirmation and SEVIS receipt",
      why: "Required for the visa interview.",
    },
    {
      item: "Proof of funds",
      why: "Shows you can complete training without unauthorized work.",
    },
    {
      item: "Admission letter and training plan",
      why: "Explains why the vocational program fits your goals.",
    },
  ],
  timelineText:
    "Visa wait times vary by embassy. M-1 stays are often admitted for a fixed period tied to the vocational program, not open-ended duration of status like many F-1 cases. Practical training after completion is limited and requires separate authorization.",
  validityPeriod:
    "Usually tied to the program length on the I-20, subject to maximum admission rules and any authorized extension.",
  extensionInfo:
    "Extensions may be possible if more time is needed to finish the same program. Transfers and practical training are more restricted than F-1 pathways.",
  employmentRights:
    "M-1 students generally cannot work during studies. After completion, limited practical training may be available under narrow formulas and approval requirements.",
  travelRestrictions:
    "Reentry requires valid visa documentation and a current I-20. Confirm travel rules with your DSO before leaving.",
  importantDeadlines: [
    "Enter only within the permitted pre-start window",
    "Finish training within authorized dates or seek an extension early",
    "Do not begin any work without explicit authorization",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may seek M-2 status. M-2 dependents generally cannot work and face study restrictions.",
  tips: [
    {
      title: "Confirm F-1 vs M-1 before you pay SEVIS",
      body: "The wrong category wastes money and time. Academic degree paths usually belong on F-1.",
    },
    {
      title: "Treat work expectations carefully",
      body: "If your plan depends on broad U.S. work rights, M-1 is rarely the right fit.",
    },
  ],
  didYouKnow: [
    "M-1 practical training is measured carefully and is not equivalent to F-1 OPT.",
    "M-1 status is typically more date-certain than F-1 duration of status.",
  ],
  faqs: [
    {
      question: "Can M-1 students work?",
      answer:
        "Generally not during the program. Limited post-completion practical training may be possible with approval and only for a short calculated period.",
    },
    {
      question: "Can I switch from M-1 to F-1?",
      answer:
        "Possibly through change of status or consular processing, but it is not automatic. Discuss timing with your school and counsel.",
    },
    {
      question: "Is M-1 good for university degrees?",
      answer:
        "No. Academic degree programs are normally F-1. M-1 is for vocational or nonacademic training.",
    },
  ],
  relatedVisaIds: ["f1", "f1-opt", "h1b"],
  relatedWhen: [
    {
      visaId: "f1",
      when: "Choose F-1 for academic degree study with broader student benefits.",
    },
    {
      visaId: "f1-opt",
      when: "OPT belongs to F-1 students, not M-1 vocational status.",
    },
    {
      visaId: "h1b",
      when: "H-1B is an employer-sponsored specialty occupation path after training or other qualifying backgrounds.",
    },
  ],
  sourceUrl: "https://studyinthestates.dhs.gov/students/get-started",
});

write({
  id: "l1",
  code: "L-1",
  name: "L-1 Intracompany Transfer Visa",
  category: "work",
  parentVisaId: null,
  quickAnswer:
    "The L-1 lets a multinational transfer an executive, manager (L-1A), or specialized-knowledge employee (L-1B) to a related U.S. office after at least one continuous year of qualifying foreign employment within the prior three years. Blanket petitions can accelerate some large-company cases.",
  whoIsFor: [
    "Employees of multinationals moving into a related U.S. entity",
    "Managers or executives who will run a U.S. function or organization (L-1A)",
    "Workers with proprietary, specialized knowledge of company systems or products (L-1B)",
    "Companies opening or expanding a U.S. office with a qualifying transfer candidate",
  ],
  whoShouldNotApply: [
    "Applicants with no qualifying one-year foreign employment for the related company",
    "Workers transferring to an unrelated U.S. employer",
    "Roles that are ordinary skilled work without managerial or specialized-knowledge substance",
    "People seeking a standalone freelancer path without a qualifying corporate relationship",
  ],
  eligibility: [
    "Qualifying corporate relationship between foreign and U.S. entities",
    "One continuous year of employment abroad for the related organization within the last three years",
    "U.S. role as executive/manager (L-1A) or specialized-knowledge capacity (L-1B)",
    "For new offices, evidence the U.S. operation can support the claimed structure within the initial period",
  ],
  denialReasons: [
    "Corporate relationship not proven",
    "One-year foreign employment requirement not met",
    "U.S. role is not genuinely managerial, executive, or specialized",
    "New-office petitions lacking realistic staffing, premises, or business plans",
    "Job descriptions inflated beyond actual duties",
  ],
  commonMistakes: [
    "Counting non-qualifying employment toward the one-year requirement",
    "Using managerial titles without managerial authority",
    "Assuming specialized knowledge means general professional skill",
    "Transferring before the corporate documents and org charts are ready",
  ],
  processSteps: [
    {
      step: 1,
      title: "Confirm qualifying relationship and employment history",
      description:
        "Gather ownership charts, entity documents, and proof of one year of qualifying foreign work.",
      timeframe: "1–3 weeks",
    },
    {
      step: 2,
      title: "File Form I-129 or use a blanket petition route",
      description:
        "Individual petitions go to USCIS. Qualifying organizations with blanket approval may process certain employees more directly at consulates.",
      timeframe: "Preparation often 2–6 weeks",
    },
    {
      step: 3,
      title: "Await adjudication or consular processing",
      description:
        "Premium processing may be available for individual petitions. Consular applicants complete visa stamping after approval or under blanket procedures.",
      timeframe: "Weeks to months",
    },
    {
      step: 4,
      title: "Enter and maintain L-1 compliance",
      description:
        "Work only in the approved capacity for the petitioning organization. Extensions need updated evidence of operations and role.",
      timeframe: "Throughout status",
    },
  ],
  fees: [
    {
      name: "Form I-129 base filing fee",
      amount: "$1,385",
      payer: "employer",
      note: "Confirm current fee schedule.",
    },
    {
      name: "Fraud prevention and detection fee",
      amount: "$500",
      payer: "employer",
    },
    {
      name: "Asylum Program Fee (if applicable)",
      amount: "Varies by employer size",
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
      item: "Corporate ownership and relationship evidence",
      why: "Proves the entities qualify for intracompany transfer.",
    },
    {
      item: "Payroll, tax, or HR proof of one-year foreign employment",
      why: "Establishes the statutory employment requirement.",
    },
    {
      item: "Org charts and detailed U.S. job description",
      why: "Shows managerial/executive authority or specialized knowledge.",
    },
    {
      item: "Business premises and operations evidence",
      why: "Especially important for new-office and extension filings.",
    },
    {
      item: "Passport and prior immigration records",
      why: "Needed for petition and visa processing.",
    },
  ],
  timelineText:
    "Individual L-1 petitions vary by service center and whether premium processing is used. Blanket processes can be faster for large qualifying organizations. New-office cases often receive a shorter initial approval and heavier evidence review at extension.",
  validityPeriod:
    "L-1A is generally limited to 7 years total. L-1B is generally limited to 5 years total. New offices often start with a one-year initial period.",
  extensionInfo:
    "Extensions require proof the U.S. role and company operations still support classification. Track maximum stay limits carefully.",
  employmentRights:
    "You work for the petitioning U.S. entity in the approved capacity. Material changes in role may require an amended petition. L-2 spouses may apply for work authorization.",
  travelRestrictions:
    "Reentry typically needs a valid L visa stamp and approval documentation. Coordinate travel around pending extensions.",
  importantDeadlines: [
    "Do not assume foreign employment time counts if it was for an unrelated company",
    "New-office extensions should be prepared early with strong operational evidence",
    "Maximum 5- or 7-year limits are hard ceilings without a change in classification",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may seek L-2 status. L-2 spouses can apply for employment authorization and may work more broadly than many other dependent categories.",
  tips: [
    {
      title: "Document the one-year abroad meticulously",
      body: "Gaps, contractors, or related-but-not-qualifying entities are frequent weak points.",
    },
    {
      title: "Write the U.S. role as it is truly performed",
      body: "Inflated managerial wording is a common RFE and denial theme, especially for L-1A.",
    },
  ],
  didYouKnow: [
    "L-1A managers often use the classification as a bridge toward EB-1C immigrant petitions.",
    "Specialized knowledge is company-specific — not just advanced general skill in a profession.",
  ],
  faqs: [
    {
      question: "What is the difference between L-1A and L-1B?",
      answer:
        "L-1A covers executives and managers (up to 7 years). L-1B covers specialized-knowledge employees (up to 5 years).",
    },
    {
      question: "Can a new U.S. office use L-1?",
      answer:
        "Yes, with extra evidence. Initial approval is often limited to one year while the office becomes operational.",
    },
    {
      question: "Can L-1 lead to a green card?",
      answer:
        "Often yes for L-1A through EB-1C if requirements are met. L-1B holders typically explore other employment-based categories.",
    },
    {
      question: "What is a blanket L petition?",
      answer:
        "A pre-approval for qualifying large organizations that can streamline subsequent individual employee applications at consulates.",
    },
  ],
  relatedVisaIds: ["h1b", "e2", "tn"],
  relatedWhen: [
    {
      visaId: "h1b",
      when: "Choose H-1B when the job is a specialty occupation without a qualifying intracompany transfer history.",
    },
    {
      visaId: "e2",
      when: "Choose E-2 if you are a treaty investor developing a substantial investment enterprise.",
    },
    {
      visaId: "tn",
      when: "Choose TN for listed USMCA professions if you are Canadian or Mexican and need a faster non-petition route.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager",
});

write({
  id: "tn",
  code: "TN",
  name: "TN NAFTA/USMCA Professional Visa",
  category: "work",
  parentVisaId: null,
  quickAnswer:
    "TN status lets Canadian and Mexican citizens work temporarily in the U.S. in designated professional occupations under USMCA. There is no annual lottery. Canadians often apply at a port of entry; Mexicans generally apply at a U.S. consulate.",
  whoIsFor: [
    "Canadian or Mexican citizens with a job offer in a listed USMCA profession",
    "Professionals who meet the exact education or license requirements for that occupation",
    "Applicants who need a temporary work option without H-1B lottery risk",
  ],
  whoShouldNotApply: [
    "Citizens of countries outside Canada and Mexico",
    "Workers whose occupation is not on the USMCA list",
    "Applicants who cannot show temporary intent",
    "People whose credentials do not match the listed profession’s requirements",
  ],
  eligibility: [
    "Canadian or Mexican citizenship",
    "Job offer in a profession listed for TN classification",
    "Qualifying degree, license, or credentials exactly matching that profession",
    "Temporary nonimmigrant intent for the TN stay",
  ],
  denialReasons: [
    "Occupation not on the list or poorly matched to duties",
    "Credential gap for the specific TN profession",
    "Support letter missing duration, duties, or wage details",
    "Evidence suggesting immigrant intent conflicting with TN",
  ],
  commonMistakes: [
    "Stretching job titles to fit a listed profession",
    "Using a foreign degree without adequate evaluation when needed",
    "Assuming TN is as dual-intent friendly as H-1B",
    "Changing employers without a new TN application or petition strategy",
  ],
  processSteps: [
    {
      step: 1,
      title: "Confirm the listed profession and credentials",
      description:
        "Map the offer letter duties to a specific TN profession and verify education or license thresholds.",
      timeframe: "Several days",
    },
    {
      step: 2,
      title: "Prepare the employer support letter and evidence",
      description:
        "Include role, duties, duration, wage, and why you qualify. Add diplomas, transcripts, and licenses.",
      timeframe: "1–2 weeks",
    },
    {
      step: 3,
      title: "Apply at the border, CBP preclearance, or consulate",
      description:
        "Canadians often apply with CBP. Mexicans generally complete consular processing. Some in-U.S. extensions use Form I-129.",
      timeframe: "Same day for many Canadian applications; weeks for consular cases",
    },
    {
      step: 4,
      title: "Begin TN employment and track end dates",
      description:
        "TN is usually granted in periods of up to three years and can be renewed in increments if still temporary.",
      timeframe: "Up to 3 years per grant, renewable",
    },
  ],
  fees: [
    {
      name: "CBP processing fee (common for Canadians at entry)",
      amount: "$56",
      payer: "applicant",
      note: "Confirm current CBP fee.",
    },
    {
      name: "MRV fee for Mexican consular applicants",
      amount: "$205",
      payer: "applicant",
    },
    {
      name: "Form I-129 fee for certain in-U.S. filings",
      amount: "Varies",
      payer: "employer",
      note: "Used for some extensions/changes inside the U.S.",
    },
  ],
  documents: [
    {
      item: "Canadian or Mexican passport",
      why: "Citizenship is a threshold requirement for TN.",
    },
    {
      item: "Detailed employer support letter",
      why: "Establishes profession, duties, duration, and wage.",
    },
    {
      item: "Degrees, transcripts, and licenses",
      why: "Prove you meet the listed profession’s qualification rules.",
    },
    {
      item: "Credential evaluation if needed",
      why: "Helps officers understand foreign education equivalency.",
    },
  ],
  timelineText:
    "Many Canadian TN adjudications happen the same day at a port of entry or preclearance location. Mexican applicants should plan for consular appointment lead time. USCIS I-129 extensions take longer unless premium processing applies.",
  validityPeriod:
    "Often granted for up to three years per admission or approval, with renewals possible in three-year increments while the temporary need continues.",
  extensionInfo:
    "Extensions can be requested through a new border application (for eligible Canadians) or through employer filings such as Form I-129. Maintain continuous evidence of the professional role.",
  employmentRights:
    "You may work only for the TN employer in the approved professional capacity. A new employer generally requires a new TN application.",
  travelRestrictions:
    "Reentry depends on valid TN documentation and, for Mexicans, usually a valid visa stamp. Carry the support letter and credential package when traveling.",
  importantDeadlines: [
    "Do not start with a new employer before a fresh TN authorization is in place",
    "Begin renewal planning well before the I-94 end date",
    "Keep temporary-need evidence coherent if pursuing future renewals",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may seek TD status. TD dependents may study but cannot work under TD authorization.",
  tips: [
    {
      title: "Name the exact TN profession in the letter",
      body: "Officers want a listed category, not a creative hybrid title.",
    },
    {
      title: "Be careful with green card timing",
      body: "TN is not the same dual-intent environment as H-1B. Get advice before starting immigrant processes.",
    },
  ],
  didYouKnow: [
    "TN has no annual numerical cap like H-1B.",
    "TD spouses cannot work, which surprises families coming from L-2 or E dependent categories.",
  ],
  faqs: [
    {
      question: "Is there a TN lottery?",
      answer: "No. TN is not subject to the H-1B numerical lottery.",
    },
    {
      question: "Which jobs qualify?",
      answer:
        "Only professions listed under USMCA rules, each with defined credential requirements.",
    },
    {
      question: "Can I change TN employers?",
      answer:
        "Yes, but the new employer needs a new TN authorization before you start.",
    },
    {
      question: "Can TN lead to a green card?",
      answer:
        "TN itself is temporary. Immigrant intent issues can be complex — speak with counsel before filing permanent residence applications.",
    },
  ],
  relatedVisaIds: ["h1b", "l1", "e2"],
  relatedWhen: [
    {
      visaId: "h1b",
      when: "Choose H-1B when you need dual-intent flexibility or are not Canadian/Mexican.",
    },
    {
      visaId: "l1",
      when: "Choose L-1 for intracompany transfers based on prior foreign employment with a related entity.",
    },
    {
      visaId: "e2",
      when: "Choose E-2 if your path is treaty investment rather than a listed professional role.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/temporary-workers/tn-nafta-professionals",
});

console.log("batch 2 done");

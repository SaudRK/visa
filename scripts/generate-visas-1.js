const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "content", "visas");

const reviewed = {
  lastReviewedDate: "2026-07-14",
  timelineUpdatedDate: "2026-07",
  financeBlock: null,
};

function write(visa) {
  const data = { ...reviewed, ...visa };
  fs.writeFileSync(path.join(dir, `${visa.id}.json`), JSON.stringify(data, null, 2));
  console.log("wrote", visa.id);
}

write({
  id: "f1",
  code: "F-1",
  name: "F-1 Student Visa",
  category: "student",
  parentVisaId: null,
  quickAnswer:
    "The F-1 visa is for international students enrolled full-time in an academic program at a SEVP-certified school. You must show funding, maintain status, and treat study — not open employment — as the purpose of your stay.",
  whoIsFor: [
    "Students admitted to a full-time academic program at a SEVP-certified school",
    "Applicants who can document tuition and living costs for themselves and dependents",
    "People whose primary purpose in the U.S. is education",
    "Students prepared to maintain full-time enrollment and work only as authorized",
  ],
  whoShouldNotApply: [
    "Anyone whose primary goal is immediate full-time open-market employment",
    "Applicants who cannot show realistic funding",
    "People seeking short vocational training better suited to M-1",
    "Applicants unable to address nonimmigrant-intent questions at a visa interview",
  ],
  eligibility: [
    "Acceptance by a SEVP-certified school that issues Form I-20",
    "English proficiency or an approved English training path",
    "Proof of funds for tuition, living expenses, and return travel",
    "Intent consistent with temporary student status",
    "Payment of the SEVIS I-901 fee before the visa interview",
  ],
  denialReasons: [
    "Weak or inconsistent proof of funds",
    "Interview answers suggesting the real purpose is work",
    "Incomplete DS-160, I-20, or SEVIS evidence",
    "Concerns about ties abroad or prior immigration violations",
    "Program or school that does not match the stated academic plan",
  ],
  commonMistakes: [
    "Booking an interview before SEVIS is paid or the I-20 is correct",
    "Assuming on-campus rules allow any off-campus job",
    "Dropping below a full course load without DSO approval",
    "Waiting too late for OPT or Cap-Gap planning",
    "Traveling without a current travel signature when one is required",
  ],
  processSteps: [
    {
      step: 1,
      title: "Get admitted and receive Form I-20",
      description:
        "Your school issues an I-20 with program, start date, and funding estimate. Verify every field before signing.",
      timeframe: "Varies by school",
    },
    {
      step: 2,
      title: "Pay the SEVIS I-901 fee",
      description:
        "Pay online and keep the receipt for the interview and port of entry.",
      timeframe: "Same day online",
    },
    {
      step: 3,
      title: "Complete DS-160 and schedule the interview",
      description:
        "Submit DS-160, pay the MRV fee, and book a consular appointment. Bring originals of key documents.",
      timeframe: "Appointment wait: days to months",
    },
    {
      step: 4,
      title: "Attend the visa interview",
      description:
        "Explain your academic plan, funding, and post-study plans clearly. Some cases enter administrative processing.",
      timeframe: "Often same-day decision",
    },
    {
      step: 5,
      title: "Enter the U.S. and report to school",
      description:
        "You may usually enter up to 30 days before the program start date. Complete DSO check-in and SEVIS registration.",
      timeframe: "School reporting deadlines apply",
    },
  ],
  fees: [
    { name: "SEVIS I-901 fee", amount: "$350", payer: "applicant" },
    { name: "MRV visa application fee", amount: "$185", payer: "applicant" },
    {
      name: "Visa issuance fee (reciprocity)",
      amount: "Varies by nationality",
      payer: "applicant",
      note: "Not charged for every country.",
    },
  ],
  documents: [
    {
      item: "Valid passport",
      why: "Identity document for visa issuance and admission.",
    },
    {
      item: "Signed Form I-20",
      why: "Proves SEVP enrollment and program details.",
    },
    {
      item: "DS-160 confirmation and SEVIS receipt",
      why: "Required for the consular package.",
    },
    {
      item: "Bank statements, scholarships, or sponsor affidavits",
      why: "Shows you can fund studies without unauthorized work.",
    },
    {
      item: "Admission letter and transcripts",
      why: "Supports that you are a genuine academic student.",
    },
    {
      item: "Evidence of ties abroad",
      why: "Helps address nonimmigrant intent questions.",
    },
  ],
  timelineText:
    "Embassy appointment wait is often the longest variable. After issuance, students typically enter shortly before classes. Inside the U.S., F-1 is usually admitted for duration of status if you maintain enrollment and school reporting rules.",
  validityPeriod:
    "Usually duration of status (D/S). Follow I-20 dates, transfer rules, and the post-completion grace period unless another authorization applies.",
  extensionInfo:
    "Program extensions go through your DSO with an updated I-20. School transfers require coordinated SEVIS release. Practical training has separate filing windows.",
  employmentRights:
    "On-campus work is limited. Off-campus work generally needs CPT, OPT, or another specific authorization. Unauthorized employment can terminate status.",
  travelRestrictions:
    "Reentry typically needs a valid F-1 stamp, current I-20 travel signature, passport, and enrollment proof. Travel during pending OPT is higher risk.",
  importantDeadlines: [
    "Do not enter more than 30 days before the I-20 start date",
    "Complete school check-in on time",
    "Watch OPT filing windows closely",
  ],
  dependentsText:
    "Spouses and unmarried children under 21 may seek F-2 status. F-2 spouses generally cannot work. K-12 study is usually allowed for F-2 children; adult full-time study typically needs another status.",
  tips: [
    {
      title: "Explain funding in one clear minute",
      body: "Ambiguous money answers are a common refusal trigger. Know year-one funding and realistic follow-on sources.",
    },
    {
      title: "Ask your DSO before changing enrollment",
      body: "Course drops, CPT, transfers, and travel signatures all interact with status. Confirm first.",
    },
    {
      title: "Plan the end of your program a year early",
      body: "OPT, Cap-Gap, and H-1B timing compress quickly near graduation.",
    },
  ],
  didYouKnow: [
    "F-1 is often admitted for duration of status (D/S), so the I-94 may not show a hard end date.",
    "A travel signature on the I-20 is frequently required before reentering after a trip abroad.",
  ],
  faqs: [
    {
      question: "Can I work on an F-1 visa?",
      answer:
        "Limited on-campus work may be allowed. Off-campus jobs usually require CPT, OPT, or another specific authorization.",
    },
    {
      question: "How long can I stay after graduation?",
      answer:
        "Many students receive a 60-day grace period after program completion. Approved OPT can authorize additional stay for qualifying employment.",
    },
    {
      question: "Can I transfer schools?",
      answer:
        "Yes. Your new school issues a transfer I-20 and your current DSO releases the SEVIS record on an agreed date.",
    },
    {
      question: "What is the difference between F-1 and M-1?",
      answer:
        "F-1 covers academic study. M-1 covers vocational or nonacademic training and is more restrictive on work and transfers.",
    },
    {
      question: "Do I need to show I will return home?",
      answer:
        "Consular officers evaluate immigrant intent for F-1 applicants. Be ready to discuss academic goals and post-study plans consistent with temporary student status.",
    },
  ],
  relatedVisaIds: ["f1-opt", "m1", "h1b"],
  relatedWhen: [
    {
      visaId: "f1-opt",
      when: "Use OPT when you need temporary work related to your major under F-1 rules.",
    },
    {
      visaId: "m1",
      when: "Choose M-1 for vocational or technical training rather than an academic degree path.",
    },
    {
      visaId: "h1b",
      when: "Choose H-1B when an employer is ready to sponsor specialty occupation employment.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment",
});

write({
  id: "f1-opt",
  code: "F-1 OPT",
  name: "F-1 Optional Practical Training (OPT)",
  category: "student",
  parentVisaId: "f1",
  quickAnswer:
    "OPT lets eligible F-1 students work in a job directly related to their major for a limited period — typically up to 12 months, with a possible 24-month STEM extension. You need a DSO recommendation, a timely Form I-765 filing, and an Employment Authorization Document before starting post-completion work.",
  whoIsFor: [
    "F-1 students who completed at least one academic year and need degree-related work experience",
    "Graduates seeking post-completion OPT in a role tied to their major",
    "STEM graduates potentially eligible for the 24-month extension with an E-Verify employer",
    "Students coordinating OPT timing with later H-1B or other work visas",
  ],
  whoShouldNotApply: [
    "Students who never maintained F-1 status correctly",
    "People seeking unrestricted work unrelated to their major",
    "Applicants outside the OPT filing window",
    "Anyone expecting OPT to substitute for an employer-sponsored work visa indefinitely",
  ],
  eligibility: [
    "Valid F-1 status (or timely filing within the applicable grace period rules)",
    "Completion of at least one full academic year unless an exception applies",
    "Employment that is directly related to your major field of study",
    "DSO recommendation entered in SEVIS and reflected on your I-20",
    "For STEM OPT: qualifying degree, E-Verify employer, and Form I-983 training plan",
  ],
  denialReasons: [
    "Late or incomplete I-765 filing",
    "Job or plan not related to the major",
    "SEVIS or DSO recommendation problems",
    "Prior OPT history that exhausts remaining eligibility",
    "For STEM OPT: missing Form I-983 or non-qualifying employer",
  ],
  commonMistakes: [
    "Waiting until after the filing window closes",
    "Starting post-completion work before the EAD start date",
    "Exceeding unemployment day limits",
    "Failing to report employer changes to the DSO",
    "Assuming Cap-Gap protection applies automatically without tracking H-1B status",
  ],
  processSteps: [
    {
      step: 1,
      title: "Meet your DSO and request OPT recommendation",
      description:
        "Confirm eligibility dates, remaining OPT time, and whether you need pre- or post-completion OPT.",
      timeframe: "1–2 weeks",
    },
    {
      step: 2,
      title: "Receive updated I-20 with OPT recommendation",
      description:
        "Your DSO updates SEVIS and issues a new I-20. Use this with your I-765 packet.",
      timeframe: "School processing time",
    },
    {
      step: 3,
      title: "File Form I-765 with USCIS",
      description:
        "Submit I-765, photos, fee, and supporting evidence within the allowed filing window.",
      timeframe: "Window begins up to 90 days before program end for post-completion OPT",
    },
    {
      step: 4,
      title: "Receive EAD and begin authorized work",
      description:
        "Do not start post-completion OPT employment before the EAD validity date. Keep unemployment limits in mind.",
      timeframe: "USCIS processing often takes several months",
    },
    {
      step: 5,
      title: "Report and maintain OPT compliance",
      description:
        "Report employers, address changes, and interruptions. For STEM OPT, complete evaluations and I-983 updates as required.",
      timeframe: "Ongoing",
    },
  ],
  fees: [
    {
      name: "Form I-765 filing fee",
      amount: "$470",
      payer: "applicant",
      note: "Confirm current fee before filing.",
    },
    {
      name: "STEM OPT extension I-765 fee",
      amount: "$470",
      payer: "applicant",
      note: "Separate filing for the extension.",
    },
  ],
  documents: [
    {
      item: "Form I-765",
      why: "The application for employment authorization.",
    },
    {
      item: "I-20 with OPT recommendation",
      why: "Shows DSO and SEVIS support for OPT.",
    },
    {
      item: "Passport, visa, and I-94 copies",
      why: "Establish identity and current student status history.",
    },
    {
      item: "Prior EADs if any",
      why: "USCIS reviews earlier employment authorization history.",
    },
    {
      item: "Passport-style photos",
      why: "Required for card production and biometrics packet standards.",
    },
    {
      item: "STEM OPT: Form I-983 and degree evidence",
      why: "Needed to prove qualifying STEM degree and structured training.",
    },
  ],
  timelineText:
    "USCIS processing times for OPT EADs commonly run several months, so file as early as the rules allow. Post-completion applicants generally may file up to 90 days before the program end date and no later than 60 days after. STEM extensions require their own timely filing before current OPT expires.",
  validityPeriod:
    "Standard post-completion OPT is typically up to 12 months. STEM graduates may receive an additional 24 months if all extension requirements are met.",
  extensionInfo:
    "STEM OPT is a separate I-765 filing with employer and reporting obligations. Cap-Gap may extend F-1/OPT timing when an H-1B is timely filed and selected for the next fiscal year under applicable rules.",
  employmentRights:
    "Work must remain related to your major. You must track unemployment days and report changes. STEM OPT adds employer E-Verify and training-plan duties.",
  travelRestrictions:
    "Travel while an OPT application is pending can jeopardize the card or reentry. After approval, carry EAD, I-20, and employment proof when traveling.",
  importantDeadlines: [
    "Post-completion OPT filing window is strict — 90 days before to 60 days after program end",
    "Do not accrue more than the allowed unemployment days",
    "STEM extension should be filed before current OPT expires",
  ],
  dependentsText:
    "F-2 dependents do not receive work authorization through the principal’s OPT. If you later move to H-1B, dependents may seek H-4 status.",
  tips: [
    {
      title: "File early inside the legal window",
      body: "Late OPT filings are a classic self-inflicted denial. Put the window on your calendar the semester before graduation.",
    },
    {
      title: "Keep an unemployment day tracker",
      body: "Days without qualifying employment count. Exceeding the limit can end OPT eligibility.",
    },
    {
      title: "Coordinate OPT with H-1B Cap-Gap early",
      body: "If H-1B is your next step, map lottery timing against OPT expiry before spring registration season.",
    },
  ],
  didYouKnow: [
    "Pre-completion OPT reduces the time available for post-completion OPT.",
    "STEM OPT employers must use E-Verify and complete a formal training plan on Form I-983.",
  ],
  faqs: [
    {
      question: "How long is standard OPT?",
      answer:
        "Post-completion OPT is typically up to 12 months. Pre-completion OPT uses part of that same pool of available months.",
    },
    {
      question: "What is STEM OPT?",
      answer:
        "A 24-month extension for graduates with qualifying STEM degrees who work for E-Verify employers under an approved training plan.",
    },
    {
      question: "What is the unemployment limit?",
      answer:
        "During post-completion OPT you generally may not exceed 90 days of unemployment; STEM OPT raises the combined limit to 150 days.",
    },
    {
      question: "Can OPT lead to H-1B?",
      answer:
        "Yes. Many students use OPT while an employer pursues H-1B. Cap-Gap rules may bridge certain gaps when an H-1B petition is properly filed and pending or approved for the next fiscal year.",
    },
    {
      question: "Can I freelance on OPT?",
      answer:
        "Any work must still be related to your major and properly reported. Self-employment is tightly regulated and easy to get wrong — get school or legal guidance first.",
    },
  ],
  relatedVisaIds: ["f1", "h1b", "m1"],
  relatedWhen: [
    {
      visaId: "f1",
      when: "Read the F-1 guide first if you are still establishing or maintaining student status.",
    },
    {
      visaId: "h1b",
      when: "Move to H-1B when an employer can sponsor specialty occupation employment beyond OPT limits.",
    },
    {
      visaId: "m1",
      when: "M-1 practical training is a different, more limited pathway for vocational students.",
    },
  ],
  sourceUrl:
    "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students",
});

console.log("done batch 1");

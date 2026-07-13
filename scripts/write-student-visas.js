const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "content", "visas");

function base(extra) {
  return {
    lastReviewedDate: "2026-07-14",
    timelineUpdatedDate: "2026-07",
    financeBlock: null,
    ...extra,
  };
}

const visas = [
  base({
    id: "f1",
    code: "F-1",
    name: "F-1 Student Visa",
    category: "student",
    parentVisaId: null,
    quickAnswer:
      "The F-1 visa is for international students enrolled full-time in an academic program at a SEVP-certified school. You must show funding, maintain status, and return home when your program ends unless another lawful pathway authorizes you to stay.",
    whoIsFor: [
      "Students admitted to a full-time academic program at a SEVP-certified U.S. school",
      "Applicants who can document tuition and living costs for themselves and any dependents",
      "People whose primary purpose in the U.S. is study, not unauthorized work",
      "Students prepared to maintain full-time enrollment and work only as authorized",
    ],
    whoShouldNotApply: [
      "Anyone whose primary goal is immediate full-time open-market employment",
      "Applicants who cannot show realistic funding for the program",
      "People seeking a short vocational/technical program better suited to M-1",
      "Applicants unable to show nonimmigrant intent for the F-1 interview context",
    ],
    eligibility: [
      "Acceptance by a SEVP-certified school that issues a Form I-20",
      "English proficiency or enrollment in an approved English training path",
      "Proof of sufficient funds for tuition, living expenses, and return travel",
      "Intent to depart after completing studies, unless changing to another lawful status",
      "Payment of the SEVIS I-901 fee before the visa interview",
    ],
    denialReasons: [
      "Weak or inconsistent proof of funds",
      "Interview answers suggesting the real purpose is work, not study",
      "Incomplete DS-160, I-20, or SEVIS payment evidence",
      "Concerns about ties abroad or prior immigration overstays",
      "Enrolling in a school or program that does not match the stated academic plan",
    ],
    commonMistakes: [
      "Booking a visa interview before SEVIS is paid or the I-20 is correct",
      "Assuming on-campus work rules automatically allow any off-campus job",
      "Dropping below a full course load without DSO authorization",
      "Waiting too late to explore OPT or Cap-Gap timing",
      "Traveling on an expired visa stamp without checking reentry rules",
    ],
    processSteps: [
      {
        step: 1,
        title: "Get admitted and receive Form I-20",
        description:
          "After admission, your school issues an I-20 listing your program, start date, and funding estimate. Check every field carefully before signing.",
        timeframe: "Varies by school",
      },
      {
        step: 2,
        title: "Pay the SEVIS I-901 fee",
        description:
          "Pay online and keep the receipt. Consular officers and DHS expect this before the interview and entry.",
        timeframe: "Same day online",
      },
      {
        step: 3,
        title: "Complete DS-160 and schedule the interview",
        description:
          "Submit DS-160, pay the MRV fee, and book an appointment at a U.S. embassy or consulate. Bring originals of key documents.",
        timeframe: "Appointment wait: days to months",
      },
      {
        step: 4,
        title: "Attend the visa interview",
        description:
          "Explain your academic plan, funding, and post-study plans clearly. Most decisions are announced quickly; some cases enter administrative processing.",
        timeframe: "Often same-day decision",
      },
      {
        step: 5,
        title: "Enter the U.S. and report to your school",
        description:
          "You may usually enter up to 30 days before the program start date on the I-20. Check in with your DSO and complete SEVIS registration.",
        timeframe: "Within school reporting deadlines",
      },
    ],
    fees: [
      {
        name: "SEVIS I-901 fee",
        amount: "$350",
        payer: "applicant",
      },
      {
        name: "MRV visa application fee",
        amount: "$185",
        payer: "applicant",
      },
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
        why: "Must generally be valid at least six months beyond your intended stay unless an exception applies.",
      },
      {
        item: "Signed Form I-20",
        why: "Proves SEVP enrollment and program details for visa and entry.",
      },
      {
        item: "DS-160 confirmation and SEVIS receipt",
        why: "Required to complete the consular interview package.",
      },
      {
        item: "Bank statements, scholarships, or sponsor affidavits",
        why: "Show you can fund studies without unauthorized employment.",
      },
      {
        item: "Admission letter and academic transcripts",
        why: "Support the story that you are a genuine academic student.",
      },
      {
        item: "Evidence of ties abroad",
        why: "Helps address nonimmigrant intent questions at the interview.",
      },
    ],
    timelineText:
      "The longest variable is usually the embassy appointment wait, which can range from days to several months. After issuance, most students enter shortly before classes begin. Inside the U.S., status lasts for the duration of status (D/S) shown on the I-94 as long as you maintain full-time enrollment and school reporting rules.",
    validityPeriod:
      "F-1 is typically admitted for duration of status. You must follow your I-20 program dates, transfer rules, and the post-completion grace period (commonly 60 days after program end, unless another authorization applies).",
    extensionInfo:
      "Program extensions are handled through your DSO with an updated I-20 when more time is academically necessary. Changing schools requires a coordinated SEVIS transfer. Practical training has its own filing windows.",
    employmentRights:
      "On-campus work is limited and regulated. Off-campus work generally requires CPT, OPT, or another specific authorization. Unauthorized employment is one of the fastest ways to violate F-1 status.",
    travelRestrictions:
      "Reentry usually requires a valid F-1 visa stamp, current I-20 travel signature, passport, and proof of enrollment. Travel while an OPT EAD is pending can be especially risky without advice.",
    importantDeadlines: [
      "Do not enter more than 30 days before the I-20 program start date",
      "Report to your school by the required check-in date",
      "Apply for OPT within the designated pre- and post-completion windows",
    ],
    dependentsText:
      "Spouses and unmarried children under 21 may apply for F-2 status. F-2 spouses generally cannot work. F-2 children may study in K-12; adult full-time study usually requires a status change.",
    tips: [
      {
        title: "Practice explaining your funding in one minute",
        body: "Officers often ask how you will pay for the first year and what happens afterward. Ambiguous answers create avoidable refusals.",
      },
      {
        title: "Treat your DSO as an early warning system",
        body: "Course drops, CPT, transfers, and travel signatures all route through your school. Ask before you act.",
      },
      {
        title: "Plan the end of your program early",
        body: "OPT, H-1B timing, and grace periods are unforgiving. Start the conversation a year before graduation if possible.",
      },
    ],
    didYouKnow: [
      "F-1 status is usually duration of status (D/S), so your I-94 may not show a hard calendar end date like some other visas.",
      "A travel signature on your I-20 is often required for reentry after temporary trips abroad.",
    ],
    faqs: [
      {
        question: "Can I work on an F-1 visa?",
        answer:
          "Limited on-campus work may be allowed. Off-campus employment usually requires CPT, OPT, or another specific authorization from your school and/or USCIS.",
      },
      {
        question: "How long can I stay after I graduate?",
        answer:
          "Many students have a 60-day grace period after program completion. Authorized OPT can extend your ability to remain and work if approved in time.",
      },
      {
        question: "Can I transfer schools?",
        answer:
          "Yes. The new school issues a transfer I-20 and your current DSO releases the SEVIS record. Timing the release date matters.",
      },
      {
        question: "What is the difference between F-1 and M-1?",
        answer:
          "F-1 is for academic programs. M-1 is for vocational or nonacademic technical training and has stricter work and transfer limits.",
      },
      {
        question: "Do I need to show I will return home?",
        answer:
          "Consular officers evaluate immigrant intent for F-1. Be ready to explain academic goals and post-study plans that are consistent with temporary student status.",
      },
    ],
    relatedVisaIds: ["f1-opt", "m1", "h1b"],
    relatedWhen: [
      {
        visaId: "f1-opt",
        when: "Choose OPT when you need temporary work authorization connected to your F-1 major after or during studies.",
      },
      {
        visaId: "m1",
        when: "Choose M-1 for vocational or technical training rather than a degree-oriented academic program.",
      },
      {
        visaId: "h1b",
        when: "Choose H-1B when an employer is ready to sponsor specialty-occupation employment after or instead of student pathways.",
      },
    ],
    sourceUrl:
      "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment",
  }),
];

for (const visa of visas) {
  fs.writeFileSync(path.join(dir, `${visa.id}.json`), JSON.stringify(visa, null, 2));
  console.log("wrote", visa.id);
}

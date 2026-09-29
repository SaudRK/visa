import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/visa-guides/f1";
const TITLE = "F-1 Student Financial Guide for the US";
const DESCRIPTION =
  "Money basics for F-1 international students — opening a bank account, campus and OPT income, building credit, and sending money home.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function F1FinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa money guide"
      title="F-1 student financial guide"
      description="The money side of F-1 life, in the order you meet it — proving funds for the I-20, paying tuition from abroad, banking without an SSN, campus work, taxes, and planning for OPT."
      path={PATH}
      crumbs={[
        { name: "Visa guides", path: "/visa-guides" },
        { name: "F-1", path: PATH },
      ]}
      sources={[
        {
          label: "USCIS — Students and Employment",
          href: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment",
        },
        {
          label: "USCIS — Optional Practical Training (OPT) for F-1 Students",
          href: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students",
        },
        {
          label: "DHS — Study in the States",
          href: "https://studyinthestates.dhs.gov",
        },
        {
          label: "U.S. Department of State — Student Visa",
          href: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        },
        {
          label: "IRS — Foreign Students and Scholars",
          href: "https://www.irs.gov/individuals/international-taxpayers/foreign-students-and-scholars",
        },
        {
          label: "IRS — About Form 8843, Statement for Exempt Individuals",
          href: "https://www.irs.gov/forms-pubs/about-form-8843",
        },
        {
          label: "IRS — About Form 3520, Reporting Foreign Gifts",
          href: "https://www.irs.gov/forms-pubs/about-form-3520",
        },
        {
          label:
            "IRS — Foreign student liability for Social Security and Medicare taxes",
          href: "https://www.irs.gov/individuals/international-taxpayers/foreign-student-liability-for-social-security-and-medicare-taxes",
        },
        {
          label: "SSA — Social Security Numbers",
          href: "https://www.ssa.gov/ssnumber/",
        },
      ]}
      faqs={[
        {
          question: "Can F-1 students open a bank account without an SSN?",
          answer:
            "Yes. Banks can verify a foreign student’s identity with a passport and other documents, so many open accounts for F-1 students using a passport, Form I-20, I-94 record, and proof of a US address. Requirements differ between banks and sometimes between branches, so check before you go. You may also be asked to sign Form W-8BEN confirming you are a foreign person for tax purposes.",
        },
        {
          question: "How much money do I need to show for an F-1 visa?",
          answer:
            "There is no single national figure. You need to document funds that cover the estimated cost of attendance on your Form I-20 — tuition, fees, and living costs for at least the first year, plus costs for any dependents — and each school sets its own estimate. Consular officers look for money that is readily available, such as bank balances, education loans, and scholarships, and for a credible source for the later years.",
        },
        {
          question: "Can F-1 students build credit?",
          answer:
            "Yes, though starting is slower. A few card issuers accept international students without an SSN, and a secured card backed by your own deposit is usually the easiest approval once you have an SSN or ITIN. Use one card lightly and pay the full balance every month; lenders may still weigh your temporary status when you apply for larger credit.",
        },
        {
          question: "Do F-1 students have to file taxes if they had no income?",
          answer:
            "Usually yes — not a tax return, but Form 8843. Nearly every F-1 student files it each year, even with no income, and each F-2 dependent files their own. It explains why your days in the US do not count toward the substantial presence test. If you had US income, such as wages or a taxable scholarship, you also file Form 1040-NR and possibly a state return.",
        },
        {
          question: "Is money from my parents taxable on an F-1 visa?",
          answer:
            "Generally no. Money your family sends to pay tuition and living costs is a gift or support, not income, and it does not go on your tax return. Very large gifts from abroad can trigger an information return, Form 3520, but that duty falls on US persons — which for tax purposes usually means it matters only after you become a resident, not during your nonresident student years.",
        },
      ]}
    >
      <p>
        An F-1 visa comes with a money problem other visas do not. You must
        prove you can pay for your degree before you are let in, your right to
        earn is tightly limited once you arrive, and you land with no Social
        Security number and no US credit history. Mistakes cost more than fees:
        unauthorised work or a missed filing can put your status at risk, and a
        status problem follows you into every later application.
      </p>
      <p>
        This guide follows the money in the order you meet it. For the visa
        itself, see{" "}
        <Link
          href="/visas/study/f1"
          className="font-semibold text-accent hover:underline"
        >
          F-1 visa requirements and process
        </Link>
        ; vocational students on an{" "}
        <Link
          href="/visas/study/m1"
          className="font-semibold text-accent hover:underline"
        >
          M-1 visa
        </Link>{" "}
        face tighter work rules.
      </p>

      <h2>Before you arrive: proof of funds and your I-20</h2>
      <p>
        Your school issues a Form I-20 only once you show you can pay for at
        least the first year. The I-20 sets out the school’s estimated cost of
        attendance for one academic year — tuition and fees, living expenses,
        and costs for any dependents — next to the funding you documented.
        There is no national figure: each school sets its own estimate, so the
        answer to “how much money do I need for an F-1 visa?” is always “what
        your I-20 says.”
      </p>
      <p>
        At the interview, the consular officer wants to see that the money is
        real, available, and credibly sourced:
      </p>
      <ul>
        <li>
          <strong>Liquid funds carry the most weight</strong> — bank balances,
          sanctioned education loans, and scholarship or assistantship letters.
          Property is hard to turn into tuition and counts for much less.
        </li>
        <li>
          <strong>History matters.</strong> A large deposit made just before
          the interview, with no explanation, invites questions. Several months
          of statements and proof of the source — salary, a sale, a loan —
          answer them.
        </li>
        <li>
          <strong>Sponsor documents should match.</strong> If parents or
          relatives are paying, bring a signed letter or affidavit of support
          stating what they will cover, with their bank statements and proof of
          income. Use your school’s sponsor form if it has one.
        </li>
        <li>
          <strong>Have a plan for the later years.</strong> Be ready to explain
          in a sentence where that money will come from.
        </li>
      </ul>
      <p>
        F-1 students are not eligible for US federal student aid, and private
        US student loans usually need a cosigner who is a citizen or permanent
        resident. Keep copies of your funding evidence: you may be asked for it
        again at the port of entry or when you renew your visa.
      </p>

      <h2>Paying tuition from abroad</h2>
      <p>
        Tuition is billed in dollars and due before you could earn a paycheck.
        Whether family pays by international wire or through a payment partner
        your school uses, the real cost is the transfer fee plus the
        exchange-rate margin — the gap between the rate you get and the
        mid-market rate, which on a tuition-sized payment can exceed the fee.
        Compare the dollar amount that actually arrives with the{" "}
        <Link
          href="/calculators/remittance"
          className="font-semibold text-accent hover:underline"
        >
          remittance fee calculator
        </Link>
        .
      </p>
      <p>
        Then start early. International transfers can take several business
        days, and banks in some countries want an admission letter, the I-20, or
        an invoice before releasing money for study abroad. A payment that
        arrives late or without your student ID can leave a balance that blocks
        registration — and failing to register full time is a status problem,
        not just an administrative one. Budget a margin above the I-20 figure,
        too: your home currency can weaken over a multi-year degree.
      </p>

      <h2>Your first weeks: a bank account without an SSN</h2>
      <p>
        You do not need a Social Security number to open a US bank account.
        Banks must verify your identity, and for a foreign student that can be
        done with a passport and other documents — typically your passport and
        visa, Form I-20, I-94 record, and proof of a US address such as a lease
        or a letter from your school. Policies vary by bank and even by branch,
        and you may be asked to sign Form W-8BEN, certifying that you are a
        foreign person for US tax purposes. Pick an account with a debit card,
        no unavoidable monthly fee, and easy direct deposit; skip overdraft
        products you do not understand. More in{" "}
        <Link
          href="/banking"
          className="font-semibold text-accent hover:underline"
        >
          banking and credit for immigrants
        </Link>
        .
      </p>
      <p>
        An SSN comes later, and only with work. The Social Security
        Administration issues numbers to noncitizens who are authorised to work
        in the US, so an F-1 student generally qualifies only with an on-campus
        job offer or authorised CPT or OPT employment. You cannot get one just
        to open an account or a phone plan. If you need a tax ID without a job —
        for a taxable scholarship, say — the IRS route is an{" "}
        <Link
          href="/taxes/itin"
          className="font-semibold text-accent hover:underline"
        >
          ITIN
        </Link>
        .
      </p>
      <p>
        One arrival rule: carrying more than $10,000 in cash or other monetary
        instruments into the US is legal, but you must declare it to US Customs
        and Border Protection when you enter.
      </p>

      <h2>Building a realistic budget</h2>
      <p>
        The living-expense line on your I-20 is the school’s average, not your
        bill. Start-up costs hit hardest:
      </p>
      <ul>
        <li>
          <strong>Housing.</strong> Expect a security deposit and often a credit
          check. With no US credit history you may be asked for a larger
          deposit, rent up front, or a guarantor. University housing usually
          avoids the credit check.
        </li>
        <li>
          <strong>Utilities and phone.</strong> Postpaid plans may want a credit
          check or a deposit if you have no SSN; a prepaid phone plan avoids
          both.
        </li>
        <li>
          <strong>Transport.</strong> Look for student transit passes. Car
          insurance is steep for drivers with no US record.
        </li>
        <li>
          <strong>The rest.</strong> Fees not billed with tuition, books, winter
          clothing, and a flight home.
        </li>
        <li>
          <strong>Dependents.</strong> An F-2 spouse generally cannot work, so a
          family on F-1 lives on one restricted income.
        </li>
      </ul>
      <p>
        Keep an emergency fund in your US account. Students most often run
        short in the first semester and between graduation and the first OPT
        paycheck.
      </p>

      <h2>Health insurance</h2>
      <p>
        There is no federal health insurance requirement for F-1 students, but
        most schools set their own, and requirements and costs vary from school
        to school. Many enrol international students in the school plan
        automatically and bill it with tuition; you can often waive it only by
        showing comparable coverage by a deadline early in the semester. Check
        any policy bought at home for benefit caps and pre-existing-condition
        exclusions. School coverage is tied to enrolment and can end around
        graduation, so line up the next plan before then. The options are in{" "}
        <Link
          href="/insurance/health"
          className="font-semibold text-accent hover:underline"
        >
          health insurance for visa holders
        </Link>
        .
      </p>

      <h2>Working while you study: what is allowed</h2>
      <h3>On-campus jobs</h3>
      <p>
        On-campus work — the library, a lab, a teaching or research
        assistantship — needs no USCIS approval. The limit is generally up to
        20 hours a week in total while school is in session, and full time
        during official school breaks if you will register for the next term.
        It is also what usually makes an F-1 student eligible for an SSN.
      </p>
      <h3>CPT, OPT, and off-campus work</h3>
      <p>
        Off-campus work needs authorisation before it starts. Curricular
        Practical Training (CPT) is authorised by your school’s designated
        school official (DSO) for work that is an integral part of your
        curriculum, and is tied to a specific employer and dates. Optional
        Practical Training (OPT) is authorised by USCIS with an Employment
        Authorization Document (EAD). Two planning points: twelve months or more
        of full-time CPT eliminates your OPT eligibility, and any
        pre-completion OPT used while studying reduces what is left after you
        graduate.
      </p>
      <Callout tone="warning" title="Unauthorised work is a status problem">
        <p>
          Working without authorisation violates F-1 status and can follow you
          into future visa and green card applications; paying tax on the
          income does not make it authorised. That includes gig apps, freelance
          and cash jobs, and work that starts before your CPT or EAD start date.
          Many schools also treat remote work for an employer back home, done
          from the US, as employment. Ask your DSO before accepting payment for
          any work.
        </p>
      </Callout>

      <h2>Building credit from zero</h2>
      <p>
        Your credit history from home does not follow you, and lenders are
        allowed to weigh a temporary visa when judging whether you will repay,
        so some decline F-1 applicants outright. Start anyway: the credit you
        build as a student decides the deposit on your first post-graduation
        apartment.
      </p>
      <ol>
        <li>Use a US checking account for a few months.</li>
        <li>
          Get one card. A few issuers accept international students without an
          SSN; most want an SSN or ITIN. A secured card, backed by your own
          deposit, is usually the easiest approval.
        </li>
        <li>
          Pay the full statement balance every month and keep the balance low
          relative to the limit.
        </li>
        <li>Do not apply for several cards at once.</li>
      </ol>
      <p>
        When your SSN arrives, give it to your card issuer. The full sequence is
        in{" "}
        <Link
          href="/banking/build-credit"
          className="font-semibold text-accent hover:underline"
        >
          how to build credit as an immigrant
        </Link>
        .
      </p>

      <h2>Taxes: file something every year</h2>
      <p>
        Most F-1 students are nonresident aliens for tax purposes for their
        first five calendar years in the US. Nonresidents still file:
      </p>
      <ul>
        <li>
          <strong>Form 8843, every year</strong>, for you and each F-2
          dependent, even with no income. It explains why your days in the US do
          not count toward the substantial presence test, and you do not need an
          SSN or ITIN to file it.
        </li>
        <li>
          <strong>Form 1040-NR if you had US income</strong> — wages, or the
          part of a scholarship or stipend that covers housing and living costs,
          which is generally taxable. Attach Form 8843 to it. A state return may
          be due too.
        </li>
        <li>
          <strong>No Social Security or Medicare tax</strong> on on-campus, CPT,
          or OPT wages while you are a nonresident student. Check your first pay
          stub; payroll departments get this wrong.
        </li>
      </ul>
      <p>
        Mainstream tax software is generally built for resident returns, and
        filing a resident Form 1040 by mistake is a common F-1 error; many
        schools offer nonresident software instead. Once your exempt years end, most students become residents for
        tax purposes — which switches on Social Security and Medicare tax,
        changes the return you file, and makes accounts back home reportable.
        Check your year with the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>{" "}
        and read{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident for tax purposes
        </Link>
        . Treaties, forms, and FICA refunds are in the{" "}
        <Link href="/taxes/f1" className="font-semibold text-accent hover:underline">
          F-1 tax guide
        </Link>
        ; keep every Form W-2 and Form 1042-S you receive.
      </p>

      <h2>Money from family, and money sent home</h2>
      <p>
        Money your family sends for tuition and living costs is generally a gift
        or support, not income, so it is not taxable to you. Keep a record of
        who sent what, and why; banks may ask about large incoming transfers.
        One rule matters later: US persons who receive gifts from a foreign
        person above a high annual threshold must report them to the IRS on Form
        3520 — an information return, not a tax. Resident aliens count as US
        persons, so it can apply once you become a resident on OPT or an H-1B.
      </p>
      <p>
        Going the other way, the exchange-rate margin on transfers home adds up
        on a student budget; compare total cost with the{" "}
        <Link
          href="/calculators/remittance"
          className="font-semibold text-accent hover:underline"
        >
          remittance fee calculator
        </Link>{" "}
        and see{" "}
        <Link
          href="/send-money"
          className="font-semibold text-accent hover:underline"
        >
          how to send money home
        </Link>
        . For idle savings,{" "}
        <Link
          href="/investing/on-a-visa"
          className="font-semibold text-accent hover:underline"
        >
          investing on a visa
        </Link>{" "}
        draws the line: buy-and-hold investing is generally fine; trading so
        actively that it looks like a job is not.
      </p>

      <h2>Scams that target international students</h2>
      <p>Scammers target newcomers who are anxious about status:</p>
      <ul>
        <li>
          <strong>Government impersonation.</strong> A caller “from the IRS,
          USCIS, or the police” demands immediate payment by gift card,
          cryptocurrency, or wire to avoid arrest or deportation. Agencies do
          not demand payment this way, and the IRS generally makes first contact
          by mail.
        </li>
        <li>
          <strong>Fake jobs.</strong> An “employer” sends a check, asks you to
          send part of it back, and the check bounces days later — the loss is
          yours.
        </li>
        <li>
          <strong>Housing.</strong> A below-market listing, a landlord who is
          “abroad,” and a deposit demanded before you have seen a lease.
        </li>
        <li>
          <strong>SEVIS threats.</strong> Messages saying your I-20 will be
          cancelled unless you pay a fee. Your DSO manages your SEVIS record;
          ask them directly.
        </li>
      </ul>
      <p>
        Never give your SSN, a passport scan, or a bank login to an unverified
        contact, and tell your DSO and your bank quickly if you are targeted.
      </p>

      <h2>Planning for OPT</h2>
      <p>
        Post-completion OPT is typically up to 12 months of work related to your
        major, with a possible 24-month extension for STEM graduates. Plan your
        final year around it:
      </p>
      <ul>
        <li>
          File Form I-765, with your DSO’s recommendation, between 90 days
          before and 60 days after your program end date. Processing can take
          months, and you cannot start work before your EAD start date.
        </li>
        <li>
          Your campus job, and possibly your school health plan, end around
          graduation. Save for a stretch with no paycheck.
        </li>
        <li>
          OPT wages are generally exempt from Social Security and Medicare tax
          while you are a nonresident, but income tax still applies. Estimate
          take-home pay with the{" "}
          <Link
            href="/calculators/f1-opt-tax"
            className="font-semibold text-accent hover:underline"
          >
            F-1 OPT tax calculator
          </Link>{" "}
          before you sign a lease.
        </li>
        <li>
          Avoid travelling while your application is pending; once it is
          approved, carry your EAD, a recently signed I-20, and proof of
          employment.
        </li>
      </ul>
      <Callout tone="alert" title="Unemployment days count from your EAD start date">
        <p>
          You may accrue no more than 90 days of unemployment on post-completion
          OPT; the STEM extension adds 60, for 150 days in total. The clock runs
          from your EAD start date, job or no job, and exceeding the limit can
          end your status. Keep a running count.
        </p>
      </Callout>
      <p>
        Filing rules and STEM requirements are in{" "}
        <Link
          href="/visas/study/f1-opt"
          className="font-semibold text-accent hover:underline"
        >
          F-1 OPT explained
        </Link>
        .
      </p>

      <h2>From OPT to H-1B</h2>
      <p>
        Most long-term routes run through an employer-sponsored visa, usually
        the H-1B. Your employer enters you in the annual lottery; if you are
        selected and a change-of-status petition is filed in time, cap-gap rules
        can bridge your F-1 status and work authorisation until the H-1B starts.
        The rules have changed repeatedly in recent years; read the{" "}
        <Link
          href="/visa-guides/h1b"
          className="font-semibold text-accent hover:underline"
        >
          H-1B financial guide
        </Link>
        .
      </p>
      <p>
        H-1B wages carry Social Security and Medicare tax from the first
        paycheck, and because
        H-1B days count toward the substantial presence test, you will usually
        be a resident for tax purposes by your first full calendar year on the
        visa. If a green card follows, see the{" "}
        <Link
          href="/visa-guides/green-card"
          className="font-semibold text-accent hover:underline"
        >
          green card financial guide
        </Link>
        .
      </p>

      <h2>Your F-1 money checklist</h2>
      <ol>
        <li>
          Funding evidence for the full I-20 amount, with its source documented.
        </li>
        <li>First tuition payment sent early, with transfer costs compared.</li>
        <li>
          Checking account opened; health insurance waiver deadline noted.
        </li>
        <li>
          On-campus work kept within 20 hours a week in term; SSN applied for.
        </li>
        <li>One card, paid in full every month.</li>
        <li>
          Form 8843 every year, plus Form 1040-NR if you had US income.
        </li>
        <li>DSO sign-off before any off-campus work.</li>
        <li>OPT window and a savings runway planned a year ahead.</li>
      </ol>

      <h2>Where to go deeper</h2>
      <ul>
        <li>
          <Link
            href="/visas/study/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 visa requirements and process
          </Link>{" "}
          — eligibility, documents, and the interview.
        </li>
        <li>
          <Link
            href="/visas/study/f1-opt"
            className="font-semibold text-accent hover:underline"
          >
            F-1 OPT explained
          </Link>{" "}
          — how work authorisation after study actually works.
        </li>
        <li>
          <Link
            href="/taxes/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 student taxes
          </Link>{" "}
          — filing, FICA exemptions, and OPT income.
        </li>
      </ul>
    </GuideLayout>
  );
}

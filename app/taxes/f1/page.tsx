import Link from "next/link";
import type { Faq } from "@/lib/types";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/taxes/f1";
const TITLE = "F-1 Student Taxes: Filing, OPT Income & FICA";
const DESCRIPTION =
  "How US taxes work on an F-1 visa — who must file Form 1040-NR or 8843, how OPT and CPT wages are taxed, the FICA exemption, and treaty basics.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const faqs: Faq[] = [
  {
    question: "Do F-1 students have to file taxes with no income?",
    answer:
      "Almost every F-1 student has to file Form 8843 for each year they are in the US, even with no income at all, and so does each F-2 family member. It is an informational statement, not a tax return, and when there is no Form 1040-NR to attach it to you mail it to the IRS on its own. With no US income you normally do not need a 1040-NR or a state return.",
  },
  {
    question: "Do OPT students pay Social Security and Medicare tax?",
    answer:
      "Not while they are nonresident aliens. F-1 students working on OPT, including the STEM extension, are exempt from FICA on those wages until they become residents for tax purposes, which for most people happens in their sixth calendar year in the US. From that point, or from the first H-1B paycheck if they change status, the 7.65% applies.",
  },
  {
    question: "Can F-1 students use regular tax software?",
    answer:
      "Usually not while they are nonresidents. Most mainstream consumer tax software prepares Form 1040 for citizens and residents and does not support Form 1040-NR, so a nonresident who uses it ends up filing the wrong return. Ask your international student office first, because many schools provide free access to software built for nonresident returns. Once you are a resident for tax purposes, ordinary software is fine.",
  },
  {
    question: "What happens to F-1 taxes after 5 years in the US?",
    answer:
      "Your days start counting toward the substantial presence test on January 1 of your sixth calendar year as a student, and most people become resident aliens that year even though their visa has not changed. You then file Form 1040, report worldwide income, take the standard deduction and pay FICA on your wages, OPT wages included. Foreign account reporting such as the FBAR can start applying too.",
  },
  {
    question: "Is my scholarship taxable on an F-1 visa?",
    answer:
      "Often partly. For a degree student, amounts used for tuition, required fees, books, supplies and equipment are generally tax-free, while amounts for room, board, travel or a living allowance are taxable. Schools report the taxable part of a US-source scholarship on Form 1042-S and usually withhold tax from it, and a few treaties exempt scholarship income for students from particular countries.",
  },
];

export default function F1TaxGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="F-1 student taxes"
      description="Who files Form 8843 and 1040-NR, how campus, CPT, OPT and scholarship income is taxed, the FICA exemption, and what changes after your fifth year."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "F-1 student taxes", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Foreign Students and Scholars",
          href: "https://www.irs.gov/individuals/international-taxpayers/foreign-students-and-scholars",
        },
        {
          label: "IRS — Foreign student liability for Social Security and Medicare taxes",
          href: "https://www.irs.gov/individuals/international-taxpayers/foreign-student-liability-for-social-security-and-medicare-taxes",
        },
        {
          label: "IRS — Exempt individual: who is a student",
          href: "https://www.irs.gov/individuals/international-taxpayers/exempt-individual-who-is-a-student",
        },
        {
          label: "IRS Publication 519 — U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/forms-pubs/about-publication-519",
        },
        {
          label: "IRS — About Form 8843, Statement for Exempt Individuals",
          href: "https://www.irs.gov/forms-pubs/about-form-8843",
        },
        {
          label: "IRS — About Form 1040-NR, U.S. Nonresident Alien Income Tax Return",
          href: "https://www.irs.gov/forms-pubs/about-form-1040-nr",
        },
        {
          label: "IRS — About Form 843, Claim for Refund and Request for Abatement",
          href: "https://www.irs.gov/forms-pubs/about-form-843",
        },
        {
          label: "IRS — About Form 8233, treaty exemption from withholding on compensation",
          href: "https://www.irs.gov/forms-pubs/about-form-8233",
        },
      ]}
      faqs={faqs}
    >
      <h2>Students are not “tax free”</h2>
      <p>
        An F-1 visa does not exempt you from US income tax. For a limited time
        it gives you two narrower things: your days in the US do not count
        toward the test that would make you a resident for tax purposes, and
        the wages your status allows are exempt from Social Security and
        Medicare tax. Scholarships, assistantships, on-campus jobs, CPT and OPT
        wages can all still create income tax and a filing requirement. For a
        typical nonresident F-1 student, the yearly routine is:
      </p>
      <ul>
        <li>
          <strong>Form 8843</strong> for every year you are in the US, income
          or not.
        </li>
        <li>
          <strong>Form 1040-NR</strong> for any year with taxable US-source
          income, with Form 8843 attached.
        </li>
        <li>
          <strong>A state return</strong> if you earned income in a state that
          taxes it.
        </li>
        <li>
          <strong>No FICA</strong> on on-campus, CPT or OPT wages while you
          remain a nonresident.
        </li>
      </ul>

      <h2>Why most F-1 students are nonresident aliens</h2>
      <p>
        Without a green card, whether a non-citizen is a resident or
        nonresident alien for tax purposes comes down to the substantial
        presence test: at least 31 days in the current year and 183 weighted
        days over three years. A student here for a full academic year would
        pass it easily — if the days counted.
      </p>
      <p>
        For most students they do not. F-1 students are{" "}
        <strong>exempt individuals</strong>: not exempt from tax, but exempt
        from counting days, until they have been exempt as a student for any
        part of more than five calendar years. Any part means any part. A year
        in which you arrived on December 28 uses up a whole year, and earlier F,
        J, M or Q stays count toward the total. An F-1 who first arrived in
        August 2023 is exempt for 2023 through 2027; their days start counting
        on January 1, 2028.
      </p>
      <p>
        After five years, a student can stay exempt only by establishing that
        they do not intend to live in the US permanently and have substantially
        complied with the terms of their visa, explained on a statement attached
        to Form 8843. The IRS weighs the facts case by case, including any steps
        toward a green card, so do not assume it applies. The{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident guide
        </Link>{" "}
        covers dual-status years and the rest of the mechanics, and the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>{" "}
        checks your own dates.
      </p>

      <h2>Form 8843: every year, even with no income</h2>
      <p>
        Form 8843, Statement for Exempt Individuals and Individuals With a
        Medical Condition, is how you tell the IRS you are excluding your days.
        It is not a tax return and nothing is owed with it, but it is required
        for every calendar year you claim the exemption, including years with
        no income and the year you arrived.
      </p>
      <ul>
        <li>Every F-1 student files one, whether or not they worked.</li>
        <li>
          Each F-2 spouse and child files a separate one, because their days
          are excluded through your status.
        </li>
        <li>
          No SSN or ITIN is needed. The form asks for a US taxpayer
          identification number only if you have one.
        </li>
        <li>
          Attach it to Form 1040-NR if you file one. Otherwise mail it on its
          own to the IRS address in the form instructions by the 1040-NR due
          date, which is June 15 for someone with no wages subject to
          withholding.
        </li>
      </ul>
      <Callout tone="warning" title="The form students forget">
        Because nothing is owed, Form 8843 is the first thing people skip. Yet
        it is what keeps your days out of the count: file late or not at all
        and the IRS can refuse to exclude them, making you a resident for a
        year you thought was clear.
      </Callout>

      <h2>Form 1040-NR: when you have US income</h2>
      <p>
        Nonresident aliens file Form 1040-NR, not the Form 1040 that citizens
        and residents use. A nonresident F-1 student generally files one for
        any year with taxable US-source income: wages, the taxable part of a
        scholarship or fellowship, or treaty-exempt income you need to claim.
        Very small wage amounts can fall below the filing requirement, but a
        return is the only way to get over-withheld tax back, so most students
        with a paycheck file anyway.
      </p>
      <p>
        Your documents arrive in two waves. Employers must send Form W-2 by
        January 31. Schools and other payers send Form 1042-S — used for
        taxable scholarships, treaty-exempt wages and certain other payments to
        nonresidents — by March 15. Wait for both before filing. Form 1040-NR
        can be e-filed through
        software that supports it, or mailed. Keep copies of your I-20, EAD,
        I-94 travel history, and every W-2 and 1042-S.
      </p>

      <h2>What is taxable on F-1</h2>
      <p>
        As a nonresident you are taxed only on US-source income. Interest on a
        savings account back home, for example, is not taxed while you are a
        nonresident.
      </p>

      <h3>Wages from on-campus jobs, CPT and OPT</h3>
      <p>
        Pay for work done in the US is taxed at the same graduated federal rates
        everyone pays. There is no special OPT tax rate. What differs from a
        resident colleague is that you pay no Social Security or Medicare tax
        and, in most cases, get no standard deduction, both covered below.
        Assistantship stipends for teaching or research are wages too, whatever
        your school calls them. The{" "}
        <Link
          href="/calculators/f1-opt-tax"
          className="font-semibold text-accent hover:underline"
        >
          F-1 OPT tax calculator
        </Link>{" "}
        shows the effect on your paycheck.
      </p>
      <p>
        If authorized work is paid as contractor income on a Form 1099, nobody
        withholds tax, so you may need to make estimated payments; nonresident
        aliens are generally not subject to self-employment tax. Confirm with
        your designated school official that contract work fits your
        authorization, and see the{" "}
        <Link
          href="/visas/study/f1-opt"
          className="font-semibold text-accent hover:underline"
        >
          OPT guide
        </Link>
        .
      </p>

      <h3>Scholarships, fellowships and grants</h3>
      <p>
        For a degree candidate, the part of a scholarship or fellowship used for
        tuition, required fees, books, supplies and equipment is generally not
        taxable. The part covering room, board, travel or a living allowance
        is. That is how a full scholarship can still leave taxable income.
        Withholding on the taxable part of a US-source scholarship paid to an
        F-1 student is generally 14% unless a treaty reduces it, and the school
        reports it on Form 1042-S.
      </p>
      <p>
        The source generally follows the payer. A grant from a US university,
        company or government agency is US-source. One paid by a foreign
        government or foreign organization is generally foreign-source, and so
        not taxable to a nonresident, even if a US agent disburses it.
      </p>

      <h3>Bank interest and investments</h3>
      <p>
        Interest on ordinary US bank deposits is generally not taxable for a
        nonresident alien, which is why banks ask for Form W-8BEN to certify
        foreign status. Dividends from US shares are generally taxed at a flat
        30%, or a lower treaty rate, withheld at source.
      </p>

      <h2>The FICA exemption on campus, CPT and OPT wages</h2>
      <p>
        FICA is Social Security tax (6.2%) plus Medicare tax (1.45%): 7.65% of
        gross pay. Nonresident alien F-1 students are exempt on wages for work
        their status permits: on-campus jobs, off-campus work authorized by
        USCIS, and practical training, which covers CPT, OPT and the STEM OPT
        extension.
      </p>
      <p>
        Two conditions must hold together: you are in F-1 status doing
        permitted work, and you are a nonresident alien for tax purposes. The
        exemption does not end on a date
        printed on your EAD; it ends when you become a resident, typically in
        your sixth calendar year, often in the middle of OPT or STEM OPT. From
        then on FICA applies to OPT wages although your visa has not changed. A
        separate student exemption, open to anyone including US citizens, can
        still cover pay from the school where you are enrolled and regularly
        attending classes. H-1B wages are never covered by the F-1 exemption.
      </p>

      <h3>If FICA was withheld by mistake</h3>
      <p>
        Check your first pay stub for Social Security (sometimes labeled OASDI)
        and Medicare lines; off-campus employers who rarely hire F-1 students
        often withhold by default. If it was taken wrongly:
      </p>
      <ol>
        <li>
          <strong>Ask your employer to refund it.</strong> Show your I-20, EAD
          and I-94 record and point payroll to the IRS page on foreign student
          liability for Social Security and Medicare taxes. Payroll can usually
          correct the current year and repay you directly.
        </li>
        <li>
          <strong>If they will not, claim it from the IRS</strong> on Form 843
          with Form 8316 and the documents the Form 843 instructions list —
          typically your W-2, copies of your visa, I-94, I-20 and EAD, and your
          1040-NR.
        </li>
        <li>
          <strong>Do not claim it on your 1040-NR.</strong> It is a separate
          claim, and refund claims have time limits, so do not leave it for
          years.
        </li>
      </ol>

      <h2>No standard deduction, unless you are a student from India</h2>
      <p>
        Nonresident aliens generally cannot take the standard deduction, so
        federal tax applies from the first dollar of wages. The exception is
        the US–India tax treaty: students and business apprentices from India
        can claim it on Form 1040-NR. Nonresidents can itemize a short list of
        deductions instead, most usefully state and local income tax withheld
        from pay. They also generally cannot claim the education credits, so
        the Form 1098-T your school sends does not produce a credit on a
        1040-NR.
      </p>
      <p>
        Withholding reflects this. Nonresident aliens fill in Form W-4 under the
        special instructions in IRS Notice 1392, and employers add an extra
        amount to wages when calculating withholding to make up for the missing
        standard deduction — usually why your withholding looks higher than a
        resident friend’s on the same salary.
      </p>

      <h2>Tax treaty benefits for students</h2>
      <p>
        Many US income tax treaties include an article for students and
        trainees, and what it covers varies by country: some exempt scholarship
        income, some a set amount of earnings each year, some money sent from
        home for support, and most limit the number of years. There is no
        universal F-1 treaty benefit, so read your own country’s article in the
        treaty text the IRS publishes. You can claim it two ways:
      </p>
      <ul>
        <li>
          <strong>Through your employer</strong>, with Form 8233, so the exempt
          wages are not withheld on during the year. A new form is needed each
          tax year. For scholarships that are not pay for services, the school
          may ask for Form W-8BEN instead.
        </li>
        <li>
          <strong>On your return</strong>, by claiming the exemption on Form
          1040-NR with the country and treaty article. Tax withheld on the
          exempt amount then comes back in your refund.
        </li>
      </ul>
      <p>
        Treaty claims need an SSN or, if you are not authorized to work, an
        ITIN; the{" "}
        <Link
          href="/taxes/itin"
          className="font-semibold text-accent hover:underline"
        >
          ITIN guide
        </Link>{" "}
        covers how students apply. Once you become a resident, the treaty’s
        saving clause usually switches student benefits off, though a few
        treaties let some continue.
      </p>

      <h2>State tax returns</h2>
      <p>
        States run their own income taxes with their own residency rules,
        usually based on domicile and time spent in the state rather than the
        federal alien tests, so your federal and state status can differ.
      </p>
      <ul>
        <li>
          If you worked in a state with an income tax, you usually file there.
          A few states do not tax wages at all.
        </li>
        <li>
          A summer internship in another state can mean returns in both the
          state where you worked and the state where you study, often with a
          credit in one for tax paid to the other.
        </li>
        <li>
          Not every state honors federal tax treaties, so treaty-exempt wages
          can still be taxed by the state.
        </li>
        <li>
          Form 8843 and the FICA exemption are federal. A student with no
          income usually has nothing to file with the state.
        </li>
      </ul>

      <h2>When you become a resident, and what changes</h2>
      <p>
        The exempt years run on a fixed calendar, not on when your studies end.
        Two common triggers end them:
      </p>
      <ul>
        <li>
          <strong>Your sixth calendar year begins.</strong> Students on OPT or
          STEM OPT often reach it while still working on their EAD.
          Day-counting starts January 1, and you usually become a resident for
          that year.
        </li>
        <li>
          <strong>You change to H-1B or another work visa.</strong> H-1B days
          count from the change date, so a change on October 1 usually leaves
          you a nonresident for that year and a resident from the next.
        </li>
      </ul>
      <p>Once you are a resident for tax purposes:</p>
      <ul>
        <li>
          <strong>You file Form 1040.</strong> Form 8843 is needed only for
          years in which you exclude days, so in the year you switch to H-1B
          you still file one for your F-1 days.
        </li>
        <li>
          <strong>You report worldwide income</strong>, usually with a foreign
          tax credit for tax paid abroad.
        </li>
        <li>
          <strong>FICA applies</strong>, OPT wages included. Tell payroll
          promptly; employers often keep the exemption running by mistake,
          which becomes a bill later.
        </li>
        <li>
          <strong>You get the standard deduction</strong> and credits
          nonresidents cannot claim.
        </li>
        <li>
          <strong>Foreign account reporting starts.</strong> If your accounts
          outside the US together exceeded $10,000 at any point in the year, you
          file an{" "}
          <Link
            href="/taxes/fbar"
            className="font-semibold text-accent hover:underline"
          >
            FBAR
          </Link>
          , and larger balances can bring{" "}
          <Link
            href="/taxes/fatca"
            className="font-semibold text-accent hover:underline"
          >
            Form 8938 under FATCA
          </Link>
          .
        </li>
        <li>
          <strong>Most treaty student benefits end.</strong>
        </li>
      </ul>
      <p>
        A year that starts nonresident and ends resident is a dual-status year
        with its own rules. Once you are on H-1B, the{" "}
        <Link
          href="/taxes/h1b"
          className="font-semibold text-accent hover:underline"
        >
          H-1B tax guide
        </Link>{" "}
        and{" "}
        <Link
          href="/calculators/h1b-tax"
          className="font-semibold text-accent hover:underline"
        >
          H-1B tax calculator
        </Link>{" "}
        pick up from here.
      </p>

      <h2>Tax software, deadlines and getting help</h2>
      <p>
        Most mainstream consumer tax software is built around Form 1040 and
        does not support Form 1040-NR, so a nonresident using it usually ends
        up filing as a resident, with deductions and credits they are not
        entitled to. Many universities give international students free access
        to nonresident tax software through the international student office.
        Start there before paying anyone.
      </p>
      <ul>
        <li>
          <strong>April 15:</strong> Form 1040-NR if you had wages subject to
          US income tax withholding, which covers almost anyone with a W-2.
        </li>
        <li>
          <strong>June 15:</strong> Form 1040-NR if you had no wages subject to
          withholding, and Form 8843 filed on its own.
        </li>
        <li>
          <strong>Extensions:</strong> Form 4868 extends the time to file, not
          the time to pay.
        </li>
      </ul>
      <p>
        A deadline that falls on a weekend or legal holiday moves to the next
        business day. State deadlines are set by each state.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li>
          <strong>Filing Form 1040 as a nonresident</strong>, usually through
          software built for residents. The fix is Form 1040-X with a corrected
          1040-NR attached.
        </li>
        <li>
          <strong>Claiming the standard deduction</strong> when you are not a
          student from India.
        </li>
        <li>
          <strong>Skipping Form 8843</strong> in years with no income, or for
          F-2 family members.
        </li>
        <li>
          <strong>Filing before the 1042-S arrives.</strong>
        </li>
        <li>
          <strong>Treating a whole scholarship as tax-free</strong> when part
          of it paid for housing and meals.
        </li>
        <li>
          <strong>Not checking pay stubs for FICA</strong>, either withheld
          while you are exempt or missing after you become a resident.
        </li>
        <li>
          <strong>Assuming the FICA exemption lasts as long as OPT.</strong> It
          lasts as long as you are a nonresident.
        </li>
        <li>
          <strong>Forgetting the state return</strong> after an out-of-state
          internship.
        </li>
      </ul>

      <h2>Tools and related guides</h2>
      <ul>
        <li>
          <Link
            href="/calculators/f1-opt-tax"
            className="font-semibold text-accent hover:underline"
          >
            F-1 OPT tax calculator
          </Link>{" "}
          — estimate take-home pay with and without the FICA exemption.
        </li>
        <li>
          <Link
            href="/calculators/substantial-presence"
            className="font-semibold text-accent hover:underline"
          >
            Substantial presence test calculator
          </Link>{" "}
          — count weighted days and see where you stand.
        </li>
        <li>
          <Link
            href="/visas/study/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 visa requirements and process
          </Link>{" "}
          — the visa itself, rather than the tax side.
        </li>
        <li>
          <Link
            href="/visa-guides/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 financial guide
          </Link>{" "}
          — banking, budgeting, and sending money home as a student.
        </li>
      </ul>
    </GuideLayout>
  );
}

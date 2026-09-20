import Link from "next/link";
import type { Faq } from "@/lib/types";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/taxes/fbar";
const TITLE = "FBAR Filing Requirements, Threshold & Deadline";
const DESCRIPTION =
  "FBAR filing requirements for H-1B workers and green card holders: the $10,000 threshold, which foreign accounts count, and the April 15 deadline.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const faqs: Faq[] = [
  {
    question: "Do H-1B workers need to file an FBAR?",
    answer:
      "Yes, if two things are true: you are a resident for US tax purposes, which most H-1B holders are from their first full calendar year under the substantial presence test, and the combined value of your accounts outside the US exceeded $10,000 at any point in the year. The visa itself is irrelevant; tax residency is what puts you in scope. Someone who arrived late in the year and was a nonresident for the whole of it is generally outside the rule for that year.",
  },
  {
    question: "Is the FBAR filed with my tax return?",
    answer:
      "No. FinCEN Form 114 is filed with the Financial Crimes Enforcement Network through its BSA E-Filing System, completely separately from Form 1040. Schedule B of your return asks whether you are required to file it, but answering yes there does not file anything. You have to go to the FinCEN site and submit the report yourself or have your preparer do it.",
  },
  {
    question: "What if my accounts only exceeded $10,000 for a few days?",
    answer:
      "The test is the highest combined value at any time during the calendar year, so a few days is enough. If the aggregate crossed $10,000 even once, you file and you list every foreign account you held that year, including small ones and ones you closed. The balance on December 31 does not matter.",
  },
  {
    question: "I never filed FBARs for earlier years. What should I do?",
    answer:
      "If you reported all the income from those accounts on your tax returns and simply missed the form, file the late FBARs through BSA E-Filing now, choosing a reason for late filing on the form. If interest or other income also went unreported, the IRS Streamlined Filing Compliance Procedures may be the right route, and that is a decision to make with a tax professional experienced in offshore compliance. Waiting until the IRS contacts you removes most of your options.",
  },
];

export default function FbarGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="FBAR explained: reporting accounts you hold outside the US"
      description="Who has to file FinCEN Form 114, how the $10,000 threshold really works, what to report, and how to fix missed years."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "FBAR", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Report of Foreign Bank and Financial Accounts (FBAR)",
          href: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar",
        },
        {
          label: "FinCEN — Report of Foreign Bank and Financial Accounts (FBAR)",
          href: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts",
        },
        {
          label: "FinCEN — Reporting maximum account value",
          href: "https://www.fincen.gov/reporting-maximum-account-value",
        },
        {
          label: "BSA E-Filing System — File an FBAR as an individual",
          href: "https://bsaefiling.fincen.gov/file/fbar",
        },
        {
          label: "IRS — Streamlined Filing Compliance Procedures",
          href: "https://www.irs.gov/individuals/international-taxpayers/streamlined-filing-compliance-procedures",
        },
      ]}
      faqs={faqs}
    >
      <h2>What the FBAR is</h2>
      <p>
        FinCEN Form 114, the Report of Foreign Bank and Financial Accounts, is
        an annual report of the financial accounts you hold outside the United
        States. It goes to the Financial Crimes Enforcement Network (FinCEN), a
        bureau of the Treasury, not to the IRS, and you submit it electronically
        through FinCEN&apos;s BSA E-Filing System. It is not attached to your
        Form 1040, it has its own deadline, and filing your tax return does not
        file it for you.
      </p>
      <p>
        Two features make it easy to miss. Nothing is owed with it, so tax
        software treats it as an afterthought. And the trigger is the balance in
        your accounts, not whether they earned anything, so a dormant salary
        account back home can put you in scope on its own.
      </p>
      <p>
        Your tax return does ask about it. Schedule B, Part III, asks whether
        you had a financial interest in or signature authority over a foreign
        account and whether you are required to file FinCEN Form 114. Answer it
        accurately. A &quot;yes&quot; on Schedule B with no matching FBAR is
        exactly the kind of mismatch that gets noticed.
      </p>

      <h2>Who counts as a &quot;US person&quot;</h2>
      <p>
        The filing obligation falls on United States persons: citizens
        (including minor children), US residents, and US entities and trusts.
        For anyone here on a visa the word that matters is <strong>resident</strong>,
        and FBAR borrows the income-tax definition. You are a US resident for
        FBAR purposes if you are a resident alien under the Internal Revenue
        Code, which means you meet either the green card test or the
        substantial presence test. Your immigration category plays no part in
        it. If you are not sure where you land, start with the{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident guide
        </Link>{" "}
        and run the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>
        .
      </p>
      <ul>
        <li>
          <strong>Green card holders</strong> are US persons from the day they
          become permanent residents, wherever in the world they live.
        </li>
        <li>
          <strong>H-1B and L-1 workers</strong> usually become residents for tax
          purposes in their first full calendar year. If you arrived mid-year
          your first year may be nonresident or dual-status; from the second
          year onward you are almost certainly in scope.
        </li>
        <li>
          <strong>F-1 students</strong> are typically exempt from counting days
          for their first five calendar years, so they are usually nonresidents
          and outside FBAR until that exemption runs out or they switch to a
          work visa.
        </li>
      </ul>

      <h2>The $10,000 threshold is aggregate, and one day is enough</h2>
      <p>
        You must file if the combined maximum values of all your foreign
        financial accounts exceeded $10,000 at any time during the calendar
        year. Both halves of that sentence trip people up.
      </p>
      <p>
        <strong>Aggregate</strong> means you add every account together. Four
        accounts holding the equivalent of $3,000 each are $12,000 in
        aggregate, so you file, and you report all four.{" "}
        <strong>At any time</strong> means the highest point, not the year-end
        balance. If you moved $15,000 into a home-country account to cover a
        family expense and it sat there for two days before being paid out, you
        crossed the threshold for that year even though the account ended
        December near zero.
      </p>
      <Callout tone="warning" title="Not per account, not year-end">
        The threshold is tested against the combined peak of all your foreign
        accounts, and once it is crossed every account is reported, including
        the ones holding a few hundred dollars and the ones you closed during
        the year.
      </Callout>

      <h2>What counts as a foreign financial account</h2>
      <p>
        &quot;Foreign&quot; means the account is held at an institution located
        outside the United States. Where the money came from and what currency
        it is in do not matter. Accounts that typically have to be reported
        include:
      </p>
      <ul>
        <li>
          Bank deposit accounts of every kind: savings, current or checking,
          fixed or term deposits, and the special non-resident account types
          many countries offer their citizens abroad.
        </li>
        <li>
          Brokerage and securities accounts, and mutual funds held through a
          foreign institution.
        </li>
        <li>Insurance or annuity policies that have a cash value.</li>
        <li>
          Many retirement, provident and pension accounts held in your own name
          with a foreign institution. Employer-managed schemes are a gray area,
          so ask a professional rather than assume either way.
        </li>
        <li>
          Accounts at a foreign branch of a US bank. Accounts at a US branch of a
          foreign bank, on the other hand, are domestic and are not reported.
        </li>
        <li>
          Joint accounts, including ones you share with parents or siblings.
          Each joint owner reports the entire value of the account, not their
          share.
        </li>
        <li>
          Accounts you have signature authority over but no money in, such as a
          parent&apos;s account you can operate for them or an employer account
          you can sign on.
        </li>
      </ul>
      <p>
        A child with foreign accounts has their own FBAR obligation; if the
        child cannot file, a parent or guardian files on their behalf. Physical
        assets are not accounts: property held directly, gold or cash kept at
        home, and the contents of a safe deposit box do not go on an FBAR.
      </p>

      <h2>Working out the maximum value in dollars</h2>
      <p>
        For each account, take a reasonable approximation of the greatest value
        it held during the calendar year. Periodic statements are acceptable
        evidence; you do not need a daily ledger. Then convert to US dollars
        using the Treasury&apos;s exchange rate for the last day of the
        calendar year, published as the Treasury Reporting Rates of Exchange,
        even if the peak balance happened in March. If Treasury publishes no
        rate for your currency, use another verifiable rate and record its
        source.
      </p>
      <p>
        Use the same year-end rate for the threshold test. An account that
        looked like $9,500 mid-year can land on either side of $10,000 at the
        December rate, so do the arithmetic rather than eyeballing it.
      </p>

      <h2>Deadline: April 15, with an automatic extension to October 15</h2>
      <p>
        The FBAR is a calendar-year report due April 15 of the following year.
        If you miss April 15 you receive an automatic extension to October 15.
        There is no form to file and nothing to request; FinCEN simply treats
        October 15 as the outer date. In practice, then, October 15 is the
        deadline that matters, but filing alongside your tax return in April
        keeps the two exercises together and is the habit to build.
      </p>
      <p>
        You file on the BSA E-Filing site. Individuals use the no-registration
        option, complete the report, sign it electronically and save the
        confirmation. If you have a preparer, they can file for you if you sign
        FinCEN Form 114a authorising them; that form stays in your records and
        is not submitted.
      </p>
      <Callout tone="tip" title="Spouses can sometimes file one report">
        A married couple can file a single FBAR only if every account the
        non-filing spouse would have to report is jointly owned with the filing
        spouse, the report is filed on time, and both have signed Form 114a. If
        either spouse has any account in their own name, each files separately
        and each reports the full value of the joint accounts.
      </Callout>

      <p>
        Then keep your records for five years from the FBAR due date: the name
        on each account, the account number, the institution&apos;s name and
        address, the type of account and its maximum value for the year. Saved
        statements and a one-page summary are enough.
      </p>

      <h2>Penalties, and how to fix missed years</h2>
      <p>
        FBAR penalties are civil and, in serious cases, criminal. The law
        distinguishes between non-willful violations, where the penalty is a
        per-violation amount that is capped and adjusted for inflation each
        year, and willful violations, where the penalty is calculated against
        the balance of the accounts themselves and can be very large, with the
        possibility of prosecution on top. Willfulness does not require an
        intent to cheat; a pattern of ignoring a requirement you should have
        known about can be treated as willful. Your position is far better if
        you come forward before anyone asks.
      </p>
      <p>
        If you missed FBARs but reported all the income from the accounts on
        your tax returns, the fix is to file the late reports through BSA
        E-Filing. The form has a drop-down for the reason you are filing late
        and a box for an explanation. The IRS&apos;s own guidance is to file as
        soon as possible if you have not been contacted about the delinquency
        and are not under examination.
      </p>
      <p>
        If interest or other income from those accounts also never made it onto
        your returns, look at the IRS Streamlined Filing Compliance Procedures.
        You certify under penalty of perjury that the failure was non-willful,
        amend several years of returns, and file several years of FBARs. The
        domestic version carries a penalty calculated as a percentage of your
        highest foreign balance; the version for people living outside the US
        has different terms. Do this with a professional who handles offshore
        compliance regularly. The certification is not something to draft from a
        template.
      </p>

      <h2>Scenarios that catch newcomers</h2>
      <ul>
        <li>
          <strong>The salary account you left open.</strong> It still counts. If
          its peak balance combined with anything else abroad exceeded $10,000,
          you file.
        </li>
        <li>
          <strong>A joint account with your parents.</strong> You report the
          full balance even if every rupee, peso or yuan in it is theirs.
        </li>
        <li>
          <strong>Fixed deposits.</strong> Each certificate is its own account.
          A ladder of small deposits adds up quickly in aggregate.
        </li>
        <li>
          <strong>A home-country retirement or provident fund.</strong> Often
          reportable when it sits in your name at a financial institution.
          Check the specific scheme.
        </li>
        <li>
          <strong>Being a signatory for family.</strong> Authority to move money
          in someone else&apos;s account is reportable even with no financial
          interest.
        </li>
        <li>
          <strong>An account you closed in March.</strong> It existed during
          the year, so it is reported for that year at its peak value.
        </li>
      </ul>
      <p>
        The FBAR is disclosure, not tax; whether the interest those accounts
        earn is taxable here is a separate question, and for residents it
        usually is. The companion report with far higher thresholds is covered
        in the{" "}
        <Link
          href="/taxes/fatca"
          className="font-semibold text-accent hover:underline"
        >
          FATCA and Form 8938 guide
        </Link>
        .
      </p>

      <h2>Other guides on this site</h2>
      <p>
        FBAR is one piece of a wider picture. These are the pages most readers
        of this one need next:
      </p>
      <ul>
        <li>
          <Link
            href="/taxes/fatca"
            className="font-semibold text-accent hover:underline"
          >
            FATCA and Form 8938
          </Link>{" "}
          — the second foreign-asset report, filed with your 1040, and how it
          differs from FBAR.
        </li>
        <li>
          <Link
            href="/taxes/resident-vs-nonresident"
            className="font-semibold text-accent hover:underline"
          >
            Resident vs nonresident alien
          </Link>{" "}
          — the status that decides whether FBAR applies to you at all.
        </li>
        <li>
          <Link
            href="/visa-guides/green-card"
            className="font-semibold text-accent hover:underline"
          >
            Green card financial guide
          </Link>{" "}
          — the money checklist for new permanent residents, who are always in
          scope.
        </li>
      </ul>
    </GuideLayout>
  );
}

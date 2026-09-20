import Link from "next/link";
import type { Faq } from "@/lib/types";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/taxes/fatca";
const TITLE = "FATCA & Form 8938: Thresholds and FATCA vs FBAR";
const DESCRIPTION =
  "FATCA and Form 8938 explained: who must file, the $50,000 and $75,000 thresholds for US residents, what counts as a foreign asset, and FATCA vs FBAR.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const faqs: Faq[] = [
  {
    question: "What is the difference between FATCA and FBAR?",
    answer:
      "FBAR is FinCEN Form 114, filed with the Treasury's FinCEN bureau, separately from your tax return, once your foreign accounts exceed $10,000 in aggregate at any time in the year. FATCA reporting is Form 8938, attached to your Form 1040 and filed with the IRS, with much higher thresholds that start at $50,000 for a single filer living in the US. Form 8938 also covers assets that are not accounts, such as shares held directly or an interest in a foreign pension. Many people owe both, and filing one does not satisfy the other.",
  },
  {
    question: "Do green card holders have to file Form 8938?",
    answer:
      "Yes, if the total value of their specified foreign financial assets exceeds the threshold for their filing status. A green card holder is a resident alien and therefore a specified individual, regardless of visa history or where the assets are. For a single filer living in the US that means more than $50,000 on the last day of the year or more than $75,000 at any point during it.",
  },
  {
    question: "Do I report a house or flat back home on Form 8938?",
    answer:
      "Not if you own it directly. Foreign real estate held in your own name is not a specified foreign financial asset, and neither is foreign currency, gold or jewellery held personally. If you own the property through a foreign company or trust, your interest in that entity is reportable. Rental income from the property is taxable on your return either way.",
  },
  {
    question: "If I file Form 8938, do I still need to file an FBAR?",
    answer:
      "Yes. The IRS states plainly that filing Form 8938 does not relieve you of the FBAR requirement, and vice versa. They go to different agencies, use different thresholds and cover overlapping but different assets. If you are over the Form 8938 threshold because of foreign accounts, you are over the FBAR threshold too.",
  },
];

export default function FatcaGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="FATCA and Form 8938: reporting foreign assets on your tax return"
      description="Who files Form 8938, the thresholds by filing status, what counts as a specified foreign financial asset, and how it lines up against FBAR."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "FATCA", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Summary of FATCA reporting for US taxpayers",
          href: "https://www.irs.gov/businesses/corporations/summary-of-fatca-reporting-for-us-taxpayers",
        },
        {
          label: "IRS — Do I need to file Form 8938?",
          href: "https://www.irs.gov/businesses/corporations/do-i-need-to-file-form-8938-statement-of-specified-foreign-financial-assets",
        },
        {
          label: "IRS — Instructions for Form 8938",
          href: "https://www.irs.gov/instructions/i8938",
        },
        {
          label: "IRS — Comparison of Form 8938 and FBAR requirements",
          href: "https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements",
        },
        {
          label: "IRS — Basic questions and answers on Form 8938",
          href: "https://www.irs.gov/businesses/corporations/basic-questions-and-answers-on-form-8938",
        },
      ]}
      faqs={faqs}
    >
      <h2>FATCA is the law; Form 8938 is your part of it</h2>
      <p>
        The Foreign Account Tax Compliance Act was passed in 2010 as part of
        the HIRE Act, and it works from two directions at once. Foreign
        financial institutions must identify their US account holders and
        report them, directly or through their own governments, or face
        withholding on payments from the US. That is why a bank abroad asks
        customers with a US address to certify their US tax status. From the
        other direction, US taxpayers must report their specified foreign
        financial assets, above a threshold, on Form 8938, Statement of
        Specified Foreign Financial Assets, which is attached to the annual
        income tax return.
      </p>
      <p>
        This page is about the second direction, but the first changes the
        odds: the IRS receives data about your foreign accounts from the
        institutions that hold them, so an account missing from your return is
        visible.
      </p>

      <h2>Who has to file Form 8938</h2>
      <p>
        The form is required from &quot;specified individuals&quot;: US
        citizens, resident aliens for any part of the tax year, nonresident
        aliens who elect to be treated as residents to file a joint return with
        a US spouse, and nonresidents who are bona fide residents of Puerto Rico
        or American Samoa. For newcomers that translates simply. Every green
        card holder is in scope. H-1B and L-1 workers are in scope from the
        year they become residents under the substantial presence test, which
        is usually their first full calendar year. A nonresident alien filing
        Form 1040-NR is generally not required to file Form 8938.
      </p>
      <p>
        &quot;Any part of the tax year&quot; means a dual-status first year
        counts, unless a treaty tie-breaker claimed on a timely Form 8833 lets
        you leave the nonresident portion off. One more gate: the form is only
        required from people who must file an income tax return at all. If your
        residency is not clear, the{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident guide
        </Link>{" "}
        and the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>{" "}
        settle it.
      </p>

      <h2>The thresholds</h2>
      <p>
        There are two tests for each filing status, and meeting either one
        triggers the form. Both are measured against the total value of all
        your specified foreign financial assets combined. For taxpayers living
        in the United States:
      </p>
      <ul>
        <li>
          <strong>Unmarried, or married filing separately:</strong> more than
          $50,000 on the last day of the tax year, or more than $75,000 at any
          time during the year.
        </li>
        <li>
          <strong>Married filing jointly:</strong> more than $100,000 on the
          last day of the tax year, or more than $150,000 at any time during
          the year.
        </li>
      </ul>
      <p>
        Taxpayers who live abroad get much higher thresholds ($200,000 and
        $300,000 single, $400,000 and $600,000 joint), but those are for people
        whose tax home is outside the US, not a visa holder working here with
        family abroad.
      </p>
      <p>
        Values are fair market value in US dollars, converted at the Treasury
        Bureau of the Fiscal Service rate for the last day of the tax year, or
        another publicly available rate disclosed on the form if none is
        published. Assets already reported on Forms 3520, 5471, 8621 or 8865
        are not repeated on Form 8938, but their value still counts toward the
        threshold.
      </p>
      <h2>What is a specified foreign financial asset</h2>
      <p>The category is wider than &quot;bank account&quot;. It includes:</p>
      <ul>
        <li>
          Any financial account maintained by a foreign financial institution:
          bank deposits, fixed deposits, brokerage accounts, foreign mutual
          funds.
        </li>
        <li>
          Foreign stocks or securities held directly, such as shares in a
          family company or foreign corporate bonds.
        </li>
        <li>
          Interests in foreign entities: partnerships, private companies,
          trusts.
        </li>
        <li>
          Your interest in a foreign pension or deferred compensation plan. You
          report the interest itself, not the assets inside the plan.
        </li>
        <li>Foreign-issued life insurance or annuity contracts with a cash value.</li>
        <li>
          Financial instruments or contracts whose issuer or counterparty is not
          a US person.
        </li>
      </ul>
      <p>The following are not specified foreign financial assets:</p>
      <ul>
        <li>
          Foreign real estate you hold directly. A flat or plot in your own
          name does not go on the form; if you hold it through a foreign entity,
          the entity interest does.
        </li>
        <li>
          Foreign currency, precious metals, art, jewellery and other personal
          property held directly.
        </li>
        <li>
          Accounts at a US branch of a foreign bank, and US mutual funds, IRAs
          or 401(k)s even when they invest abroad.
        </li>
        <li>Social-security-type benefits provided by a foreign government.</li>
        <li>A safe deposit box, which is not a financial account.</li>
      </ul>

      <h2>FATCA vs FBAR, side by side</h2>
      <p>
        The two reports are constantly confused because they overlap. Here is
        how they differ on each point that matters:
      </p>
      <ul>
        <li>
          <strong>Who files.</strong> Form 8938: specified individuals, meaning
          residents for tax purposes; nonresidents generally do not. FBAR: US
          persons, which includes resident aliens and also US entities and
          trusts.
        </li>
        <li>
          <strong>Where it goes.</strong> Form 8938: attached to your Form 1040
          and filed with the IRS. FBAR: filed with FinCEN through the BSA
          E-Filing System, never with the return.
        </li>
        <li>
          <strong>Threshold.</strong> Form 8938: $50,000 or $75,000 for a
          single filer in the US, $100,000 or $150,000 for a joint return. FBAR:
          $10,000 in aggregate at any time in the year.
        </li>
        <li>
          <strong>Due date.</strong> Form 8938: the due date of your return,
          including extensions. FBAR: April 15, with an automatic extension to
          October 15.
        </li>
        <li>
          <strong>What is covered.</strong> Form 8938: accounts plus non-account
          assets such as directly held stock, entity interests and pension
          interests. FBAR: accounts only, but including signature-authority
          accounts and accounts at foreign branches of US banks, which Form 8938
          does not reach.
        </li>
        <li>
          <strong>How assets are valued.</strong> Form 8938: fair market value
          at the year-end Treasury rate. FBAR: the maximum value during the
          year, also converted at the year-end Treasury rate.
        </li>
        <li>
          <strong>Penalties.</strong> Form 8938: a fixed penalty for not filing,
          a continuing penalty if you still do not file after the IRS asks, and
          an accuracy-related penalty on tax understated because of undisclosed
          assets. FBAR: non-willful penalties per violation, willful penalties
          measured against the account balance, and criminal exposure in serious
          cases.
        </li>
      </ul>
      <Callout tone="warning" title="One does not replace the other">
        The IRS says it directly: filing Form 8938 does not relieve you of the
        requirement to file an FBAR, and filing an FBAR does not relieve you of
        Form 8938. If your foreign accounts put you over the Form 8938
        threshold, you owe both reports for that year.
      </Callout>

      <p>
        Because the FBAR threshold is so much lower, anyone who owes Form 8938
        because of foreign accounts owes an FBAR too. The typical sequence for a
        work-visa arrival is no reporting in a nonresident first year, FBAR only
        for a few years, then both once balances abroad pass $50,000 or
        $75,000. The exception is someone whose foreign wealth is directly held
        shares or an entity interest rather than accounts, who can owe Form 8938
        without ever owing an FBAR. The full rules are in the{" "}
        <Link
          href="/taxes/fbar"
          className="font-semibold text-accent hover:underline"
        >
          FBAR guide
        </Link>
        .
      </p>

      <h2>The income side: interest back home is taxable here</h2>
      <p>
        Both forms are disclosure, and disclosure is not tax. As a resident for
        US tax purposes your worldwide income is taxable on Form 1040. That
        includes interest on savings and fixed deposits abroad, dividends,
        capital gains and rent from a property back home, whether or not the
        foreign bank issues anything like a 1099, whether or not tax was
        withheld at source, and even when the income is tax-free where it arose.
      </p>
      <p>
        If you paid foreign tax on the same income, you can usually claim a
        foreign tax credit on Form 1116 rather than paying twice. Form 8938
        itself asks you to summarise the income from the assets you report and
        where it appears on the return, so the two must agree. Get advice early
        on foreign mutual funds, which may be taxed under the harsh passive
        foreign investment company rules.
      </p>
      <p>
        Schedule B, Part III also asks whether you had a foreign account and
        whether you must file FinCEN Form 114, so your accounts are asked about
        three times a year. Consistent answers across all three are the goal.
      </p>

      <h2>Penalties and how they are fixed</h2>
      <p>
        Failing to file Form 8938 carries a fixed penalty, and a further penalty
        accrues for each period you still do not file after the IRS notifies
        you, up to a cap. Tax understated because of an undisclosed foreign
        asset attracts an increased accuracy-related penalty. And until the form
        is filed, the statute of limitations on that year&apos;s return can stay
        open.
      </p>
      <p>
        Penalties can be waived for reasonable cause, and the route back
        depends on what was missed. If only the form was left off, file it with
        an amended return. If foreign income was also unreported, the
        Streamlined Filing Compliance Procedures cover non-willful cases and
        involve amending several years of returns together with late FBARs.
        Take that decision with a professional who handles offshore compliance;
        the non-willfulness certification is signed under penalty of perjury.
      </p>

      <h2>An annual checklist for money in two countries</h2>
      <ol>
        <li>
          In January, list every account and asset outside the US: deposits,
          brokerage, insurance with cash value, pension or provident funds,
          directly held shares, and joint accounts with family.
        </li>
        <li>
          Pull the year&apos;s statements and note two figures per account: the
          peak balance during the year and the balance on December 31.
        </li>
        <li>
          Look up the Treasury year-end exchange rate for each currency and
          convert both figures to dollars.
        </li>
        <li>
          FBAR test: did the combined peak exceed $10,000? If yes, file FinCEN
          Form 114 by April 15, or by October 15 under the automatic extension.
        </li>
        <li>
          Form 8938 test: compare the total against both thresholds for your
          filing status. If either is exceeded, prepare the form for your
          return.
        </li>
        <li>
          Gather the income: interest, dividends, gains and rent from those
          assets go on your Form 1040, with Form 1116 for any foreign tax paid.
        </li>
        <li>Answer Schedule B, Part III consistently with the above.</li>
        <li>
          Keep statements and calculations for at least five years, the FBAR
          retention period, and longer if a year is still open.
        </li>
        <li>
          If any earlier year was missed, deal with it in the same sitting
          rather than carrying it forward.
        </li>
      </ol>

      <h2>Other guides on this site</h2>
      <p>
        Form 8938 rarely arrives alone. These pages cover what usually comes
        with it:
      </p>
      <ul>
        <li>
          <Link
            href="/taxes/fbar"
            className="font-semibold text-accent hover:underline"
          >
            FBAR guide
          </Link>{" "}
          — the lower-threshold report to FinCEN that almost everyone with Form
          8938 also owes.
        </li>
        <li>
          <Link
            href="/taxes/resident-vs-nonresident"
            className="font-semibold text-accent hover:underline"
          >
            Resident vs nonresident alien
          </Link>{" "}
          — the status that decides whether FATCA reporting applies to you.
        </li>
        <li>
          <Link
            href="/investing/on-a-visa"
            className="font-semibold text-accent hover:underline"
          >
            Investing on a visa
          </Link>{" "}
          — where holdings back home fit into a US investment plan.
        </li>
      </ul>
    </GuideLayout>
  );
}

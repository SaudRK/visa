import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/visa-guides/l1";
const TITLE = "L-1 Visa Financial Planning: Taxes, 401(k), L-2";
const DESCRIPTION =
  "L-1 visa financial planning: tax residency across two countries, relocation pay, payroll and Social Security, 401(k) vs home pension, L-2 work and EB-1C.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function L1FinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa guides"
      title="L-1 financial guide: money across two countries"
      description="The first-year money plan for an intracompany transferee — residency, relocation pay, payroll, home accounts, credit, retirement, and your L-2 spouse."
      path={PATH}
      crumbs={[
        { name: "Visa guides", path: "/visa-guides" },
        { name: "L-1 financial guide", path: PATH },
      ]}
      sources={[
        {
          label: "USCIS — L-1A Intracompany Transferee Executive or Manager",
          href: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager",
        },
        {
          label: "USCIS — Employment-Based Immigration: First Preference EB-1",
          href: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1",
        },
        {
          label: "IRS — Publication 519, U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/publications/p519",
        },
        {
          label:
            "IRS — Publication 15-B, Employer's Tax Guide to Fringe Benefits (moving expense reimbursements)",
          href: "https://www.irs.gov/publications/p15b",
        },
        {
          label: "IRS — Totalization agreements",
          href: "https://www.irs.gov/individuals/international-taxpayers/totalization-agreements",
        },
      ]}
      faqs={[
        {
          question: "Is my L-1 relocation package taxable in the US?",
          answer:
            "Generally yes. Moving expenses are not deductible for most employees, and relocation costs your employer pays or reimburses count as taxable wages — a rule made permanent in 2025 with only a narrow exception for military and certain intelligence-community moves. If your employer grosses up the payment to cover the tax, the gross-up is taxable too. Ask for a net-of-tax figure before you budget on the gross amount.",
        },
        {
          question: "Can my spouse work on an L-2 visa?",
          answer:
            "Yes. USCIS treats spouses of L-1 workers as employment authorised incident to status, and an unexpired Form I-94 showing the L-2S admission code is acceptable proof of work authorisation for hiring paperwork. Your spouse does not need to wait for an Employment Authorization Document, though they can still apply for one on Form I-765 if they want a card in hand.",
        },
        {
          question:
            "Do I pay US Social Security if I stay on my home-country payroll?",
          answer:
            "It depends on whether the US has a totalization agreement with your country and how your assignment is structured. Where an agreement applies and your home social security agency issues a certificate of coverage, a worker on a temporary assignment can usually stay in the home system and be exempt from US Social Security and Medicare tax. Without an agreement, or on a local US contract, you pay into the US system.",
        },
        {
          question: "Do I owe US tax on salary I earned at home before I moved?",
          answer:
            "Usually not. In your arrival year you are typically a dual-status taxpayer: only US-source income is taxed for the part of the year before your residency start date, and worldwide income is taxed after it. Home-country pay for work done before you arrived normally falls in the first part. The dates matter, so pin down your residency start date early.",
        },
      ]}
    >
      <p>
        You are moving to the US on an L-1A (manager or executive) or L-1B
        (specialized knowledge) transfer within a company you already work for.
        The visa is mostly your employer&apos;s problem. Your money is not — and
        the L-1 is the one work visa where the biggest financial decisions
        happen before you land, because you arrive with a whole financial life
        already running in another country: a salary history, a pension,
        savings, maybe a mortgage, and a tax authority that still thinks you
        live there.
      </p>
      <p>
        The timeline shapes everything. USCIS grants most L-1 workers an initial
        stay of up to three years (one year if you are opening a new US office),
        extendable in two-year blocks to a ceiling of seven years for L-1A and
        five for L-1B. Long enough to build real US assets; short enough that
        you cannot assume you will stay. Plan for both.
      </p>

      <h2>The two-country problem: residency, treaties, and accounts at home</h2>
      <p>
        The US decides tax residency by counting days under the substantial
        presence test — your visa category does not settle it. Once you pass,
        you are taxed on worldwide income from your residency start date; the
        part of the year before that is taxed on US-source income only. That
        split year is a dual-status year with its own return. Read{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident for tax purposes
        </Link>{" "}
        and run your arrival date through the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>
        .
      </p>
      <p>
        Your home country may keep treating you as resident too, especially if
        family, home, or an employment contract stayed behind. If it has an
        income tax treaty with the US, the treaty&apos;s tie-breaker rules
        decide where you are resident for treaty purposes, using tests such as
        where your permanent home is and where your personal and economic ties
        are closest. Claiming to be a treaty nonresident of the US is a formal
        position taken on Form 8833 with a Form 1040-NR — settle it in your
        first quarter with someone who knows both systems, not in April.
      </p>
      <p>
        From your residency start date, every account you hold outside the US
        is reportable under two separate regimes. The FBAR goes to FinCEN, not
        with your tax return, and is triggered when the combined value of your
        foreign accounts crosses a low threshold at any point in the year — a
        bar most transferees clear with one savings account. FATCA reporting
        (Form 8938) goes with your Form 1040 and has higher thresholds that
        depend on filing status. You may owe both; neither is a tax, and both
        carry heavy penalties for silence. Inventory every account, pension,
        and policy at home in month one, and read the{" "}
        <Link
          href="/taxes/fbar"
          className="font-semibold text-accent hover:underline"
        >
          FBAR guide
        </Link>{" "}
        and the{" "}
        <Link
          href="/taxes/fatca"
          className="font-semibold text-accent hover:underline"
        >
          FATCA guide
        </Link>{" "}
        now.
      </p>

      <h2>Relocation packages and tax equalisation</h2>
      <p>
        An L-1 package often includes a relocation allowance, temporary housing,
        shipping, flights, and sometimes a housing or cost-of-living top-up.
        Treat all of it as pay. Since 2018 the US has not let most employees
        deduct moving expenses, and moving costs your employer pays or
        reimburses go into taxable wages; the 2025 tax law made that permanent,
        leaving only a narrow exception for military and certain
        intelligence-community moves. Expect the relocation line on your W-2,
        and expect withholding to bite in the month it is paid.
      </p>
      <p>
        Many transferees are tax equalised: the company promises you will pay
        no more tax than you would have at home, deducts a hypothetical tax from
        salary, and settles your actual US and home liabilities itself. It is a
        genuine benefit, but read the policy. Equalisation usually covers
        company income only — investment income, rental income, and a
        spouse&apos;s earnings are often excluded. Ask what happens to the
        calculation if you localise or leave mid-year.
      </p>
      <Callout tone="warning" title="Grossed-up does not mean free">
        <p>
          If your employer grosses up a benefit to cover the tax, the gross-up
          itself is taxable income too. A housing allowance that looks generous
          on the offer letter can land a third smaller in your account. Ask HR
          for a net-of-tax illustration before you sign a US lease based on the
          gross figure.
        </p>
      </Callout>

      <h2>US payroll or seconded: withholding and Social Security</h2>
      <p>
        How you are paid decides who withholds what. On US payroll you get a
        W-2, set federal withholding on a W-4, and pay Social Security and
        Medicare (FICA) on every paycheck. If you are seconded — still employed
        and paid by the home entity, with the US entity running a shadow payroll
        to report your wages — the US tax is still due, but the mechanics differ
        and mistakes are more common.
      </p>
      <p>
        Social Security is the piece people miss. The US has totalization
        agreements with a number of countries. Where one applies, a worker sent
        temporarily to the US by a home-country employer can usually stay in the
        home social security system and be exempt from US Social Security and
        Medicare tax, provided the home agency issues a certificate of coverage
        that you give to your US employer. Without an agreement — or once you
        move to a local US contract — you pay into the US system. Ask in week
        one: is there an agreement with my country, and does my assignment use
        it? For take-home estimates on any W-2 salary, the{" "}
        <Link
          href="/calculators/h1b-tax"
          className="font-semibold text-accent hover:underline"
        >
          H-1B tax calculator
        </Link>{" "}
        works for L-1 pay too.
      </p>

      <h2>Banking basics: credit from zero and sending money home</h2>
      <p>
        Your credit record at home does not travel. US lenders cannot see your
        history there, or your salary until it shows up on a US pay stub. The
        fix is mechanical: get your Social Security number, open a US checking
        account, get a starter or secured card, keep balances low, and let time
        pass — the sequence is in{" "}
        <Link
          href="/banking/build-credit"
          className="font-semibold text-accent hover:underline"
        >
          how to build US credit as an immigrant
        </Link>
        . Do it in month one; a thin file means larger deposits on apartments,
        cars, and phones now, and a worse mortgage rate later.
      </p>
      <p>
        Most transferees keep paying something at home — a mortgage, family
        support, a pension. Set the channel deliberately; bank wire defaults
        are usually the most expensive route. Compare total cost, including the
        exchange-rate margin, with the{" "}
        <Link
          href="/calculators/remittance"
          className="font-semibold text-accent hover:underline"
        >
          remittance fee calculator
        </Link>
        , and see{" "}
        <Link
          href="/send-money"
          className="font-semibold text-accent hover:underline"
        >
          send money abroad
        </Link>{" "}
        for the options.
      </p>

      <h2>401(k) with a match, or the pension you left behind?</h2>
      <p>
        If your US employer offers a 401(k) match, take the full match from your
        first eligible paycheck. It is the highest guaranteed return available
        to you, and it stays yours, subject to vesting, even if you leave the
        country. Whether to go beyond the match depends on how likely you are to
        stay; if there is a real chance you leave within a few years, read{" "}
        <Link
          href="/investing/401k-if-you-leave"
          className="font-semibold text-accent hover:underline"
        >
          what happens to your 401(k) if you leave the US
        </Link>{" "}
        first — the account can usually stay invested, but the tax on
        withdrawing it early is severe.
      </p>
      <p>
        Continuing your home pension from US salary is rarely as simple as it
        looks. The US may not recognise the home plan&apos;s tax deferral unless
        a treaty says so, which can make your contributions and the plan&apos;s
        growth taxable here, and you lose home tax relief once you are no longer
        tax resident there. For the wider picture see{" "}
        <Link
          href="/investing/on-a-visa"
          className="font-semibold text-accent hover:underline"
        >
          investing on a visa
        </Link>{" "}
        and the{" "}
        <Link
          href="/investing/h1b-roth-ira"
          className="font-semibold text-accent hover:underline"
        >
          Roth IRA guide
        </Link>
        .
      </p>

      <h2>L-2 spouses: work authorisation is automatic</h2>
      <p>
        USCIS treats the spouse of an L-1 worker as employment authorised
        incident to status, and since 30 January 2022 has admitted L spouses
        with the L-2S code on Form I-94. An unexpired I-94 with that code is
        acceptable evidence of work authorisation for the Form I-9 every
        employer completes at hiring. Your spouse can still apply for an
        Employment Authorization Document on Form I-765 if they want a card, but
        they do not need to wait for one. Check the I-94 code on entry; if it
        reads L-2 without the S, get it corrected before the job hunt starts.
      </p>
      <p>
        A second income changes the plan more than the numbers. Once you are
        both residents, married filing jointly is usually available and usually
        better, but two W-4s need coordinating or you will under-withhold. Your
        spouse needs their own Social Security number, credit file, and
        retirement account, and their home accounts join your FBAR and FATCA
        inventory.
      </p>

      <h2>Plan as if you might stay: the EB-1C route</h2>
      <p>
        L-1A managers and executives have the most direct route to a green card
        of any temporary worker. The EB-1C category for multinational managers
        and executives rests on the same core facts as your L-1A — at least one
        year of employment with the company abroad in the three years before
        the petition, and a qualifying relationship between the US and foreign
        entities — and your employer files Form I-140 with no labor
        certification. Not every company sponsors, but the odds are good enough
        that your money planning should assume permanent residence is possible.
      </p>
      <p>
        In practice: do not cash out home accounts in a hurry, keep every record
        from year one, avoid moves that only make sense on a three-year horizon,
        and understand what permanent residence does to your taxes — worldwide
        income for as long as you hold the card and, after enough years, an exit
        tax if you give it up. That story is in the{" "}
        <Link
          href="/visa-guides/green-card"
          className="font-semibold text-accent hover:underline"
        >
          green card financial guide
        </Link>
        .
      </p>

      <h2>Your first 90 days</h2>
      <ol>
        <li>
          Confirm your payroll model (US payroll or seconded) and ask whether a
          totalization certificate of coverage applies to you.
        </li>
        <li>
          Get your Social Security number, open a US checking account, and set
          up direct deposit.
        </li>
        <li>
          Read your relocation and tax equalisation policy; ask HR for a
          net-of-tax illustration of every allowance.
        </li>
        <li>
          Work out your residency start date and whether a treaty tie-breaker
          applies; decide who prepares your first return.
        </li>
        <li>
          Inventory every account, pension, and policy at home for FBAR and
          FATCA.
        </li>
        <li>
          Enrol in the 401(k) at least to the match; decide what happens to
          your home pension.
        </li>
        <li>
          Check your spouse&apos;s I-94 says L-2S and get their Social Security
          number.
        </li>
        <li>Open a starter or secured card and choose a remittance channel.</li>
        <li>
          Start a US emergency fund separate from home savings — an assignment
          ending early is your biggest financial risk.
        </li>
      </ol>

      <h2>Other guides on this site</h2>
      <p>This page is the overview. Each of these goes deeper:</p>
      <ul>
        <li>
          <Link
            href="/visas/work/l1"
            className="font-semibold text-accent hover:underline"
          >
            L-1 visa requirements and process
          </Link>{" "}
          — eligibility, the blanket petition, and timelines, if the transfer is
          still ahead of you.
        </li>
        <li>
          <Link
            href="/taxes/resident-vs-nonresident"
            className="font-semibold text-accent hover:underline"
          >
            Resident vs nonresident for tax purposes
          </Link>{" "}
          — the residency rules this whole guide leans on.
        </li>
        <li>
          <Link
            href="/visa-guides/green-card"
            className="font-semibold text-accent hover:underline"
          >
            Green card financial guide
          </Link>{" "}
          — what changes the day permanent residence arrives.
        </li>
      </ul>
    </GuideLayout>
  );
}

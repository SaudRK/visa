import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/visa-guides/green-card";
const TITLE = "New Green Card Holder Checklist: Taxes & Money";
const DESCRIPTION =
  "New green card holder checklist: worldwide income and Form 1040, FBAR and FATCA, the reentry permit, mortgages, Social Security credits, I-864, and exit tax.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function GreenCardFinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa guides"
      title="Green card financial guide: your first year as a permanent resident"
      description="What changes financially the day you become a lawful permanent resident — worldwide tax, foreign account reporting, keeping the card, credit, retirement, sponsoring family, and the exit tax."
      path={PATH}
      crumbs={[
        { name: "Visa guides", path: "/visa-guides" },
        { name: "Green card financial guide", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Alien residency: green card test",
          href: "https://www.irs.gov/individuals/international-taxpayers/alien-residency-green-card-test",
        },
        {
          label: "IRS — Expatriation tax",
          href: "https://www.irs.gov/individuals/international-taxpayers/expatriation-tax",
        },
        {
          label: "USCIS — International travel as a permanent resident",
          href: "https://www.uscis.gov/green-card/after-we-grant-your-green-card/international-travel-as-a-permanent-resident",
        },
        {
          label: "USCIS — Affidavit of Support",
          href: "https://www.uscis.gov/green-card/green-card-processes-and-procedures/affidavit-of-support",
        },
        {
          label: "SSA — Social Security credits and benefit eligibility",
          href: "https://www.ssa.gov/benefits/retirement/planner/credits.html",
        },
        {
          label:
            "CFPB — Regulation B § 1002.6, rules concerning evaluation of applications",
          href: "https://www.consumerfinance.gov/rules-policy/regulations/1002/6/",
        },
      ]}
      faqs={[
        {
          question: "Do green card holders pay US tax on foreign income?",
          answer:
            "Yes. Under the green card test you are a US resident for tax purposes from the first day you are present as a permanent resident, and residents are taxed on worldwide income on Form 1040. Foreign tax credits and treaties usually stop the same income being taxed twice, but the income still has to be reported. Foreign accounts also have to be disclosed on the FBAR and, above higher thresholds, on Form 8938.",
        },
        {
          question: "How long can a green card holder stay outside the US?",
          answer:
            "There is no single safe number, but the risks step up with length. USCIS says absences of six months or more can break the continuous residence needed for naturalisation, and if you expect to be away for more than a year you should apply for a reentry permit on Form I-131 before leaving. Stay away more than two years and any reentry permit will have expired, leaving a returning resident visa as the route back.",
        },
        {
          question:
            "How many Social Security credits does a green card holder need to retire?",
          answer:
            "The same as anyone else: 40 credits. You can earn at most four credits a year, so it takes roughly ten years of work on which US Social Security tax was paid, and credits earned on earlier work visas count. If you also worked in a country that has a totalization agreement with the US, those periods may help you qualify.",
        },
        {
          question: "What is the green card exit tax?",
          answer:
            "If you held a green card in at least eight of the fifteen tax years ending with the year you give it up, you are a long-term resident under the expatriation rules. You are a covered expatriate if your net worth or your average annual income tax exceeds a set threshold, or if you cannot certify five years of full tax compliance on Form 8854. Covered expatriates are taxed as though they sold all their assets the day before expatriating, with gains above an exclusion amount taxable.",
        },
      ]}
    >
      <p>
        Immigration status and tax status are usually two separate questions. A
        green card collapses them into one, and it changes the answer to a
        dozen money questions you had settled on a temporary visa. This is the
        first-year plan.
      </p>

      <h2>Tax residency from day one</h2>
      <p>
        Under the IRS green card test you are a US resident for tax purposes if
        you are a lawful permanent resident at any time in the calendar year,
        and residency starts on the first day you are present in the US as a
        permanent resident. From that day you are taxed like a citizen:
        worldwide income, Form 1040, the same filing statuses, deductions, and
        credits — and the same reporting duties on everything you own abroad.
        The status does not switch off when you travel, or even when you move
        abroad; for tax purposes it ends only if you abandon the card in writing
        to USCIS, or USCIS or a federal court terminates it.
      </p>
      <p>
        If you were already in the US on a work visa and adjusted status, you
        were probably a tax resident under the substantial presence test before
        the card arrived, so nothing changes at the filing level. If you
        immigrated from abroad, the arrival year is usually a dual-status year:
        US-source income only before your residency start date, worldwide
        income after it. Dual-status returns have their own rules; use a
        preparer who has done one. Work out your start date with the{" "}
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
        .
      </p>

      <h2>Accounts at home: FBAR and FATCA now apply to you</h2>
      <p>
        Every account outside the US that you own or can sign on is now
        reportable. The FBAR goes to FinCEN, not the IRS; it is due 15 April
        with an automatic extension to 15 October, and applies once the
        combined value of your foreign accounts crosses a low fixed threshold at
        any point in the year. FATCA reporting (Form 8938) is attached to your
        Form 1040 and has higher thresholds that depend on filing status.
        Filing one does not excuse the other, and the penalties for missing
        them are out of all proportion to the effort, whether or not any tax
        was due. Start with the{" "}
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
        </Link>
        .
      </p>
      <p>
        Pensions, brokerage accounts, cash-value life insurance, and joint
        accounts with parents all count. Rental income at home is US-taxable
        too, with foreign tax credits for tax paid there. And be careful with
        foreign mutual funds — many get punitive US treatment.
      </p>
      <Callout tone="alert" title="The treaty trap for green card holders">
        <p>
          If you keep a home in another country, its tax authority may also
          treat you as resident. A tax treaty tie-breaker can resolve that — but
          a green card holder who claims to be a treaty nonresident of the US on
          Form 8833 is treated as having ended US tax residency from that date,
          and for a long-term resident that can trigger the exit tax rules
          described below. Never take that position without advice.
        </p>
      </Callout>

      <h2>Keeping the card: absences and the reentry permit</h2>
      <p>
        Permanent residence assumes you live here. Short trips are fine; long
        ones raise two separate risks. The first is to the card: a long absence,
        especially alongside signs that your real home is elsewhere, can be read
        as abandonment. The second is to naturalisation: USCIS says absences of
        six months or more may disrupt the continuous residence you need to
        apply for citizenship.
      </p>
      <p>
        If you expect to be outside the US for more than a year — a home-country
        assignment, a family situation, a remote-work stint — USCIS advises
        applying for a reentry permit on Form I-131 before you leave, so you can
        return during its validity without a returning resident visa. Stay away
        more than two years and any permit granted before departure will have
        expired; the route back is then an SB-1 returning resident visa from a
        consulate, with a fresh eligibility case and a medical exam. Form N-470
        can preserve continuous residence for naturalisation during a
        qualifying absence.
      </p>

      <h2>Everyday finances: credit, mortgages, and health coverage</h2>
      <p>
        A green card does not create a credit history; if you are new, the
        sequence in{" "}
        <Link
          href="/banking/build-credit"
          className="font-semibold text-accent hover:underline"
        >
          how to build US credit as an immigrant
        </Link>{" "}
        still applies. What it changes is how lenders may see you. Fair-lending
        rules under the Equal Credit Opportunity Act let a lender consider
        immigration status only as far as it bears on their ability to be
        repaid, and the rule&apos;s own example distinguishes a long-time
        permanent resident from someone here temporarily on a student visa. In
        practice permanent residents sit on the citizen side of that line:
        lenders&apos; guidelines for conventional and government-backed
        mortgages generally treat you like a citizen, subject to the same
        credit, income, down-payment, and documentation tests.
      </p>
      <p>
        Employer health coverage is still the default. If you need to buy your
        own, lawful permanent residents count as lawfully present for the
        Health Insurance Marketplace and can qualify for premium tax credits on
        the same income basis as citizens. Medicaid is different: many new
        permanent residents face a five-year waiting period, with exceptions
        for refugees and asylees and, in some states, pregnant women and
        children. Avoid a coverage gap — see{" "}
        <Link
          href="/insurance/health"
          className="font-semibold text-accent hover:underline"
        >
          health insurance for newcomers
        </Link>
        .
      </p>

      <h2>Retirement and Social Security credits</h2>
      <p>
        On a temporary visa every retirement decision carried a what-if-I-leave
        hedge. Permanent residence removes most of it. Take the full 401(k)
        match, then choose between pre-tax and Roth contributions on the merits
        of your tax bracket now versus in retirement — the{" "}
        <Link
          href="/investing/h1b-roth-ira"
          className="font-semibold text-accent hover:underline"
        >
          Roth IRA guide
        </Link>{" "}
        applies to you in full. If you hold old 401(k)s from previous
        employers,{" "}
        <Link
          href="/investing/401k-if-you-leave"
          className="font-semibold text-accent hover:underline"
        >
          what happens to your 401(k) if you leave
        </Link>{" "}
        covers consolidating them;{" "}
        <Link
          href="/investing/on-a-visa"
          className="font-semibold text-accent hover:underline"
        >
          investing on a visa
        </Link>{" "}
        has the broad picture.
      </p>
      <p>
        Social Security now matters. Retirement benefits need 40 credits; you
        can earn up to four a year, so that is roughly ten years of covered
        work, and credits earned on H-1B or other work visas already count. If
        you worked in a country with a totalization agreement with the US, years
        there may help you qualify.
      </p>

      <h2>Sponsoring family: the Affidavit of Support is a contract</h2>
      <p>
        Many new permanent residents want to bring a spouse, a child, or later a
        parent. Most family-based immigrants need a sponsor to sign Form I-864,
        and USCIS is explicit that it is a legally enforceable contract with the
        US government. Your household income generally has to reach 125 percent
        of the federal poverty guidelines for your household size (100 percent
        for active-duty military sponsoring a spouse or child); the figures are
        updated each year on Form I-864P, so check the current table rather
        than a number someone quoted you. If your income falls short, a joint
        sponsor can sign and takes on the same obligation independently.
      </p>
      <Callout tone="warning" title="How long you are on the hook">
        <p>
          The obligation lasts until the person you sponsored becomes a US
          citizen, is credited with 40 quarters of work (usually about ten
          years), leaves the US permanently, or dies. Divorce does not end it.
          If they receive means-tested public benefits, the agency that paid can
          sue you to recover the cost. Sign it knowing that.
        </p>
      </Callout>

      <h2>Two endgames: naturalisation or giving up the card</h2>
      <p>
        Most permanent residents can apply for citizenship after five years with
        the card (three if married to and living with a US citizen throughout),
        with at least half of that period physically in the US and continuous
        residence throughout. The application is Form N-400; there is a filing
        fee, with a reduced fee and a full waiver available on income grounds,
        and the real costs tend to be peripheral: translations, travel, a lawyer
        if your history is complicated. Citizenship ends the residency
        obligation and the risk of losing status through long absences. Budget
        for it from year three.
      </p>
      <p>
        Some people instead decide home is home. If you held the card in at
        least eight of the fifteen tax years ending with the year you give it
        up, the IRS treats you as a long-term resident under the same
        expatriation rules as a citizen renouncing. You are a covered
        expatriate if any one of three things is true: your net worth is above
        a threshold, your average annual net income tax over the previous five
        years is above an inflation-adjusted threshold, or you cannot certify on
        Form 8854 that you were fully tax-compliant for those five years.
        Covered expatriates are treated as if they sold everything they own at
        market value the day before expatriating, with tax on gains above an
        exclusion amount.
      </p>
      <p>
        Any year in which you held the card for even part of the year generally
        counts toward the eight, and the compliance test catches more people
        than the wealth tests. Everyone who gives up a card after long-term
        residence files Form 8854 with that year&apos;s return. If you might go
        home one day, talk to an adviser before year eight, not after.
      </p>

      <h2>Your first-year checklist</h2>
      <ol>
        <li>
          Note your residency start date and work out whether this is a
          dual-status year.
        </li>
        <li>
          Inventory every foreign account, pension, and policy; put the FBAR and
          Form 8938 deadlines in your calendar.
        </li>
        <li>
          Update your W-4 and your employer&apos;s records, and keep your
          address current with USCIS — a legal requirement with a short
          deadline, not an option.
        </li>
        <li>
          Check your Social Security earnings record; raise 401(k) contributions
          past the match and decide pre-tax versus Roth.
        </li>
        <li>
          Review health coverage; if you are between plans, check Marketplace
          eligibility immediately.
        </li>
        <li>
          If you plan a stay abroad of a year or more, apply for a reentry
          permit before you go.
        </li>
        <li>
          If you intend to sponsor family, run the I-864 income test now and
          line up a joint sponsor if needed.
        </li>
        <li>
          Start a file of proof of US residence — tax returns, lease or
          mortgage, licence — and write down the year you got the card. Year
          eight matters.
        </li>
      </ol>

      <h2>Other guides on this site</h2>
      <p>
        This page is the overview. Each of these goes deeper on one part of it:
      </p>
      <ul>
        <li>
          <Link
            href="/taxes/fbar"
            className="font-semibold text-accent hover:underline"
          >
            FBAR explained
          </Link>{" "}
          — who files, what counts as a foreign account, and the deadlines.
        </li>
        <li>
          <Link
            href="/investing/h1b-roth-ira"
            className="font-semibold text-accent hover:underline"
          >
            Roth IRA guide
          </Link>{" "}
          — the pre-tax versus Roth decision now that leaving is no longer the
          default assumption.
        </li>
        <li>
          <Link
            href="/visa-guides/l1"
            className="font-semibold text-accent hover:underline"
          >
            L-1 financial guide
          </Link>{" "}
          — for transferees on the EB-1C track who will land on this page next.
        </li>
      </ul>
    </GuideLayout>
  );
}

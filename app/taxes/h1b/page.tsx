import Link from "next/link";
import type { Faq } from "@/lib/types";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/taxes/h1b";
const TITLE = "H-1B Taxes: Withholding, FICA & State Tax";
const DESCRIPTION =
  "How H-1B taxes actually work — federal tax rate and W-4 withholding, FICA, state income tax, and resident vs nonresident status in your first year on payroll.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const faqs: Faq[] = [
  {
    question: "Do H-1B workers pay Social Security and Medicare tax?",
    answer:
      "Yes. H-1B wages are subject to Social Security and Medicare tax from the first paycheck, whether you are a resident or a nonresident for income tax, because the student and exchange-visitor exemption covers only nonresidents in F-1, J-1, M-1 or Q-1 status. Your employer withholds both taxes and pays a matching share. Correctly withheld FICA is not refunded when you leave the US.",
  },
  {
    question: "Can H-1B holders file taxes jointly with an H-4 spouse?",
    answer:
      "Usually, yes. If you both pass the substantial presence test you are both residents and can file jointly; in the arrival year, or if your spouse was not in the US long enough to pass, you can elect to treat your spouse as a resident for the whole year and file a joint return. Your spouse needs a Social Security number or an ITIN, and making the election brings both spouses’ worldwide income onto the US return.",
  },
  {
    question: "Can H-1B workers take the standard deduction?",
    answer:
      "If you are a resident alien for the entire year, yes, on the same terms as a US citizen. Nonresidents and dual-status filers cannot claim it; the treaty exception for students and business apprentices from India does not cover H-1B employment. A married couple in their arrival year can get it back by electing to be treated as residents for the full year and filing jointly.",
  },
  {
    question: "Is my H-1B salary taxed at a flat 30% if I am a nonresident?",
    answer:
      "No. The flat 30% rate applies to certain US-source investment income of nonresidents, such as dividends, unless a treaty lowers it. Wages from a US job are income effectively connected with a US trade or business and are taxed at the normal graduated rates. What nonresidents lose is the standard deduction and most filing statuses, not access to the graduated rates.",
  },
  {
    question: "How does changing H-1B employers mid-year affect my taxes?",
    answer:
      "It does not change how you are taxed, but it creates paperwork. You receive a W-2 from each employer and report both, and if the two together withheld more Social Security tax than the annual maximum, you claim the excess as a credit on your return. Fill in a fresh W-4 at the new job, and remember that the annual 401(k) contribution limit applies to you across all employers combined, not to each plan separately.",
  },
];

export default function H1bTaxGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="H-1B taxes explained"
      description="What comes out of an H-1B paycheck, how resident or nonresident status shapes your first return, and which numbers to estimate before April."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "H-1B taxes", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Taxation of Nonresident Aliens",
          href: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens",
        },
        {
          label: "IRS Form W-4 — Employee's Withholding Certificate",
          href: "https://www.irs.gov/forms-pubs/about-form-w-4",
        },
        {
          label: "IRS Notice 1392 — Supplemental Form W-4 Instructions for Nonresident Aliens",
          href: "https://www.irs.gov/pub/irs-pdf/n1392.pdf",
        },
        {
          label: "IRS Publication 519 — U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/forms-pubs/about-publication-519",
        },
        {
          label: "IRS — Substantial presence test",
          href: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test",
        },
        {
          label: "IRS — Taxation of dual-status individuals",
          href: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-dual-status-individuals",
        },
        {
          label: "IRS — Aliens employed in the U.S.: Social Security taxes",
          href: "https://www.irs.gov/individuals/international-taxpayers/aliens-employed-in-the-us-social-security-taxes",
        },
        {
          label: "IRS Topic 751 — Social Security and Medicare withholding rates",
          href: "https://www.irs.gov/taxtopics/tc751",
        },
        {
          label: "IRS — Nonresident spouse treated as a resident",
          href: "https://www.irs.gov/individuals/international-taxpayers/nonresident-spouse",
        },
        {
          label: "IRS — About Form 1040-NR",
          href: "https://www.irs.gov/forms-pubs/about-form-1040-nr",
        },
        {
          label: "IRS — Departing alien clearance (sailing permit)",
          href: "https://www.irs.gov/individuals/international-taxpayers/departing-alien-clearance-sailing-permit",
        },
      ]}
      faqs={faqs}
    >
      <h2>What comes out of an H-1B paycheck</h2>
      <p>
        An H-1B salary is ordinary W-2 wages. Four taxes come out of each
        paycheck: federal income tax, Social Security, Medicare and, depending
        on where you live and work, state and sometimes city income tax.
        Pre-tax benefits come out too, and they shrink the pay that income tax
        is charged on.
      </p>
      <p>
        The visa settles only one thing: you pay Social Security and Medicare.
        Whether you are taxed as a resident or a nonresident, and on what
        income, comes from tests that count days, not visa stamps. Put your
        salary into the{" "}
        <Link href="/calculators/h1b-tax" className="font-semibold text-accent hover:underline">
          H-1B tax estimator
        </Link>{" "}
        for a planning range.
      </p>

      <h2>Start with withholding: how Form W-4 works</h2>
      <p>
        Your employer withholds federal income tax based on Form W-4, the
        Employee’s Withholding Certificate. The current form has no allowances:
        you give your filing status in Step 1, flag a second job or a working
        spouse in Step 2, claim credits for dependents in Step 3, and in Step 4
        add other income, extra deductions, or a flat extra amount per
        paycheck. Withholding is a prepayment; the bill is settled on your
        return. Under-withhold and you owe a balance in April, possibly with an
        underpayment penalty. Over-withhold and you lend the IRS money for free.
      </p>
      <p>
        <strong>Nonresidents fill it in differently.</strong> If you will be a
        nonresident alien for the year, usually because you arrived in the
        autumn, IRS Notice 1392 applies. You check single or married filing
        separately in Step 1(c) whatever your actual marital status, leave a
        spouse’s job out of Step 2, write “nonresident alien” or “NRA” below
        Step 4(c), and may not claim to be exempt. Your employer also adds an
        amount to your wages before applying the tables, because nonresidents
        cannot take the standard deduction built into them. The IRS says
        nonresidents should not use its Tax Withholding Estimator; residents
        can.
      </p>
      <p>
        First-year numbers rarely line up exactly. The tables assume each
        paycheck repeats for a full year and build in a standard deduction that
        a dual-status return cannot claim, so budget for either a refund or a
        balance. Many states also have their own withholding certificate.
      </p>

      <h3>When to revisit your W-4</h3>
      <ul>
        <li>
          <strong>Your tax status changes.</strong> Once you expect to be a
          resident, usually from January 1 of your first full calendar year,
          replace a nonresident W-4 with one under the ordinary instructions.
        </li>
        <li>
          <strong>Your household changes.</strong> Marriage, a child, or a
          spouse starting work on an H-4 EAD. Two incomes each withheld as if it
          were the only one is a classic cause of a surprise bill.
        </li>
        <li>
          <strong>Your pay changes shape.</strong> Large bonuses and stock
          vesting are often withheld at a flat supplemental rate that can be
          lower than the rate your top dollars are actually taxed at.
        </li>
        <li>
          <strong>Something else moved.</strong> A new employer, a new state,
          or a large balance due or refund last year.
        </li>
      </ul>

      <h2>Social Security and Medicare: no exemption on H-1B</h2>
      <p>
        Social Security and Medicare taxes, together called FICA, apply to H-1B
        wages from the first paycheck. Your employer withholds 6.2% for Social
        Security up to an annual wage base that usually rises each year, and
        1.45% for Medicare with no cap, and pays a matching share of its own.
        Once your wages from one employer pass $200,000 in a calendar year, it
        also withholds the 0.9% Additional Medicare Tax. The threshold that
        actually applies to you depends on filing status, and any difference is
        settled on Form 8959 with your return.
      </p>
      <p>
        The exemption you may have heard about belongs to nonresident students
        and exchange visitors in F-1, J-1, M-1 or Q-1 status, and the IRS says
        it ends when they become residents or change to a status that is not
        exempt. H-1B is not exempt. If you move from F-1 OPT to H-1B, FICA
        applies from your H-1B start date even if you are still a nonresident
        for income tax that year. If FICA was wrongly taken from exempt pay, ask
        the employer for a refund first and use Form 843 if that fails. An H-4
        spouse’s EAD wages are subject to FICA too.
      </p>
      <Callout tone="warning" title="Check your first H-1B pay stub">
        If you switched from F-1, confirm that Social Security and Medicare
        start on the first paycheck after your H-1B start date. Payroll systems
        can carry the student exemption forward by mistake.
      </Callout>
      <ul>
        <li>
          <strong>Two employers in one year.</strong> Each withholds Social
          Security up to the wage base separately, so after a job change the
          excess over the annual maximum comes back as a credit on your return.
        </li>
        <li>
          <strong>No refund when you leave.</strong> Correctly withheld FICA
          stays paid even if you never collect benefits, and US retirement
          benefits generally require 40 credits, roughly ten years of work.
        </li>
        <li>
          <strong>Totalization agreements.</strong> The US has Social Security
          agreements with a number of countries. They can exempt workers
          temporarily sent here by a home-country employer, but rarely someone
          hired directly onto US payroll.
        </li>
      </ul>

      <h2>Resident or nonresident: the substantial presence test decides</h2>
      <p>
        For federal income tax you are either a resident alien or a nonresident
        alien, and your visa does not choose. Without a green card, the
        substantial presence test decides: you are a resident if you were in the
        US on at least 31 days this year and at least 183 days counting all of
        this year’s days, one-third of last year’s and one-sixth of the year
        before. Unlike days as an F-1 or J-1 student, every H-1B day counts.
      </p>
      <p>
        If you arrived from abroad before roughly early July and stayed, you
        pass in your first year; arrive in the autumn and you usually do not.
        From your first full calendar year almost everyone is a resident, filing
        Form 1040 with the same standard deduction, rates and credits as a
        citizen. The{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident guide
        </Link>{" "}
        has the full rules, and the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence test calculator
        </Link>{" "}
        does the arithmetic for your dates.
      </p>

      <h3>Your arrival year: dual-status and the first-year choice</h3>
      <p>
        The arrival year is often <strong>dual-status</strong>. Residency starts
        on the first day you are present in the year you pass, so someone who
        lands on March 1 is a nonresident for January and February. You file
        Form 1040 marked “Dual-Status Return” with a Form 1040-NR statement for
        the nonresident months, when only US-source income is taxed, so foreign
        salary from before the move is generally outside US tax. Dual-status
        filers cannot take the standard deduction or file jointly without a
        spouse election.
      </p>
      <p>
        Arrived too late to pass? The <strong>first-year choice</strong> treats
        you as a resident from arrival if you were here for 31 consecutive days,
        were present on at least 75% of the days from then to December 31, and
        pass the test outright the next year, which often means extending the
        first return.
      </p>
      <p>
        F-1 switchers usually start counting on their H-1B start date, often
        October 1, because exempt student days do not count. They are normally
        nonresidents that year unless their five exempt calendar years were
        already used up. The{" "}
        <Link
          href="/taxes/f1"
          className="font-semibold text-accent hover:underline"
        >
          F-1 student tax guide
        </Link>{" "}
        and{" "}
        <Link
          href="/calculators/f1-opt-tax"
          className="font-semibold text-accent hover:underline"
        >
          OPT tax calculator
        </Link>{" "}
        cover the student months.
      </p>

      <h2>Once you are a resident, the IRS taxes worldwide income</h2>
      <p>
        A resident reports income from everywhere: interest from accounts back
        home, rent from a flat you still own, dividends, and gains on property
        or shares sold abroad, including income that is tax-free where it is
        earned. A foreign tax credit generally stops the same income being taxed
        twice. Foreign mutual funds are usually passive foreign investment
        companies, with harsh US rules and often an annual filing, so speak to a
        preparer before buying more.
      </p>
      <p>
        Residency also brings disclosure: an{" "}
        <Link
          href="/taxes/fbar"
          className="font-semibold text-accent hover:underline"
        >
          FBAR
        </Link>{" "}
        if your foreign accounts together exceeded $10,000 at any time in the
        year, and{" "}
        <Link
          href="/taxes/fatca"
          className="font-semibold text-accent hover:underline"
        >
          Form 8938 under FATCA
        </Link>{" "}
        above its higher thresholds. Moving your own savings between your own
        accounts is not income, though large gifts to family can require a gift
        tax return; the{" "}
        <Link
          href="/send-money"
          className="font-semibold text-accent hover:underline"
        >
          guide to sending money abroad
        </Link>{" "}
        covers the practical side.
      </p>

      <h2>State income tax changes the answer a lot</h2>
      <p>
        Federal rules are the same wherever you live, but state income tax is
        not. A handful of states, including Texas, Florida and Washington, do
        not tax wages at all, others take a meaningful share of your salary, and
        some cities, New York City among them, add their own tax on top. Two
        identical H-1B offers in different states can differ by thousands of
        dollars in take-home pay. States also set their own residency rules,
        based on domicile and days spent there rather than the substantial
        presence test, and some do not follow federal treaty exemptions.
      </p>
      <p>
        Moving mid-year usually means a part-year return in each state, each
        covering the income earned while you lived there. Tell payroll your move
        date and keep proof of it. Remote work adds wrinkles: wages are
        generally taxed where you do the work, but a few states, New York the
        best known, can tax remote employees of in-state employers, and your
        home state usually credits tax paid to another state on the same
        income. Before relocating, check with your employer too: for an H-1B
        worker a new worksite can require an updated Labor Condition
        Application or an amended petition.
      </p>

      <h2>Pre-tax benefits lower your taxable income</h2>
      <ul>
        <li>
          <strong>Traditional 401(k)</strong> contributions come out before
          federal income tax and, in most states, state income tax, but not
          before FICA. A Roth 401(k) is taxed now and tax-free later if the rules
          are met. Withdrawals before age 59½ generally carry a 10% additional
          tax, so if you might leave the US, read{" "}
          <Link
            href="/investing/401k-if-you-leave"
            className="font-semibold text-accent hover:underline"
          >
            what happens to your 401(k) if you leave
          </Link>
          .
        </li>
        <li>
          <strong>Health premiums, HSAs and FSAs.</strong> Premiums paid through
          your employer’s plan, payroll HSA contributions, and health or
          dependent care FSA contributions generally escape both income tax and
          FICA. An HSA requires a high-deductible plan and stays yours if you
          leave; FSA money is largely use-it-or-lose-it. California and New
          Jersey tax HSA contributions at state level. See the{" "}
          <Link
            href="/insurance/health"
            className="font-semibold text-accent hover:underline"
          >
            health insurance guide
          </Link>
          .
        </li>
        <li>
          <strong>Commuter benefits</strong> for transit and parking, where
          offered, are also excluded from income tax and FICA.
        </li>
      </ul>
      <p>
        Contribution limits change every year. Residents under the income limits
        can also use a Roth IRA; see the{" "}
        <Link
          href="/investing/h1b-roth-ira"
          className="font-semibold text-accent hover:underline"
        >
          Roth IRA guide for H-1B workers
        </Link>{" "}
        and{" "}
        <Link
          href="/investing/on-a-visa"
          className="font-semibold text-accent hover:underline"
        >
          investing on a visa
        </Link>
        .
      </p>

      <h2>Filing your return: Form 1040 or 1040-NR</h2>
      <p>
        Your employer must give you your W-2 by January 31, and federal returns
        are generally due April 15. Form 4868 extends the time to file to
        October 15, but not the time to pay.
      </p>
      <ul>
        <li>
          <strong>Resident all year:</strong> Form 1040, exactly like a citizen.
        </li>
        <li>
          <strong>Nonresident all year:</strong> Form 1040-NR, covering only
          US-source and effectively connected income, with no standard
          deduction, a short list of itemized deductions (state and local income
          tax is the one most workers use), and generally single or married
          filing separately status.
        </li>
        <li>
          <strong>Dual-status:</strong> Form 1040 with a 1040-NR statement if
          you were a resident on December 31, and the reverse if not.
        </li>
      </ul>
      <p>
        Filing a resident Form 1040 for a nonresident year is a common
        arrival-year mistake that needs an amended return to fix. Many consumer
        tax programs do not handle Form 1040-NR or dual-status returns.
      </p>

      <h2>Filing jointly with an H-4 spouse</h2>
      <p>
        A joint return, usually the cheapest option for a one-income couple,
        requires both spouses to be treated as residents for the whole year.
      </p>
      <ul>
        <li>
          <strong>You arrived together.</strong> H-4 days count toward the
          substantial presence test just as H-1B days do, so if you both pass
          you are both dual-status in year one and can jointly elect to be
          residents for the entire year, which lifts the dual-status
          restrictions, standard deduction included.
        </li>
        <li>
          <strong>Your spouse joined later or lives abroad.</strong> If you are a
          resident at year end, you can treat your nonresident spouse as a
          resident by attaching a statement signed by both of you to a joint
          return.
        </li>
      </ul>
      <p>
        The price of either election: both spouses report worldwide income for
        the whole year, including foreign salary from before the move, and for
        every later year while the choice stays in effect. Without an election
        you generally file married filing separately, or possibly head of
        household if you maintain a home for a qualifying child or relative.
      </p>
      <Callout tone="alert" title="The spouse election is once in a lifetime">
        If the choice to treat a nonresident spouse as a resident is ended, for
        example by revoking it, neither spouse can make it again in any later
        year, even if married to someone else.
      </Callout>
      <p>
        Your spouse also needs a taxpayer number: a Social Security number with
        an H-4 EAD, or otherwise an{" "}
        <Link
          href="/taxes/itin"
          className="font-semibold text-accent hover:underline"
        >
          ITIN
        </Link>{" "}
        on Form W-7, normally filed with the first joint return. When both of
        you work, use Step 2 of the W-4. The child tax credit requires the child
        to have a Social Security number; a dependent with only an ITIN may
        qualify for the smaller credit for other dependents.
      </p>

      <h2>Tax treaties: useful for a few, irrelevant for most</h2>
      <p>
        Treaties do less for H-1B workers than people expect. Their employment
        articles mostly cover short visits paid by a foreign employer, and once
        you are a resident the saving clause generally switches treaty benefits
        off, apart from listed exceptions. They can still matter for university
        teachers and researchers, since some treaties exempt that pay for a
        limited period (claimed by nonresidents on Form 8233, and in some cases
        continuing after residency starts), and for pensions, dividends and
        interest from home. Read your country’s article on the IRS tax treaty
        pages before relying on it, and remember that a state can tax income a
        federal treaty exempts.
      </p>

      <h2>Leaving the US mid-year</h2>
      <p>
        Leave for good partway through a year in which you are a resident and
        your residency normally runs to December 31, so you file as a resident
        for the whole year. You can end it on your last day in the US instead
        if, for the rest of the year, your tax home and closer connection were
        in another country and you are not a US resident at any point the next
        year; you claim that date with a signed statement on a dual-status
        return.
      </p>
      <ul>
        <li>
          File the departure-year return by the usual deadline. Final pay,
          severance and bonuses for US work are generally still US-source, and
          equity that vests after you leave can be partly US-source, allocated
          by time worked here.
        </li>
        <li>Your 401(k) and HSA can usually stay where they are.</li>
        <li>
          The IRS says most departing aliens need a departure clearance, the
          sailing permit, obtained by filing Form 1040-C or Form 2063 before
          leaving; its page lists who is exempt.
        </li>
        <li>
          Your last state will usually expect a part-year resident return.
        </li>
      </ul>

      <h2>Documents to keep</h2>
      <ul>
        <li>W-2s from every employer, and your final pay stubs</li>
        <li>1099 forms if any freelance side work was authorized and issued</li>
        <li>Prior-year returns, especially from a dual-status year</li>
        <li>
          Your I-94 travel history and other records of days present in the US
        </li>
        <li>
          Foreign account statements and proof of tax paid abroad
        </li>
        <li>
          Proof of any state move date, and copies of spouse election and ITIN
          paperwork
        </li>
      </ul>

      <h2>Other H-1B guides on this site</h2>
      <p>
        This page covers taxes specifically. Depending on what you are trying to
        work out, one of these is probably a better starting point:
      </p>
      <ul>
        <li>
          <Link
            href="/visas/work/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B visa requirements, fees and timeline
          </Link>{" "}
          — eligibility, the cap and lottery, and the filing process.
        </li>
        <li>
          <Link
            href="/calculators/h1b-tax"
            className="font-semibold text-accent hover:underline"
          >
            H-1B tax calculator
          </Link>{" "}
          — put a salary figure in and see estimated take-home pay.
        </li>
        <li>
          <Link
            href="/visa-guides/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B financial guide
          </Link>{" "}
          — the wider first-year money checklist beyond tax.
        </li>
        <li>
          <Link
            href="/visa-guides/green-card"
            className="font-semibold text-accent hover:underline"
          >
            Green card financial guide
          </Link>{" "}
          — what changes when you become a permanent resident.
        </li>
        <li>
          <Link
            href="/taxes"
            className="font-semibold text-accent hover:underline"
          >
            All tax guides
          </Link>{" "}
          — ITIN, FBAR, FATCA and student taxes in one place.
        </li>
      </ul>
    </GuideLayout>
  );
}

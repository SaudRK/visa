import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/visa-guides/h1b";
const TITLE = "H-1B Financial Guide: Your First Year Checklist";
const DESCRIPTION =
  "A practical money checklist for your first year on an H-1B — payroll setup, withholding, 401(k) match, credit, and sending money home.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function H1bFinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa money guide"
      title="H-1B financial guide: your first year"
      description="A practical money system for your first year on H-1B — cash for the first weeks, your SSN and bank account, payroll and benefits, credit, a grace-period emergency fund, your H-4 spouse, and taxes at home and abroad."
      path={PATH}
      crumbs={[
        { name: "Visa guides", path: "/visa-guides" },
        { name: "H-1B", path: PATH },
      ]}
      sources={[
        {
          label: "USCIS — H-1B Specialty Occupations",
          href: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations",
        },
        {
          label: "USCIS — Employment Authorization for Certain H-4 Dependent Spouses",
          href: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/employment-authorization-for-certain-h-4-dependent-spouses",
        },
        {
          label:
            "8 CFR 214.1 — maintenance of status, including the grace period after employment ends",
          href: "https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/subpart-A/section-214.1",
        },
        {
          label: "DOL — Fact Sheet #62L: What benefits must be offered to H-1B workers?",
          href: "https://www.dol.gov/agencies/whd/fact-sheets/62l-h1b-benefits",
        },
        {
          label: "DOL — Fact Sheet #62I: Must an H-1B employer pay for nonproductive time?",
          href: "https://www.dol.gov/agencies/whd/fact-sheets/62i-h1b-nonproductive-time",
        },
        {
          label: "SSA — Social Security numbers and cards",
          href: "https://www.ssa.gov/ssnumber/",
        },
        {
          label: "SSA — Foreign Workers and Social Security Numbers",
          href: "https://www.ssa.gov/pubs/EN-05-10107.pdf",
        },
        {
          label: "IRS — Notice 1392, Supplemental Form W-4 Instructions for Nonresident Aliens",
          href: "https://www.irs.gov/forms-pubs/about-notice-1392",
        },
        {
          label: "IRS — Publication 519, U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/forms-pubs/about-publication-519",
        },
        {
          label: "IRS — Taxation of Nonresident Aliens",
          href: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens",
        },
        {
          label: "IRS — Report of Foreign Bank and Financial Accounts (FBAR)",
          href: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar",
        },
        {
          label: "IRS — Proposed regulations on the new remittance transfer tax",
          href: "https://www.irs.gov/newsroom/treasury-irs-issue-proposed-regulations-on-the-new-remittance-transfer-tax-established-under-the-one-big-beautiful-bill",
        },
        {
          label: "IRS — 401(k) contribution limits",
          href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits",
        },
      ]}
      faqs={[
        {
          question: "Can H-1B workers contribute to a 401(k)?",
          answer:
            "Yes. Your visa places no limit on 401(k) participation; eligibility depends on your employer’s plan rules, exactly as it does for any other employee. Contribute at least enough to collect any employer match, and find out when the match vests, because unvested employer money is forfeited if you leave early. The vested balance stays yours even if you later leave the US.",
        },
        {
          question: "What happens to my money if I lose my H-1B job?",
          answer:
            "Your savings, the vested part of your 401(k), and any HSA stay yours. On the immigration side you generally have a grace period of up to 60 consecutive days, or until your authorized stay ends if that is sooner, during which you keep your status but cannot work. Budget to cover that window and a flight home, and confirm your exact dates and options with an immigration attorney before your last day.",
        },
        {
          question: "Can my H-4 spouse work in the US?",
          answer:
            "Only with an H-4 Employment Authorization Document, and only in specific cases: the H-1B worker must be the beneficiary of an approved Form I-140, or hold H-1B status extended beyond six years under the AC21 green card provisions. Your spouse applies on Form I-765 and must have the card in hand before starting work. Without it they can live and study in the US but cannot take a job.",
        },
        {
          question: "Do H-1B workers pay Social Security and Medicare tax?",
          answer:
            "Yes. H-1B workers have no FICA exemption, so 6.2% Social Security tax up to the annual wage cap and 1.45% Medicare tax come out of every paycheck, and your employer pays a matching share. The tax is not refunded when you leave the US, but the work credits stay on your Social Security record and may count toward benefits later.",
        },
        {
          question: "Am I a US tax resident in my first year on H-1B?",
          answer:
            "It depends on your days in the US, not on your visa. If you arrive early enough in the calendar year to be present for 183 days, you are usually a resident from your arrival date, with a nonresident period before it. Arrive later in the year, or switch from F-1 on October 1, and you are usually a nonresident for that year and file Form 1040-NR.",
        },
      ]}
    >
      <p>
        The H-1B petition is your employer’s paperwork. The money side is
        yours, and it has a shape no other job has: your right to stay in the
        country is tied to one paycheck from one employer. Almost every decision
        below comes back to that.
      </p>
      <p>
        USCIS grants H-1B status for up to three years at a time, generally to a
        six-year maximum, with extensions beyond six years for workers far
        enough along in the green card process. Long enough to build real
        savings and credit; short enough that every plan needs an answer to
        “what if I have to leave?”
      </p>

      <h2>Before you land: cash to bridge the gap to your first paycheck</h2>
      <p>
        US payroll usually runs every two weeks or twice a month and pays in
        arrears, so your first deposit can land several weeks after you start.
        Relocation money is often a reimbursement: you pay first and claim
        later. Bring enough for temporary housing, first month’s rent and a
        security deposit (landlords may ask for more from someone with no US
        credit history), furniture, transport, and a month of household costs.
      </p>
      <p>
        Move the money by transfer rather than in your luggage: currency and
        monetary instruments totaling more than $10,000 must be declared to US
        Customs and Border Protection on entry. A sign-on or relocation bonus is
        taxed like salary and often has a clawback if you leave early.
      </p>

      <h2>Week one or two: your Social Security number</h2>
      <p>
        First, download your I-94 record from the CBP website and check that it
        shows H-1B and an admit-until date matching your approval notice. SSA
        recommends waiting about 10 days after arrival before applying, so it
        can verify your documents with DHS electronically. Start the
        application online, then finish in person at a Social Security office
        with your passport and I-94, bringing your Form I-797 approval notice
        too. You can start work before the number arrives — SSA says nothing
        prevents it — so tell payroll you have applied. If you already got an
        SSN as an F-1 student, it is yours for life.
      </p>

      <h2>Opening a bank account, with or without an SSN</h2>
      <p>
        Open a checking account for direct deposit and a separate savings
        account for your emergency fund. You may not need to wait for the SSN:
        federal customer-identification rules let a bank accept a passport
        number from a non-US person in place of a taxpayer ID, but each bank
        sets its own policy. Bring your passport, I-94, I-797 or offer letter,
        and proof of a US address. Add your SSN when it arrives, and when your
        tax status changes, swap the bank’s Form W-8BEN (nonresident) for a
        W-9 (resident). See{" "}
        <Link
          href="/banking"
          className="font-semibold text-accent hover:underline"
        >
          banking for newcomers
        </Link>{" "}
        for account types and fees.
      </p>

      <h2>Your first payslip: W-4, income tax, and FICA</h2>
      <p>Check every line of your first payslip; two of them work differently on a visa.</p>

      <h3>Withholding</h3>
      <p>
        Form W-4 sets your federal withholding. If you will be a nonresident
        alien for the year — common if you arrive late in the year or switch
        from F-1 on October 1 — follow IRS Notice 1392: check “Single or Married
        filing separately” whatever your actual status, write “NRA” below Step
        4(c), and do not claim exemption; payroll then adds an extra amount to
        your wages when it calculates withholding. Bonuses and RSU vests are
        often withheld at a flat supplemental rate that can be below your real
        bracket, so set money aside if much of your pay arrives that way.
      </p>

      <h3>Social Security and Medicare</h3>
      <p>
        There is no FICA exemption on H-1B. You pay 6.2% Social Security tax on
        wages up to an annual cap and 1.45% Medicare tax on all wages, your
        employer pays a matching amount, and a 0.9% Additional Medicare Tax is
        withheld once your wages for the year pass $200,000. If you came from
        F-1 OPT, the student exemption ends when H-1B status begins; if FICA was
        taken from pay you earned while still an exempt student, ask your
        employer to refund it. FICA is not refunded when you leave the US, but
        the work credits stay on your record. Estimate take-home pay with the{" "}
        <Link
          href="/calculators/h1b-tax"
          className="font-semibold text-accent hover:underline"
        >
          H-1B tax calculator
        </Link>{" "}
        and read{" "}
        <Link
          href="/taxes/h1b"
          className="font-semibold text-accent hover:underline"
        >
          H-1B taxes explained
        </Link>{" "}
        for state tax.
      </p>

      <h2>Benefits enrollment: the deadline most new hires miss</h2>
      <p>
        New hires usually get a short window — often around 30 days — to choose
        benefits. Miss it and you generally wait for annual open enrollment
        unless a qualifying life event, such as marriage or a birth, reopens it.
        Department of Labor rules require an H-1B employer to offer you benefits
        on the same basis as similarly employed US workers.
      </p>

      <h3>Health, disability, and life cover</h3>
      <p>
        Add your spouse and children to your medical plan now; adding them later
        usually takes a qualifying event (see{" "}
        <Link
          href="/insurance/health"
          className="font-semibold text-accent hover:underline"
        >
          health insurance for newcomers
        </Link>
        ). Take any employer disability cover: on an H-1B, both your income and
        your status depend on working. Group life cover usually ends with the
        job; if anyone depends on you, read{" "}
        <Link
          href="/insurance/life"
          className="font-semibold text-accent hover:underline"
        >
          life insurance on a visa
        </Link>
        .
      </p>

      <h3>The 401(k) and the match</h3>
      <p>
        Your visa does not limit 401(k) participation. Contribute at least
        enough to collect the full employer match from your first eligible
        paycheck. Your own contributions are always 100% yours; the match may
        vest over time — federal law caps matching schedules at a three-year
        cliff or a six-year graded schedule — and anything unvested is forfeited
        if you leave, so know your vesting date before you resign. If the plan
        enrolls you automatically, check the default rate and investment.
        Before choosing pre-tax or Roth contributions, read{" "}
        <Link
          href="/investing/401k-if-you-leave"
          className="font-semibold text-accent hover:underline"
        >
          what happens to your 401(k) if you leave the US
        </Link>
        .
      </p>

      <h3>HSA and FSA</h3>
      <p>
        A health savings account requires a high-deductible health plan.
        Contributions go in before federal income tax, the balance rolls over,
        and the account stays yours if you change jobs or leave the country —
        though California and New Jersey tax contributions at state level. A
        health FSA is use-it-or-lose-it, and any balance is usually forfeited
        when you leave the employer. A dependent care FSA generally requires
        both spouses to work or one to be a full-time student, which usually
        rules it out while an H-4 spouse cannot work.
      </p>

      <h2>Building credit from zero</h2>
      <p>
        Your credit history at home does not follow you, and a thin US file
        means bigger deposits on apartments, utilities, and phones. Once you
        have an SSN, open a secured or starter card, put one small recurring
        bill on it, pay in full automatically, keep the balance low, apply for
        new credit sparingly, and keep that first card open. The most widely
        used scores need roughly six months of reported history, so a usable
        score arrives mid-year. Insurers may not count a foreign driving record
        either, so compare{" "}
        <Link
          href="/insurance/auto"
          className="font-semibold text-accent hover:underline"
        >
          auto insurance for new arrivals
        </Link>{" "}
        early. The full sequence is in{" "}
        <Link
          href="/banking/build-credit"
          className="font-semibold text-accent hover:underline"
        >
          how to build US credit as an immigrant
        </Link>
        .
      </p>

      <h2>An emergency fund sized for the 60-day grace period</h2>
      <p>
        If your employment ends — whether you resign or are let go —
        immigration rules generally give you a grace period of up to 60
        consecutive days, or until your authorized stay ends if that comes
        sooner, during which you can keep your status. It is available once per
        authorized validity period, DHS can shorten it at its discretion, you
        cannot work during it, and it ends if you leave the US.
      </p>
      <p>
        Within that window a new employer can file an H-1B petition for you, or
        you can apply to change to another status — H-4 if your spouse holds
        H-1B, for example — or you depart. If a qualifying petition or
        application is filed in time, your stay can run past 60 days while it
        is pending. The conditions matter, so if your job looks at risk, speak
        to an immigration attorney before your last day. Size the fund for that
        clock: rent and bills for at least 60 days, ideally three months; COBRA
        premiums if you keep your employer health plan, which usually means
        paying the full cost yourself; an attorney consultation; and one-way
        flights home for the household.
      </p>
      <p>
        If your employer dismisses you before the end of your approved period,
        it is liable for the reasonable cost of your return transportation
        abroad — generally understood as your own fare, not your family’s — but
        not if you resign. And if it keeps you on with no work, Department of
        Labor rules generally require it to keep paying your required wage.
        Keep the fund in insured savings, not in shares.
      </p>
      <Callout tone="warning" title="Your final paycheck is not a plan">
        <p>
          Final-pay timing, unused vacation, and severance depend on state law
          and your employer’s policy. Before you sign a separation agreement,
          ask an immigration attorney how severance or paid notice affects your
          grace-period dates.
        </p>
      </Callout>

      <h2>Your H-4 spouse: work, taxes, and paperwork</h2>
      <p>
        An H-4 spouse can work only with an H-4 Employment Authorization
        Document, and eligibility turns on your case: you must be the principal
        beneficiary of an approved Form I-140 immigrant petition, or hold H-1B
        status extended beyond six years under the AC21 green card provisions.
        Your spouse files Form I-765 and cannot start work until the EAD is in
        hand. For most couples in year one, budget on one income; the{" "}
        <Link
          href="/visa-guides/green-card"
          className="font-semibold text-accent hover:underline"
        >
          green card financial guide
        </Link>{" "}
        covers what changes later.
      </p>
      <p>
        An H-4 spouse counts days under the substantial presence test just as
        you do, so they usually become a tax resident on the same timeline. A
        joint return needs a taxpayer ID for both of you. Without work
        authorization your spouse generally cannot get an SSN, so they apply for
        an ITIN on Form W-7, usually attached to your first joint return — see
        the{" "}
        <Link
          href="/taxes/itin"
          className="font-semibold text-accent hover:underline"
        >
          ITIN guide
        </Link>
        .
      </p>

      <h2>Sending money home</h2>
      <p>
        A bank wire at the default exchange rate is often the most expensive
        channel. US rules require most providers to show the fees, exchange
        rate, and amount that will arrive before you pay, so compare with the{" "}
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
          send money abroad
        </Link>{" "}
        for the options.
      </p>
      <p>
        Fund transfers from a bank account or a US-issued card: since January 1,
        2026, a 1% federal excise tax applies to remittances paid for with cash,
        a money order, a cashier’s check, or a similar physical instrument.
        Money coming the other way has its own rule: once you are a US tax
        resident, gifts from family members who are not US persons totaling
        more than $100,000 in a year must be reported on Form 3520 — a
        disclosure, not a tax, with steep penalties for skipping it.
      </p>

      <h2>Tax residency in year one, and accounts back home</h2>
      <p>
        The IRS sets your tax status by days, not by visa. The substantial
        presence test counts all your days this year, a third of last
        year’s, and a sixth of the year before’s; 183 or more, with at least 31
        this year, makes you a resident. H-1B days count from arrival; F-1 days
        generally do not during your first five calendar years as a student.
      </p>
      <p>
        Arrive in the first half of the year and stay, and residency starts on
        your first day in the US, with a nonresident period before it. That
        dual-status year means no standard deduction and no joint return,
        unless you and your spouse elect to be treated as residents for the
        whole year — which brings that year’s worldwide income into US tax.
        Arrive later, or switch from F-1 on October 1, and you are usually a
        nonresident for the year, though the first-year choice in IRS
        Publication 519 can make you a resident for part of it. Check your dates
        with the{" "}
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
        ; if you are switching from student status, see the{" "}
        <Link
          href="/visa-guides/f1"
          className="font-semibold text-accent hover:underline"
        >
          F-1 financial guide
        </Link>{" "}
        too.
      </p>
      <p>
        Once you are a resident, income at home — interest, rent, dividends,
        gains — is US-taxable, with foreign tax credits for tax paid there.
        Interest that is tax-free at home, such as on an Indian NRE deposit,
        still goes on your US return. Every foreign account you own or can sign
        on becomes reportable: on the FBAR (FinCEN Form 114) once they total
        more than $10,000 at any point in the year, due April 15 with an
        automatic extension to October 15; and on Form 8938 under FATCA, which
        has higher thresholds that depend on filing status. Read the{" "}
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
        before your first filing season.
      </p>

      <h2>Investing on a visa</h2>
      <p>
        Take the full 401(k) match, build the emergency fund, then invest the
        rest. Passive investing — shares, funds, a rental property — is
        generally compatible with H-1B status; running a business or doing paid
        work outside your sponsored job is not, so ask an immigration attorney
        if a side project starts to look like work. Roth IRA eligibility depends
        on taxable compensation and an income limit that changes every year,
        not on your visa, though a married nonresident filing separately who
        lived with their spouse is effectively shut out. The{" "}
        <Link
          href="/investing/h1b-roth-ira"
          className="font-semibold text-accent hover:underline"
        >
          Roth IRA guide for H-1B holders
        </Link>{" "}
        has the detail. Be wary of buying funds registered in your home
        country: US tax treats many as passive foreign investment companies,
        with punitive tax and an annual Form 8621. More in{" "}
        <Link
          href="/investing/on-a-visa"
          className="font-semibold text-accent hover:underline"
        >
          investing on a visa
        </Link>
        .
      </p>

      <h2>If you leave the US: what happens to your money</h2>
      <ul>
        <li>
          <strong>401(k).</strong> The vested balance stays yours. You can
          usually leave it in the plan, roll it to an IRA or a new US
          employer’s plan, or cash out — which means income tax plus a 10%
          additional tax if you are under 59½, and once you are a nonresident
          the plan generally withholds 30% unless a treaty lowers it.
        </li>
        <li>
          <strong>Roth IRA.</strong> Your contributions, though not the
          earnings, can come out at any time without US tax or penalty.
        </li>
        <li>
          <strong>HSA and Social Security.</strong> The HSA stays yours for
          qualified medical costs; your work credits stay on your record.
        </li>
        <li>
          <strong>Bank accounts and taxes.</strong> Keep one US account open
          for your final paycheck, tax refund, and any 401(k) payout. The
          departure year is usually dual-status again, and Publication 519
          explains the departure clearance — the “sailing permit” — that
          departing aliens generally need, with some exceptions.
        </li>
      </ul>

      <h2>Your first-year checklist</h2>
      <ol>
        <li>Arrive with cash for deposits and the weeks before your first paycheck.</li>
        <li>Check your I-94; apply for your SSN about 10 days after arrival.</li>
        <li>Open checking and savings; complete your W-4 and check your first payslip.</li>
        <li>Enroll in benefits within the window; take the full 401(k) match.</li>
        <li>Open a secured or starter card and automate full payment.</li>
        <li>Build an emergency fund for the 60-day window plus flights home.</li>
        <li>If your spouse is on H-4, check EAD eligibility and plan their ITIN.</li>
        <li>Work out your residency start date; list foreign accounts for FBAR and FATCA.</li>
      </ol>

      <h2>Where to go deeper</h2>
      <p>
        This guide is the overview. Each of these covers one piece of it in
        detail:
      </p>
      <ul>
        <li>
          <Link
            href="/visas/work/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B visa requirements, fees and timeline
          </Link>{" "}
          — if you are still going through the petition process.
        </li>
        <li>
          <Link
            href="/taxes/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B taxes explained
          </Link>{" "}
          — withholding, FICA, and state tax in depth.
        </li>
        <li>
          <Link
            href="/visa-guides/l1"
            className="font-semibold text-accent hover:underline"
          >
            L-1 financial guide
          </Link>{" "}
          — the same first-year plan for intracompany transferees.
        </li>
      </ul>
    </GuideLayout>
  );
}

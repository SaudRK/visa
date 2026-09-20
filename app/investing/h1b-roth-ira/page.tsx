import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/investing/h1b-roth-ira";
const TITLE = "Can H-1B Holders Open a Roth IRA?";
const DESCRIPTION =
  "Can H-1B holders open a Roth IRA? Eligibility for visa holders, why tax residency matters, Roth vs traditional if you might leave, and what happens abroad.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function H1bRothIraPage() {
  return (
    <GuideLayout
      eyebrow="Investing"
      title="Roth IRA on an H-1B: eligibility, and what happens if you leave"
      description="The IRS rules never mention citizenship or a green card. What they do require — taxable US compensation, income under the limit, and a filing status that works — is where visa holders need to look closely."
      path={PATH}
      crumbs={[
        { name: "Investing", path: "/investing" },
        { name: "H-1B and Roth IRA", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Roth IRAs",
          href: "https://www.irs.gov/retirement-plans/roth-iras",
        },
        {
          label: "IRS — Retirement topics: IRA contribution limits",
          href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits",
        },
        {
          label: "IRS Publication 590-A — Contributions to IRAs",
          href: "https://www.irs.gov/publications/p590a",
        },
        {
          label: "IRS Publication 590-B — Distributions from IRAs",
          href: "https://www.irs.gov/publications/p590b",
        },
        {
          label: "IRS — Nonresident alien: figuring your tax",
          href: "https://www.irs.gov/individuals/international-taxpayers/nonresident-alien-figuring-your-tax",
        },
      ]}
      faqs={[
        {
          question: "Can H-1B holders open a Roth IRA?",
          answer:
            "Yes, if you have taxable compensation from US work and your modified adjusted gross income is under the current IRS limit for your filing status. There is no citizenship, green card or age requirement. Most H-1B workers are resident aliens filing Form 1040 within their first year, which is the straightforward route; nonresident aliens on Form 1040-NR face filing-status limits that can make a direct contribution impractical.",
        },
        {
          question: "Can F-1 students contribute to a Roth IRA?",
          answer:
            "Only with taxable compensation from authorised work, such as OPT wages reported on a W-2, and wages exempt under a tax treaty do not count. Because students are usually nonresident aliens for their first five calendar years, married students are generally stuck in the married-filing-separately column, where the Roth income limit starts at zero. Single students with W-2 income can qualify, but check Publication 590-A or a preparer first.",
        },
        {
          question: "What happens to my Roth IRA if I leave the US?",
          answer:
            "The account can usually stay open, though some custodians restrict or close accounts for non-US residents, so ask before you leave. New contributions stop once you no longer have taxable US compensation. Under US rules your contributions can be withdrawn tax- and penalty-free at any time, but your new country may not recognise the Roth’s tax-free status, so check the treaty and local rules before relying on it.",
        },
        {
          question: "Should I choose a Roth or traditional IRA if I might leave the US?",
          answer:
            "It depends on your tax rate now, your likely rate later, and how your destination country treats each account. The Roth’s advantage for someone who may leave is flexibility: contributions come back at any time with no US tax or penalty. Its risk is paying US tax now for a tax-free status another country may not honour. Capture your 401(k) match first, then decide with those two facts in view.",
        },
      ]}
    >
      <h2>The short answer</h2>
      <p>
        Nothing in the IRS rules for a Roth IRA asks about citizenship, a green
        card or a visa. The rules ask about two things: whether you have
        taxable compensation from work, and whether your income is under the
        limit for your filing status. An H-1B worker paid a US salary on a W-2
        has the first. Whether you clear the second depends on your salary and
        filing status, and the IRS publishes the current limits on its Roth IRA
        page each year. If both are true, you can open and fund a Roth IRA like
        anyone else. The complications are about tax residency and about what
        happens if you leave, not about permission.
      </p>

      <h2>The eligibility rules, in order</h2>
      <ul>
        <li>
          <strong>Taxable compensation.</strong> Wages, salaries, bonuses and
          other pay for personal services count. Investment income, rental
          income and amounts you exclude from income — treaty-exempt wages, for
          example — do not. Your total IRA contributions for a year cannot
          exceed your taxable compensation for that year.
        </li>
        <li>
          <strong>Income under the current IRS limit.</strong> The Roth limit is
          based on modified adjusted gross income and filing status. It phases
          out over a range: full contribution below the range, a reduced
          contribution inside it, nothing above. The figures change every year,
          so check the IRS page rather than a blog post.
        </li>
        <li>
          <strong>One combined limit.</strong> The annual contribution limit is
          shared between all your traditional and Roth IRAs. It is separate
          from your 401(k) limit.
        </li>
        <li>
          <strong>No age limit.</strong> You can contribute at any age as long as
          you have compensation.
        </li>
        <li>
          <strong>Deadline.</strong> Contributions for a year can be made until
          the due date of that year’s return, not counting extensions.
        </li>
      </ul>

      <h2>The residency wrinkle</h2>
      <p>
        Here is where visa holders need to read more carefully than the average
        guide suggests. Roth eligibility is measured on your US tax return, so
        it matters which return you file. If you are a{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident alien
        </Link>{" "}
        filing Form 1040 — which most H-1B and L-1 workers are after roughly
        six months in the country — the rules work exactly as written above.
      </p>
      <p>
        If you are a nonresident alien filing Form 1040-NR, two things bite.
        First, only compensation that is taxable in the US counts, so wages
        excluded under a tax treaty are not compensation for IRA purposes.
        Second, filing status: a nonresident alien generally cannot file a joint
        return unless married to a US citizen or resident who elects to treat
        them as a resident, so a married nonresident lands in the married
        filing separately column. For a Roth IRA, married filing separately
        while living with your spouse at any point in the year means the income
        phase-out starts at zero and disappears at a very low figure — in
        practice, no direct contribution. If you did not live with your spouse
        at any time during the year, the IRS treats you as single for this
        purpose, and the single limits apply.
      </p>
      <Callout tone="warning" title="Common F-1 and first-year trap">
        F-1 students are nonresident aliens for their first five calendar years,
        and many first-year H-1B arrivals are nonresidents until they pass the
        substantial presence test. A single nonresident with W-2 wages can
        contribute; a married one usually cannot. If you are unsure of your
        status, use the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>{" "}
        before you fund an account — excess contributions carry a penalty every
        year they stay in.
      </Callout>

      <h2>Roth vs traditional if you might leave</h2>
      <p>
        A <strong>traditional IRA</strong> may give you a deduction now, and
        every dollar withdrawn later is taxed as income, with a 10% additional
        tax before 59½ unless an exception applies. If you take that money out
        after leaving the US as a nonresident alien, the custodian generally
        withholds 30% unless a treaty reduces it, and you reconcile on Form
        1040-NR — the same mechanics as a{" "}
        <Link
          href="/investing/401k-if-you-leave"
          className="font-semibold text-accent hover:underline"
        >
          401(k) distribution after you leave
        </Link>
        .
      </p>
      <p>
        A <strong>Roth IRA</strong> gives no deduction; you pay tax on the
        salary first and contribute what is left. In return, qualified
        withdrawals — after the account has been open five tax years and you
        are 59½, or on death, disability or a first-home purchase — are
        entirely tax-free under US law. More useful for someone who may leave:
        the IRS ordering rules treat any withdrawal as coming from your regular
        contributions first, and those come back with no tax and no penalty at
        any time, at any age, for any reason. Only the earnings, which come out
        last, are exposed to tax and the 10% additional tax if taken early.
      </p>
      <p>
        That flexibility is the Roth’s case for temporary workers. Its risk is
        the mirror image: you are paying US tax now to buy tax-free growth that
        only US law promises. Whether your eventual country of residence honours
        it is a separate question, covered below.
      </p>

      <h2>The backdoor Roth, briefly</h2>
      <p>
        High earners above the Roth income limit sometimes use a two-step
        route: contribute to a traditional IRA without taking a deduction, then
        convert that balance to a Roth IRA. Conversions are not subject to the
        income limit that applies to direct contributions. The catch is that a
        conversion is taxed on its pre-tax portion, and the IRS looks at all
        your traditional IRA balances together when working out that portion —
        so if you have already rolled an old pre-tax 401(k) into an IRA, part of
        the conversion is taxable. The nondeductible contribution and the
        conversion are both reported on Form 8606. The mechanics are
        legitimate and well documented, but sequencing errors are easy to make
        and hard to unwind, which is a reason to have a preparer check your
        first one.
      </p>

      <h2>What happens if you leave the US</h2>
      <p>
        <strong>The account can usually stay open.</strong> This is a custodian
        policy, not an IRS rule. Some firms will hold an IRA for a non-US
        resident indefinitely; some restrict trading to selling; a few close
        accounts when the address changes. Ask yours in writing before you leave
        and, if the answer is unsatisfactory, transfer the IRA to a custodian
        that will while you still have a US address.
      </p>
      <p>
        <strong>Contributions stop.</strong> A Roth IRA needs taxable
        compensation from work that is subject to US tax. Once you are earning
        abroad as a nonresident alien, you have none, and excluded foreign
        earnings do not count even for a US resident abroad. Your last eligible
        contribution is for the year you still had US wages, and you can make
        it up to that year’s filing deadline.
      </p>
      <p>
        <strong>Your home country may not recognise the Roth.</strong> This is
        the part most guides skip. “Tax-free” is a US concept. Many countries
        tax their residents on worldwide income and have no category for a
        Roth IRA, so they may treat the growth or the withdrawals as ordinary
        taxable income — meaning you paid US tax on the way in and pay local tax
        on the way out. A few tax treaties protect the tax status of pension
        arrangements in the other country; many say nothing about Roth accounts
        specifically. The treaty position varies by country and changes, so
        this is a question for an adviser in your destination country, asked
        before you leave rather than after.
      </p>

      <h2>The 401(k) match comes first</h2>
      <p>
        If your employer matches 401(k) contributions, contribute at least
        enough to capture the full match before you fund any IRA. The match is
        an immediate return that no account type or fund can match, and it
        does not depend on any of the eligibility questions above. Once the
        match is captured, the IRA decision follows. The one thing to check on
        the 401(k) side is vesting: matched money that has not vested is
        forfeited if you leave early, which the{" "}
        <Link
          href="/visa-guides/h1b"
          className="font-semibold text-accent hover:underline"
        >
          H-1B financial guide
        </Link>{" "}
        covers as part of the first-year checklist.
      </p>

      <h2>A simple decision list</h2>
      <ol>
        <li>
          Confirm your tax residency for the year. Resident alien on Form 1040:
          proceed. Nonresident alien: check filing status and treaty-exempt
          income before going further.
        </li>
        <li>
          Confirm you have taxable US compensation and that your modified AGI
          is under the current IRS limit for your filing status.
        </li>
        <li>
          Capture the full 401(k) match first. Then decide how much of the IRA
          limit you can fund.
        </li>
        <li>
          Ask the custodian, in writing, what happens to the account if you
          move abroad.
        </li>
        <li>
          If leaving is likely, weigh the Roth’s any-time access to
          contributions against the chance your destination country taxes the
          growth anyway.
        </li>
        <li>
          Keep records of every contribution by year. They are your tax-free
          basis, and you will need them for Form 8606 or a later withdrawal.
        </li>
      </ol>

      <h2>Other guides on this site</h2>
      <p>
        This page covers one account. These place it in context:
      </p>
      <ul>
        <li>
          <Link
            href="/investing/on-a-visa"
            className="font-semibold text-accent hover:underline"
          >
            Investing on a visa
          </Link>{" "}
          — what is allowed, and how tax residency decides what you owe.
        </li>
        <li>
          <Link
            href="/investing/401k-if-you-leave"
            className="font-semibold text-accent hover:underline"
          >
            What happens to your 401(k) if you leave the US
          </Link>{" "}
          — the four options and how each is taxed after departure.
        </li>
        <li>
          <Link
            href="/taxes/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B taxes explained
          </Link>{" "}
          — withholding, FICA and state tax, which set the income the Roth
          limit is measured against.
        </li>
      </ul>
    </GuideLayout>
  );
}

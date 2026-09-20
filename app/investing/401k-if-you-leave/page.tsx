import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/investing/401k-if-you-leave";
const TITLE = "What Happens to Your 401(k) If You Leave the US";
const DESCRIPTION =
  "What happens to your 401(k) if you leave the US on H-1B or L-1: leave it, roll it to an IRA, or cash out — the tax, withholding and timing that set the cost.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function FourOhOneKIfYouLeavePage() {
  return (
    <GuideLayout
      eyebrow="Investing"
      title="What happens to your 401(k) if you leave the US"
      description="Four options, one expensive default. How each is taxed once you are a nonresident alien, why the year you take the money matters, and the paperwork to finish before your flight."
      path={PATH}
      crumbs={[
        { name: "Investing", path: "/investing" },
        { name: "401(k) if you leave the US", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Rollovers of retirement plan and IRA distributions",
          href: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions",
        },
        {
          label: "IRS — Retirement topics: Termination of employment",
          href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-termination-of-employment",
        },
        {
          label: "IRS Topic 558 — Additional tax on early distributions",
          href: "https://www.irs.gov/taxtopics/tc558",
        },
        {
          label: "IRS — Retirement topics: Vesting",
          href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-vesting",
        },
        {
          label:
            "IRS Publication 515 — Withholding of Tax on Nonresident Aliens (pensions and annuities)",
          href: "https://www.irs.gov/publications/p515",
        },
      ]}
      faqs={[
        {
          question: "Can I withdraw my 401(k) if I leave the US on an H-1B?",
          answer:
            "Yes. Leaving your employer makes you eligible to take the vested balance as a distribution. The taxable portion is ordinary income, there is generally a 10% additional tax if you are under 59½, and the plan withholds tax up front — 20% while you are a US resident, or generally 30% under nonresident rules once you have moved and filed a W-8BEN. You do not have to withdraw; you can also leave the money in the plan or roll it to an IRA.",
        },
        {
          question: "Do I have to close my 401(k) when my visa ends?",
          answer:
            "No. Your visa status has nothing to do with your right to keep a 401(k) or IRA. The balance stays yours and keeps its tax deferral for as long as the plan or custodian is willing to hold it for a non-US resident. Plans can force out small balances, so ask about the plan’s threshold, and keep your address current so statements and tax forms reach you.",
        },
        {
          question: "How much tax will I pay if I cash out my 401(k) after leaving the US?",
          answer:
            "As a nonresident alien, the plan generally withholds 30% of the US-source taxable amount unless you file a W-8BEN claiming a lower treaty rate, and the 10% additional tax applies if you are under 59½. The withholding is a prepayment, not the final bill: you file Form 1040-NR for that year and the actual tax depends on your other US income and how the distribution is characterised. Many people find the year after departure is cheaper than the departure year.",
        },
        {
          question: "Can I roll my 401(k) into an IRA if I live abroad?",
          answer:
            "Often, but not everywhere. A direct rollover keeps the money invested and tax-deferred with no withholding. The obstacle is that some IRA custodians will not open or maintain accounts for non-US residents. Open the IRA and confirm the custodian’s policy in writing while you still have a US address, then request the rollover before you leave.",
        },
      ]}
    >
      <h2>Start with what is actually yours</h2>
      <p>
        Your own contributions to a 401(k) — the money deducted from your
        salary — are always 100% yours. Employer contributions, including the
        match, may vest on a schedule set by the plan: some vest immediately,
        some fully after a fixed number of years, some in steps. Whatever has
        not vested on your last day is forfeited when you leave. Before you
        decide anything else, get a statement showing your vested balance and
        check whether your planned departure date sits just short of a vesting
        date. A few weeks can be worth a year of match.
      </p>

      <h2>The four options</h2>
      <p>
        Once you leave your employer you can do one of four things with the
        vested balance, and your visa status has no bearing on which:
      </p>
      <ul>
        <li>
          <strong>Leave it in the plan.</strong> Nothing changes except that
          contributions stop.
        </li>
        <li>
          <strong>Roll it to an IRA.</strong> The money moves to an account you
          control and stays tax-deferred.
        </li>
        <li>
          <strong>Cash it out.</strong> The plan pays you, less withholding, and
          you owe tax on the taxable portion.
        </li>
        <li>
          <strong>A combination.</strong> For example, roll most of it over and
          take a smaller distribution in a low-income year.
        </li>
      </ul>
      <p>
        You can also roll into a new employer’s plan, but for someone leaving
        the US that usually means a plan in another country, which US plans do
        not transfer into. So in practice the choice is between the four above.
      </p>

      <h2>Leaving it in the plan, or rolling it to an IRA</h2>
      <p>
        <strong>Leaving it</strong> is the simplest option and keeps every tax
        advantage. The downsides are practical: you are limited to the plan’s
        investment menu, you must keep the plan informed of your address for the
        rest of the account’s life, and some plan administrators handle foreign
        addresses badly. Plans can also force out small balances. If your
        vested balance is below the plan’s small-balance threshold, the plan
        can pay it out or roll it into an IRA of its choosing without waiting
        for your consent, so ask what the threshold is before you assume the
        account will sit quietly.
      </p>
      <p>
        <strong>Rolling to an IRA</strong> keeps the money invested and
        tax-deferred, gives you a wider choice of investments, lets you combine
        several old plans into one account, and puts you in charge of the
        paperwork rather than a former employer’s HR department. Ask for a{" "}
        <strong>direct rollover</strong>: the plan pays the IRA custodian, no
        tax is withheld and nothing is taxable. If instead the plan pays you and
        you deposit the money yourself, the plan must withhold 20%, and you have
        60 days to put the full pre-withholding amount into the IRA — making up
        the withheld 20% from your own pocket — or the shortfall is treated as a
        taxable distribution.
      </p>
      <p>
        The caveat that matters most for visa holders: some IRA custodians will
        not open, or will restrict, accounts for people who do not live in the
        US. Open the IRA and get the custodian’s non-resident policy in writing
        while you still have a US address, then request the rollover before you
        leave.
      </p>

      <h2>Cashing out</h2>
      <p>
        A cash-out is a distribution paid to you. The taxable portion — all of a
        pre-tax 401(k) — is added to your ordinary income for the year. If you
        are under 59½ there is generally a 10% additional tax on top; the main
        exception is leaving your job in or after the year you turn 55. And the
        plan must withhold 20% federal tax from an eligible rollover
        distribution paid to you while you are a US resident, even if you tell
        them you plan to roll it over later.
      </p>
      <Callout tone="warning" title="20% withheld is not the tax bill">
        Withholding is a deposit. If you cash out a pre-tax 401(k) in a year
        when you also earned a full H-1B salary, the distribution stacks on top
        of that salary at your highest marginal rate, plus the 10% additional
        tax, plus state tax where it applies. The true cost can be well above
        what the plan withheld, and the balance comes due when you file.
      </Callout>

      <h2>How a distribution is taxed once you are a nonresident alien</h2>
      <p>
        If you take the money after you have left and become a nonresident
        alien for tax purposes, a different withholding regime applies. Once
        the plan has your{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          nonresident status
        </Link>{" "}
        on file, it generally withholds a flat 30% on the US-source portion of
        the distribution instead of the domestic 20%, unless you provide Form
        W-8BEN claiming a lower rate under a tax treaty. Many treaties reduce or
        exempt periodic pension payments, but a number of them carve out
        lump-sum payments, so read the pension article of your treaty rather
        than assuming. The 10% additional tax still applies if you are under
        59½.
      </p>
      <p>
        The withholding is still a prepayment. You file Form 1040-NR for that
        year to report the distribution and settle up, and the plan sends you a
        Form 1042-S showing what it paid and withheld. How the distribution is
        characterised on that return matters: money earned for work you did in
        the US can be reported as income connected with that work and taxed at
        the graduated rates, while some payers and preparers treat it as
        flat-rate income at 30%. In a year with little other US income, the
        final tax under the graduated rates can be lower than the amount
        withheld, and the difference comes back as a refund. This is one of the
        places a cross-border preparer earns their fee.
      </p>

      <h2>Timing, and state tax on the way out</h2>
      <p>
        Because the tax is progressive and the withholding is a flat estimate,
        the <strong>year</strong> you take a distribution changes the cost more
        than almost anything else. Cashing out in your departure year, on top
        of a full salary, is usually the most expensive choice available. Waiting
        until the following year, when you may have no other US income, can
        move the same distribution into far lower brackets. Against that, weigh
        the plan’s small-balance rules, currency risk, and — often the largest
        factor — how your new country of residence taxes a US retirement
        distribution. Many countries tax residents on worldwide income and may
        or may not credit the US tax withheld, and the answer lives in the
        treaty between the two countries.
      </p>
      <p>
        State tax follows a simple principle: a distribution paid while you are
        still a resident of a state with income tax is taxable there, and the
        plan may withhold state tax based on the address it has on file. A
        federal law generally prevents a state from taxing qualified
        retirement plan income paid to someone who is no longer a resident of
        that state. Two practical consequences: update your address with the
        plan before you request a payment, and do not keep a US address on file
        that you no longer live at — it misstates your residency to the plan
        and to the state.
      </p>
      <p>
        Whatever you decide, the plan needs somewhere to send the money. Most
        plans pay by cheque or by transfer to a US bank account and cannot wire
        to a foreign bank, so keep a US checking account open — some banks
        close accounts when you leave, so ask yours. See the{" "}
        <Link href="/banking" className="font-semibold text-accent hover:underline">
          banking guide
        </Link>{" "}
        for what tends to survive a move.
      </p>

      <h2>If part of your balance is Roth</h2>
      <p>
        A Roth 401(k) balance was funded with after-tax salary, so the rules
        differ. A qualified distribution — after five taxable years of
        participation and reaching 59½ — is entirely tax-free. A distribution
        before that returns your contributions tax-free but taxes the earnings,
        with the 10% additional tax where it applies. Rolling the Roth portion
        to a Roth IRA preserves the tax-free growth, but note that the Roth
        IRA’s own five-year clock applies; the years the money spent in the
        Roth 401(k) do not carry over. Opening a Roth IRA early starts that
        clock, which is covered in the{" "}
        <Link
          href="/investing/h1b-roth-ira"
          className="font-semibold text-accent hover:underline"
        >
          Roth IRA guide
        </Link>
        . Employer match on Roth deferrals usually lands in a pre-tax account,
        so a “Roth” 401(k) often has a taxable half you should not overlook.
      </p>

      <h2>Pre-departure checklist</h2>
      <ol>
        <li>
          Get a statement of your vested balance and confirm the vesting
          schedule against your last day.
        </li>
        <li>
          Decide between leaving, rolling over, cashing out or a combination
          before you leave, while HR can still answer questions.
        </li>
        <li>
          If rolling over, open the IRA while you have a US address and get the
          custodian’s non-resident policy in writing.
        </li>
        <li>
          Request a <strong>direct</strong> rollover, plan to custodian, so
          nothing is withheld.
        </li>
        <li>
          Update your address, phone number and email with the plan, and keep
          a US bank account open for payments.
        </li>
        <li>
          Once you are a nonresident alien, give the plan a W-8BEN and check
          your treaty’s pension article before requesting any distribution.
        </li>
        <li>
          Note the tax year of any distribution and file Form 1040-NR for it,
          keeping the 1099-R or 1042-S the plan sends.
        </li>
        <li>
          Find out how your destination country taxes US retirement
          distributions before, not after, the money moves.
        </li>
      </ol>

      <h2>Other guides on this site</h2>
      <p>
        This page covers the retirement account. These cover the rest of the
        picture:
      </p>
      <ul>
        <li>
          <Link
            href="/investing/on-a-visa"
            className="font-semibold text-accent hover:underline"
          >
            Investing on a visa
          </Link>{" "}
          — what is allowed, what a brokerage asks for, and how tax residency
          changes the answer.
        </li>
        <li>
          <Link
            href="/investing/h1b-roth-ira"
            className="font-semibold text-accent hover:underline"
          >
            Roth IRA on an H-1B
          </Link>{" "}
          — eligibility, and why the Roth’s flexibility suits people who may
          leave.
        </li>
        <li>
          <Link
            href="/taxes/resident-vs-nonresident"
            className="font-semibold text-accent hover:underline"
          >
            Resident vs nonresident for tax purposes
          </Link>{" "}
          — the status that decides which withholding regime applies to you.
        </li>
      </ul>
    </GuideLayout>
  );
}

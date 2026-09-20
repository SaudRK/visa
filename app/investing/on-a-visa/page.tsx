import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/investing/on-a-visa";
const TITLE = "Can H-1B & F-1 Visa Holders Invest in Stocks?";
const DESCRIPTION =
  "Can H-1B or F-1 visa holders invest in stocks? Why permission and tax are separate questions, where active trading gets risky, and how nonresident tax works.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function InvestingOnAVisaPage() {
  return (
    <GuideLayout
      eyebrow="Investing"
      title="Investing on a visa: what is allowed, and what is taxed"
      description="Buying and holding investments is not employment. The real questions are what your brokerage will ask for, how your tax residency changes the bill, and where frequent trading starts to look like a job."
      path={PATH}
      crumbs={[
        { name: "Investing", path: "/investing" },
        { name: "Investing on a visa", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Taxation of Nonresident Aliens",
          href: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens",
        },
        {
          label:
            "IRS — Taxation of capital gains of nonresident alien students, scholars and employees of foreign governments",
          href: "https://www.irs.gov/individuals/international-taxpayers/the-taxation-of-capital-gains-of-nonresident-alien-students-scholars-and-employees-of-foreign-governments",
        },
        {
          label: "IRS Publication 519 — U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/publications/p519",
        },
        {
          label: "IRS Form W-8BEN — Certificate of Foreign Status",
          href: "https://www.irs.gov/forms-pubs/about-form-w-8-ben",
        },
        {
          label: "USCIS — Students and Employment (F-1)",
          href: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment",
        },
      ]}
      faqs={[
        {
          question: "Can H-1B holders invest in stocks?",
          answer:
            "Yes. Buying and holding stocks, ETFs and mutual funds, and contributing to a 401(k) or IRA, is ownership rather than employment, so it does not conflict with H-1B status. You will need an SSN or ITIN and a US address to open a brokerage account, and your dividends and gains are taxed according to whether you are a resident or nonresident alien for the year.",
        },
        {
          question: "Can F-1 students invest in stocks?",
          answer:
            "Passive investing is generally fine on F-1 because it is not work. Students in their first five calendar years are usually nonresident aliens for tax purposes, so the brokerage will ask for Form W-8BEN and will withhold tax on dividends at 30% or a treaty rate. Frequent, business-like trading is a grey area because unauthorised employment ends F-1 status, so keep it passive or ask an immigration attorney first.",
        },
        {
          question: "Can I day trade on an H-1B?",
          answer:
            "There is no USCIS rule that names a number of trades or a dollar amount. Occasional buying and selling of your own money is investing. Trading all day, every day, as your main occupation starts to look like self-employment, which an H-1B does not authorise. If your activity is frequent enough that you would call it day trading, get advice from an immigration attorney before you scale it up.",
        },
        {
          question: "Do nonresident aliens pay US tax on stock gains?",
          answer:
            "It depends on days of presence. If you were in the US fewer than 183 days in the year, gains on US stocks are generally exempt. If you were present 183 days or more, net US-source capital gains are taxed at a flat 30% or a lower treaty rate. That count includes days that are excluded from the substantial presence test, so a full-year F-1 student can be a nonresident alien and still meet it.",
        },
      ]}
    >
      <h2>Two separate questions: permission and tax</h2>
      <p>
        “Can I invest on a visa?” is really two questions, and blending them is
        where most of the confusion comes from. The first is an immigration
        question: does buying and holding investments count as work you are not
        authorised to do? The second is a tax question: how does the IRS treat
        your dividends and gains, and what will your brokerage withhold? The
        answers come from different rulebooks. Your visa category decides the
        first; your tax residency decides the second, and the two are related
        but not the same thing. This guide takes them one at a time.
      </p>

      <h2>Passive investing is not employment</h2>
      <p>
        US immigration law restricts employment — working for pay — not owning
        assets. Buying stocks, ETFs or mutual funds, holding them, collecting
        dividends and interest, and contributing to a 401(k) or an IRA is
        ownership, not labour. That is why H-1B, L-1, TN and F-1 holders
        routinely open brokerage accounts and enrol in employer retirement plans
        without creating an immigration problem. An{" "}
        <Link href="/visas/work/h1b" className="font-semibold text-accent hover:underline">
          H-1B
        </Link>{" "}
        ties you to a specific employer for the work you do. It says nothing
        about where you put the salary that employer pays you.
      </p>
      <p>
        The same logic covers interest on a savings account, gains when you
        eventually sell, and dividends that arrive while you hold. None of it
        requires work authorisation, because none of it is a job.
      </p>

      <h2>Where the line is</h2>
      <p>
        The line is activity that starts to look like running a business rather
        than managing your own savings. Trading many times a day, every day, as
        your primary occupation; trading other people’s money; building a
        trading operation with paying clients or a registered entity — any of
        these can be characterised as self-employment, and self-employment is
        not authorised on an H-1B, an L-1 or an F-1 without separate
        permission.
      </p>
      <p>
        The honest answer about where exactly that line sits is that USCIS has
        never published one. There is no trade count, no dollar threshold and no
        bright-line test separating “investing” from “unauthorised work”. The
        USCIS page on F-1 employment lists the categories of authorised work
        and does not mention investing at all. So the practical rule is this: if
        your activity is frequent enough that you would describe it as day
        trading, or you are tempted to treat it as your job, talk to an
        immigration attorney before you scale it up, not after.
      </p>
      <Callout tone="warning" title="F-1 students have the most to lose">
        On F-1, off-campus work must be authorised before it starts, and
        unauthorised employment is a status violation that can end your program
        and follow you into future applications. A student who buys and holds
        index funds is on solid ground. A student who trades full time from a
        dorm room is in a grey area with a severe downside. When in doubt, keep
        it passive.
      </Callout>

      <h2>What a brokerage will ask for</h2>
      <p>
        Opening an account is a compliance exercise for the firm. FINRA rules
        require a brokerage to verify your identity and collect your Social
        Security number or other taxpayer identification number, your address,
        your employment details, and enough about your finances and goals to
        judge what is suitable for you. In practice, expect to be asked for:
      </p>
      <ul>
        <li>
          A Social Security number, or an{" "}
          <Link href="/taxes/itin" className="font-semibold text-accent hover:underline">
            ITIN
          </Link>{" "}
          if you are not eligible for an SSN. Some firms will not open an
          account on an ITIN alone, so ask first.
        </li>
        <li>
          A US residential address and a government-issued photo ID. A passport
          is fine; a state ID or driver’s licence also works.
        </li>
        <li>
          Your visa status, and at some firms a copy of the visa or your I-94
          record.
        </li>
        <li>
          A tax certification: Form W-9 if you are a resident alien for tax
          purposes, or Form W-8BEN if you are a nonresident alien.
        </li>
      </ul>
      <p>
        That last item trips people up because the W-9 or W-8BEN choice is not
        about your visa; it is about your tax residency. A first- or second-year
        F-1 student is usually a nonresident alien, because days spent as a
        student do not count toward the substantial presence test for five
        calendar years — which is exactly why students are so often asked for a
        W-8BEN. Most H-1B and L-1 workers meet the substantial presence test
        after roughly six months in the country and sign a W-9. Some brokerages
        only open accounts for W-9 customers; others handle both but with
        different products. Check before you start the application rather than
        after it is rejected.
      </p>

      <h2>Tax follows tax residency, not visa type</h2>
      <p>
        Once your money is invested, how it is taxed depends on whether the IRS
        treats you as a resident alien or a nonresident alien for that year.
        Work that out first with the{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident guide
        </Link>{" "}
        or the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>
        .
      </p>
      <p>
        <strong>If you are a resident alien</strong>, you are taxed like a
        citizen: worldwide income, dividends and capital gains reported on Form
        1040, with the same qualified-dividend and long-term capital gains
        treatment anyone else gets. Your brokerage sends you 1099 forms.
      </p>
      <p>
        <strong>If you are a nonresident alien</strong>, two rules do most of
        the work. US-source dividends are generally taxed at a flat 30%, or a
        lower rate if a tax treaty between the US and your country provides one,
        and the brokerage withholds that tax at source based on the W-8BEN you
        filed. Capital gains on US stocks are generally exempt if you were in the
        US for fewer than 183 days during the year. If you were present 183 days
        or more, your net US-source capital gains are taxed at 30% or the lower
        treaty rate, and you report them on Schedule NEC of Form 1040-NR.
      </p>
      <p>
        The catch is that this 183-day count is not the substantial presence
        test. It counts actual days, including days that the substantial
        presence test excludes. An F-1 student who spends the whole calendar
        year in the US is a nonresident alien for filing purposes, yet still
        meets the 183-day count for capital gains — the IRS says so explicitly
        for F, J, M and Q students. If you are in that position and expect to
        sell at a gain, factor the 30% in, check your treaty, and expect a Form
        1042-S from the brokerage rather than a 1099.
      </p>

      <h2>Which account: taxable brokerage, 401(k) or IRA</h2>
      <p>
        Three containers hold most people’s investments, and they are taxed
        very differently. An employer <strong>401(k)</strong> takes
        contributions straight from payroll, pre-tax or Roth, and many employers
        add a matching contribution. An <strong>IRA</strong> is one you open
        yourself, traditional or Roth, and it requires taxable compensation from
        work. A <strong>taxable brokerage account</strong> has no contribution
        limit and no special tax treatment, which also makes it the most
        flexible if you leave.
      </p>
      <p>
        The order of priority is not controversial: if your employer matches
        401(k) contributions, capture the full match first. It is an immediate
        return on your money that no fund choice can replicate, and unvested
        match is the only part you can lose by leaving early. After the match,
        the decision between an IRA and a taxable account depends mostly on how
        long you expect to stay — which is the subject of the{" "}
        <Link
          href="/investing/h1b-roth-ira"
          className="font-semibold text-accent hover:underline"
        >
          Roth IRA guide
        </Link>
        . This site does not recommend particular investments or firms; it
        explains the mechanics so the questions you ask are the right ones.
      </p>

      <h2>Before you fund anything, ask what happens if you move</h2>
      <p>
        The most expensive mistake visa holders make is not a bad fund. It is
        discovering, the month before a flight home, that their brokerage will
        not deal with a non-US address. Ask these questions in writing before the
        first deposit:
      </p>
      <ol>
        <li>
          Will you keep my account open if I become a non-US resident? Firms
          range from “yes, unchanged” to “sell-only” to “we will close it”.
        </li>
        <li>
          Do you accept a foreign mailing address, and what paperwork changes
          when I switch from a W-9 to a W-8BEN?
        </li>
        <li>
          Can I keep a US bank account linked for withdrawals, and can you pay
          to a foreign bank if I cannot?
        </li>
        <li>
          For a 401(k) or IRA: what are my options at departure, and do you
          maintain IRAs for non-US residents?
        </li>
      </ol>
      <p>
        The retirement-account version of this question has enough moving parts
        to need its own page: see{" "}
        <Link
          href="/investing/401k-if-you-leave"
          className="font-semibold text-accent hover:underline"
        >
          what happens to your 401(k) if you leave the US
        </Link>
        .
      </p>

      <h2>If you also invest back home</h2>
      <p>
        Becoming a resident alien makes you a “US person” for reporting
        purposes, and that reaches accounts outside the US. If the combined
        value of your foreign bank, brokerage and mutual fund accounts exceeds
        the FBAR threshold at any point in the year, you must file FinCEN Form
        114 — separately from your tax return, and regardless of whether the
        accounts produced any income. A second regime, FATCA, can require Form
        8938 attached to your return on top of the FBAR. Penalties for missing
        either are severe relative to the effort of filing. Non-US mutual funds
        can also fall under complex US rules for passive foreign investment
        companies, which is a reason many people pause new contributions at
        home once they become US residents. The{" "}
        <Link href="/taxes/fbar" className="font-semibold text-accent hover:underline">
          FBAR guide
        </Link>{" "}
        and the{" "}
        <Link href="/taxes/fatca" className="font-semibold text-accent hover:underline">
          FATCA guide
        </Link>{" "}
        cover who files what.
      </p>

      <h2>Other guides on this site</h2>
      <p>
        This page covers whether and how you can invest. These take the next
        step:
      </p>
      <ul>
        <li>
          <Link
            href="/investing/401k-if-you-leave"
            className="font-semibold text-accent hover:underline"
          >
            What happens to your 401(k) if you leave the US
          </Link>{" "}
          — leave it, roll it over or cash out, and what each costs.
        </li>
        <li>
          <Link
            href="/investing/h1b-roth-ira"
            className="font-semibold text-accent hover:underline"
          >
            Roth IRA on an H-1B
          </Link>{" "}
          — eligibility, the residency wrinkle, and what happens abroad.
        </li>
        <li>
          <Link
            href="/taxes/resident-vs-nonresident"
            className="font-semibold text-accent hover:underline"
          >
            Resident vs nonresident for tax purposes
          </Link>{" "}
          — the status that decides how everything above is taxed.
        </li>
      </ul>
    </GuideLayout>
  );
}

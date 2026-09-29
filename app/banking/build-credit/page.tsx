import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";
import type { Faq } from "@/lib/types";

const PATH = "/banking/build-credit";
const TITLE = "How to Build Credit in the US as an Immigrant";
const DESCRIPTION =
  "A practical sequence for building US credit history from nothing — starter and secured cards, ITIN options, and the mistakes that set people back.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const FAQS: Faq[] = [
  {
    question: "Can I get a credit card with an ITIN?",
    answer:
      "Yes, from some card issuers, credit unions and community banks, although the choice is narrower than with a Social Security number. A secured card is usually the easiest first approval. Before you apply, ask whether the account is reported to all three bureaus under your ITIN — and if you later receive an SSN, have each lender and bureau update your records so the history moves with you.",
  },
  {
    question: "Does my credit history from my home country count in the US?",
    answer:
      "Generally not. The US bureaus hold only what US lenders report, so years of good borrowing abroad do not appear in your file. A few lenders will review a translated foreign report when you apply, which can help you get a first account, but the foreign history itself never becomes part of your US record.",
  },
  {
    question: "Will checking my own credit report lower my score?",
    answer:
      "No. Looking at your own report or score is a soft inquiry, which lenders do not see and scores do not count, however often you do it. Hard inquiries come mainly from applying for new credit. During your first year, checking regularly is the easiest way to confirm your accounts are reporting correctly.",
  },
  {
    question: "Do married couples share a credit score in the US?",
    answer:
      "No. Every person has their own file and their own scores, and marriage does not combine them. A joint account appears on both spouses’ reports, and one spouse can add the other as an authorized user, but a spouse with no accounts in their own name stays invisible to lenders until they open one.",
  },
  {
    question: "What happens to my US credit if I leave the country?",
    answer:
      "It stays in the US, tied to your SSN or ITIN, and does not transfer to your next country. Accounts you keep open and pay continue to report. Debts you leave unpaid do not go away; they can be sent to collections and will still be on your file if you ever come back.",
  },
];

export default function BuildCreditPage() {
  return (
    <GuideLayout
      eyebrow="Banking & credit"
      title="How to build credit in the US as an immigrant"
      description="You can build a usable US credit profile even if you arrived with no local history — if you sequence the first steps carefully and give the file time to age."
      path={PATH}
      crumbs={[
        { name: "Banking & Credit", path: "/banking" },
        { name: "Build credit", path: PATH },
      ]}
      sources={[
        {
          label:
            "AnnualCreditReport.com — the federally authorized source for free credit reports",
          href: "https://www.annualcreditreport.com",
        },
        {
          label:
            "Consumer Financial Protection Bureau — Credit reports and scores",
          href: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/",
        },
        {
          label: "CFPB — How do I get and keep a good credit score?",
          href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-and-keep-a-good-credit-score-en-318/",
        },
        {
          label:
            "CFPB — What are some ways to start or rebuild a good credit history?",
          href: "https://www.consumerfinance.gov/ask-cfpb/what-are-some-ways-to-start-or-rebuild-a-good-credit-history-en-2155/",
        },
        {
          label: "FTC — Free credit reports",
          href: "https://consumer.ftc.gov/articles/free-credit-reports",
        },
        {
          label: "FTC — Credit freezes and fraud alerts",
          href: "https://consumer.ftc.gov/articles/credit-freezes-and-fraud-alerts",
        },
        {
          label: "FTC — IdentityTheft.gov",
          href: "https://www.identitytheft.gov",
        },
        {
          label: "IRS — Individual Taxpayer Identification Number (ITIN)",
          href: "https://www.irs.gov/individuals/individual-taxpayer-identification-number",
        },
      ]}
      faqs={FAQS}
    >
      <h2>Why US credit feels broken at first</h2>
      <p>
        Credit files are local. The US system is built from what US lenders
        report about US accounts, and it has no general way to import what
        happened anywhere else. A strong history abroad usually does not
        transfer, so landlords, card issuers and lenders who check your file on
        day one find little or nothing there. That is not a mark against you —
        it is missing data — but a pricing model treats missing data much like
        risk.
      </p>
      <p>
        The Consumer Financial Protection Bureau calls people with no record at
        the nationwide bureaus “credit invisible.” A file that exists but is too
        new or too sparse to produce a score — one card opened last month, say —
        is usually called a thin file. Almost every newcomer passes through both
        stages.
      </p>
      <p>
        A few lenders will look at a translated credit report from your home
        country when you apply. If that gets you approved, the new account
        reports like any other and starts your US file — but the foreign report
        itself never enters it.
      </p>
      <p>
        The file matters beyond borrowing. Landlords check it before a lease;
        in most states car insurers price partly on a score built from it (see{" "}
        <Link
          href="/insurance/auto"
          className="font-semibold text-accent hover:underline"
        >
          car insurance for new immigrants
        </Link>
        ); and phone carriers and utilities may ask for a deposit when there is
        no file.
      </p>

      <h2>Credit reports, credit scores and the three bureaus</h2>
      <p>
        Three nationwide credit bureaus — <strong>Equifax</strong>,{" "}
        <strong>Experian</strong> and <strong>TransUnion</strong> — collect
        information from lenders and keep a file on each person. Reporting is
        voluntary, and some lenders report to only one or two of them, so your
        three reports are rarely identical.
      </p>
      <p>
        A <strong>credit report</strong> is the record itself: your name,
        addresses and other identifying details; each account, with its limit or
        loan amount, balance and month-by-month payment history; the inquiries
        made when you applied for credit; and collections and certain public
        records such as bankruptcies. It does not contain a score.
      </p>
      <p>
        A <strong>credit score</strong> is a number a scoring model calculates
        from one bureau’s report at one moment. There is no single official
        score. The two most widely used families, FICO and VantageScore,
        commonly run from 300 to 850, higher being better, and each has several
        versions in use — so you can have different scores on the same day
        depending on the bureau and model a lender picks. Build a clean file
        and the scores follow.
      </p>
      <p>
        Files are also individual. Marriage does not merge them, so a spouse who
        arrives with you needs a plan of their own.
      </p>

      <h2>What actually moves a score</h2>
      <p>
        Scoring models weigh each factor differently, but the ingredients are
        consistent. Roughly in order of importance for most models:
      </p>
      <ul>
        <li>
          <strong>Payment history</strong> — whether you pay on time, every
          time. This is the biggest single factor.
        </li>
        <li>
          <strong>Utilization</strong> — how much of your available card limit
          your balances use. A $300 balance on a $1,000 limit is 30%
          utilization. Lower is better; the CFPB passes on the common advice to
          stay at no more than 30% of your total limit.
        </li>
        <li>
          <strong>Length of history</strong> — how long your accounts have been
          open, including your oldest and the average. Your only levers are
          starting early and keeping your first account open.
        </li>
        <li>
          <strong>New credit</strong> — recent applications and newly opened
          accounts. Several in a short period read as risk. Models generally
          treat multiple inquiries for the same car loan or mortgage within a
          short shopping window as one.
        </li>
        <li>
          <strong>Credit mix</strong> — having both revolving accounts (cards)
          and installment loans with fixed payments. A minor factor; never
          borrow just to improve it.
        </li>
      </ul>
      <p>
        Not on the list: your salary, savings, nationality or immigration
        status. A lender may weigh income, and within fair-lending limits your
        status, when deciding on an application, but neither feeds the score.
      </p>

      <h2>Applying with an SSN, an ITIN or neither</h2>
      <p>
        The bureaus do not require a Social Security number to keep a file, but
        most lenders’ application systems are built around one, and it is the
        main key used to match accounts to the right person.
      </p>
      <h3>With an SSN</h3>
      <p>
        If your status allows you to work — H-1B, L-1, O-1 and TN workers,
        dependents with an Employment Authorization Document, and F-1 students
        once they have an on-campus job, CPT or OPT — you are eligible for an
        SSN. Get it first, then apply everywhere with the same full legal name
        and address; inconsistent spellings can lead to split or mixed files.
        The{" "}
        <Link
          href="/visa-guides/h1b"
          className="font-semibold text-accent hover:underline"
        >
          H-1B
        </Link>
        ,{" "}
        <Link
          href="/visa-guides/l1"
          className="font-semibold text-accent hover:underline"
        >
          L-1
        </Link>{" "}
        and{" "}
        <Link
          href="/visa-guides/f1"
          className="font-semibold text-accent hover:underline"
        >
          F-1
        </Link>{" "}
        guides show where credit fits in each first-year plan.
      </p>
      <h3>With an ITIN</h3>
      <p>
        If you cannot get an SSN but file or appear on a US tax return — an H-4
        spouse without work authorization on a joint return is the classic case
        — you may hold an{" "}
        <Link
          href="/taxes/itin"
          className="font-semibold text-accent hover:underline"
        >
          ITIN
        </Link>
        . A lender that reports under your ITIN creates a file, and some card
        issuers, credit unions and community banks accept ITIN applications;
        ask before applying whether the account is reported to the bureaus. If
        you later receive an SSN, the IRS expects you to stop using the ITIN.
        Ask each lender to update your records and contact each bureau so your
        history follows you.
      </p>
      <h3>With neither</h3>
      <p>
        Options narrow sharply. A few newcomer-focused lenders underwrite on a
        passport, visa and US income or bank data; if you try one, ask which
        bureaus it reports to and under what identifier. Otherwise, get
        whichever number you qualify for first, and use the wait to open a bank
        account and save a secured-card deposit.
      </p>

      <h2>A practical sequence</h2>
      <ol>
        <li>
          <strong>Settle your identifier.</strong> Know whether you are using
          an SSN or an ITIN, and use the same one — with the same name spelling
          — on everything.
        </li>
        <li>
          <strong>Open a primary bank account you will keep for 12+
          months.</strong> Bank accounts are not reported to the three bureaus,
          but you need one to pay a card by autopay, and some lenders favor
          existing customers. Our{" "}
          <Link
            href="/banking"
            className="font-semibold text-accent hover:underline"
          >
            banking guide
          </Link>{" "}
          covers opening one without an SSN.
        </li>
        <li>
          <strong>Add one card</strong> — a secured card, or a starter card
          from your own bank if it will approve you. One application, not five.
        </li>
        <li>
          <strong>Use it lightly and pay in full.</strong> Put one small
          recurring bill on it and set autopay for the full statement balance.
        </li>
        <li>
          <strong>Keep utilization low and never miss a due date.</strong> The
          balance reported is usually your statement balance, so pay some of a
          big month off before the statement closes.
        </li>
        <li>
          <strong>Check your reports after about six months</strong> to confirm
          the account appears correctly.
        </li>
        <li>
          <strong>Add a second tradeline between six and twelve months</strong>{" "}
          — a second card or a credit-builder loan. Space applications months
          apart.
        </li>
        <li>
          <strong>Consider rent or alternative reporting</strong> only after
          the basics work.
        </li>
      </ol>

      <Callout tone="info" title="Debit and prepaid cards do not build credit">
        A debit card spends your own money and a prepaid card spends money you
        loaded in advance. Neither involves borrowing, so neither appears on
        your credit report, however responsibly you use it.
      </Callout>

      <h2>The building blocks, explained</h2>
      <h3>Secured credit cards</h3>
      <p>
        You pay a refundable deposit, and the card’s limit is usually set at
        that amount. From there it works like any credit card, and — the whole
        point — the issuer reports your activity to the bureaus. Confirm before
        applying that it reports to all three. Many issuers review secured
        accounts after a stretch of on-time payments and may “graduate” you to
        an unsecured card and return the deposit. Ask up front whether and when
        that happens: graduating keeps the account’s age, which beats closing
        it and starting over. Compare fees, too.
      </p>
      <h3>Starter cards</h3>
      <p>
        Some issuers offer low-limit unsecured cards to thin files, including
        students. No deposit, but a decline still costs a hard inquiry, so use a
        pre-qualification check first if one is offered; many run on a soft
        inquiry that does not affect your score.
      </p>
      <h3>Becoming an authorized user</h3>
      <p>
        Someone with established US credit — a spouse, relative or close friend
        — adds you to their card. You get a card on their account but are not
        legally responsible for the debt; they are. If the issuer reports
        authorized users, the account’s history may appear on your report —
        their on-time payments help you, and their late payments or high
        balances hurt you. Policies are poorly documented, so the account
        holder should ask the issuer whether it reports authorized users to all
        three bureaus. Some lenders give these accounts less weight than ones
        in your own name, so treat this as a boost, not a substitute.
      </p>
      <h3>Credit-builder loans</h3>
      <p>
        Offered mainly by credit unions and community banks, a credit-builder
        loan reverses the usual order. The lender holds the loan amount in a
        locked savings account or certificate while you make fixed monthly
        payments, which are reported to the bureaus. When the loan is paid off,
        you receive the money. It adds an installment account to your file. The
        trade-offs: you pay interest or fees, a missed payment is reported like
        any other, and it only helps if the lender reports — ask to which
        bureaus.
      </p>
      <h3>Rent and utility reporting</h3>
      <p>
        Rent-reporting services — some arranged by landlords, some sold to
        tenants for a fee — send on-time rent payments to one or more bureaus,
        and similar opt-in tools can add utility and phone payments. They can
        help a thin file, but not every scoring model counts this data, it may
        reach only one bureau, and your eventual lender may ignore it. Treat it
        as a supplement. Separately, unpaid rent or utility bills sent to
        collections can land on your report whether or not you signed up.
      </p>

      <h2>How long this actually takes</h2>
      <p>
        Expect roughly six months of reported activity on at least one account
        before most widely used scoring models can produce a score at all. Some
        newer models can score a thinner file sooner, but many lenders still use
        ones that want about six months. Lenders usually report once a month,
        often around the statement date, so the clock starts with your first
        statement.
      </p>
      <p>
        After that, expect one to two years of clean history before you see
        rates that look like the ones advertised to long-term residents. That
        timeline is frustrating but it is also predictable, which means it can
        be planned around — if you know you will need a car loan or a lease in a
        year, the account you open today is the one that gets you there.
        Mortgage lenders look harder still at a short history; the{" "}
        <Link
          href="/visa-guides/green-card"
          className="font-semibold text-accent hover:underline"
        >
          green card guide
        </Link>{" "}
        covers how lenders view permanent residents.
      </p>

      <h2>Check your reports for free</h2>
      <p>
        <strong>AnnualCreditReport.com</strong> is the only website federally
        authorized to provide your free reports from all three bureaus, and
        according to the FTC you can get them there every week. You can also
        order by phone at 1-877-322-8228 or by mail. These are reports, not
        scores. Type the address yourself — look-alike sites exist — and ignore
        any email claiming to be a bureau and asking for your SSN.
      </p>
      <p>
        The request asks for your name, address, SSN and date of birth, plus
        verification questions. If your file was built under an ITIN or is very
        new, the online check may not find you; contact each bureau directly.
      </p>
      <p>
        Look for misspelled names, accounts you do not recognize, late payments
        you did not make, and anything belonging to someone with a similar
        name. Dispute errors with the bureau and with the company that supplied
        the information; the bureau generally has to investigate within 30
        days.
      </p>

      <h2>Credit freezes, fraud alerts and scams</h2>
      <p>
        In your first months your SSN passes through many hands. A{" "}
        <strong>credit freeze</strong> stops anyone, including you, from
        opening new credit in your name. It is free to place and lift, does not
        affect your score, and leaves existing cards working. You place it
        separately at each of the three bureaus and lift it temporarily —
        ideally only at the bureau the lender uses — when you apply for credit,
        rent an apartment or buy insurance.
      </p>
      <p>
        A <strong>fraud alert</strong> is lighter: it tells businesses to verify
        it is you before opening an account. Contact one bureau and it tells the
        other two. An initial alert lasts one year. If someone has used your
        identity, report it at IdentityTheft.gov; with that report or a police
        report you can get an extended alert that lasts seven years.
      </p>

      <Callout tone="alert" title="A “new credit identity” is a scam">
        Offers of a fresh credit file — sometimes sold as a “CPN” or credit
        privacy number — target people with no SSN or a thin file. The FTC
        warns that these schemes often use stolen Social Security numbers or
        employer identification numbers obtained under false pretenses, and
        that applying for credit with a number other than your own can lead to
        fines or prison. A credit repair company also cannot legally charge you
        before it has done the work.
      </Callout>

      <h2>Common mistakes</h2>
      <ul>
        <li>
          <strong>Carrying a balance to “build credit faster.”</strong> It
          usually backfires. Interest adds nothing to your score; paying the
          full statement builds the same history for free.
        </li>
        <li>
          <strong>Opening too many cards in the first month.</strong> Each
          application usually adds a hard inquiry that stays on your report for
          up to two years, and a cluster of new accounts reads as risk.
        </li>
        <li>
          <strong>Missing a payment.</strong> Lenders generally report a payment
          as late once it is 30 days past due, and that late mark can stay on
          your report for up to seven years. Set autopay for at least the
          minimum as a backstop.
        </li>
        <li>
          <strong>Closing your oldest account.</strong> It cuts your available
          credit, which pushes utilization up, and eventually shortens your
          history. If a fee is the problem, ask the issuer whether you can switch
          to a no-fee card on the same account.
        </li>
        <li>
          <strong>Letting your only card sit unused.</strong> Issuers can close
          inactive accounts. A small recurring charge keeps it alive.
        </li>
        <li>
          <strong>Maxing out a low limit.</strong> A $450 statement on a $500
          limit is 90% utilization, even if you pay it in full.
        </li>
      </ul>

      <h2>If you leave the US</h2>
      <p>
        Your US file stays in the US, tied to your SSN or ITIN; it does not
        follow you abroad, any more than your home history followed you here.
        Closed accounts in good standing can remain on your report for years,
        and most negative items for up to seven.
      </p>
      <p>
        If you might come back, a no-fee card with a small recurring charge paid
        automatically from a US bank account keeps the file active. Some
        issuers restrict or close accounts for customers who move abroad, so
        tell yours your plans and ask what it allows. Never walk away from a
        balance: unpaid debt can be sent to collections and will be waiting on
        your file if you return. Moving savings home? Compare the cost of{" "}
        <Link
          href="/send-money"
          className="font-semibold text-accent hover:underline"
        >
          sending money abroad
        </Link>{" "}
        first, and ask the same what-if-I-move question of your{" "}
        <Link
          href="/investing/on-a-visa"
          className="font-semibold text-accent hover:underline"
        >
          investment accounts
        </Link>
        .
      </p>

      <h2>Related reading</h2>
      <ul>
        <li>
          <Link
            href="/banking"
            className="font-semibold text-accent hover:underline"
          >
            Banking and credit for immigrants
          </Link>{" "}
          — accounts, cards, and what comes next.
        </li>
        <li>
          <Link
            href="/taxes/itin"
            className="font-semibold text-accent hover:underline"
          >
            ITIN: what it is and how to apply
          </Link>{" "}
          — the tax number many non-SSN holders build credit under.
        </li>
        <li>
          <Link
            href="/insurance/auto"
            className="font-semibold text-accent hover:underline"
          >
            Car insurance for new immigrants
          </Link>{" "}
          — why a thin credit file raises your premium.
        </li>
      </ul>
    </GuideLayout>
  );
}

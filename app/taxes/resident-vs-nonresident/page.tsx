import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/taxes/resident-vs-nonresident";
const TITLE = "Resident vs Nonresident Alien for Tax Purposes";
const DESCRIPTION =
  "Resident vs nonresident alien for tax purposes: the green card test, the substantial presence test, exempt F-1 and J-1 years, and what changes on your return.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function ResidentVsNonresidentPage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="Resident or nonresident alien? How the IRS decides your tax status"
      description="Your visa does not settle this. Two tests do — and the answer changes which form you file, what income is taxed, and which deductions you get."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "Resident vs nonresident", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Substantial presence test",
          href: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test",
        },
        {
          label: "IRS — U.S. tax residency: green card test",
          href: "https://www.irs.gov/individuals/international-taxpayers/alien-residency-green-card-test",
        },
        {
          label: "IRS — Exempt individual: who is a student (Form 8843)",
          href: "https://www.irs.gov/individuals/international-taxpayers/exempt-individual-who-is-a-student",
        },
        {
          label: "IRS — Closer connection exception to the substantial presence test (Form 8840)",
          href: "https://www.irs.gov/individuals/international-taxpayers/conditions-for-a-closer-connection-to-a-foreign-country",
        },
        {
          label: "IRS Publication 519 — U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/publications/p519",
        },
      ]}
      faqs={[
        {
          question: "Am I a resident alien for tax purposes if I have an H-1B visa?",
          answer:
            "Usually, but not automatically. H-1B holders count every day they are physically in the US toward the substantial presence test, so anyone who arrived before early July and stayed will be a resident for that year, and everyone who stays a full second calendar year will be. If you arrived in the autumn you are a nonresident for that first year unless you make the first-year choice after passing the test the following year.",
        },
        {
          question: "Do F-1 students count days toward the substantial presence test?",
          answer:
            "Not while they are exempt individuals. Days on an F, J, M or Q student visa are excluded until you have been exempt for any part of more than five calendar years, provided you file Form 8843 each year. From the sixth calendar year your days count, and most students become resident aliens that year.",
        },
        {
          question: "Can a nonresident alien file a joint return with a resident spouse?",
          answer:
            "Yes, by election. If one spouse is a US citizen or resident at year end, the couple can attach a signed statement to a joint return choosing to treat the nonresident spouse as a resident for the whole year. Both spouses then report worldwide income for that year and later years until the election ends, and the nonresident spouse needs an SSN or ITIN.",
        },
        {
          question: "What is a dual-status alien?",
          answer:
            "Someone who was a nonresident for part of the tax year and a resident for the rest, which is common in the year you arrive or leave the US. You file the form that matches your status on December 31 and attach the other form as a statement for the remaining months. Dual-status filers cannot take the standard deduction or file jointly unless a spouse election applies.",
        },
      ]}
    >
      <h2>Tax status is not immigration status</h2>
      <p>
        The IRS does not care what your visa is called. For federal income tax,
        every non-citizen is either a <strong>resident alien</strong> or a{" "}
        <strong>nonresident alien</strong>, and the label comes from two
        mechanical tests — the green card test and the substantial presence
        test — not from your I-94. An H-1B worker can be a nonresident in the
        year they arrive. An F-1 student can become a resident in their sixth
        calendar year without changing status. A green card holder living
        abroad stays a resident until the card is formally given up.
      </p>
      <p>
        The default is nonresident. If you are not a US citizen and you meet
        neither test, you are a nonresident alien for that year. That matters
        because the two statuses file different forms, are taxed on different
        income, and get different deductions.
      </p>

      <h2>The green card test</h2>
      <p>
        You are a resident alien for tax purposes if you were a lawful permanent
        resident at any time during the calendar year. Residency under this test
        starts on the first day you are present in the US as a permanent
        resident — the day you enter on an immigrant visa, or the day your
        adjustment of status is approved. It does not end when you move abroad.
        It ends only when you formally abandon the status in writing to USCIS,
        or when it is terminated administratively or by a federal court.
        Letting the physical card expire changes nothing about your tax
        residency.
      </p>

      <h2>The substantial presence test</h2>
      <p>
        If you do not hold a green card, this is the test that decides. You are
        a resident for the year if you were physically present in the US on at
        least:
      </p>
      <ul>
        <li>31 days during the current year, and</li>
        <li>
          183 days over the three-year window made up of the current year and
          the two years before it — counting all of the days you were present
          this year, one-third of the days last year, and one-sixth of the days
          the year before that.
        </li>
      </ul>
      <p>
        Any part of a day in the US counts as a day, with a short list of
        exceptions: days you commute from a home in Canada or Mexico, days in
        transit for under 24 hours, days as a crew member of a foreign vessel,
        days you could not leave because of a medical condition that arose
        here, and days you were an <strong>exempt individual</strong>. That last
        category is where most students and scholars live.
      </p>
      <p>
        Someone who arrives on an H-1B on March 1 and stays passes with room to
        spare — roughly 300 days in the current year alone. Someone who arrives
        on October 1 does not: about 90 days is short of 183, and with no
        earlier US presence to weight in there is nothing to add. Run your own
        dates through the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>{" "}
        before you assume either way.
      </p>

      <h2>Exempt individuals: F, J, M and Q days that do not count</h2>
      <p>
        An exempt individual is not exempt from tax. They are exempt from
        counting days. If you are in the US on an F, J, M or Q visa, some or
        all of your days are excluded from the substantial presence test — for
        a limited number of years.
      </p>
      <ul>
        <li>
          <strong>Students</strong> on F, J, M or Q visas stop being exempt once
          they have been exempt as a student, teacher or trainee for any part of
          more than five calendar years. A year in which you held that status
          for even one day counts as a full year, and years from an earlier stay
          count toward the total. An F-1 who arrives in August 2022 is exempt for
          2022 through 2026; from January 1, 2027 every day counts, and they
          typically become a resident once they cross 183 days that year.
        </li>
        <li>
          <strong>Teachers and trainees</strong> on J or Q visas are not exempt
          in the current year if they were exempt as a teacher, trainee or
          student for any part of two of the six preceding calendar years.
          Publication 519 describes a narrower exception for people whose pay
          came entirely from a foreign employer.
        </li>
      </ul>
      <p>
        Publication 519 extends the same treatment to the immediate family
        members of exempt students and teachers, so an F-2 or J-2 spouse
        follows the principal’s clock. To exclude the days, each person must
        file <strong>Form 8843</strong>, Statement for Exempt Individuals and
        Individuals With a Medical Condition, for every year the exemption is
        claimed — attached to Form 1040-NR if you file one, or mailed on its
        own by the return due date if you have no filing requirement.
      </p>

      <Callout tone="warning" title="Form 8843 is not optional">
        If you do not file Form 8843 on time, the IRS can refuse to exclude your
        exempt days, which can push you past 183 and into resident status for a
        year you thought was clear. File it for every student and dependent in
        the household, including spouses and children with no income.
      </Callout>

      <h2>The closer-connection exception (Form 8840)</h2>
      <p>
        You can pass the substantial presence test and still be treated as a
        nonresident if you were present fewer than 183 days in the current
        year, kept a tax home in a foreign country for the entire year, and had
        a closer connection to that country than to the US — measured by where
        your permanent home, family, belongings, bank accounts, driver’s
        license and voter registration actually are. You claim it on Form 8840,
        Closer Connection Exception Statement for Aliens, filed with your
        return or on its own by the due date. File it late and the exception is
        generally lost for that year.
      </p>
      <p>
        Two things disqualify you outright: 183 or more days in the current
        year, and having an application pending for — or having taken steps
        toward — permanent residence. The IRS lists the specific forms that
        count on its closer-connection page, and an employer’s immigrant
        petition filed on your behalf is one of them. If you are in the green
        card pipeline, this exception is not for you.
      </p>

      <h2>Dual-status years and the first-year choice</h2>
      <p>
        The year you arrive and the year you leave are often{" "}
        <strong>dual-status years</strong>: nonresident for part of the year,
        resident for the rest. Under the substantial presence test your
        residency starts on the first day you are present in the US in the year
        you pass, so an H-1B who lands on March 1 is a nonresident for January
        and February and a resident from March onward.
      </p>
      <p>
        A dual-status return is two returns in one envelope. If you are a
        resident on December 31 you file Form 1040 with a Form 1040-NR attached
        as a statement for the nonresident months; if you are a nonresident on
        December 31, the roles reverse. Dual-status filers cannot take the
        standard deduction, cannot use head-of-household rates, and cannot file
        jointly unless married to a US citizen or resident who elects to treat
        them as a resident for the full year.
      </p>
      <p>
        If you arrive late in the year and fall short of 183 days, the{" "}
        <strong>first-year choice</strong> lets you elect to be a resident from
        your arrival date anyway — provided you were present for at least 31
        consecutive days, were present for at least 75 percent of the days from
        the start of that period to the end of the year, and go on to pass the
        substantial presence test the following year. Because the election is
        only valid once you have passed the test in year two, people who use it
        often request an extension for the year-one return rather than file as a
        nonresident and amend later. It is worth the effort when it opens the
        door to a joint return.
      </p>

      <h2>What actually changes when you are a resident</h2>
      <p>These are the differences that move money:</p>
      <ul>
        <li>
          <strong>The form.</strong> Residents file Form 1040. Nonresidents file
          Form 1040-NR.
        </li>
        <li>
          <strong>What income is taxed.</strong> Residents report worldwide
          income — salary, foreign rental income, foreign interest and
          dividends, the gain on a home sold back home — and generally take a
          foreign tax credit for tax already paid abroad. Nonresidents report
          only US-source income: wages and business income at the normal
          graduated rates, and fixed or determinable US-source investment income
          at a flat 30 percent unless a treaty lowers it. Residents also pick up
          the foreign-account reporting duties —{" "}
          <Link
            href="/taxes/fbar"
            className="font-semibold text-accent hover:underline"
          >
            FBAR
          </Link>{" "}
          and{" "}
          <Link
            href="/taxes/fatca"
            className="font-semibold text-accent hover:underline"
          >
            Form 8938
          </Link>{" "}
          — that nonresidents generally do not have.
        </li>
        <li>
          <strong>The standard deduction.</strong> Residents get it.
          Nonresidents cannot claim it, with one treaty exception for students
          and business apprentices from India.
        </li>
        <li>
          <strong>Social Security and Medicare.</strong> Nonresident F-1, J-1,
          M-1 and Q-1 students and exchange visitors are exempt from FICA on
          wages permitted by their status. That exemption ends when they become
          residents, and it never covered H-1B, L-1, TN or O-1 wages, which are
          subject to FICA from the first paycheck regardless of tax residency.
        </li>
        <li>
          <strong>Treaty benefits.</strong> Most treaty exemptions for wages,
          scholarships and student income are written for nonresidents. Once
          you are a resident, the treaty’s saving clause usually switches them
          off, though some student and teacher articles run for a fixed number
          of years regardless.
        </li>
        <li>
          <strong>Filing status.</strong> Nonresidents generally file as single
          or married filing separately and cannot use head of household.
          Residents get the full menu, including married filing jointly.
        </li>
      </ul>
      <p>
        That last point has an escape hatch. If one spouse is a US citizen or
        resident at year end and the other is a nonresident, the couple can
        elect under Internal Revenue Code sections 6013(g) or 6013(h) to treat
        the nonresident spouse as a resident for the whole year. The election is
        made with a signed statement attached to a joint return, requires the
        nonresident spouse to hold an SSN or an{" "}
        <Link
          href="/taxes/itin"
          className="font-semibold text-accent hover:underline"
        >
          ITIN
        </Link>
        , and has a price: both spouses report worldwide income for that year
        and every later year until the election is ended. For a couple whose
        nonresident spouse has little foreign income it usually saves money. For
        a couple with a spouse earning abroad, run both versions before you
        sign.
      </p>

      <h2>Which am I? Two typical cases</h2>
      <p>
        <strong>H-1B, first year.</strong> You arrived from abroad in the spring
        on an H-1B. You count every day from arrival. If you landed before early
        July you will pass 183 days by December 31 and be a resident from your
        arrival date — a dual-status year, with a nonresident stub for the
        months before you came. If you landed in the autumn you are a
        nonresident for the whole year unless you make the first-year choice
        after passing the test next year. From your second full calendar year
        you are simply a resident, and{" "}
        <Link
          href="/taxes/h1b"
          className="font-semibold text-accent hover:underline"
        >
          H-1B taxes
        </Link>{" "}
        work like anyone else’s.
      </p>
      <p>
        <strong>F-1, fifth year.</strong> You arrived in August four years ago,
        so this is your fifth calendar year as an exempt student. None of your
        days this year count. You remain a nonresident, you file Form 1040-NR if
        you have income and Form 8843 either way, and your on-campus or OPT
        wages stay FICA-exempt. On January 1 of next year your days start
        counting, and you will normally become a resident that year with a
        residency start date of the first day you are present — usually January
        1, so there is no dual-status split. If instead you change to H-1B on
        October 1 of this fifth year, you count days from October 1: about 90,
        still short of 183, so you stay a nonresident for the year — with the
        first-year choice available if you want it.
      </p>

      <h2>Other guides on this site</h2>
      <p>
        This page covers the status question. Once you know the answer, one of
        these picks up where it leaves off:
      </p>
      <ul>
        <li>
          <Link
            href="/calculators/substantial-presence"
            className="font-semibold text-accent hover:underline"
          >
            Substantial presence test calculator
          </Link>{" "}
          — enter your days for the last three years and see where you land.
        </li>
        <li>
          <Link
            href="/taxes/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 student taxes
          </Link>{" "}
          — Form 8843, 1040-NR, treaty claims and the FICA exemption in detail.
        </li>
        <li>
          <Link
            href="/taxes/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B taxes explained
          </Link>{" "}
          — withholding, FICA and state tax once you are on payroll.
        </li>
      </ul>
    </GuideLayout>
  );
}

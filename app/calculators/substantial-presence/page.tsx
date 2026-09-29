import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import SubstantialPresenceCalculator from "@/components/calculators/SubstantialPresenceCalculator";

const PATH = "/calculators/substantial-presence";

export const metadata = buildPageMetadata({
  title: "Substantial Presence Test Calculator",
  description:
    "Free substantial presence test calculator for the IRS 183-day rule. Count weighted days across three years to check if you are a US tax resident.",
  path: PATH,
});

export default function SubstantialPresencePage() {
  return (
    <CalculatorShell
      title="Substantial presence test calculator"
      description="Enter days in the U.S. across three years to see a simplified weighted count used in tax residency analysis."
      path={PATH}
      related={[
        {
          href: "/taxes/resident-vs-nonresident",
          label: "Resident vs nonresident alien for tax purposes",
        },
        { href: "/taxes", label: "US taxes for visa holders" },
        { href: "/taxes/f1", label: "F-1 student taxes" },
        { href: "/taxes/h1b", label: "H-1B taxes explained" },
      ]}
      guide={
        <>
          <h2>What the substantial presence test is</h2>
          <p>
            The IRS uses a weighted day count across the current year and the
            two prior years. Meeting the test can mean resident alien tax
            treatment — which often includes worldwide income reporting.
          </p>

          <h2>How the count works</h2>
          <p>
            You meet the test for a calendar year when both of these are true:
          </p>
          <ul>
            <li>
              You were physically present in the United States on at least 31
              days during the current year, and
            </li>
            <li>
              Your weighted total reaches 183 days, counting every day of the
              current year, one third of the days in the year before, and one
              sixth of the days in the year before that.
            </li>
          </ul>
          <p>
            The calculator applies both conditions. As a worked example, 120
            days this year, 240 last year, and 180 the year before gives 120 +
            80 + 30 = 230 weighted days, so the test is met. The same 120 days
            with no earlier presence gives 120, and it is not.
          </p>

          <h2>Days that do not count</h2>
          <p>
            Enter only countable days. The calculator does not remove any of
            these for you:
          </p>
          <ul>
            <li>
              Days as an exempt individual — generally F, J, M, and Q students
              for their first five calendar years, and teachers or trainees on J
              or Q status for two calendar years out of any six
            </li>
            <li>
              Days you commuted to work in the US from a home in Canada or
              Mexico
            </li>
            <li>
              Days in transit between two foreign points when you were in the
              US for less than 24 hours
            </li>
            <li>
              Days you could not leave because of a medical condition that
              arose while you were in the US
            </li>
          </ul>
          <p>
            Exempt students and scholars still file Form 8843 with the IRS to
            claim those days as exempt, even in a year with no income.
          </p>

          <h2>If you meet the test</h2>
          <p>
            You are generally a resident alien for tax purposes for that year,
            reporting worldwide income on Form 1040, and foreign accounts may
            need reporting under{" "}
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
              FATCA
            </Link>
            . If you were present for fewer than 183 days in the current year
            and kept a tax home and closer connection to another country, the
            closer connection exception may still let you be treated as a
            nonresident — claimed on Form 8840. A tax treaty tie-breaker rule
            can also override the result for some people.
          </p>

          <h2>Important caution</h2>
          <p>
            Exempt days, closer connection exceptions, and visa-specific rules
            can change the outcome. Treat this calculator as a learning tool,
            then verify with IRS publications or a qualified tax professional.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does a partial day in the US count as a full day?",
          answer:
            "Generally, yes. Being physically present at any time during a day counts as a day of presence for the test. The main exceptions are regular commuting from Canada or Mexico and transit between two foreign points of less than 24 hours.",
        },
        {
          question:
            "Do F-1 students count their days for the substantial presence test?",
          answer:
            "Not during their exempt years. F-1, J, M, and Q students are generally exempt individuals for their first five calendar years in the United States, so those days are left out of the count. You claim the exemption by filing Form 8843 each year. Once the exempt years run out, your days start counting like anyone else's.",
        },
        {
          question: "What happens if I meet the test partway through the year?",
          answer:
            "Your residency usually starts on the first day you were present in the United States during the year you meet the test, not on the day you cross 183 weighted days. Before that date you are a nonresident, which makes the year a dual-status year with different filing rules for each part.",
        },
        {
          question: "Is the substantial presence test the same as the green card test?",
          answer:
            "No. They are two separate routes to tax residency. A lawful permanent resident is a resident for tax purposes under the green card test regardless of how many days they spend in the United States. The substantial presence test applies to everyone else, including people on work and student visas.",
        },
      ]}
    >
      <SubstantialPresenceCalculator />
    </CalculatorShell>
  );
}

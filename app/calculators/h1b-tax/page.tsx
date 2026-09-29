import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import H1bTaxCalculator from "@/components/calculators/H1bTaxCalculator";

const PATH = "/calculators/h1b-tax";

export const metadata = buildPageMetadata({
  title: "H-1B Tax Calculator: Estimate Take-Home Pay",
  description:
    "Free H-1B tax calculator. Estimate federal tax, state tax, FICA, and your salary after tax in any US state from an offered salary. Runs in your browser.",
  path: PATH,
});

export default function H1bTaxPage() {
  return (
    <CalculatorShell
      title="H-1B tax calculator"
      description="A simplified salary-to-take-home planner for education and budgeting — not a substitute for tax software or a CPA."
      path={PATH}
      related={[
        { href: "/taxes/h1b", label: "H-1B taxes explained" },
        { href: "/visa-guides/h1b", label: "H-1B financial guide" },
        { href: "/visas/work/h1b", label: "H-1B visa requirements" },
        {
          href: "/calculators/substantial-presence",
          label: "Substantial presence test",
        },
      ]}
      guide={
        <>
          <h2>Why H-1B earners use an estimator</h2>
          <p>
            Offer letters show gross salary. Rent, remittances, and savings goals
            depend on net pay after federal tax, state tax, Social Security, and
            Medicare. A rough model helps you plan before your first paycheck.
          </p>
          <p>
            Two things catch new H-1B workers out. The first is Social Security
            and Medicare: if you are moving from F-1 OPT, the exemption you had
            as a nonresident student ends with the change of status, and 7.65%
            of your pay starts going to FICA from the first H-1B paycheck. The
            second is state tax, which varies from nothing at all to a large
            share of your income depending on where the job is — the same
            salary can leave thousands of dollars more or less each year.
          </p>

          <h2>How the estimate is built</h2>
          <ol>
            <li>
              Pre-tax deductions you enter, such as 401(k) contributions, are
              taken off gross salary for income tax.
            </li>
            <li>
              The 2026 standard deduction for your filing status is subtracted
              to reach taxable income.
            </li>
            <li>
              Federal income tax is applied through the 2026 brackets for your
              filing status, then reduced by the Child Tax Credit for each
              dependent.
            </li>
            <li>
              State income tax is a single illustrative rate for the state you
              choose, applied to your wages.
            </li>
            <li>
              Social Security is charged on gross salary up to the 2026 wage
              base, Medicare on all of it, and the 0.9% Additional Medicare Tax
              on wages above its threshold. 401(k) contributions do not reduce
              these.
            </li>
          </ol>
          <p>
            The result shows each tax, your estimated annual and monthly take-home
            pay, and your overall effective rate — the share of gross salary that
            goes to tax of every kind.
          </p>

          <h2>What this tool simplifies</h2>
          <ul>
            <li>
              Assumes the standard deduction — no itemised deductions
            </li>
            <li>Applies illustrative state rates — not every locality</li>
            <li>
              Ignores other credits, the Child Tax Credit income phase-out, AMT,
              city taxes, and treaty nuances
            </li>
            <li>
              Treats every dependent as a child who qualifies for the Child Tax
              Credit
            </li>
            <li>
              Assumes a full year of resident tax treatment — it does not model a
              dual-status arrival year
            </li>
          </ul>

          <h2>Your first H-1B year</h2>
          <p>
            Whether you are taxed as a resident or a nonresident depends on the
            substantial presence test, not on your visa. Most H-1B workers who
            are in the United States for most of the year become residents for
            tax purposes, which means worldwide income is reportable and the
            standard deduction is available. Arriving partway through the year
            can create a dual-status year with different rules for each part.
            Run the{" "}
            <Link
              href="/calculators/substantial-presence"
              className="font-semibold text-accent hover:underline"
            >
              substantial presence test
            </Link>{" "}
            first, and read{" "}
            <Link
              href="/taxes/resident-vs-nonresident"
              className="font-semibold text-accent hover:underline"
            >
              resident vs nonresident alien status
            </Link>{" "}
            if your result is borderline.
          </p>

          <h2>Next step</h2>
          <p>
            After you have pay stubs, compare your withholding to an updated
            projection. If you have equity, multiple states, or dual-status
            years, get personal tax help early.
          </p>
        </>
      }
      faqs={[
        {
          question: "Do H-1B workers pay Social Security and Medicare tax?",
          answer:
            "Yes. H-1B wages are subject to Social Security and Medicare tax in the same way as a US citizen's, whether you are a resident or a nonresident for income tax purposes. The FICA exemption many F-1 students have does not carry over when you change to H-1B status. Whether you can later claim US Social Security benefits depends on the work credits you build and on any totalization agreement between the US and your home country.",
        },
        {
          question: "Are H-1B visa holders taxed as residents or nonresidents?",
          answer:
            "It depends on the substantial presence test. Most H-1B workers who spend the majority of the year in the United States meet it and are taxed as resident aliens, reporting worldwide income on Form 1040. In the year you arrive you may be a dual-status taxpayer, treated as a nonresident before your residency starting date and a resident after it.",
        },
        {
          question: "Why is my paycheck lower than this estimate?",
          answer:
            "Payroll withholding follows the choices on your Form W-4 and the IRS withholding tables, not an annual projection, so the two rarely match exactly. Your paycheck may also include benefit premiums, retirement contributions, city income tax, or state disability insurance that this tool does not model. Compare a few months of pay stubs against a full-year projection before assuming anything is wrong.",
        },
        {
          question: "Does the state I work in change my H-1B take-home pay?",
          answer:
            "Significantly. Several states, including Texas, Washington, and Florida, have no state income tax on wages, while others such as California and New York tax higher earners at substantial rates, and some cities add their own income tax on top. If you are comparing offers in different states, run each one through the calculator rather than comparing gross salaries.",
        },
      ]}
    >
      <H1bTaxCalculator />
    </CalculatorShell>
  );
}

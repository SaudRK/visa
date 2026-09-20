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
          <h2>What this tool simplifies</h2>
          <ul>
            <li>Uses approximate brackets and standard deduction assumptions</li>
            <li>Applies illustrative state rates — not every locality</li>
            <li>Ignores many credits, AMT, city taxes, and treaty nuances</li>
          </ul>
          <h2>Next step</h2>
          <p>
            After you have pay stubs, compare your withholding to an updated
            projection. If you have equity, multiple states, or dual-status
            years, get personal tax help early.
          </p>
        </>
      }
    >
      <H1bTaxCalculator />
    </CalculatorShell>
  );
}

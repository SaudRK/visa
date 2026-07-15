import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import H1bTaxCalculator from "@/components/calculators/H1bTaxCalculator";

export const metadata = buildPageMetadata({
  title: "H-1B Tax Estimator",
  description:
    "Estimate federal tax, state tax, FICA, and take-home pay for H-1B salary planning.",
  path: "/calculators/h1b-tax",
});

export default function H1bTaxPage() {
  return (
    <CalculatorShell
      title="H-1B Tax Estimator"
      description="A simplified salary-to-take-home planner for education and budgeting — not a substitute for tax software or a CPA."
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

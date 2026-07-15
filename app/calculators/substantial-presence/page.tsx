import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import SubstantialPresenceCalculator from "@/components/calculators/SubstantialPresenceCalculator";

export const metadata = buildPageMetadata({
  title: "Substantial Presence Test Calculator",
  description:
    "Apply the IRS substantial presence day-count formula to explore U.S. tax residency.",
  path: "/calculators/substantial-presence",
});

export default function SubstantialPresencePage() {
  return (
    <CalculatorShell
      title="Substantial Presence Test Calculator"
      description="Enter days in the U.S. across three years to see a simplified weighted count used in tax residency analysis."
      guide={
        <>
          <h2>What the substantial presence test is</h2>
          <p>
            The IRS uses a weighted day count across the current year and the
            two prior years. Meeting the test can mean resident alien tax
            treatment — which often includes worldwide income reporting.
          </p>
          <h2>Formula (simplified)</h2>
          <p>
            Current-year days + (1/3 × last year) + (1/6 × two years ago). A
            common threshold is 183 weighted days, with additional current-year
            day requirements.
          </p>
          <h2>Important caution</h2>
          <p>
            Exempt days, closer connection exceptions, and visa-specific rules
            can change the outcome. Treat this calculator as a learning tool,
            then verify with IRS publications or a qualified tax professional.
          </p>
        </>
      }
    >
      <SubstantialPresenceCalculator />
    </CalculatorShell>
  );
}

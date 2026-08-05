import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import SubstantialPresenceCalculator from "@/components/calculators/SubstantialPresenceCalculator";

const PATH = "/calculators/substantial-presence";

export const metadata = buildPageMetadata({
  title: "Substantial Presence Test Calculator",
  description:
    "Free substantial presence test calculator for the 183-day rule. Count weighted days across three years to check US tax residency.",
  path: PATH,
});

export default function SubstantialPresencePage() {
  return (
    <CalculatorShell
      title="Substantial presence test calculator"
      description="Enter days in the U.S. across three years to see a simplified weighted count used in tax residency analysis."
      path={PATH}
      related={[
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

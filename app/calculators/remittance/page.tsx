import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import RemittanceCalculator from "@/components/calculators/RemittanceCalculator";

const PATH = "/calculators/remittance";

export const metadata = buildPageMetadata({
  title: "Remittance Fee Calculator: Compare Transfer Costs",
  description:
    "Free remittance calculator. See the true cost of sending money home from the US once exchange rate markup is counted, not just the flat fee.",
  path: PATH,
});

export default function RemittancePage() {
  return (
    <CalculatorShell
      title="Remittance fee calculator"
      description="Compare educational estimates of flat fees, mid-market FX models, and bank-style transfer costs."
      path={PATH}
      related={[
        { href: "/send-money", label: "Sending money home from the US" },
        { href: "/banking", label: "Banking and credit for immigrants" },
        { href: "/visa-guides/h1b", label: "H-1B financial guide" },
      ]}
      guide={
        <>
          <h2>How to read remittance costs</h2>
          <p>
            The sticker fee is only part of what you pay. Many providers also
            earn money on the exchange rate. A “$0 fee” transfer can still be
            expensive if the FX spread is wide.
          </p>
          <h2>What immigrants usually compare</h2>
          <ul>
            <li>Total cost to send a fixed USD amount</li>
            <li>Speed (minutes vs days)</li>
            <li>Pickup method in the destination country</li>
            <li>Limits, verification, and reliability</li>
          </ul>
          <h2>Practical tip</h2>
          <p>
            Run the same amount across 2–3 apps the day you send. Lock the rate
            only after you confirm recipient details. This calculator uses sample
            models so you can practice comparing fee vs FX — it is not a live
            quote engine.
          </p>
        </>
      }
    >
      <RemittanceCalculator />
    </CalculatorShell>
  );
}

import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import RemittanceCalculator from "@/components/calculators/RemittanceCalculator";

const PATH = "/calculators/remittance";

export const metadata = buildPageMetadata({
  // Kept short: with the " | SettleinUS" suffix the previous title rendered at
  // 62 characters, past where Google truncates.
  title: "Remittance Fee Calculator: Compare Costs",
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

          <h2>How the estimate is built</h2>
          <p>
            Each option is a sample cost model, not a named provider. Its total
            cost is the fixed transfer fee plus an exchange-rate markup — the
            gap between the rate you are given and the mid-market rate,
            expressed as a percentage of the amount you send. Sending $1,000,
            the three models cost:
          </p>
          <ul>
            <li>
              Flat-fee style app: $5 fee + $4 in markup = <strong>$9</strong>
            </li>
            <li>
              Low fee with a wider markup: $3 fee + $12 in markup ={" "}
              <strong>$15</strong>
            </li>
            <li>
              Typical bank transfer: $25 fee + $30 in markup ={" "}
              <strong>$55</strong>
            </li>
          </ul>

          <h2>Why the markup matters more as the amount grows</h2>
          <p>
            A fixed fee shrinks as a share of a larger transfer; a percentage
            markup does not. In these sample models the low-fee option is
            cheaper below about $250 and the flat-fee app is cheaper above it,
            while the bank-style transfer costs the most at every amount. If you
            send money regularly, fewer and larger transfers usually cost less
            than many small ones — as long as the timing works for the people
            you are supporting.
          </p>

          <h2>Finding the mid-market rate</h2>
          <p>
            The mid-market rate is the midpoint between the buy and sell prices
            for a currency on wholesale markets, and it is the fairest benchmark
            for any quote. Currency converters on financial news sites and
            search engines show it. Compare the rate a provider offers with that
            figure on the same day: the difference, multiplied by what you send,
            is what the exchange rate is really costing you.
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
            quote engine. The{" "}
            <Link
              href="/send-money"
              className="font-semibold text-accent hover:underline"
            >
              guide to sending money home
            </Link>{" "}
            covers choosing a provider in more depth.
          </p>
        </>
      }
      faqs={[
        {
          question: "What is an exchange rate markup?",
          answer:
            "It is the difference between the exchange rate a provider gives you and the mid-market rate, which is the midpoint of wholesale buy and sell prices. A provider offering a rate 2% worse than mid-market is charging 2% of your transfer on top of any stated fee, even though that cost never appears as a separate line.",
        },
        {
          question: "Is a zero-fee money transfer really free?",
          answer:
            "Rarely. Providers that advertise no fee usually recover their costs through a wider exchange rate markup. The only reliable comparison is the amount your recipient actually receives for the same number of dollars sent, checked on the same day.",
        },
        {
          question: "Is there a tax on sending money from the US?",
          answer:
            "Since January 2026, a 1% federal excise tax applies to remittance transfers that the sender pays for in cash, by money order, or with a similar physical instrument. Transfers funded from a US bank account or paid with a US-issued debit or credit card are exempt. Separately, large gifts to one person in a year can require a gift tax return from the sender, though tax is rarely actually due.",
        },
        {
          question: "Why does my recipient get less than the calculator shows?",
          answer:
            "The calculator uses sample fee models rather than live quotes. In practice the recipient's bank may charge an incoming transfer fee, the rate can move between quoting and sending, and some routes pass through intermediary banks that take their own deduction. Check the provider's final locked quote, which should state the exact amount to be received.",
        },
      ]}
    >
      <RemittanceCalculator />
    </CalculatorShell>
  );
}

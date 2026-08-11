import type { Fee } from "@/lib/types";
import SectionHeading from "./SectionHeading";
import Callout from "./Callout";

interface FeesTableProps {
  fees: Fee[];
}

export default function FeesTable({ fees }: FeesTableProps) {
  return (
    <section aria-labelledby="fees-heading">
      <SectionHeading
        id="fees-heading"
        eyebrow="What it costs"
        title="Government filing fees"
        description="Amounts can change. Treat these as a planning baseline and confirm on the official fee schedule before you pay."
      />

      {/*
        A ledger, not a boxed table. Rules instead of a container, amounts in
        tabular mono so the column aligns down the page, and the amount
        right-aligned the way a figure column is set in print. The horizontal
        scroll container stays — it is what keeps this readable at 360px.
      */}
      <div className="overflow-x-auto">
        <table className="ledger min-w-[30rem]">
          <thead>
            <tr>
              <th scope="col">Fee</th>
              <th scope="col" className="text-right">
                Amount
              </th>
              <th scope="col">Usually paid by</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.name}>
                <td>
                  <span className="font-medium text-ink">{fee.name}</span>
                  {fee.note ? (
                    <span className="mt-1 block text-[0.88rem] text-muted">
                      {fee.note}
                    </span>
                  ) : null}
                </td>
                <td className="num text-right font-semibold text-ink">
                  {fee.amount}
                </td>
                <td className="capitalize text-muted">{fee.payer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Callout tone="warning" title="Fees change">
          USCIS and State Department fees update periodically. Always verify the
          current amount on the official fee page before payment.
        </Callout>
      </div>
    </section>
  );
}

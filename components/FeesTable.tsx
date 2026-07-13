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

      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead className="border-b border-line bg-surface">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Fee
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Amount
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Usually paid by
              </th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.name} className="border-t border-line align-top">
                <td className="px-4 py-3">
                  <p className="font-medium">{fee.name}</p>
                  {fee.note ? <p className="mt-1 text-muted">{fee.note}</p> : null}
                </td>
                <td className="px-4 py-3 font-semibold">{fee.amount}</td>
                <td className="px-4 py-3 capitalize text-muted">{fee.payer}</td>
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

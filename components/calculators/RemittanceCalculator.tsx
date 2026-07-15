"use client";

import { useMemo, useState, type FormEvent } from "react";

const providers = [
  { id: "flat", name: "Flat-fee style app", fee: 5, fxMarkup: 0.004 },
  { id: "mid", name: "Mid-market FX + low fee", fee: 3, fxMarkup: 0.012 },
  { id: "bank", name: "Typical bank transfer", fee: 25, fxMarkup: 0.03 },
];

export default function RemittanceCalculator() {
  const [amount, setAmount] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const rows = useMemo(() => {
    return providers.map((p) => {
      const fxCost = amount * p.fxMarkup;
      const totalCost = p.fee + fxCost;
      const recipientGets = Math.max(amount - totalCost, 0);
      return { ...p, fxCost, totalCost, recipientGets };
    });
  }, [amount]);

  function calculate(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setShow(true);
      setLoading(false);
    }, 350);
  }

  return (
    <form onSubmit={calculate} className="space-y-5">
      <div>
        <label className="label" htmlFor="amount">
          Amount to send (USD)
        </label>
        <input
          id="amount"
          className="input"
          type="number"
          min={1}
          step={1}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 0)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
        {loading ? "Calculating…" : "Calculate"}
      </button>

      {show ? (
        <div className="result-box space-y-4">
          <p className="font-semibold text-navy">Estimated cost comparison</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted">
                  <th className="py-2 pr-3 font-medium">Option</th>
                  <th className="py-2 pr-3 font-medium">Fee</th>
                  <th className="py-2 pr-3 font-medium">FX estimate</th>
                  <th className="py-2 font-medium">Total cost</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-border/70">
                    <td className="py-3 pr-3 font-medium text-text">{row.name}</td>
                    <td className="py-3 pr-3">${row.fee.toFixed(2)}</td>
                    <td className="py-3 pr-3">${row.fxCost.toFixed(2)}</td>
                    <td className="py-3 font-semibold text-navy">
                      ${row.totalCost.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted">
            These are educational estimates using sample fee models — not live
            quotes from transfer providers. Always check the provider’s final
            locked rate before sending.
          </p>
        </div>
      ) : null}
    </form>
  );
}

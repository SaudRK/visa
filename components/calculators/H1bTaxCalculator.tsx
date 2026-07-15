"use client";

import { useState, type FormEvent } from "react";

const stateRates: Record<string, number> = {
  None: 0,
  California: 0.093,
  NewYork: 0.0685,
  Texas: 0,
  Washington: 0,
  Other: 0.05,
};

export default function H1bTaxCalculator() {
  const [salary, setSalary] = useState(120000);
  const [state, setState] = useState("California");
  const [filing, setFiling] = useState("single");
  const [dependents, setDependents] = useState(0);
  const [pretax, setPretax] = useState(6000);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    gross: number;
    federal: number;
    stateTax: number;
    fica: number;
    net: number;
    monthly: number;
    effective: number;
  }>(null);

  function estimateFederal(taxable: number, status: string) {
    // Simplified 2025-ish single brackets for planning demos only
    const brackets =
      status === "single"
        ? [
            [11600, 0.1],
            [47150, 0.12],
            [100525, 0.22],
            [191950, 0.24],
            [Infinity, 0.32],
          ]
        : [
            [23200, 0.1],
            [94300, 0.12],
            [201050, 0.22],
            [383900, 0.24],
            [Infinity, 0.32],
          ];

    let tax = 0;
    let remaining = Math.max(taxable, 0);
    let prev = 0;
    for (const [limit, rate] of brackets) {
      const chunk = Math.min(remaining, Number(limit) - prev);
      if (chunk <= 0) break;
      tax += chunk * Number(rate);
      remaining -= chunk;
      prev = Number(limit);
      if (remaining <= 0) break;
    }
    return tax;
  }

  function calculate(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      const stdDeduction = filing === "single" ? 15000 : 30000;
      const dependentCreditApprox = dependents * 2000;
      const taxableIncome = Math.max(salary - pretax - stdDeduction, 0);
      const federal = Math.max(
        estimateFederal(taxableIncome, filing) - dependentCreditApprox,
        0
      );
      const stateTax = Math.max(salary - pretax, 0) * (stateRates[state] ?? 0.05);
      const ssWage = Math.min(Math.max(salary - pretax, 0), 176100);
      const fica = ssWage * 0.062 + Math.max(salary - pretax, 0) * 0.0145;
      const net = salary - federal - stateTax - fica;
      setResult({
        gross: salary,
        federal,
        stateTax,
        fica,
        net,
        monthly: net / 12,
        effective: salary > 0 ? ((salary - net) / salary) * 100 : 0,
      });
      setLoading(false);
    }, 350);
  }

  return (
    <form onSubmit={calculate} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="salary">
            Annual gross salary (USD)
          </label>
          <input
            id="salary"
            className="input"
            type="number"
            min={0}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="label" htmlFor="state">
            State of employment
          </label>
          <select
            id="state"
            className="input"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {Object.keys(stateRates).map((s) => (
              <option key={s} value={s}>
                {s === "NewYork" ? "New York" : s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="filing">
            Filing status
          </label>
          <select
            id="filing"
            className="input"
            value={filing}
            onChange={(e) => setFiling(e.target.value)}
          >
            <option value="single">Single</option>
            <option value="joint">Married Filing Jointly</option>
            <option value="separate">Married Filing Separately</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="deps">
            Number of dependents
          </label>
          <select
            id="deps"
            className="input"
            value={dependents}
            onChange={(e) => setDependents(Number(e.target.value))}
          >
            {[0, 1, 2, 3].map((n) => (
              <option key={n} value={n}>
                {n === 3 ? "3+" : n}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="label" htmlFor="pretax">
          Pre-tax deductions (401k / HSA, optional)
        </label>
        <input
          id="pretax"
          className="input"
          type="number"
          min={0}
          value={pretax}
          onChange={(e) => setPretax(Number(e.target.value) || 0)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
        {loading ? "Calculating…" : "Estimate taxes"}
      </button>

      {result ? (
        <div className="result-box grid gap-3 sm:grid-cols-2">
          <Result line="Gross income" value={result.gross} />
          <Result line="Estimated federal tax" value={result.federal} />
          <Result line="Estimated state tax" value={result.stateTax} />
          <Result line="FICA (SS + Medicare)" value={result.fica} />
          <Result line="Estimated net annual take-home" value={result.net} emphasize />
          <Result line="Estimated monthly take-home" value={result.monthly} emphasize />
          <p className="sm:col-span-2 text-sm text-muted">
            Effective tax rate (all-in estimate):{" "}
            <strong className="text-navy">{result.effective.toFixed(1)}%</strong>
          </p>
          <p className="sm:col-span-2 text-sm text-muted">
            This is a simplified educational estimate, not tax advice. Brackets,
            credits, treaties, and state rules can change outcomes significantly.
          </p>
        </div>
      ) : null}
    </form>
  );
}

function Result({
  line,
  value,
  emphasize = false,
}: {
  line: string;
  value: number;
  emphasize?: boolean;
}) {
  return (
    <div>
      <p className="text-sm text-muted">{line}</p>
      <p className={`mt-1 font-semibold ${emphasize ? "text-xl text-navy" : "text-text"}`}>
        ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </p>
    </div>
  );
}

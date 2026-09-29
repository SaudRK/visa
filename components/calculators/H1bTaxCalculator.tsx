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

/*
  Tax year 2026 federal figures, from IRS Rev. Proc. 2025-32 (brackets,
  standard deduction, Child Tax Credit) and the SSA 2026 contribution and
  benefit base. Re-check every autumn when the next year's figures publish,
  and move /calculators/h1b-tax in lib/contentDates.ts when you do — the page
  prints that date as "Rates reviewed".

  Married filing separately is not the joint schedule: its brackets are half
  the joint thresholds and its standard deduction matches single.
*/
type Filing = "single" | "joint" | "separate";

const BRACKETS: Record<Filing, [number, number][]> = {
  single: [
    [12400, 0.1],
    [50400, 0.12],
    [105700, 0.22],
    [201775, 0.24],
    [256225, 0.32],
    [640600, 0.35],
    [Infinity, 0.37],
  ],
  joint: [
    [24800, 0.1],
    [100800, 0.12],
    [211400, 0.22],
    [403550, 0.24],
    [512450, 0.32],
    [768700, 0.35],
    [Infinity, 0.37],
  ],
  separate: [
    [12400, 0.1],
    [50400, 0.12],
    [105700, 0.22],
    [201775, 0.24],
    [256225, 0.32],
    [384350, 0.35],
    [Infinity, 0.37],
  ],
};

const STANDARD_DEDUCTION: Record<Filing, number> = {
  single: 16100,
  joint: 32200,
  separate: 16100,
};

const CHILD_TAX_CREDIT = 2200;
const SOCIAL_SECURITY_WAGE_BASE = 184500;
/** Wages above these owe the 0.9% Additional Medicare Tax (not indexed). */
const ADDITIONAL_MEDICARE_THRESHOLD: Record<Filing, number> = {
  single: 200000,
  joint: 250000,
  separate: 125000,
};

export default function H1bTaxCalculator() {
  const [salary, setSalary] = useState(120000);
  const [state, setState] = useState("California");
  const [filing, setFiling] = useState<Filing>("single");
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

  function estimateFederal(taxable: number, status: Filing) {
    let tax = 0;
    let remaining = Math.max(taxable, 0);
    let prev = 0;
    for (const [limit, rate] of BRACKETS[status]) {
      const chunk = Math.min(remaining, limit - prev);
      if (chunk <= 0) break;
      tax += chunk * rate;
      remaining -= chunk;
      prev = limit;
      if (remaining <= 0) break;
    }
    return tax;
  }

  function calculate(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      const wages = Math.max(salary - pretax, 0);
      const taxableIncome = Math.max(wages - STANDARD_DEDUCTION[filing], 0);
      // Approximates the Child Tax Credit; ignores its income phase-out.
      const federal = Math.max(
        estimateFederal(taxableIncome, filing) - dependents * CHILD_TAX_CREDIT,
        0
      );
      const stateTax = wages * (stateRates[state] ?? 0.05);
      // FICA is on gross salary: 401(k) deferrals do not reduce Social
      // Security or Medicare wages, and most people use this field for them.
      const fica =
        Math.min(salary, SOCIAL_SECURITY_WAGE_BASE) * 0.062 +
        salary * 0.0145 +
        Math.max(salary - ADDITIONAL_MEDICARE_THRESHOLD[filing], 0) * 0.009;
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
            onChange={(e) => setFiling(e.target.value as Filing)}
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

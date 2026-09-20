"use client";

import { useState, type FormEvent } from "react";

/*
  F-1 OPT / CPT tax estimator.

  The H-1B estimator with the two things that make a student paycheck
  different:

  1. FICA. An F-1 student who is still a nonresident alien for tax purposes
     (typically the first five calendar years in the US) is exempt from Social
     Security and Medicare on wages earned under OPT or CPT. That is 7.65% of
     gross, and it is the single largest reason two colleagues on the same
     salary take home different amounts. Once the student is a resident alien
     — after the five-year exemption runs out — FICA applies like anyone else.

  2. The standard deduction. Nonresident aliens generally cannot take it; the
     one broad exception is students from India under Article 21(2) of the
     US–India treaty. Residents take it. The toggle below models both.

  Same simplifications as the H-1B tool: approximate brackets, illustrative
  state rates, no credits beyond none, no treaty exclusions of income, and no
  city tax. It is for budgeting an offer, not for filing a return.
*/

const stateRates: Record<string, number> = {
  None: 0,
  California: 0.093,
  NewYork: 0.0685,
  Texas: 0,
  Washington: 0,
  Massachusetts: 0.05,
  Illinois: 0.0495,
  Other: 0.05,
};

type Residency = "nonresident" | "resident";

export default function F1OptTaxCalculator() {
  const [salary, setSalary] = useState(75000);
  const [state, setState] = useState("California");
  const [residency, setResidency] = useState<Residency>("nonresident");
  const [indiaTreaty, setIndiaTreaty] = useState(false);
  const [pretax, setPretax] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    gross: number;
    federal: number;
    stateTax: number;
    fica: number;
    net: number;
    monthly: number;
    effective: number;
    ficaSaved: number;
  }>(null);

  function estimateFederal(taxable: number) {
    // Nonresident aliens use the single brackets regardless of marriage
    // (married nonresidents file separately), so one schedule serves both modes.
    const brackets: [number, number][] = [
      [11600, 0.1],
      [47150, 0.12],
      [100525, 0.22],
      [191950, 0.24],
      [Infinity, 0.32],
    ];
    let tax = 0;
    let remaining = Math.max(taxable, 0);
    let prev = 0;
    for (const [limit, rate] of brackets) {
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
      const takesStandardDeduction =
        residency === "resident" || (residency === "nonresident" && indiaTreaty);
      const stdDeduction = takesStandardDeduction ? 15000 : 0;
      const taxableIncome = Math.max(wages - stdDeduction, 0);
      const federal = estimateFederal(taxableIncome);
      const stateTax = wages * (stateRates[state] ?? 0.05);

      const ssWage = Math.min(wages, 176100);
      const ficaIfDue = ssWage * 0.062 + wages * 0.0145;
      const fica = residency === "nonresident" ? 0 : ficaIfDue;

      const net = salary - federal - stateTax - fica;
      setResult({
        gross: salary,
        federal,
        stateTax,
        fica,
        net,
        monthly: net / 12,
        effective: salary > 0 ? ((salary - net) / salary) * 100 : 0,
        ficaSaved: residency === "nonresident" ? ficaIfDue : 0,
      });
      setLoading(false);
    }, 350);
  }

  return (
    <form onSubmit={calculate} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="opt-salary">
            Annual OPT / CPT wages (USD)
          </label>
          <input
            id="opt-salary"
            className="input"
            type="number"
            min={0}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="label" htmlFor="opt-state">
            State of employment
          </label>
          <select
            id="opt-state"
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
          <label className="label" htmlFor="opt-residency">
            Tax residency this year
          </label>
          <select
            id="opt-residency"
            className="input"
            value={residency}
            onChange={(e) => setResidency(e.target.value as Residency)}
          >
            <option value="nonresident">
              Nonresident alien (usually first 5 calendar years)
            </option>
            <option value="resident">
              Resident alien (exemption used up)
            </option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="opt-pretax">
            Pre-tax deductions (401k / HSA, optional)
          </label>
          <input
            id="opt-pretax"
            className="input"
            type="number"
            min={0}
            value={pretax}
            onChange={(e) => setPretax(Number(e.target.value) || 0)}
          />
        </div>
      </div>

      {residency === "nonresident" ? (
        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            className="mt-1"
            checked={indiaTreaty}
            onChange={(e) => setIndiaTreaty(e.target.checked)}
          />
          <span>
            I am a student from India claiming the standard deduction under the
            US–India tax treaty (Article 21). Most other nonresident students
            cannot take the standard deduction — leave this unchecked.
          </span>
        </label>
      ) : null}

      <button
        type="submit"
        className="btn btn-primary w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? "Calculating…" : "Estimate taxes"}
      </button>

      {result ? (
        <div className="result-box grid gap-3 sm:grid-cols-2">
          <Result line="Gross wages" value={result.gross} />
          <Result line="Estimated federal tax" value={result.federal} />
          <Result line="Estimated state tax" value={result.stateTax} />
          <Result
            line={
              residency === "nonresident"
                ? "FICA (exempt as nonresident F-1)"
                : "FICA (SS + Medicare)"
            }
            value={result.fica}
          />
          <Result
            line="Estimated net annual take-home"
            value={result.net}
            emphasize
          />
          <Result
            line="Estimated monthly take-home"
            value={result.monthly}
            emphasize
          />
          {result.ficaSaved > 0 ? (
            <p className="sm:col-span-2 text-sm text-muted">
              The FICA exemption is worth about{" "}
              <strong className="text-navy">
                $
                {result.ficaSaved.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </strong>{" "}
              a year on these wages. If your employer is withholding Social
              Security and Medicare anyway, ask payroll to stop and refund it —
              or claim it back with Form 843.
            </p>
          ) : null}
          <p className="sm:col-span-2 text-sm text-muted">
            Effective tax rate (all-in estimate):{" "}
            <strong className="text-navy">{result.effective.toFixed(1)}%</strong>
          </p>
          <p className="sm:col-span-2 text-sm text-muted">
            A simplified educational estimate, not tax advice. Treaty income
            exclusions, scholarship income, state residency rules, and a
            dual-status year can change the outcome significantly.
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
      <p
        className={`mt-1 font-semibold ${emphasize ? "text-xl text-navy" : "text-text"}`}
      >
        ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </p>
    </div>
  );
}

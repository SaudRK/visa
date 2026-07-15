"use client";

import { useState, type FormEvent } from "react";

export default function SubstantialPresenceCalculator() {
  const [thisYear, setThisYear] = useState(120);
  const [lastYear, setLastYear] = useState(100);
  const [twoYearsAgo, setTwoYearsAgo] = useState(80);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { weighted: number; pass: boolean }>(
    null
  );

  function calculate(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      const weighted = thisYear + lastYear / 3 + twoYearsAgo / 6;
      const pass = weighted >= 183 && thisYear >= 31;
      setResult({ weighted, pass });
      setLoading(false);
    }, 350);
  }

  return (
    <form onSubmit={calculate} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="label" htmlFor="y0">
            Days in the U.S. this year
          </label>
          <input
            id="y0"
            className="input"
            type="number"
            min={0}
            max={366}
            value={thisYear}
            onChange={(e) => setThisYear(Number(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="label" htmlFor="y1">
            Days last year
          </label>
          <input
            id="y1"
            className="input"
            type="number"
            min={0}
            max={366}
            value={lastYear}
            onChange={(e) => setLastYear(Number(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="label" htmlFor="y2">
            Days two years ago
          </label>
          <input
            id="y2"
            className="input"
            type="number"
            min={0}
            max={366}
            value={twoYearsAgo}
            onChange={(e) => setTwoYearsAgo(Number(e.target.value) || 0)}
          />
        </div>
      </div>
      <p className="text-sm text-muted">
        Some visa days can be exempt from the count. This tool uses a simplified
        formula for education — confirm exempt-day rules for your status.
      </p>
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
        {loading ? "Calculating…" : "Run substantial presence test"}
      </button>

      {result ? (
        <div className="result-box space-y-3">
          <p className="text-sm text-muted">Weighted day count</p>
          <p className="text-3xl font-bold text-navy">
            {result.weighted.toFixed(1)} days
          </p>
          <p
            className={`font-semibold ${
              result.pass ? "text-success" : "text-warning"
            }`}
          >
            {result.pass
              ? "Likely meets the substantial presence test (simplified)."
              : "Likely does not meet the test under this simplified count."}
          </p>
          <p className="text-sm text-muted">
            {result.pass
              ? "If you are a resident alien for tax purposes, you generally report worldwide income like U.S. citizens — with important exceptions and filing details."
              : "If you remain a nonresident alien for tax purposes, U.S. tax usually focuses more on U.S.-source income and different forms. Confirm with a qualified tax professional."}
          </p>
        </div>
      ) : null}
    </form>
  );
}

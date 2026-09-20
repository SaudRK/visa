import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import CalculatorShell from "@/components/CalculatorShell";
import F1OptTaxCalculator from "@/components/calculators/F1OptTaxCalculator";

const PATH = "/calculators/f1-opt-tax";

export const metadata = buildPageMetadata({
  title: "F-1 OPT Tax Calculator: Take-Home Pay",
  description:
    "Free OPT tax calculator for F-1 students. Estimate federal and state tax on OPT or CPT wages, see what the FICA exemption saves, and plan your take-home pay.",
  path: PATH,
});

export default function F1OptTaxPage() {
  return (
    <CalculatorShell
      title="F-1 OPT tax calculator"
      description="Estimate take-home pay on OPT or CPT wages — with the FICA exemption most F-1 students are entitled to, and without it once you become a resident for tax purposes."
      path={PATH}
      related={[
        { href: "/taxes/f1", label: "F-1 student taxes explained" },
        { href: "/visas/study/f1-opt", label: "F-1 OPT requirements and timeline" },
        {
          href: "/calculators/substantial-presence",
          label: "Substantial presence test",
        },
        { href: "/visa-guides/f1", label: "F-1 student financial guide" },
      ]}
      guide={
        <>
          <h2>Why OPT pay is not taxed like H-1B pay</h2>
          <p>
            Most F-1 students are nonresident aliens for tax purposes during
            their first five calendar years in the United States, and
            nonresident students working under OPT or CPT are exempt from Social
            Security and Medicare tax on those wages. That exemption is 7.65% of
            gross pay — on a $75,000 OPT salary it is more than $5,000 a year.
            Payroll departments get this wrong in both directions: some withhold
            FICA from exempt students, and some keep the exemption running after
            the student has become a resident.
          </p>
          <p>
            The second difference is the standard deduction. Nonresident aliens
            generally cannot take it, so federal tax applies from the first
            dollar of wages. The main exception is students from India, who can
            claim it under the US–India tax treaty. Resident aliens take it like
            anyone else.
          </p>

          <h2>How to use this estimator</h2>
          <ol>
            <li>Enter your annual OPT or CPT wages and the state you work in.</li>
            <li>
              Choose your tax residency for the year. If you are unsure, run the{" "}
              <Link
                href="/calculators/substantial-presence"
                className="font-semibold text-accent hover:underline"
              >
                substantial presence test
              </Link>{" "}
              first — and remember F-1 exempt years do not count toward it.
            </li>
            <li>
              Tick the India treaty box only if you are a student from India
              claiming the standard deduction on Form 1040-NR.
            </li>
          </ol>

          <h2>What this tool simplifies</h2>
          <ul>
            <li>Approximate federal brackets; no tax credits</li>
            <li>Illustrative state rates — not every state or city</li>
            <li>
              No treaty exclusions of wage income (several treaties exempt a
              first slice of student earnings — check yours)
            </li>
            <li>No scholarship, stipend, or investment income</li>
            <li>Does not model a dual-status year</li>
          </ul>

          <h2>If FICA was withheld and you were exempt</h2>
          <p>
            Ask your employer to refund it first — payroll can usually correct
            the current year. If they will not, you can claim the refund from
            the IRS with Form 843 and Form 8316. Keep your pay stubs and your
            I-20 and EAD as evidence of status. The{" "}
            <Link
              href="/taxes/f1"
              className="font-semibold text-accent hover:underline"
            >
              F-1 student tax guide
            </Link>{" "}
            walks through the filing side.
          </p>
        </>
      }
    >
      <F1OptTaxCalculator />
    </CalculatorShell>
  );
}

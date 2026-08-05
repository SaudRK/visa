import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

const PATH = "/visa-guides/h1b";
const TITLE = "H-1B Financial Guide: Your First Year Checklist";
const DESCRIPTION =
  "A practical money checklist for your first year on an H-1B — payroll setup, withholding, 401(k) match, credit, and sending money home.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function H1bFinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa money guide"
      title="H-1B financial guide: your first year"
      description="A practical money system for your first year on H-1B — what to set up, what to estimate, and which decisions can wait."
      path={PATH}
      crumbs={[
        { name: "Visa guides", path: "/visa-guides" },
        { name: "H-1B", path: PATH },
      ]}
      sources={[
        {
          label: "USCIS — H-1B Specialty Occupations",
          href: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations",
        },
        {
          label: "IRS — Taxation of Nonresident Aliens",
          href: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens",
        },
        {
          label: "IRS — 401(k) contribution limits",
          href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits",
        },
      ]}
    >
      <h2>Who this guide is for</h2>
      <p>
        H-1B workers who need a calm financial onboarding plan: paycheck setup,
        tax withholding, emergency savings, retirement accounts, and sending
        money home without expensive defaults.
      </p>

      <h2>First 30 days money checklist</h2>
      <ol>
        <li>Open a U.S. checking account that supports direct deposit.</li>
        <li>Confirm your W-4 withholding makes sense for your filing status.</li>
        <li>Start an emergency fund target (often 1–3 months of core expenses while you stabilize).</li>
        <li>Turn on employer benefits you understand: health insurance, 401(k) match if available.</li>
        <li>Set a remittance method deliberately — do not rely on airport or bank default FX.</li>
      </ol>

      <h2>Taxes on H-1B</h2>
      <p>
        Many H-1B earners are taxed as U.S. residents for tax purposes, but
        dual-status years, treaty benefits, and multi-state moves create edge
        cases. Use our{" "}
        <Link href="/calculators/h1b-tax" className="font-semibold text-accent hover:underline">
          H-1B tax estimator
        </Link>{" "}
        for rough planning, then file with proper software or a professional.
      </p>

      <h2>Retirement accounts</h2>
      <p>
        If your employer offers a 401(k) match, that is often the highest-priority
        investment decision in year one. IRA eligibility and Roth questions can
        be more nuanced for temporary workers — confirm contribution eligibility
        before funding.
      </p>

      <h2>Investing and remittances</h2>
      <p>
        Separate short-term cash you may need for travel, filing fees, or family
        support from long-term investments. For cross-border transfers, compare
        total cost with the{" "}
        <Link href="/calculators/remittance" className="font-semibold text-accent hover:underline">
          remittance calculator
        </Link>
        .
      </p>

      <h2>Where to go deeper</h2>
      <p>
        This guide is the overview. Each of these covers one piece of it in
        detail:
      </p>
      <ul>
        <li>
          <Link
            href="/visas/work/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B visa requirements, fees and timeline
          </Link>{" "}
          — if you are still going through the petition process.
        </li>
        <li>
          <Link
            href="/taxes/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B taxes explained
          </Link>{" "}
          — withholding, FICA, and state tax in depth.
        </li>
        <li>
          <Link
            href="/calculators/h1b-tax"
            className="font-semibold text-accent hover:underline"
          >
            H-1B tax calculator
          </Link>{" "}
          — turn a salary offer into an estimated monthly figure.
        </li>
        <li>
          <Link
            href="/banking/build-credit"
            className="font-semibold text-accent hover:underline"
          >
            Build US credit as an immigrant
          </Link>{" "}
          — the sequence that gets you a usable score.
        </li>
        <li>
          <Link
            href="/calculators/remittance"
            className="font-semibold text-accent hover:underline"
          >
            Remittance fee calculator
          </Link>{" "}
          — compare the real cost of sending money home.
        </li>
      </ul>
    </GuideLayout>
  );
}

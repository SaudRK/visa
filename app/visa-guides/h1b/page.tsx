import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

export const metadata = buildPageMetadata({
  title: "Complete Financial Guide for H-1B Visa Holders",
  description:
    "Banking, taxes, retirement accounts, remittances, and investing basics for H-1B workers in the United States.",
  path: "/visa-guides/h1b",
});

export default function H1bFinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa financial guide"
      title="Complete Financial Guide for H-1B Visa Holders"
      description="A practical money system for your first year on H-1B — what to set up, what to estimate, and which decisions can wait."
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

      <h2>Related tools</h2>
      <ul>
        <li>
          <Link href="/calculators/h1b-tax" className="text-accent hover:underline">
            H-1B tax estimator
          </Link>
        </li>
        <li>
          <Link href="/banking/build-credit" className="text-accent hover:underline">
            Build credit as an immigrant
          </Link>
        </li>
        <li>
          <Link href="/taxes/h1b" className="text-accent hover:underline">
            H-1B tax guide
          </Link>
        </li>
      </ul>
    </GuideLayout>
  );
}

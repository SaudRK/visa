import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

export const metadata = buildPageMetadata({
  title: "H-1B Tax Guide",
  description:
    "A plain-language H-1B tax guide covering withholding, state taxes, FICA, and planning tools for temporary workers.",
  path: "/taxes/h1b",
});

export default function H1bTaxGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="H-1B Tax Guide"
      description="What usually matters in your first U.S. tax year on H-1B — and which numbers to estimate before April."
    >
      <h2>Start with withholding</h2>
      <p>
        Your W-4 choices affect every paycheck. If you under-withhold, you may
        owe a balance later. If you over-withhold, you loan money to the IRS for
        free. Recheck after raises, bonuses, or marriage.
      </p>

      <h2>Federal, state, and FICA</h2>
      <p>
        Most W-2 H-1B salaries face federal income tax, state income tax (where
        applicable), Social Security, and Medicare. Use the{" "}
        <Link href="/calculators/h1b-tax" className="font-semibold text-accent hover:underline">
          H-1B tax estimator
        </Link>{" "}
        for a planning range.
      </p>

      <h2>Residency for tax purposes</h2>
      <p>
        Immigration status and tax residency are related but not identical. If
        your history spans multiple countries or years, review the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence test
        </Link>
        .
      </p>

      <h2>Documents to keep</h2>
      <ul>
        <li>W-2 and final pay stubs</li>
        <li>1099 forms if any freelance side work was authorized and issued</li>
        <li>Prior-year returns if you had a dual-status year</li>
      </ul>
    </GuideLayout>
  );
}

import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

const PATH = "/taxes/h1b";
const TITLE = "H-1B Taxes: Withholding, FICA & State Tax";
const DESCRIPTION =
  "How H-1B taxes actually work — federal tax rate and W-4 withholding, FICA, state income tax, and resident vs nonresident status in your first year on payroll.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function H1bTaxGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="H-1B taxes explained"
      description="What usually matters in your first U.S. tax year on H-1B — and which numbers to estimate before April."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "H-1B taxes", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Taxation of Nonresident Aliens",
          href: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens",
        },
        {
          label: "IRS Form W-4 — Employee's Withholding Certificate",
          href: "https://www.irs.gov/forms-pubs/about-form-w-4",
        },
        {
          label: "IRS Publication 519 — U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/forms-pubs/about-publication-519",
        },
      ]}
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

      <h2>State income tax changes the answer a lot</h2>
      <p>
        Federal rules are the same wherever you live, but state income tax is
        not. A handful of states levy no personal income tax at all, while others
        take a meaningful share of your salary, and a few cities add their own tax
        on top. Two identical H-1B offers in different states can differ by
        thousands of dollars in take-home pay.
      </p>
      <p>
        This matters most in two situations: comparing offers in different
        states, and moving mid-year, which can leave you filing part-year returns
        in two states. If either applies to you, model both scenarios before you
        sign or move.
      </p>

      <h2>Documents to keep</h2>
      <ul>
        <li>W-2 and final pay stubs</li>
        <li>1099 forms if any freelance side work was authorized and issued</li>
        <li>Prior-year returns if you had a dual-status year</li>
        <li>
          Records of days present in the US, if your residency status is not
          clear-cut
        </li>
      </ul>

      <h2>Other H-1B guides on this site</h2>
      <p>
        This page covers taxes specifically. Depending on what you are trying to
        work out, one of these is probably a better starting point:
      </p>
      <ul>
        <li>
          <Link
            href="/visas/work/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B visa requirements, fees and timeline
          </Link>{" "}
          — eligibility, the cap and lottery, and the filing process.
        </li>
        <li>
          <Link
            href="/calculators/h1b-tax"
            className="font-semibold text-accent hover:underline"
          >
            H-1B tax calculator
          </Link>{" "}
          — put a salary figure in and see estimated take-home pay.
        </li>
        <li>
          <Link
            href="/visa-guides/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B financial guide
          </Link>{" "}
          — the wider first-year money checklist beyond tax.
        </li>
      </ul>
    </GuideLayout>
  );
}

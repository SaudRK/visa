import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

export const metadata = buildPageMetadata({
  title: "F-1 Tax Guide",
  description:
    "F-1 student tax basics for the USA — filing patterns, OPT/CPT income, treaties, and FICA awareness.",
  path: "/taxes/f1",
});

export default function F1TaxGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="F-1 Tax Guide"
      description="A student-focused overview of how U.S. tax filing often works on F-1 — and where people get surprised."
    >
      <h2>Students are not “tax free”</h2>
      <p>
        Scholarships, assistantships, and OPT wages can all create filing
        requirements. The exact forms depend on residency for tax purposes and
        income type.
      </p>

      <h2>OPT / CPT income</h2>
      <p>
        Authorized work still needs clean records. Track state moves carefully —
        a summer internship in another state can create multi-state complexity.
      </p>

      <h2>FICA awareness</h2>
      <p>
        Many F-1 students are exempt from FICA for a limited period, but the
        exemption is not forever and employers sometimes withhold incorrectly.
        Check pay stubs early.
      </p>

      <h2>Tools</h2>
      <ul>
        <li>
          <Link
            href="/calculators/substantial-presence"
            className="text-accent hover:underline"
          >
            Substantial presence test calculator
          </Link>
        </li>
        <li>
          <Link href="/visa-guides/f1" className="text-accent hover:underline">
            Full F-1 financial guide
          </Link>
        </li>
      </ul>
    </GuideLayout>
  );
}

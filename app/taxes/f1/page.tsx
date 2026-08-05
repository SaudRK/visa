import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

const PATH = "/taxes/f1";
const TITLE = "F-1 Student Taxes: Filing, OPT Income & FICA";
const DESCRIPTION =
  "How US taxes work on an F-1 visa — who has to file, how OPT and CPT wages are taxed, FICA exemptions, and treaty basics.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function F1TaxGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="F-1 student taxes"
      description="A student-focused overview of how U.S. tax filing often works on F-1 — and where people get surprised."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "F-1 student taxes", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Foreign Students and Scholars",
          href: "https://www.irs.gov/individuals/international-taxpayers/foreign-students-and-scholars",
        },
        {
          label: "IRS — Students on an F-1 visa and FICA",
          href: "https://www.irs.gov/individuals/international-taxpayers/foreign-student-liability-for-social-security-and-medicare-taxes",
        },
        {
          label: "IRS Publication 519 — U.S. Tax Guide for Aliens",
          href: "https://www.irs.gov/forms-pubs/about-publication-519",
        },
      ]}
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

      <h2>Exempt days and the substantial presence test</h2>
      <p>
        The substantial presence test counts days physically present in the US to
        decide whether you are a resident for tax purposes. F-1 students can
        normally exclude days as an exempt individual for a limited number of
        calendar years, which is why many students file as nonresidents in their
        early years and then switch. The switch is the part that catches people
        out, because it changes which form you file and what income you report.
      </p>

      <h2>Tools and related guides</h2>
      <ul>
        <li>
          <Link
            href="/calculators/substantial-presence"
            className="font-semibold text-accent hover:underline"
          >
            Substantial presence test calculator
          </Link>{" "}
          — count weighted days and see where you stand.
        </li>
        <li>
          <Link
            href="/visas/study/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 visa requirements and process
          </Link>{" "}
          — the visa itself, rather than the tax side.
        </li>
        <li>
          <Link
            href="/visa-guides/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 financial guide
          </Link>{" "}
          — banking, budgeting, and sending money home as a student.
        </li>
      </ul>
    </GuideLayout>
  );
}

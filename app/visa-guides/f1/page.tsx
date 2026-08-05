import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

const PATH = "/visa-guides/f1";
const TITLE = "F-1 Student Financial Guide for the US";
const DESCRIPTION =
  "Money basics for F-1 international students — opening a bank account, campus and OPT income, building credit, and sending money home.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function F1FinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa money guide"
      title="F-1 student financial guide"
      description="How to handle your first U.S. bank account, campus income, OPT taxes, and money sent home — without expensive mistakes."
      path={PATH}
      crumbs={[
        { name: "Visa guides", path: "/visa-guides" },
        { name: "F-1", path: PATH },
      ]}
      sources={[
        {
          label: "USCIS — Students and Employment",
          href: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment",
        },
        {
          label: "IRS — Foreign Students and Scholars",
          href: "https://www.irs.gov/individuals/international-taxpayers/foreign-students-and-scholars",
        },
      ]}
    >
      <h2>Start with banking</h2>
      <p>
        Choose a checking account that is easy for campus life: debit access,
        low fees, and a clear path to direct deposit if you later work on CPT or
        OPT. Avoid overdraft products you do not understand.
      </p>

      <h2>Taxes while studying</h2>
      <p>
        F-1 tax treatment often differs from H-1B workers, especially around
        FICA exemptions in early years and treaty benefits. Read the{" "}
        <Link href="/taxes/f1" className="font-semibold text-accent hover:underline">
          F-1 tax guide
        </Link>{" "}
        and keep every Form 1042-S / W-2 organized.
      </p>

      <h2>OPT and CPT income</h2>
      <p>
        Authorized employment income still has tax consequences. Track start
        dates, pay stubs, and state residency changes. If you are unsure whether
        you are a resident or nonresident for tax purposes, use the{" "}
        <Link
          href="/calculators/substantial-presence"
          className="font-semibold text-accent hover:underline"
        >
          substantial presence calculator
        </Link>{" "}
        as a learning step — then confirm with a specialist.
      </p>

      <h2>Credit history starts earlier than people think</h2>
      <p>
        Even as a student, a careful starter card or secured card can help. See{" "}
        <Link href="/banking/build-credit" className="font-semibold text-accent hover:underline">
          how to build credit as an immigrant
        </Link>
        .
      </p>

      <h2>Sending money home</h2>
      <p>
        On a student budget, transfer FX spreads matter. Estimate costs with the{" "}
        <Link href="/calculators/remittance" className="font-semibold text-accent hover:underline">
          remittance fee calculator
        </Link>{" "}
        before you commit.
      </p>

      <h2>Where to go deeper</h2>
      <ul>
        <li>
          <Link
            href="/visas/study/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 visa requirements and process
          </Link>{" "}
          — eligibility, documents, and the interview.
        </li>
        <li>
          <Link
            href="/visas/study/f1-opt"
            className="font-semibold text-accent hover:underline"
          >
            F-1 OPT explained
          </Link>{" "}
          — how work authorisation after study actually works.
        </li>
        <li>
          <Link
            href="/taxes/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 student taxes
          </Link>{" "}
          — filing, FICA exemptions, and OPT income.
        </li>
      </ul>
    </GuideLayout>
  );
}

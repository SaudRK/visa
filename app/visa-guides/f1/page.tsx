import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

export const metadata = buildPageMetadata({
  title: "Complete Financial Guide for F-1 International Students",
  description:
    "Banking, OPT/CPT taxes, remittances, and credit-building basics for F-1 students in the USA.",
  path: "/visa-guides/f1",
});

export default function F1FinanceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Visa financial guide"
      title="Complete Financial Guide for F-1 International Students"
      description="How to handle your first U.S. bank account, campus income, OPT taxes, and money sent home — without expensive mistakes."
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
    </GuideLayout>
  );
}

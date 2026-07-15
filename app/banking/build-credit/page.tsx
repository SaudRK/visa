import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

export const metadata = buildPageMetadata({
  title: "How to Build Credit in the USA as an Immigrant",
  description:
    "A practical guide to building U.S. credit history as a newcomer — starter cards, ITIN options, rent reporting, and common mistakes.",
  path: "/banking/build-credit",
});

export default function BuildCreditPage() {
  return (
    <GuideLayout
      eyebrow="Banking & credit"
      title="How to Build Credit in the USA as an Immigrant"
      description="You can build a usable U.S. credit profile even if you arrived with no local history — if you sequence the first steps carefully."
    >
      <h2>Why U.S. credit feels broken at first</h2>
      <p>
        Credit files are local. A strong history abroad often does not transfer
        automatically. Landlords, cards, and lenders want U.S. tradelines — so
        newcomers start from a blank file.
      </p>

      <h2>A practical sequence</h2>
      <ol>
        <li>Get an SSN or ITIN path clarified for the products you will use.</li>
        <li>Open a primary bank relationship you can keep for 12+ months.</li>
        <li>Add one starter or secured card you can pay in full monthly.</li>
        <li>Keep utilization low and never miss a due date.</li>
        <li>Consider rent or alternative reporting only after the basics work.</li>
      </ol>

      <h2>Common mistakes</h2>
      <ul>
        <li>Opening too many cards in the first month</li>
        <li>Carrying balances to “build credit faster” (usually backfires)</li>
        <li>Ignoring authorized-user options that are poorly documented</li>
        <li>Closing your only aging account too early</li>
      </ul>

      <h2>Related reading</h2>
      <ul>
        <li>
          <Link href="/visa-guides/h1b" className="text-accent hover:underline">
            H-1B financial guide
          </Link>
        </li>
        <li>
          <Link href="/visa-guides/f1" className="text-accent hover:underline">
            F-1 financial guide
          </Link>
        </li>
      </ul>
    </GuideLayout>
  );
}

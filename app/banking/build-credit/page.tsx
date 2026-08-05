import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";

const PATH = "/banking/build-credit";
const TITLE = "How to Build Credit in the US as an Immigrant";
const DESCRIPTION =
  "A practical sequence for building US credit history from nothing — starter and secured cards, ITIN options, and the mistakes that set people back.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function BuildCreditPage() {
  return (
    <GuideLayout
      eyebrow="Banking & credit"
      title="How to build credit in the US as an immigrant"
      description="You can build a usable U.S. credit profile even if you arrived with no local history — if you sequence the first steps carefully."
      path={PATH}
      crumbs={[
        { name: "Banking & Credit", path: "/banking" },
        { name: "Build credit", path: PATH },
      ]}
      sources={[
        {
          label:
            "Consumer Financial Protection Bureau — Building credit from scratch",
          href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-and-keep-a-good-credit-score-en-318/",
        },
        {
          label: "CFPB — Secured credit cards",
          href: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-secured-credit-card-en-40/",
        },
        {
          label: "IRS — Individual Taxpayer Identification Number (ITIN)",
          href: "https://www.irs.gov/individuals/individual-taxpayer-identification-number",
        },
      ]}
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

      <h2>How long this actually takes</h2>
      <p>
        Expect roughly six months before a score exists at all, and one to two
        years of clean history before you see rates that look like the ones
        advertised to long-term residents. That timeline is frustrating but it is
        also predictable, which means it can be planned around — if you know you
        will need a car loan or a lease in a year, the account you open today is
        the one that gets you there.
      </p>

      <h2>Related reading</h2>
      <ul>
        <li>
          <Link
            href="/visa-guides/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B financial guide
          </Link>{" "}
          — where credit fits in a first-year plan.
        </li>
        <li>
          <Link
            href="/visa-guides/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 student financial guide
          </Link>{" "}
          — starting a credit file while studying.
        </li>
        <li>
          <Link
            href="/banking"
            className="font-semibold text-accent hover:underline"
          >
            Banking and credit for immigrants
          </Link>{" "}
          — accounts, cards, and what comes next.
        </li>
      </ul>
    </GuideLayout>
  );
}

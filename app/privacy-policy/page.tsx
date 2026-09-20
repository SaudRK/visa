import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig, siteEmail } from "@/lib/siteConfig";
import { getContentDate, formatReviewMonth } from "@/lib/contentDates";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildWebPageJsonLd } from "@/lib/jsonLd";

const PATH = "/privacy-policy";

const TITLE = "Privacy Policy";
const DESCRIPTION = `How ${siteConfig.name} handles your data: what the site collects, what it does not, and why calculator inputs never leave your browser.`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function PrivacyPolicyPage() {
  const { reviewed } = getContentDate(PATH);

  return (
    <div>
      <JsonLd
        schema={buildWebPageJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          path: PATH,
        })}
      />
      <div className="border-b border-line bg-light">
        <div className="page-shell section">
          <Breadcrumbs items={[{ name: "Privacy policy", path: PATH }]} />
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">
            Last updated{" "}
            <time dateTime={reviewed}>{formatReviewMonth(reviewed)}</time>
          </p>
        </div>
      </div>
      <div className="page-shell prose-width section space-y-6 leading-relaxed text-muted">
        <section>
          <h2 className="text-xl font-bold text-navy">Overview</h2>
          <p className="mt-3">
            {siteConfig.name} ({siteConfig.domain}) publishes educational guides
            about US immigration and personal finance. We collect as little
            personal data as practical, and there is no account to create.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Information we collect</h2>
          <p className="mt-3">
            Server logs may include IP address, browser type, and pages visited.
            Emails you send are stored as ordinary correspondence. We do not sell
            personal information, and we do not pass your details to immigration
            lawyers, tax preparers, or financial providers as sales leads.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">
            Calculators run in your browser
          </h2>
          <p className="mt-3">
            The salary figures, dates, and transfer amounts you type into our
            calculators are processed entirely on your own device. Those values are
            not transmitted to us, not written to a server, and not retained after
            you close the page. This matters because the inputs are sensitive —
            your income and your travel history — and the safest way to handle
            sensitive data is not to receive it.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Cookies and affiliates</h2>
          <p className="mt-3">
            Essential cookies may support basic site function. Affiliate partners
            may set their own cookies when you click an outbound offer, at which
            point their privacy policy governs what they collect. See our{" "}
            <Link
              href="/affiliate-disclosure"
              className="font-semibold text-accent hover:underline"
            >
              affiliate disclosure
            </Link>{" "}
            for the commercial relationships involved.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Contact</h2>
          <p className="mt-3">
            Privacy questions, including requests to access or delete
            correspondence:{" "}
            <a
              href={`mailto:${siteEmail}`}
              className="font-semibold text-accent hover:underline"
            >
              {siteEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

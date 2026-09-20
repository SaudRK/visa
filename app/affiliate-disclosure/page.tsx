import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig, siteEmail } from "@/lib/siteConfig";
import { getContentDate, formatReviewMonth } from "@/lib/contentDates";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildWebPageJsonLd } from "@/lib/jsonLd";

const PATH = "/affiliate-disclosure";

const TITLE = "Affiliate Disclosure";
const DESCRIPTION = `How ${siteConfig.name} makes money, when affiliate links appear, and why a commission never buys a recommendation.`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function AffiliateDisclosurePage() {
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
          <Breadcrumbs items={[{ name: "Affiliate disclosure", path: PATH }]} />
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Affiliate Disclosure
          </h1>
          <p className="mt-2 text-sm text-muted">
            Last updated{" "}
            <time dateTime={reviewed}>{formatReviewMonth(reviewed)}</time>
          </p>
        </div>
      </div>
      <div className="page-shell prose-width section space-y-5 leading-relaxed text-muted">
        <p>{siteConfig.affiliateDisclosure}</p>
        <p>
          Affiliate relationships fund the research, the calculators, and the
          scheduled reviews that keep guides current. They do not change our
          responsibility to describe products honestly, including the cases where
          the right answer is that you do not need the product yet.
        </p>
        <p>
          When a page includes affiliate links, a disclosure appears near the top
          of that page rather than buried at the bottom. Affiliate links carry the
          appropriate <code>rel</code> attributes, such as{" "}
          <code>sponsored</code>, so search engines can tell a commercial link
          from an editorial one.
        </p>
        <p>
          What we will not do: accept payment for a specific rating or ranking,
          publish a review we have not researched, or present a sponsored
          placement as an independent recommendation. Ordering on comparison pages
          is based on what suits the reader&apos;s situation, not on commission
          rates.
        </p>
        <p>
          We also do not sell your personal details as leads to lawyers, tax
          preparers, or banks — a common business model in the immigration space,
          and one we have deliberately avoided.
        </p>
        <p>
          Questions about a specific relationship? Email{" "}
          <a
            href={`mailto:${siteEmail}`}
            className="font-semibold text-accent hover:underline"
          >
            {siteEmail}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

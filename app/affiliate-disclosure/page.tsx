import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildPageMetadata({
  title: "Affiliate Disclosure",
  description: `Affiliate disclosure for ${siteConfig.name}.`,
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <div>
      <div className="border-b border-border bg-light">
        <div className="page-shell section">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Affiliate Disclosure</h1>
        </div>
      </div>
      <div className="page-shell prose-width section space-y-5 text-muted leading-relaxed">
        <p>{siteConfig.affiliateDisclosure}</p>
        <p>
          Affiliate relationships help fund research, calculators, and editorial
          maintenance. They do not change our responsibility to rank products
          honestly or to label sponsored relationships clearly.
        </p>
        <p>
          When a page includes affiliate links, a disclosure appears near the top
          of that page. Affiliate links use appropriate rel attributes such as
          sponsored or nofollow.
        </p>
        <p>
          Questions? Email{" "}
          <a
            href={`mailto:hello@${siteConfig.domain}`}
            className="font-semibold text-accent hover:underline"
          >
            hello@{siteConfig.domain}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

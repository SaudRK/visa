import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildPageMetadata({
  title: `About ${siteConfig.name}`,
  description: `About ${siteConfig.name} — financial guidance for immigrants and international residents in the United States.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <div className="border-b border-border bg-light">
        <div className="page-shell section">
          <p className="eyebrow">About</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-navy md:text-4xl">
            America&apos;s financial guide for immigrants and international residents
          </h1>
          <p className="mt-4 lede">{siteConfig.tagline}</p>
        </div>
      </div>
      <div className="page-shell section max-w-3xl space-y-5 text-muted leading-relaxed">
        <p>
          {siteConfig.name} helps newcomers navigate the U.S. financial system —
          banking, taxes, investing, insurance, and sending money home — with
          plain-language guides and practical calculators.
        </p>
        <p>
          We focus on questions people actually search when they arrive: how to
          build credit with no history, how H-1B taxes work, what OPT income
          changes, and how to compare remittance costs beyond the advertised fee.
        </p>
        <p>{siteConfig.disclaimerText}</p>
        <Link href="/calculators" className="btn btn-primary">
          Explore calculators
        </Link>
      </div>
    </div>
  );
}

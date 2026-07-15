import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div>
      <div className="border-b border-border bg-light">
        <div className="page-shell section">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: July 2026</p>
        </div>
      </div>
      <div className="page-shell prose-width section space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-navy">Overview</h2>
          <p className="mt-3">
            {siteConfig.name} ({siteConfig.domain}) provides educational finance
            content for immigrants and international residents. We collect as
            little personal data as practical.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Information we collect</h2>
          <p className="mt-3">
            Server logs may include IP address, browser type, and pages visited.
            Emails you send are stored as ordinary correspondence.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Cookies & affiliates</h2>
          <p className="mt-3">
            Essential cookies may support site function. Affiliate partners may
            set their own cookies when you click outbound offers. See our
            Affiliate Disclosure for commercial relationship details.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Contact</h2>
          <p className="mt-3">
            Privacy questions:{" "}
            <a
              href={`mailto:hello@${siteConfig.domain}`}
              className="font-semibold text-accent hover:underline"
            >
              hello@{siteConfig.domain}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

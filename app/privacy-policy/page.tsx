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
      <div className="atlas-grid border-b border-line">
        <div className="page-shell py-14 sm:py-20">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-4xl tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted">Last updated: July 2026</p>
        </div>
      </div>

      <div className="page-shell prose-content space-y-8 py-14 text-muted leading-relaxed">
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">Overview</h2>
          <p className="mt-3">
            {siteConfig.name} ({siteConfig.domain}) provides general U.S.
            immigration information and collects as little personal data as
            practical.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            Information we collect
          </h2>
          <p className="mt-3">
            Server logs may include IP address, browser type, and pages requested.
            If you email us, we receive what you choose to send.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">Cookies</h2>
          <p className="mt-3">
            Essential cookies may support basic site function. Analytics or ads,
            if added later, will be disclosed here first.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">Contact</h2>
          <p className="mt-3">
            Privacy questions:{" "}
            <a
              href={`mailto:hello@${siteConfig.domain}`}
              className="font-semibold text-signal hover:underline"
            >
              hello@{siteConfig.domain}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

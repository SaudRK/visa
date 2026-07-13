import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} about content corrections, guide requests, or partnership questions.`,
  path: "/contact",
});

export default function ContactPage() {
  const email = `hello@${siteConfig.domain}`;

  return (
    <div>
      <div className="atlas-grid border-b border-line">
        <div className="page-shell py-14 sm:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            Write us carefully
          </h1>
          <span className="signal-line mt-5 max-w-[6rem]" />
          <p className="mt-5 max-w-2xl lede">
            Corrections and guide requests help the library improve. We cannot
            advise on individual cases.
          </p>
        </div>
      </div>

      <div className="page-shell py-14">
        <div className="max-w-xl border border-line bg-surface p-8">
          <p className="text-muted leading-relaxed">
            Email{" "}
            <a
              href={`mailto:${email}`}
              className="font-semibold text-signal hover:underline"
            >
              {email}
            </a>
          </p>
          <a href={`mailto:${email}`} className="btn btn-signal mt-6">
            Open email
          </a>
          <p className="mt-6 text-sm text-muted leading-relaxed">
            For advice about your facts or strategy, contact a qualified
            immigration attorney or accredited representative.
          </p>
        </div>
      </div>
    </div>
  );
}

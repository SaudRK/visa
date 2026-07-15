import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} about corrections, guide requests, or partnerships.`,
  path: "/contact",
});

export default function ContactPage() {
  const email = `hello@${siteConfig.domain}`;

  return (
    <div>
      <div className="border-b border-border bg-light">
        <div className="page-shell section">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Get in touch</h1>
          <p className="mt-4 lede">
            Corrections and topic requests help the library improve. We cannot
            provide personalized financial, tax, or legal advice.
          </p>
        </div>
      </div>
      <div className="page-shell section">
        <div className="card max-w-xl">
          <p className="text-muted">
            Email{" "}
            <a href={`mailto:${email}`} className="font-semibold text-accent hover:underline">
              {email}
            </a>
          </p>
          <a href={`mailto:${email}`} className="btn btn-primary mt-5">
            Open email
          </a>
        </div>
      </div>
    </div>
  );
}

import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig, siteEmail } from "@/lib/siteConfig";
import { buildWebPageJsonLd } from "@/lib/jsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

const PATH = "/contact";
// No brand in the title — the root layout's template appends it.
const TITLE = "Contact Us";
const DESCRIPTION = `Get in touch with ${siteConfig.name} about corrections, a guide request, or a partnership. We reply to corrections first.`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

/*
  A reachable, specific contact page is a baseline trust signal on YMYL topics —
  and setting expectations about what we can and cannot answer heads off the
  requests for personal advice we are not able to give.
*/
const reasons = [
  {
    title: "A correction",
    body: "A figure, fee, or rule that has changed or reads wrong. These go to the front of the queue, and we date the page when we update it.",
  },
  {
    title: "A guide request",
    body: "A visa category or money question you could not find a straight answer to anywhere. Requests genuinely shape what gets written next.",
  },
  {
    title: "Partnerships and press",
    body: "Collaborations, data requests, or expert commentary for a story you are writing.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          path: PATH,
        })}
      />

      <div className="border-b border-line bg-light">
        <div className="page-shell section">
          <Breadcrumbs items={[{ name: "Contact", path: PATH }]} />
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Get in touch
          </h1>
          <p className="lede mt-4 max-w-2xl">
            Corrections and topic requests are how this library gets better. One
            thing we cannot do is give personalised immigration, tax, or financial
            advice — for that you need a professional who can see your full
            situation.
          </p>
        </div>
      </div>

      <div className="page-shell section">
        <div className="card max-w-xl">
          <p className="mono-label">Email</p>
          <p className="mt-2">
            <a
              href={`mailto:${siteEmail}`}
              className="font-heading text-2xl font-semibold text-accent hover:underline"
            >
              {siteEmail}
            </a>
          </p>
          <a href={`mailto:${siteEmail}`} className="btn btn-primary mt-5">
            Open email
          </a>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink">
          What to write about
        </h2>
        <ul className="bento mt-6 grid-cols-1 md:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="list-none">
              <div className="cell h-full">
                <h3 className="text-ink">{reason.title}</h3>
                <p className="muted mt-2.5 text-[0.95rem] leading-relaxed">
                  {reason.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

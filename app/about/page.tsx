import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig, siteEmail } from "@/lib/siteConfig";
import { buildWebPageJsonLd } from "@/lib/jsonLd";
import { getContentDate, formatReviewMonth } from "@/lib/contentDates";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

/*
  About page.

  Immigration and personal finance are both "your money or your life" topics,
  which Google holds to a higher standard for expertise and trustworthiness. The
  practical version of that standard is being explicit about who publishes this,
  how the content is produced and reviewed, where the money comes from, and what
  the site will not do. This page states all four.

  Note what is deliberately absent: invented author bios and fabricated
  credentials. Claiming named experts we cannot substantiate would be a false
  trust signal — worse than none. Authorship is attributed to the organisation,
  and the sourcing policy is what carries the weight.
*/

const PATH = "/about";
// No brand in the title — the root layout's template appends it.
const TITLE = "About Us & Our Editorial Standards";
const DESCRIPTION = `Who publishes ${siteConfig.name}, how our US visa and money guides are researched and reviewed, and how the site is funded.`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const principles = [
  {
    title: "Primary sources first",
    body: "Claims about visas, filing rules, and thresholds are written against the official source — USCIS, the Department of State, the IRS, or the CFPB — and every guide links the pages we used so you can check them yourself.",
  },
  {
    title: "Dated, not evergreen-by-pretence",
    body: "Immigration fees, processing times, and tax figures change. Every guide carries a visible last-reviewed date. If a date looks stale, treat the numbers as stale, because we would rather show you the date than imply nothing has moved.",
  },
  {
    title: "We say when we do not know",
    body: "A lot of immigration and tax questions genuinely depend on facts we cannot see. Where the honest answer is \"it depends, and here is what it depends on\", that is what you get, along with which professional to ask.",
  },
  {
    title: "No lead generation",
    body: "We do not sell your details to law firms, tax preparers, or banks, and there is no sign-up wall. You can use every guide and calculator without giving us anything.",
  },
];

export default function AboutPage() {
  const { reviewed } = getContentDate(PATH);

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
          <Breadcrumbs items={[{ name: "About", path: PATH }]} />
          <p className="eyebrow">About</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-navy md:text-4xl">
            A plain-English guide to settling in the United States
          </h1>
          <p className="lede mt-4 max-w-2xl">{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="page-shell section">
        <div className="prose-width space-y-5 leading-relaxed text-muted">
          <p>
            {siteConfig.name} exists because the information people need when they
            move to the United States is scattered across government PDFs, forum
            threads of varying accuracy, and marketing pages from companies that
            want to sell them something. The facts are usually public. Finding
            them, in order, in language you can act on, is the hard part.
          </p>
          <p>
            So the site is organised the way an actual move happens. First the{" "}
            <Link
              href="/visas"
              className="font-semibold text-accent hover:underline"
            >
              visa library
            </Link>
            : which status fits your situation, what it requires, what it costs,
            and how long it takes. Then the money side — opening a bank account
            with no credit file, working out what an offered salary becomes after
            withholding, understanding whether you are a resident for tax
            purposes, and sending money home without losing a chunk of it to an
            exchange rate margin.
          </p>
          <p>
            We write for the questions people actually type at 1am: how to build
            credit from nothing, how H-1B taxes work, what changes when OPT income
            starts, whether a zero-fee transfer is really cheaper.
          </p>

          <h2 className="!mt-12 text-2xl font-bold tracking-tight text-ink">
            How these guides are made
          </h2>
          <p>
            Every page starts from the primary source rather than from other
            websites. Where a figure or a rule is stated, the official page it
            came from is linked at the bottom of the guide. Content is reviewed on
            a schedule — {siteConfig.reviewCadence.toLowerCase()} — and each page
            shows when it was last checked.
          </p>
        </div>

        <ul className="bento mt-10 grid-cols-1 md:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle.title} className="list-none">
              <div className="cell h-full">
                <h3 className="text-ink">{principle.title}</h3>
                <p className="muted mt-2.5 text-[0.95rem] leading-relaxed">
                  {principle.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="prose-width mt-14 space-y-5 leading-relaxed text-muted">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            How the site is funded
          </h2>
          <p>
            Some pages contain affiliate links, which means we may earn a
            commission if you open a product through them at no extra cost to you.
            That relationship is disclosed at the top of any page where it
            applies, and it does not buy a recommendation — we say when the right
            answer is to wait, or to use nothing at all. The full policy is on the{" "}
            <Link
              href="/affiliate-disclosure"
              className="font-semibold text-accent hover:underline"
            >
              affiliate disclosure
            </Link>{" "}
            page.
          </p>

          <h2 className="!mt-12 text-2xl font-bold tracking-tight text-ink">
            What we are not
          </h2>
          <p>{siteConfig.disclaimerText}</p>
          <p>
            If you spot something out of date or wrong, we want to know — that is
            the fastest way this gets better. Email{" "}
            <a
              href={`mailto:${siteEmail}`}
              className="font-semibold text-accent hover:underline"
            >
              {siteEmail}
            </a>
            .
          </p>
          <p className="text-sm">
            This page last reviewed{" "}
            <time dateTime={reviewed}>{formatReviewMonth(reviewed)}</time>.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/visas" className="btn">
            Browse visa guides
          </Link>
          <Link href="/calculators" className="btn btn-ghost">
            Free calculators
          </Link>
        </div>
      </div>
    </>
  );
}

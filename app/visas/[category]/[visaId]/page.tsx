import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategoryById } from "@/lib/getCategories";
import { getVisas } from "@/lib/getVisas";
import { getVisaById } from "@/lib/getVisaById";
import { buildPageMetadata } from "@/lib/metadata";
import { getContentDate } from "@/lib/contentDates";
import { buildArticleJsonLd, buildFaqJsonLd } from "@/lib/jsonLd";
import {
  getMoneyGuidesFor,
  visaPageDescription,
  visaPageHeading,
  visaPageKeywords,
  visaPageTitle,
} from "@/lib/visaSeo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import AudienceSplit from "@/components/AudienceSplit";
import EligibilityList from "@/components/EligibilityList";
import BulletPanel from "@/components/BulletPanel";
import ProcessSteps from "@/components/ProcessSteps";
import FeesTable from "@/components/FeesTable";
import DocumentsSection from "@/components/DocumentsSection";
import TimelineNote from "@/components/TimelineNote";
import RightsTravel from "@/components/RightsTravel";
import TipsAndInsights from "@/components/TipsAndInsights";
import FaqAccordion from "@/components/FaqAccordion";
import RelatedVisas from "@/components/RelatedVisas";
import Disclaimer from "@/components/Disclaimer";
import Callout from "@/components/Callout";
import VisaPageToc from "@/components/VisaPageToc";

interface VisaPageProps {
  params: Promise<{ category: string; visaId: string }>;
}

/*
  Only the generated category/visa pairs are routable. The in-page guards below
  already 404 a mismatched pair such as /visas/study/h1b, but with dynamic
  params enabled every junk URL was still server-rendered before being thrown
  away. Matching the parent segment's behaviour turns those into a static 404.
*/
export const dynamicParams = false;

/**
 * The visa library shipped as one release, so every guide shares the hub's
 * publish date. Each guide's own `lastReviewedDate` is the modified date.
 */
const LIBRARY_PUBLISHED = getContentDate("/visas").published;

export async function generateStaticParams() {
  const visas = getVisas();
  const categories = getCategories();

  return visas.map((visa) => {
    const category = categories.find((c) => c.id === visa.category);
    return {
      category: category?.slug ?? visa.category,
      visaId: visa.id,
    };
  });
}

export async function generateMetadata({
  params,
}: VisaPageProps): Promise<Metadata> {
  const { visaId } = await params;
  const visa = getVisaById(visaId);
  if (!visa) return {};

  const category = getCategoryById(visa.category);

  return buildPageMetadata({
    title: visaPageTitle(visa),
    description: visaPageDescription(visa),
    path: `/visas/${category?.slug}/${visa.id}`,
    type: "article",
    publishedTime: LIBRARY_PUBLISHED,
    modifiedTime: visa.lastReviewedDate,
    keywords: visaPageKeywords(visa),
  });
}

const toc = [
  { id: "quick-answer-heading", label: "Quick answer" },
  { id: "audience-heading", label: "Who it’s for" },
  { id: "eligibility-heading", label: "Eligibility" },
  { id: "denials-heading", label: "Denials & mistakes" },
  { id: "process-heading", label: "Process" },
  { id: "fees-heading", label: "Fees" },
  { id: "documents-heading", label: "Documents" },
  { id: "timeline-heading", label: "Timeline" },
  { id: "rights-heading", label: "Work, travel & family" },
  { id: "tips-heading", label: "Tips" },
  { id: "faq-heading", label: "FAQs" },
  { id: "related-heading", label: "Related visas" },
  { id: "money-heading", label: "Money next steps" },
  { id: "source-heading", label: "Sources" },
];

export default async function VisaPage({ params }: VisaPageProps) {
  const { category: categorySlug, visaId } = await params;
  const visa = getVisaById(visaId);
  if (!visa) notFound();

  const category = getCategoryById(visa.category);
  if (!category || category.slug !== categorySlug) notFound();

  const pagePath = `/visas/${category.slug}/${visa.id}`;
  const parent = visa.parentVisaId ? getVisaById(visa.parentVisaId) : null;
  const parentCategory = parent ? getCategoryById(parent.category) : null;

  const moneyGuides = getMoneyGuidesFor(visa.id);

  return (
    <>
      <JsonLd
        schema={[
          buildArticleJsonLd({
            title: visaPageTitle(visa),
            description: visaPageDescription(visa),
            path: pagePath,
            datePublished: LIBRARY_PUBLISHED,
            dateModified: visa.lastReviewedDate,
            section: category.label,
            keywords: visaPageKeywords(visa),
          }),
          visa.faqs.length > 0 ? buildFaqJsonLd(visa.faqs) : null,
        ]}
      />

      {/*
        Masthead as a case file: the heading carries the page, and the facts a
        reader came to check — code, category, validity, review date — stand in a
        ledger rail beside it instead of being flattened into a row of identical
        chips. The review date is the page's one stamp; on a reference page about
        rules that change, "when was this checked" is the trust signal, so it is
        the single element allowed to break the grid's angle.
      */}
      <div className="border-b border-line atlas-grid">
        <div className="page-wide py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { name: "Visas", path: "/visas" },
              { name: category.label, path: `/visas/${category.slug}` },
              { name: `${visa.code} visa`, path: pagePath },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_15rem] lg:gap-16">
            <div>
              <p className="eyebrow">
                {visa.code} · {category.label}
              </p>

              <h1 className="mt-4 max-w-[24ch] text-ink">
                {visaPageHeading(visa)}
              </h1>
              <span className="signal-line mt-6" />
              <p className="lede mt-6 max-w-2xl">{visa.quickAnswer}</p>

              {parent && parentCategory ? (
                <p className="mt-5 text-sm text-muted">
                  Builds on{" "}
                  <Link
                    href={`/visas/${parentCategory.slug}/${parent.id}`}
                    className="font-semibold text-accent hover:underline"
                  >
                    {parent.code} — {parent.name}
                  </Link>
                </p>
              ) : null}
            </div>

            {/* Standing facts */}
            <dl className="h-fit border-t-2 border-ink pt-5 text-sm">
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
                <dt className="mono-label">Visa</dt>
                <dd className="font-mono font-semibold tabular-nums text-ink">
                  {visa.code}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
                <dt className="mono-label">Category</dt>
                <dd className="text-right text-[0.86rem] text-ink">
                  {category.label}
                </dd>
              </div>
              <div className="border-b border-line py-2.5">
                <dt className="mono-label">Validity</dt>
                <dd className="mt-1 text-[0.9rem] leading-snug text-ink">
                  {visa.validityPeriod}
                </dd>
              </div>
              <div className="py-3.5">
                <dt className="sr-only">Last reviewed</dt>
                <dd>
                  <span className="stamp">
                    Reviewed{" "}
                    <time dateTime={visa.lastReviewedDate}>
                      {visa.lastReviewedDate}
                    </time>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="page-wide py-12 lg:py-16">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-16">
          <article className="min-w-0 space-y-16">
            <QuickAnswerBox answer={visa.quickAnswer} visaCode={visa.code} />

            <AudienceSplit
              whoIsFor={visa.whoIsFor}
              whoShouldNotApply={visa.whoShouldNotApply}
            />

            <EligibilityList items={visa.eligibility} />

            <div className="grid gap-4 lg:grid-cols-2" id="denials-heading">
              <BulletPanel
                id="denial-list-heading"
                eyebrow="Risk patterns"
                title="Common denial reasons"
                items={visa.denialReasons}
                tone="alert"
              />
              <BulletPanel
                id="mistakes-heading"
                eyebrow="Avoidable problems"
                title="Mistakes applicants make"
                items={visa.commonMistakes}
                tone="warning"
              />
            </div>

            <ProcessSteps steps={visa.processSteps} />
            <FeesTable fees={visa.fees} />
            <DocumentsSection documents={visa.documents} />

            <TimelineNote
              timelineText={visa.timelineText}
              updatedDate={visa.timelineUpdatedDate}
              lastReviewedDate={visa.lastReviewedDate}
              validityPeriod={visa.validityPeriod}
              extensionInfo={visa.extensionInfo}
              importantDeadlines={visa.importantDeadlines}
            />

            <RightsTravel
              employmentRights={visa.employmentRights}
              travelRestrictions={visa.travelRestrictions}
              dependentsText={visa.dependentsText}
            />

            <TipsAndInsights tips={visa.tips} didYouKnow={visa.didYouKnow} />
            <FaqAccordion faqs={visa.faqs} />
            <RelatedVisas
              relatedVisaIds={visa.relatedVisaIds}
              relatedWhen={visa.relatedWhen}
            />

            {/*
              Money next-steps. This block is what keeps the visa page and the
              finance pages from competing for the same query: this page owns
              "<code> visa requirements", and it hands off explicitly to the
              pages that own the tax, calculator, and planning intents.
            */}
            <section aria-labelledby="money-heading" className="space-y-5">
              <h2 id="money-heading" className="section-title">
                After you have {visa.code} status
              </h2>
              <p className="text-muted">
                Getting the visa is the first half. These guides cover the money
                side of actually settling in — payroll, tax residency, credit,
                and sending money home.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {moneyGuides.map((guide) => (
                  <li key={guide.href} className="list-none">
                    <Link
                      href={guide.href}
                      className="block h-full border border-line bg-surface p-5 transition-colors hover:border-ink"
                    >
                      <span className="block font-heading text-lg font-semibold text-ink">
                        {guide.label}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                        {guide.blurb}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="source-heading" className="space-y-5">
              <h2 id="source-heading" className="section-title">
                Official source &amp; disclaimer
              </h2>
              <Callout tone="info" title="Verify before you file">
                Immigration rules, fees, and processing times change. Use this
                guide to understand the pathway, then confirm details on the
                official page below and with qualified counsel for your facts.
              </Callout>
              <p className="text-muted">
                Primary government reference for this guide:
              </p>
              <a
                href={visa.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex break-all font-semibold text-accent hover:underline"
              >
                {visa.sourceUrl}
              </a>
              <p className="text-sm text-muted">
                Last reviewed{" "}
                <time dateTime={visa.lastReviewedDate}>
                  {visa.lastReviewedDate}
                </time>
                . Processing times last checked{" "}
                <time dateTime={visa.timelineUpdatedDate}>
                  {visa.timelineUpdatedDate}
                </time>
                .
              </p>
              <Disclaimer />
            </section>
          </article>

          <aside className="min-w-0">
            <VisaPageToc items={toc} />
          </aside>
        </div>
      </div>
    </>
  );
}

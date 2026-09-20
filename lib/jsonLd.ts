import type { Faq } from "./types";
import { getSiteUrl, siteConfig, siteEmail } from "./siteConfig";
import { getPageKeywords } from "./seoKeywords";

/*
  Structured data is emitted as one connected graph rather than isolated blobs.
  Stable @id values let every node reference the publisher and website instead
  of repeating them, which is what search engines use to resolve the brand as a
  single entity.
*/

const ORG_ID = `${getSiteUrl()}/#organization`;
const SITE_ID = `${getSiteUrl()}/#website`;

/** Reference to the publisher node defined once in the root layout. */
export const organizationRef = { "@id": ORG_ID };

/**
 * schema.org `keywords` for a CreativeWork node. Comma-separated text is the
 * form Google's structured-data docs show. Falls back to the path's entry in
 * lib/seoKeywords.ts so the shared layouts (GuideLayout, SectionPage,
 * CalculatorShell) pick keywords up without each page repeating them.
 */
function keywordsProperty(path: string, keywords?: string[]) {
  const terms = keywords ?? getPageKeywords(path);
  return terms.length > 0 ? { keywords: terms.join(", ") } : {};
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.shortDescription,
    email: siteEmail,
    logo: {
      "@type": "ImageObject",
      url: getSiteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
    },
    // The audience and service area are genuinely US-scoped, which helps
    // disambiguate the brand for US queries.
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "US immigration",
      "US visas",
      "Nonresident alien taxation",
      "Banking for immigrants",
      "International money transfers",
    ],
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.name,
    alternateName: "Settle in US",
    url: getSiteUrl(),
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: organizationRef,
  };
}

/** Root-layout graph: publisher + website, declared once for the whole site. */
export function buildSiteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationJsonLd(), buildWebSiteJsonLd()],
  };
}

export function buildFaqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getSiteUrl(item.path),
    })),
  };
}

export function buildWebPageJsonLd({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: getSiteUrl(path),
    inLanguage: "en-US",
    isPartOf: { "@id": SITE_ID },
    publisher: organizationRef,
    ...keywordsProperty(path, keywords),
  };
}

/**
 * Editorial guide markup. Author and publisher are the Organization rather than
 * an invented person — claiming named human authors we cannot substantiate
 * would be a false E-E-A-T signal.
 */
export function buildArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  section,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: getSiteUrl(path),
    mainEntityOfPage: { "@type": "WebPage", "@id": getSiteUrl(path) },
    datePublished,
    dateModified,
    inLanguage: "en-US",
    isPartOf: { "@id": SITE_ID },
    author: organizationRef,
    publisher: organizationRef,
    image: getSiteUrl("/opengraph-image"),
    ...(section ? { articleSection: section } : {}),
    ...keywordsProperty(path, keywords),
  };
}

/** Free browser-based tools — declared as WebApplication, not a paid product. */
export function buildCalculatorJsonLd({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description,
    url: getSiteUrl(path),
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any browser",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    inLanguage: "en-US",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: organizationRef,
    ...keywordsProperty(path, keywords),
  };
}

/** Ordered list markup for hub pages that enumerate their child pages. */
export function buildItemListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: getSiteUrl(item.path),
    })),
  };
}

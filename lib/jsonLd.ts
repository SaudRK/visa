import type { Faq } from "./types";
import { getSiteUrl, siteConfig, siteEmail } from "./siteConfig";

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
}: {
  title: string;
  description: string;
  path: string;
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
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  section?: string;
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
  };
}

/** Free browser-based tools — declared as WebApplication, not a paid product. */
export function buildCalculatorJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
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

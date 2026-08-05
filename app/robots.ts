import type { MetadataRoute } from "next";
import { getSiteUrl, siteConfig } from "@/lib/siteConfig";

/*
  robots.txt

  Nothing is disallowed, and that is deliberate. Google must fetch the CSS and JS
  under /_next/ to render and assess a page; blocking those paths is a common
  own-goal that makes a fully static site look broken to the renderer. There are
  also no private or duplicate URL spaces here worth excluding — pages that
  should stay out of the index carry a noindex directive instead, which is the
  correct tool, since a robots-blocked URL can still be indexed without its
  content.

  `host` declares the canonical hostname, reinforcing the per-page canonical tags
  for the crawlers that read it.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: getSiteUrl("/sitemap.xml"),
    host: `https://${siteConfig.domain}`,
  };
}

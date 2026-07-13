export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "VisaHarbor",
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "example.com",
  tagline: "Clear U.S. immigration guidance, written for real applicants.",
  disclaimerText:
    "This site provides general immigration information only. It is not legal advice, and we are not a law firm, not affiliated with USCIS, the Department of State, or any U.S. government agency. Immigration rules, fees, and processing times change frequently. Always verify details on official government websites and consult a qualified immigration attorney for advice about your situation.",
  trustLine:
    "Written for applicants. Sourced from USCIS and State Department. Reviewed for clarity before publish.",
};

export function getSiteUrl(path = ""): string {
  const base = `https://${siteConfig.domain}`;
  return path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : base;
}

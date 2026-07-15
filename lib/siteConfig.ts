export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "New American Guide",
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "example.com",
  tagline: "Finance Made Simple for New Americans",
  description:
    "Calculators, guides, and tools for immigrants navigating the US financial system — banking, taxes, investing, and sending money home.",
  trustLine:
    "Trusted by H-1B holders, F-1 students, and new green card holders",
  disclaimerText:
    "This site provides general educational information about personal finance for immigrants and international residents. It is not financial, tax, legal, or immigration advice. We are not a licensed financial advisor, tax preparer, CPA, attorney, or government agency, and we are not affiliated with USCIS, the IRS, or any U.S. government department. Rules and rates change. Verify details with official sources and qualified professionals before making decisions.",
  affiliateDisclosure:
    "Some pages may contain affiliate links. If you sign up for a product or service through our links, we may earn a commission at no extra cost to you. We only recommend products we believe can genuinely help readers. Learn more on our Affiliate Disclosure page.",
};

export function getSiteUrl(path = ""): string {
  const base = `https://${siteConfig.domain}`;
  return path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : base;
}

export const navSections = [
  { href: "/banking", label: "Banking" },
  { href: "/taxes", label: "Taxes" },
  { href: "/send-money", label: "Send Money" },
  { href: "/investing", label: "Investing" },
  { href: "/calculators", label: "Calculators" },
  { href: "/visa-guides", label: "Visa Guides" },
] as const;

import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, getSiteUrl } from "@/lib/siteConfig";
import { buildSiteGraphJsonLd } from "@/lib/jsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

// Display — Bricolage Grotesque: a contemporary display grotesque with real
// character (variable optical sizing), used large and confident.
const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

// Body / workhorse — Hanken Grotesk: a warm humanist sans, easy to read at
// length across guides, tables, and calculators.
const hanken = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Utility — figures, field labels, running numbers.
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

/*
  Root metadata. `title.template` appends the brand to every child page's title,
  so individual pages pass only their own topic. `title.default` covers any
  segment that forgets to set one, and metadataBase makes the canonical and
  og:image URLs absolute site-wide.
*/
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  publisher: siteConfig.name,
  authors: [{ name: siteConfig.name, url: getSiteUrl() }],
  creator: siteConfig.name,
  alternates: { canonical: getSiteUrl() },
  category: "Immigration and personal finance",
  formatDetection: { telephone: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    url: getSiteUrl(),
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Matches --color-bg so mobile browser chrome blends with the page.
  themeColor: "#f4f1e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${hanken.variable} ${bricolage.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink antialiased">
        {/* Publisher + website entity, declared once for the whole site. */}
        <JsonLd schema={buildSiteGraphJsonLd()} />

        {/* Progressive enhancement: if JS is off, don't hide reveal content */}
        <noscript>
          <style>{`.reveal,.reveal-left,.reveal-right,.reveal-scale{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

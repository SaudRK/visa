import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, getSiteUrl } from "@/lib/siteConfig";
import { buildSiteGraphJsonLd } from "@/lib/jsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

/*
  ── Type system ──────────────────────────────────────────────────────────────

  Two families. One voice for language, one for numbers.

  Schibsted Grotesk carries both display and body. It was cut for a Nordic news
  group, which means it was designed to do exactly these two jobs at once: hold
  a confident 900-weight headline and stay comfortable across a thousand words
  of tax explainer. Using a single face for the whole product is also what gives
  the design its composure — the reference direction speaks in one voice, and
  three competing families is what made the previous stack feel assembled.

  It replaces a Source Serif 4 / Public Sans pairing. Public Sans had a genuine
  argument behind it (it is the U.S. Web Design System face, and this product is
  about navigating U.S. government systems), and I gave that up deliberately:
  a high-contrast serif display over a warm cream page is one of the most
  recognisable machine-generated looks going, and no amount of justification for
  the body face rescues the display face from it.

  IBM Plex Mono, 400 and 600 only, is kept strictly for data — fees, day counts,
  calculator output, review dates. Tabular figures are the one thing Schibsted
  cannot do, and two static weights is the entire requirement, so loading a
  variable axis for it would be waste.
*/
const sans = Schibsted_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
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
  /*
    No root-level `alternates.canonical` on purpose. A canonical declared here
    is inherited by any segment that does not set its own, which pointed such
    URLs — the 404 among them — at the homepage. Canonicals are declared per
    page by lib/metadata.ts, where the path is actually known.
  */
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
  themeColor: "#fbfaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink antialiased">
        {/* Publisher + website entity, declared once for the whole site. */}
        <JsonLd schema={buildSiteGraphJsonLd()} />

        {/* Progressive enhancement: if JS is off, don't hide reveal content */}
        <noscript>
          <style>{`.reveal,.reveal-left,.reveal-right,.reveal-scale{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

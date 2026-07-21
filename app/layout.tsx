import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { buildPageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata = buildPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${bricolage.variable} ${mono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink antialiased">
        {/* Progressive enhancement: if JS is off, don't hide reveal content */}
        <noscript>
          <style>{`.reveal,.reveal-left,.reveal-right,.reveal-scale{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The framework banner tells a visitor nothing and a scanner which exploits to try.
  poweredByHeader: false,
  experimental: {
    /*
      Turbopack normally runs PostCSS (Tailwind) in spawned Node child
      processes that connect back to the build over loopback TCP. Hostinger's
      build runner kills those children before they connect, and the build
      dies with "node process exited before we could connect to it with exit
      status: 0" on app/globals.css. Worker threads do the same work inside
      the build process, so nothing is spawned.
    */
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  async redirects() {
    return [
      /*
        Five visa categories were published at launch as empty "coming soon"
        hubs, listed in the sitemap, and linked from the homepage, then
        unpublished as thin pages. Google still holds those URLs and reports
        them as 404s. Each now points at the closest page that genuinely
        answers the query: the green card guide for the two green card
        categories, the visa directory for the rest. When a category gets real
        guides, delete its entry here — getPopulatedCategories() will serve the
        hub again automatically.

        The legacy /blog?post=<slug> redirect lives in proxy.ts, because a
        redirect here would carry the query string onto the destination.
      */
      {
        source: "/visas/family-green-card",
        destination: "/visa-guides/green-card",
        permanent: true,
      },
      {
        source: "/visas/employment-green-card",
        destination: "/visa-guides/green-card",
        permanent: true,
      },
      { source: "/visas/visit", destination: "/visas", permanent: true },
      { source: "/visas/family-visit", destination: "/visas", permanent: true },
      { source: "/visas/protection", destination: "/visas", permanent: true },
    ];
  },
  /*
    Baseline headers with no behavioural cost. HSTS is deliberately absent:
    browsers remember it for its whole max-age, so it is the owner's decision
    once they are sure every subdomain will always serve HTTPS.
  */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  images: {
    /*
      Soro's featured images live at UUID-named URLs that never change, so a
      rendition can be kept for 31 days. At the 4-hour default the origin kept
      re-optimising them, and a cache miss cost 0.7–1.7 s of TTFB on the image
      that is usually a blog post's LCP element.
    */
    minimumCacheTTL: 2678400,
    // Featured images for blog posts are hosted by Soro on Supabase storage.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "afocirmbqdxnkyescnev.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;

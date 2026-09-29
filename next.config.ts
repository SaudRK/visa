import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  images: {
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

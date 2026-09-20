import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /*
        Soro's own embed linked posts as /blog?post=<slug>, and that form may
        survive in its dashboard, in shared links, or in early crawls. Posts
        now live at /blog/<slug>, so send the old form there permanently.
      */
      {
        source: "/blog",
        has: [{ type: "query", key: "post", value: "(?<post>[a-z0-9-]+)" }],
        destination: "/blog/:post",
        permanent: true,
      },
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

import { NextResponse, type NextRequest } from "next/server";
import { getSiteUrl, siteConfig } from "@/lib/siteConfig";

/*
  Host and legacy-URL normalisation, ahead of routing.

  1. www → apex. www.settleinus.com used to answer every path with a 200 and a
     canonical pointing at the apex. Google crawled both hosts and filed each
     www copy under "Alternative page with proper canonical tag" — a duplicate
     of every page, spending crawl budget on URLs that can never rank. A 308
     consolidates them onto the one host the canonicals already name.

  2. /blog?post=<slug> → /blog/<slug>. Soro's client embed linked posts in the
     query form. This lived in next.config redirects, but those always carry
     the request's query string to the destination, so the old rule produced
     /blog/<slug>?post=<slug> — a second duplicate URL per post. Here the
     destination is built clean.

  The host is read from x-forwarded-host first: the site runs behind
  Hostinger's CDN, and the original hostname is the only thing that tells the
  two apart. The redirects are marked no-store so no cache layer can ever
  replay the www redirect to an apex request.
*/
export function proxy(request: NextRequest) {
  const host = (
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    ""
  )
    .split(",")[0]
    .split(":")[0]
    .trim()
    .toLowerCase();
  const { pathname, search, searchParams } = request.nextUrl;

  if (pathname === "/blog") {
    const post = searchParams.get("post");
    if (post && /^[a-z0-9-]+$/.test(post)) {
      return redirect(getSiteUrl(`/blog/${post}`));
    }
  }

  if (host === `www.${siteConfig.domain}`) {
    return redirect(getSiteUrl(pathname) + search);
  }

  return NextResponse.next();
}

function redirect(destination: string) {
  const response = NextResponse.redirect(destination, 308);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const config = {
  matcher: [
    // Pages only: build assets and metadata files need no host normalisation.
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|.*\\.(?:png|webp|svg|jpg|jpeg|glb|gltf|ico|woff2?)$).*)",
  ],
};

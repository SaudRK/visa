import Script from "next/script";

/*
  Soro AI blog embed.

  Soro hosts the posts and injects them into `#soro-blog` client-side, so this
  component is the whole integration surface: a mount point plus the vendor
  script. Two deliberate choices:

  1. The vendor's snippet uses a bare `<script defer>`. We load it through
     `next/script` at the default `afterInteractive` strategy instead, which is
     the App Router equivalent — it keeps the script out of the critical path
     and guarantees the mount point exists before the script runs, which a raw
     tag rendered by React does not.
  2. The `id` is fixed by the vendor, so this component must appear exactly once
     per page. Both blog routes render it, never together.

  Because the content arrives after hydration, crawlers see an empty container
  in the initial HTML and only pick the posts up on render. That is inherent to
  an embedded blog, not something this file can fix.
*/

const EMBED_SRC =
  "https://app.trysoro.com/api/embed/e3ddf659-e62b-4836-8648-da345135fa24";

export default function SoroBlog() {
  return (
    <>
      <div id="soro-blog" />
      <Script src={EMBED_SRC} strategy="afterInteractive" />
    </>
  );
}

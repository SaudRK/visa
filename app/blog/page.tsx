import { buildPageMetadata } from "@/lib/metadata";
import { buildWebPageJsonLd } from "@/lib/jsonLd";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SoroBlog from "@/components/SoroBlog";

/*
  Blog index.

  The posts themselves live in Soro and are rendered by its embed, so this file
  owns only what Soro cannot: the canonical URL, the title and description, the
  breadcrumb trail, and the masthead band that makes the page belong to the
  rest of the site.
*/

const PATH = "/blog";
// No brand in the title — the root layout's template appends it.
const TITLE = "Blog";
const DESCRIPTION = `Guides, updates, and explainers on US visas, taxes, and money from ${siteConfig.name}.`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          path: PATH,
        })}
      />

      <div className="border-b border-line bg-light">
        <div className="page-shell section">
          <Breadcrumbs items={[{ name: "Blog", path: PATH }]} />
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-navy md:text-4xl">
            Notes on visas, taxes, and settling in
          </h1>
          <p className="lede mt-4 max-w-2xl">{DESCRIPTION}</p>
        </div>
      </div>

      <div className="page-shell section">
        <SoroBlog />
      </div>
    </>
  );
}

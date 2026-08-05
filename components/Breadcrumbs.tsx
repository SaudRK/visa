import Link from "next/link";
import JsonLd from "./JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/jsonLd";

export interface Crumb {
  name: string;
  /** Site-relative path. The final crumb's path is used only for schema. */
  path: string;
}

/**
 * Visible breadcrumb trail plus matching BreadcrumbList markup.
 *
 * Google requires the on-page trail and the structured data to agree, so both
 * are generated from the same array. "Home" is prepended automatically — pass
 * only the intermediate and current crumbs.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd schema={buildBreadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted">
          {trail.map((crumb, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-x-2">
                {isLast ? (
                  <span aria-current="page" className="text-ink">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.path}
                      className="transition-colors hover:text-accent"
                    >
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true" className="text-line">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

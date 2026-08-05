import { siteConfig } from "@/lib/siteConfig";

/**
 * The SettleinUS wordmark. Reads the name from config so the header, footer,
 * and any future placement can never drift apart. The trailing "US" carries the
 * evergreen accent — the emphasis is the destination, which is the whole point
 * of the brand.
 */
export default function Wordmark({
  className = "",
  accentClassName = "text-accent",
}: {
  className?: string;
  accentClassName?: string;
}) {
  const name = siteConfig.name;
  const suffix = "US";
  const hasSuffix = name.endsWith(suffix);
  const stem = hasSuffix ? name.slice(0, -suffix.length) : name;

  return (
    <span className={className}>
      {stem}
      {hasSuffix ? <span className={accentClassName}>{suffix}</span> : null}
    </span>
  );
}

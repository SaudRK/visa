import { siteConfig } from "@/lib/siteConfig";

interface DisclaimerProps {
  compact?: boolean;
  invert?: boolean;
}

export default function Disclaimer({
  compact = false,
  invert = false,
}: DisclaimerProps) {
  return (
    <aside
      className={`${compact ? "text-sm" : "text-sm"} ${
        invert ? "" : "rounded-[var(--radius-panel)] border border-line bg-surface p-5"
      }`}
      role="note"
      aria-label="Legal disclaimer"
    >
      <p className={`font-semibold ${invert ? "text-white" : "text-ink"}`}>
        Not legal advice
      </p>
      <p
        className={`mt-2 leading-relaxed ${
          invert ? "text-[#b7bec8]" : "text-muted"
        }`}
      >
        {siteConfig.disclaimerText}
      </p>
    </aside>
  );
}

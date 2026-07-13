import type { ReactNode } from "react";

type Tone = "info" | "tip" | "warning" | "alert";

const tones: Record<Tone, { wrap: string; label: string; labelColor: string }> = {
  info: {
    wrap: "border-sea/30 bg-sea-soft",
    label: "Good to know",
    labelColor: "text-sea",
  },
  tip: {
    wrap: "border-ink/20 bg-surface",
    label: "Helpful tip",
    labelColor: "text-ink",
  },
  warning: {
    wrap: "border-signal/30 bg-signal-soft",
    label: "Watch for this",
    labelColor: "text-signal",
  },
  alert: {
    wrap: "border-alert/30 bg-alert-soft",
    label: "Deadline / risk",
    labelColor: "text-alert",
  },
};

interface CalloutProps {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}

export default function Callout({
  tone = "info",
  title,
  children,
}: CalloutProps) {
  const styles = tones[tone];

  return (
    <aside className={`border px-5 py-4 ${styles.wrap}`} role="note">
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.12em] ${styles.labelColor}`}
      >
        {title ?? styles.label}
      </p>
      <div className="mt-2 text-[0.98rem] leading-relaxed text-ink/90">
        {children}
      </div>
    </aside>
  );
}

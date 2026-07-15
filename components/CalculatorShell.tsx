import type { ReactNode } from "react";

interface CalculatorShellProps {
  title: string;
  description: string;
  children: ReactNode;
  guide: ReactNode;
}

export default function CalculatorShell({
  title,
  description,
  children,
  guide,
}: CalculatorShellProps) {
  return (
    <div className="page-shell section">
      <header className="bento grid-cols-1 md:grid-cols-5 mb-8">
        <div className="cell cell-ink md:col-span-3">
          <p className="mono-label !text-white/50">Calculator</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
        </div>
        <div className="cell md:col-span-2">
          <p className="mono-label">Purpose</p>
          <p className="muted mt-2 text-sm leading-relaxed">{description}</p>
        </div>
      </header>

      <div className="mx-auto max-w-[760px]">
        <div className="border-2 border-ink bg-surface p-5 sm:p-7">{children}</div>
        <div className="mt-10 space-y-4 text-muted leading-relaxed [&_h2]:mt-8 [&_h2]:border-l-4 [&_h2]:border-accent [&_h2]:pl-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
          {guide}
        </div>
      </div>
    </div>
  );
}

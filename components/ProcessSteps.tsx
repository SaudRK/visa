import type { ProcessStep } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section aria-labelledby="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="From start to finish"
        title="Step-by-step process"
        description="A practical sequence of what usually happens — not a substitute for form instructions."
      />
      <ol className="space-y-0 border border-line">
        {steps.map((step, index) => (
          <li
            key={step.step}
            className={`grid gap-4 border-b border-line p-5 last:border-b-0 sm:grid-cols-[4rem_1fr] ${
              index % 2 === 0 ? "bg-surface" : "bg-bg"
            }`}
          >
            <div className="font-display text-3xl text-signal">{step.step}</div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-xl tracking-tight">{step.title}</h3>
                <span className="tag">{step.timeframe}</span>
              </div>
              <p className="mt-3 text-muted leading-relaxed">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

import type { Faq } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface FaqAccordionProps {
  faqs: Faq[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <section aria-labelledby="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow="Common questions"
        title="Frequently asked questions"
      />
      <div className="border border-line">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-b border-line last:border-b-0 open:bg-surface"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{faq.question}</span>
                <span className="font-mono text-signal transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-line px-5 py-4 text-muted leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

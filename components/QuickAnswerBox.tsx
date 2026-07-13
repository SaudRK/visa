interface QuickAnswerBoxProps {
  answer: string;
  visaCode: string;
}

export default function QuickAnswerBox({ answer, visaCode }: QuickAnswerBoxProps) {
  return (
    <section
      aria-labelledby="quick-answer-heading"
      className="border border-ink bg-ink p-6 text-white sm:p-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8b93a0]">
        Quick answer · {visaCode}
      </p>
      <h2
        id="quick-answer-heading"
        className="mt-3 font-display text-3xl tracking-tight text-white"
      >
        The short version
      </h2>
      <span className="signal-line mt-5 max-w-[8rem]" />
      <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-[#d5dae2]">
        {answer}
      </p>
    </section>
  );
}

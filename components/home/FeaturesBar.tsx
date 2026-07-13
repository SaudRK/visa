const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="#ede9fe" />
        <path d="M24 14v12l8 5" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="24" r="10" stroke="#7c3aed" strokeWidth="2" fill="none" />
      </svg>
    ),
    label: "Clear guidance",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="#ffedd5" />
        <text x="24" y="30" textAnchor="middle" fill="#ea580c" fontSize="18" fontWeight="bold">$</text>
      </svg>
    ),
    label: "Fee breakdowns",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="#ede9fe" />
        <path d="M16 28 Q24 18 32 28" stroke="#7c3aed" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="22" r="2" fill="#7c3aed" />
        <circle cx="30" cy="22" r="2" fill="#7c3aed" />
      </svg>
    ),
    label: "Expert advice",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="#ffedd5" />
        <path d="M16 30 L22 24 L26 28 L32 20" stroke="#ea580c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="20" r="2" fill="#ea580c" />
      </svg>
    ),
    label: "Trusted sources",
  },
];

export default function FeaturesBar() {
  return (
    <section aria-label="Key features" className="border-y border-primary/5 bg-white/60 py-8 backdrop-blur-sm">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
        {features.map((feature) => (
          <div key={feature.label} className="flex flex-col items-center gap-3 text-center">
            {feature.icon}
            <span className="text-sm font-semibold text-text">{feature.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import ConsultantCharacter from "@/components/illustrations/ConsultantCharacter";

export default function WhySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          {/* Decorative passport card */}
          <div
            className="absolute -left-4 -top-4 z-0 hidden rotate-[-12deg] rounded-2xl bg-gradient-to-br from-primary to-primary-light p-6 shadow-xl sm:block"
            aria-hidden="true"
          >
            <svg viewBox="0 0 80 100" width="80" height="100">
              <rect width="80" height="100" rx="6" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
              <circle cx="40" cy="35" r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
              <text x="40" y="70" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" opacity="0.8">
                US VISA
              </text>
              <path d="M25 85 L55 85" stroke="white" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Why use clear immigration guides?
            </h2>
            <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
              <p>
                U.S. visa applications involve complex forms, strict deadlines,
                and constantly changing rules. A single mistake can delay your
                case by months or lead to a denial.
              </p>
              <p>
                Our guides break down each visa type into plain language —
                eligibility, step-by-step processes, fees, and timelines — so
                you know exactly what to expect before you start.
              </p>
            </div>
            <Link href="/about" className="btn-primary mt-8">
              Read more
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ConsultantCharacter />
        </div>
      </div>
    </section>
  );
}

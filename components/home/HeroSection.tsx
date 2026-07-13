import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import HotAirBalloon from "@/components/illustrations/HotAirBalloon";
import AirplaneIllustration from "@/components/illustrations/AirplaneIllustration";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-waves pb-16 pt-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          {/* Left balloon */}
          <div className="hidden lg:flex justify-end pr-4">
            <div className="animate-float-slow">
              <HotAirBalloon size="lg" />
            </div>
          </div>

          {/* Center content */}
          <div className="relative z-10 mx-auto max-w-2xl text-center lg:col-start-2">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-[var(--shadow-card)] backdrop-blur-sm">
              <div className="flex -space-x-2">
                {["#7c3aed", "#6366f1", "#f97316", "#5b21b6"].map((color, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-text">
                10+ Visa Guides Available
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-[3.25rem]">
              Your Dream Country Awaits
              <br />
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Let&apos;s Make It Happen.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base text-text-muted sm:text-lg">
              {siteConfig.tagline} Explore clear, step-by-step guides for U.S.
              work visas, student visas, and green card pathways.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#visa-categories" className="btn-primary">
                Get Started
              </Link>
              <Link href="/about" className="btn-outline">
                How It Works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right airplane */}
          <div className="hidden lg:flex justify-start pl-4">
            <AirplaneIllustration />
          </div>
        </div>

        {/* Mobile illustrations */}
        <div className="mt-8 flex items-end justify-between px-4 lg:hidden">
          <div className="animate-float-slow scale-75 origin-bottom-left">
            <HotAirBalloon size="sm" />
          </div>
          <div className="scale-75 origin-bottom-right">
            <AirplaneIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

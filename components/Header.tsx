"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navSections } from "@/lib/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg transition-[border-color] duration-300 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1120px] items-center justify-between px-6 md:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 font-heading text-[1.55rem] font-medium tracking-tight text-ink"
        >
          Finovly<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navSections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-ink/70 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            href="/calculators"
            className="hidden items-center rounded-[var(--radius)] bg-navy px-4 py-2 text-[0.85rem] font-semibold text-white transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Free calculators
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] text-ink transition-colors hover:bg-soft lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-[4.5rem] z-50 border-b border-line bg-bg px-6 pb-8 pt-4 shadow-[0_20px_40px_-24px_rgba(20,38,30,0.5)] lg:hidden"
        >
          <nav className="flex flex-col divide-y divide-line" aria-label="Mobile">
            {navSections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 font-heading text-lg text-ink transition-colors hover:text-accent"
              >
                {item.label}
                <span className="index-num">→</span>
              </Link>
            ))}
          </nav>
          <Link
            href="/calculators"
            onClick={() => setOpen(false)}
            className="btn mt-6 w-full"
          >
            Free calculators
          </Link>
        </div>
      )}
    </header>
  );
}

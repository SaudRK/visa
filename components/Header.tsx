"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navSections, siteConfig } from "@/lib/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-bg">
      <div className="page-shell flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-base font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0 lg:flex">
          {navSections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-l-2 border-ink px-3 py-2 text-sm font-semibold hover:bg-ink hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/calculators"
            className="btn hidden !min-h-9 !px-3 !text-xs sm:inline-flex"
          >
            Calculators
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border-2 border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="font-mono text-xs font-bold">
              {open ? "X" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-[var(--header-h)] z-50 border-b-2 border-ink bg-bg lg:hidden"
        >
          <nav className="page-shell flex flex-col py-2" aria-label="Mobile">
            {navSections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink/20 py-3.5 text-sm font-bold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/calculators"
              className="btn mt-3 mb-3"
              onClick={() => setOpen(false)}
            >
              Calculators
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

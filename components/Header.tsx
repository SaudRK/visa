"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { href: "/#find-path", label: "Paths" },
  { href: "/#popular", label: "Guides" },
  { href: "/#journeys", label: "Journeys" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="page-shell flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/#find-path" className="btn btn-signal hidden sm:inline-flex">
            Find path
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="flex w-4 flex-col gap-1">
              <span className="block h-0.5 w-full bg-ink" />
              <span className="block h-0.5 w-full bg-ink" />
              <span className="block h-0.5 w-3 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg lg:hidden"
        >
          <nav className="page-shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#find-path"
              className="btn btn-signal mt-3"
              onClick={() => setOpen(false)}
            >
              Find path
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

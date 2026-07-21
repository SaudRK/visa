"use client";

import { useEffect } from "react";

const SELECTOR =
  ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";

/**
 * Reveals elements as they scroll into view. Uses an IntersectionObserver,
 * plus a manual scroll/resize position check as a fail-safe so nothing can
 * get stuck hidden (e.g. the last section at the very bottom of the page).
 * If JS is unavailable, a <noscript> style in the root layout keeps the
 * content visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (els.length === 0) return;

    const reveal = (el: Element) => el.classList.add("visible");

    // Fail-safe: reveal anything already within (or past the top of) the viewport.
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const el of els) {
        if (el.classList.contains("visible")) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) reveal(el);
      }
    };

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      els.forEach((el) => observer!.observe(el));
    } else {
      els.forEach(reveal);
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Seamless money rain that fades in when its section scrolls into view.
 * Two tiled, transparent bill layers drift downward at different speeds
 * for depth. Purely decorative — sits behind content (z-0) and is inert
 * to pointer / assistive tech.
 */
export default function MoneyRain({ soft = false }: { soft?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [raining, setRaining] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setRaining(entry.isIntersecting),
      { threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`money-rain ${soft ? "money-rain--soft" : ""} ${raining ? "raining" : ""}`}
    >
      <div className="money-layer money-layer-b" />
      <div className="money-layer money-layer-a" />
    </div>
  );
}

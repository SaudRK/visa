"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const SAMPLES = 140; // points sampled along the flight path
const CYCLES = 3; // full left-right oscillations down the page

/**
 * A single plane that flies from the top of the page to the bottom as you
 * scroll, weaving left → right → left on a smooth sine path, trailing a
 * contrail that grows behind it. Lives in an absolute layer at z-0 so it
 * always sits behind the page content (z-10). Decorative and inert.
 */
export default function AirplaneTrail() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => setMounted(true), []);

  // Measure the layer (full page height) and keep it current on resize.
  useEffect(() => {
    if (!mounted) return;
    const measure = () => {
      const el = ref.current;
      if (el) setSize({ w: el.offsetWidth, h: el.offsetHeight });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [mounted]);

  // Map scroll position within the layer to flight progress [0, 1].
  useEffect(() => {
    if (!mounted) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = -rect.top;
        setProgress(total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mounted, size.h]);

  // Build the serpentine path (px) + cumulative lengths for the growing trail.
  const { d, points, lengths, totalLen } = useMemo(() => {
    const { w, h } = size;
    const margin = Math.max(48, w * 0.09);
    const amp = Math.max(0, (w - margin * 2) / 2);
    const midX = w / 2;
    const pts: { x: number; y: number }[] = [];
    const lens: number[] = [0];
    let path = "";
    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;
      const x = midX + Math.sin(t * CYCLES * Math.PI * 2) * amp;
      const y = t * h;
      pts.push({ x, y });
      path += i === 0 ? `M ${x.toFixed(1)},${y.toFixed(1)}` : ` L ${x.toFixed(1)},${y.toFixed(1)}`;
      if (i > 0) {
        const dx = x - pts[i - 1].x;
        const dy = y - pts[i - 1].y;
        lens.push(lens[i - 1] + Math.hypot(dx, dy));
      }
    }
    return { d: path, points: pts, lengths: lens, totalLen: lens[lens.length - 1] || 0 };
  }, [size]);

  const { w, h } = size;

  if (!mounted || w === 0 || h === 0) {
    return <div ref={ref} className="airplane-layer" aria-hidden="true" />;
  }

  const idx = Math.min(SAMPLES, Math.max(0, Math.round(progress * SAMPLES)));
  const cur = points[idx];
  const prev = points[Math.max(0, idx - 2)];
  const next = points[Math.min(SAMPLES, idx + 2)];
  const angle = (Math.atan2(next.y - prev.y, next.x - prev.x) * 180) / Math.PI;
  const traveled = lengths[idx];

  return (
    <div ref={ref} className="airplane-layer" aria-hidden="true">
      <svg className="airplane-svg" width={w} height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <path d={d} className="trail-guide" />
        <path
          d={d}
          className="trail-traveled"
          style={{ strokeDasharray: `${traveled} ${totalLen}` }}
        />
        <g transform={`translate(${cur.x}, ${cur.y}) rotate(${angle})`}>
          <g transform="scale(1.3)">
            <circle className="airplane-glow" cx="-16" cy="0" r="7" />
            <path
              className="airplane-body"
              d="M22,0 L3,-2.4 L-3,-2.4 L-5,-11 L-8.5,-11 L-7,-2.4 L-15,-2.4 L-18,-7 L-20.5,-7 L-19,-2 L-21,0 L-19,2 L-20.5,7 L-18,7 L-15,2.4 L-7,2.4 L-8.5,11 L-5,11 L-3,2.4 L3,2.4 Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

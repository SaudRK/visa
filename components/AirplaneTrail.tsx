"use client";

import { useEffect, useRef, useCallback } from "react";

const SAMPLES = 300;
const CYCLES = 3;
const ANGLE_WINDOW = 8; // samples to look ahead/behind for angle smoothing

/**
 * Scroll-driven airplane that weaves down the page on a sine path.
 *
 * KEY DESIGN: NO LERP. The airplane position is mapped 1:1 to scroll
 * progress every frame. "Smoothness" comes from sub-pixel interpolation
 * along a high-resolution path (300 samples), not from artificial delay.
 * A lerp always introduces visible lag — the plane chases the scroll and
 * catches up in decaying steps, which reads as stuttering.
 *
 * z-30: above page content (z-10), below sticky header (z-50).
 */
export default function AirplaneTrail() {
  const layerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);

  const stateRef = useRef({
    progress: 0,          // current scroll progress [0, 1]
    lastRendered: -1,     // avoid redundant DOM writes
    w: 0,
    h: 0,
    pathD: "",
    points: [] as { x: number; y: number }[],
    lengths: [] as number[],
    totalLen: 0,
    rafId: 0,
    active: true,
    // Smoothed angle to prevent jitter on direction changes
    smoothAngle: 0,
  });

  // Build the sine-wave flight path
  const buildPath = useCallback((w: number, h: number) => {
    const margin = Math.max(48, w * 0.09);
    const amp = Math.max(0, (w - margin * 2) / 2);
    const midX = w / 2;
    const pts: { x: number; y: number }[] = [];
    const lens: number[] = [0];

    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;
      const x = midX + Math.sin(t * CYCLES * Math.PI * 2) * amp;
      const y = t * h;
      pts.push({ x, y });
      if (i > 0) {
        const dx = x - pts[i - 1].x;
        const dy = y - pts[i - 1].y;
        lens.push(lens[i - 1] + Math.hypot(dx, dy));
      }
    }

    // Build SVG path with Catmull-Rom → cubic Bézier for a silky curve
    let path = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)];
      const p1 = pts[i];
      const p2 = pts[Math.min(pts.length - 1, i + 1)];
      const p3 = pts[Math.min(pts.length - 1, i + 2)];
      const t = 6;
      const cp1x = p1.x + (p2.x - p0.x) / t;
      const cp1y = p1.y + (p2.y - p0.y) / t;
      const cp2x = p2.x - (p3.x - p1.x) / t;
      const cp2y = p2.y - (p3.y - p1.y) / t;
      path += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    }

    return { d: path, points: pts, lengths: lens, totalLen: lens[lens.length - 1] || 0 };
  }, []);

  // ── Animation loop: reads scroll progress, writes DOM ──
  useEffect(() => {
    const s = stateRef.current;
    s.active = true;

    const tick = () => {
      if (!s.active) return;
      s.rafId = requestAnimationFrame(tick);

      const { points, lengths, totalLen, progress } = s;
      if (points.length === 0 || !trailRef.current || !planeRef.current) return;

      // Skip DOM write if progress hasn't changed (within float epsilon)
      if (Math.abs(progress - s.lastRendered) < 1e-7) return;
      s.lastRendered = progress;

      // ── Sub-pixel position interpolation ──
      const rawIdx = progress * SAMPLES;
      const lo = Math.max(0, Math.min(SAMPLES - 1, Math.floor(rawIdx)));
      const hi = Math.min(SAMPLES, lo + 1);
      const frac = rawIdx - lo;

      const curX = points[lo].x + (points[hi].x - points[lo].x) * frac;
      const curY = points[lo].y + (points[hi].y - points[lo].y) * frac;

      // ── Angle: computed from a wider window for steady rotation ──
      const aLo = Math.max(0, lo - ANGLE_WINDOW);
      const aHi = Math.min(SAMPLES, hi + ANGLE_WINDOW);
      const rawAngle =
        (Math.atan2(
          points[aHi].y - points[aLo].y,
          points[aHi].x - points[aLo].x,
        ) * 180) / Math.PI;

      // Exponential smoothing on the angle to eliminate rotation jitter
      // (0.25 = responsive but no flicker)
      s.smoothAngle += (rawAngle - s.smoothAngle) * 0.25;

      // ── Trail dash length ──
      const traveled = lengths[lo] + (lengths[hi] - lengths[lo]) * frac;
      trailRef.current.style.strokeDasharray = `${traveled} ${totalLen}`;

      // ── Plane transform ──
      planeRef.current.setAttribute(
        "transform",
        `translate(${curX.toFixed(1)}, ${curY.toFixed(1)}) rotate(${s.smoothAngle.toFixed(1)})`,
      );
    };

    s.rafId = requestAnimationFrame(tick);
    return () => {
      s.active = false;
      cancelAnimationFrame(s.rafId);
    };
  }, []);

  // ── Measure + rebuild path on mount / resize ──
  useEffect(() => {
    const s = stateRef.current;
    const layer = layerRef.current;
    if (!layer) return;

    const measure = () => {
      const w = layer.offsetWidth;
      const h = layer.offsetHeight;
      if (w === s.w && h === s.h) return;
      s.w = w;
      s.h = h;

      const { d, points, lengths, totalLen } = buildPath(w, h);
      s.pathD = d;
      s.points = points;
      s.lengths = lengths;
      s.totalLen = totalLen;

      const svg = svgRef.current;
      if (svg) {
        svg.setAttribute("width", String(w));
        svg.setAttribute("height", String(h));
        svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      }
      svg
        ?.querySelectorAll("path.trail-guide, path.trail-traveled")
        .forEach((p) => p.setAttribute("d", d));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(layer);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [buildPath]);

  // ── Scroll → progress (direct write, no rAF gate) ──
  useEffect(() => {
    const s = stateRef.current;
    const layer = layerRef.current;
    if (!layer) return;

    const onScroll = () => {
      const rect = layer.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      s.progress = total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={layerRef} className="airplane-layer" aria-hidden="true">
      <svg ref={svgRef} className="airplane-svg" preserveAspectRatio="none">
        <path d="" className="trail-guide" />
        <path d="" className="trail-traveled" ref={trailRef} />
        <g ref={planeRef} transform="translate(0,0) rotate(0)">
          <g transform="scale(1.5)">
            <circle className="airplane-halo" cx="-14" cy="0" r="18" />
            <circle className="airplane-glow" cx="-14" cy="0" r="9" />
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

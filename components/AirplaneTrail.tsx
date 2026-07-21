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

  // ── Responsive Physics & Path Generation ──
  // We use useMemo here but it's driven by state so it only recalculates on resize
  const buildPath = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const cycles = isMobile ? 1.5 : CYCLES;
    
    // Reduce samples on mobile for better performance on older devices
    const currentSamples = isMobile ? Math.floor(SAMPLES / 1.5) : SAMPLES;
    
    const margin = isMobile ? Math.max(32, w * 0.15) : Math.max(48, w * 0.09);
    const amp = Math.max(0, (w - margin * 2) / 2);
    const midX = w / 2;
    const pts: { x: number; y: number }[] = [];
    const lens: number[] = [0];

    // Pre-calculate constants
    const cycleMult = cycles * Math.PI * 2;

    for (let i = 0; i <= currentSamples; i++) {
      const t = i / currentSamples;
      const x = midX + Math.sin(t * cycleMult) * amp;
      const y = t * h;
      pts.push({ x, y });
      if (i > 0) {
        const dx = x - pts[i - 1].x;
        const dy = y - pts[i - 1].y;
        lens.push(lens[i - 1] + Math.hypot(dx, dy));
      }
    }

    let path = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    const tension = 6;
    
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)];
      const p1 = pts[i];
      const p2 = pts[Math.min(pts.length - 1, i + 1)];
      const p3 = pts[Math.min(pts.length - 1, i + 2)];
      
      const cp1x = p1.x + (p2.x - p0.x) / tension;
      const cp1y = p1.y + (p2.y - p0.y) / tension;
      const cp2x = p2.x - (p3.x - p1.x) / tension;
      const cp2y = p2.y - (p3.y - p1.y) / tension;
      path += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    }

    return { 
      d: path, 
      points: pts, 
      lengths: lens, 
      totalLen: lens[lens.length - 1] || 0,
      samples: currentSamples
    };
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

      // Skip DOM write if progress hasn't changed enough
      // Increased threshold slightly for better performance on old devices
      if (Math.abs(progress - s.lastRendered) < 0.0001) return;
      s.lastRendered = progress;

      // The actual sample count might be different than the global constant due to mobile optimization
      const currentSamples = points.length - 1;

      // ── Sub-pixel position interpolation ──
      const rawIdx = progress * currentSamples;
      const lo = Math.max(0, Math.min(currentSamples - 1, Math.floor(rawIdx)));
      const hi = Math.min(currentSamples, lo + 1);
      const frac = rawIdx - lo;

      const pLo = points[lo];
      const pHi = points[hi];
      const curX = pLo.x + (pHi.x - pLo.x) * frac;
      const curY = pLo.y + (pHi.y - pLo.y) * frac;

      // ── Angle: computed from a wider window for steady rotation ──
      const aLo = Math.max(0, lo - ANGLE_WINDOW);
      const aHi = Math.min(currentSamples, hi + ANGLE_WINDOW);
      const pALo = points[aLo];
      const pAHi = points[aHi];
      
      const rawAngle = (Math.atan2(pAHi.y - pALo.y, pAHi.x - pALo.x) * 180) / Math.PI;

      // Exponential smoothing on the angle
      s.smoothAngle += (rawAngle - s.smoothAngle) * 0.25;

      // ── Trail dash length ──
      const traveled = lengths[lo] + (lengths[hi] - lengths[lo]) * frac;

      // ── Batch DOM Updates ──
      // Using fast style updates and transforms
      trailRef.current.style.strokeDasharray = `${traveled.toFixed(1)} ${totalLen.toFixed(1)}`;
      planeRef.current.style.transform = `translate(${curX.toFixed(1)}px, ${curY.toFixed(1)}px) rotate(${s.smoothAngle.toFixed(1)}deg)`;
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

    let timeoutId: number;

    const updatePath = () => {
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
        
        // Update paths
        const guide = svg.querySelector('.trail-guide');
        const traveled = trailRef.current;
        if (guide) guide.setAttribute("d", d);
        if (traveled) traveled.setAttribute("d", d);
      }
    };

    // Debounced measure for performance
    const measure = () => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
      timeoutId = window.requestAnimationFrame(updatePath);
    };

    // Initial run without debounce
    updatePath();
    
    const ro = new ResizeObserver(measure);
    ro.observe(layer);
    window.addEventListener("resize", measure, { passive: true });
    
    return () => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
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
        <g className="airplane-group" ref={planeRef} style={{ transform: 'translate(0px, 0px) rotate(0deg)' }}>
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

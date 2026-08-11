"use client";

import { useEffect, useRef, useState } from "react";
import { readout } from "@/lib/flightPath";
import type { Approach } from "./approachScene";

/*
  ─────────────────────────────────────────────────────────────────────────────
  APPROACH PLATE — the scroll-driven arrival

  The homepage read as one continuous descent: cruise at the masthead, top of
  descent over the orientation, through cloud at the two tinted bands, a banked
  base turn, final approach down the left margin, and touchdown under the
  colophon. The readout counts the altitude down with it and ends on "Settled",
  which is the word the site is named for.

  This component owns none of that motion. It owns the three decisions that keep
  it from costing anything:

    1. WHETHER to load at all. Small screens, reduced motion, data saver and
       low-memory devices never fetch three.js or the model.
    2. WHEN to load. Only once the browser is idle, so it cannot compete with
       the page's own content for bandwidth or main thread.
    3. HOW MUCH to run. The render loop exists only while the aircraft is
       actually moving, and stops when it settles or the tab is hidden.

  Everything on this page that matters to a search engine or a reader without
  JavaScript is untouched server-rendered HTML. This mounts nothing on the
  server, contributes no markup to the document that carries meaning, and is
  hidden from assistive technology.
  ─────────────────────────────────────────────────────────────────────────────
*/

/**
 * Whether this visitor should get the approach at all.
 *
 * Every clause is a refusal to spend someone else's battery or data on
 * decoration. The width gate is not only about screen size: on a phone the
 * aircraft would spend the whole flight behind body copy, because the layout
 * has no margins left to fly in.
 */
function shouldFly(): boolean {
  if (typeof window === "undefined") return false;
  if (!window.matchMedia("(min-width: 1024px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return false;
  /* A pointer that cannot hover is a touch device at a desktop width — a
     tablet. Same argument as the width gate, different signal. */
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
    return false;

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
    deviceMemory?: number;
  };
  if (nav.connection?.saveData) return false;
  if (nav.connection?.effectiveType && /2g/.test(nav.connection.effectiveType))
    return false;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) return false;

  return true;
}

export default function ApproachPlate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [armed, setArmed] = useState(false);
  const [flying, setFlying] = useState(false);
  const [progress, setProgress] = useState(0);

  /* Arm on idle, not on mount. requestIdleCallback is the difference between
     "loads after the page is usable" and "competes with it". */
  useEffect(() => {
    if (!shouldFly()) return;

    const idle = window.requestIdleCallback;
    if (!idle) {
      const timer = window.setTimeout(() => setArmed(true), 1200);
      return () => window.clearTimeout(timer);
    }
    const handle = idle(() => setArmed(true), { timeout: 2500 });
    return () => window.cancelIdleCallback(handle);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let approach: Approach | null = null;
    let frame = 0;
    let live = true;

    /*
      Two values, not one. `target` is where the scroll says the aircraft should
      be; `shown` is where it currently is, and it eases toward the target
      rather than snapping to it.

      This is the whole reason the motion reads as an aircraft. Scroll is jumpy
      — wheel notches, trackpad flicks, keyboard PageDown — and an object pinned
      1:1 to it twitches. Easing gives the aircraft inertia, which is both what
      a real one has and what makes an interrupted scroll resolve smoothly
      instead of snapping: the motion always continues from where it actually
      is, never from where a previous animation was headed.
    */
    let target = 0;
    let shown = 0;

    /*
      The flight is mapped to the homepage's content, not to the document.

      Those are different: the footer is roughly a screen tall, so scrolling to
      the true bottom of the document would spend the last stretch of the
      approach behind an opaque navy block — touchdown, the one moment the whole
      thing is built around, would happen out of sight. Ending at the stage's
      bottom edge means the aircraft lands exactly as the colophon comes fully
      into view, which is also where the page's argument ends.

      Geometry is cached and recomputed on resize rather than measured per
      scroll event: getBoundingClientRect forces layout, and doing that on every
      wheel notch is how a scroll handler starts costing frames.
    */
    let flightEnd = 0;

    const remeasure = () => {
      const stage = document.querySelector<HTMLElement>(
        "[data-approach-stage]",
      );
      if (stage) {
        const rect = stage.getBoundingClientRect();
        flightEnd = rect.top + window.scrollY + rect.height - window.innerHeight;
      } else {
        flightEnd = document.documentElement.scrollHeight - window.innerHeight;
      }
    };

    const measure = () => {
      target =
        flightEnd > 0 ? Math.min(Math.max(window.scrollY / flightEnd, 0), 1) : 0;
    };

    /*
      Time constant, in seconds, for the ease toward the scroll position — the
      aircraft covers about 63% of the remaining distance every 120ms.

      Stated as a time rather than as a per-frame fraction on purpose. A fixed
      `shown += remaining * 0.12` per frame is really a statement about the
      display: it settles twice as fast on a 120Hz panel as on a 60Hz one, and
      crawls on anything dropping frames. Integrating against the real elapsed
      time makes the motion identical everywhere.
    */
    const TAU = 0.12;
    let last = 0;

    const tick = (now: number) => {
      frame = 0;
      if (!live || !approach) return;

      const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
      last = now;

      /* Critically damped: no overshoot. An airliner on an approach that
         bounced past its position and came back would be alarming. */
      shown += (target - shown) * (1 - Math.exp(-dt / TAU));
      const settled = Math.abs(target - shown) < 0.0002;
      if (settled) shown = target;

      approach.setProgress(shown);
      setProgress(shown);

      /* The loop exists only while there is movement left to render. At rest
         this component costs one scroll listener and nothing else. */
      if (!settled && !document.hidden) frame = requestAnimationFrame(tick);
    };

    const wake = () => {
      measure();
      if (!frame && !document.hidden) {
        /* Reset the clock: a loop that restarts after a long pause must not
           integrate the whole gap as one step. */
        last = 0;
        frame = requestAnimationFrame(tick);
      }
    };

    const relayout = () => {
      remeasure();
      wake();
    };

    import("./approachScene")
      .then(({ createApproach }) => {
        if (!live) return;
        return createApproach(canvas).then((instance) => {
          if (!live) return instance.dispose();
          approach = instance;
          remeasure();
          measure();
          /* Enter already at the reader's position. Someone who arrived by deep
             link or restored scroll should find the aircraft where it belongs on
             the route, not watch it fly in from cruise to catch up. */
          shown = target;
          instance.setProgress(shown);
          setProgress(shown);
          setFlying(true);
        });
      })
      .catch(() => {
        /* A failed WebGL context or a missing model must never take the page
           with it. The approach is an enhancement; its absence is a valid
           state, and the readout stays hidden because `flying` never flips. */
      });

    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", relayout, { passive: true });
    document.addEventListener("visibilitychange", wake);

    return () => {
      live = false;
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", relayout);
      document.removeEventListener("visibilitychange", wake);
      approach?.dispose();
    };
  }, [armed]);

  if (!armed) return null;

  const { phase, altitude } = readout(progress);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="approach-canvas"
        aria-hidden="true"
        data-flying={flying ? "true" : undefined}
      />
      {/*
        The instrument. A plate without its annotations is just a picture of an
        aeroplane — the altitude counting down is what turns the motion into a
        measurement, and it is how the aircraft's position stays legible while
        it is behind a tinted band.

        Purely decorative: aria-hidden, inert, and carrying no information that
        is not already obvious from the page itself.
      */}
      <div className="approach-readout" aria-hidden="true" data-flying={flying ? "true" : undefined}>
        <span className="approach-readout-alt">{altitude}</span>
        <span className="approach-readout-rule" />
        <span>{phase}</span>
      </div>
    </>
  );
}

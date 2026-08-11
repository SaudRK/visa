"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export interface DeckItem {
  href: string;
  label: string;
  meta: string;
}

/*
  THE DECK — the homepage's one piece of real 3D.

  The argument the homepage has to make is that settling in the United States
  means working through a stack of separate systems, one at a time. So the
  systems are drawn as a stack: six filed sheets in real CSS perspective, each
  one a route. Hovering or focusing a sheet pulls it forward out of the stack,
  which is the same physical gesture as pulling a file — the interaction and the
  metaphor are the same motion.

  It is transform-and-opacity only, so it composites on the GPU and never
  touches layout. No WebGL, no canvas, no particles: a stack of paper is the
  honest visual for this product, and CSS draws it in a few hundred bytes.

  Accessibility: it is a labelled <nav> of ordinary links in reading order, so
  it tabs and reads exactly like the list it is. Focus lifts the same sheet that
  hover does. Under `prefers-reduced-motion` the pointer tilt is never wired up
  and the stack stands at a fixed editorial angle.
*/

const STRIP = 76; // sheet height in px
const OFFSET = 64; // vertical step between sheets — 12px of visible edge
const DEPTH = 28; // z-recession per sheet

export default function HomeDeck({ items }: { items: DeckItem[] }) {
  const deckRef = useRef<HTMLUListElement>(null);
  const frame = useRef<number | null>(null);
  /*
    Resolved on the first pointer move rather than in an effect: the answer is
    only ever needed once a pointer exists, and computing it lazily keeps this
    component free of mount-time state.
  */
  const tiltAllowed = useRef<boolean | null>(null);

  const canTilt = () => {
    if (tiltAllowed.current === null) {
      tiltAllowed.current =
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        window.matchMedia("(pointer: fine)").matches;
    }
    return tiltAllowed.current;
  };

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!deckRef.current || !canTilt()) return;
      const stage = e.currentTarget.getBoundingClientRect();
      // −1..1 from the stage centre.
      const nx = ((e.clientX - stage.left) / stage.width - 0.5) * 2;
      const ny = ((e.clientY - stage.top) / stage.height - 0.5) * 2;

      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const el = deckRef.current;
        if (!el) return;
        // Small angles: enough to read as dimensional, not enough to distort text.
        el.style.setProperty("--deck-ry", `${(-9 + nx * 5).toFixed(2)}deg`);
        el.style.setProperty("--deck-rx", `${(4 - ny * 3.5).toFixed(2)}deg`);
      });
    },
    []
  );

  const resetTilt = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    const el = deckRef.current;
    if (!el) return;
    el.style.removeProperty("--deck-ry");
    el.style.removeProperty("--deck-rx");
  }, []);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    []
  );

  return (
    <div
      className="deck-stage select-none"
      onPointerMove={onPointerMove}
      onPointerLeave={resetTilt}
    >
      <nav aria-label="The systems you need to navigate">
        <ul
          ref={deckRef}
          className="deck list-none"
          style={{ height: (items.length - 1) * OFFSET + STRIP }}
        >
          {items.map((item, i) => (
            <li
              key={item.href}
              className="deck-plane inset-x-0"
              style={
                {
                  top: i * OFFSET,
                  height: STRIP,
                  ["--z" as string]: `${-i * DEPTH}px`,
                  // Nearer sheets paint over further ones.
                  zIndex: items.length - i,
                } as React.CSSProperties
              }
            >
              <Link
                href={item.href}
                className="flex h-full items-center gap-4 px-4 sm:px-5"
              >
                <span className="index-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-[1.24rem] leading-tight tracking-[-0.02em] text-ink">
                    {item.label}
                  </span>
                  <span className="mono-label mt-0.5 block truncate">
                    {item.meta}
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-line-strong"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

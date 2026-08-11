"use client";

import dynamic from "next/dynamic";
import { useScrollReveal } from "./useScrollReveal";

/*
  The approach is client-only and deliberately not server-rendered.

  `ssr: false` is doing real work here rather than satisfying a bundler: the
  component's entire job is to decide, from things only a browser knows — screen
  width, pointer type, motion preference, data saver, device memory — whether to
  fetch three.js at all. Rendering a placeholder on the server would ship markup
  for a scene most visitors are never going to be given.

  The consequence that matters: every word on this page is still server-rendered
  HTML from app/page.tsx. Nothing a crawler or a reader without JavaScript needs
  passes through here.
*/
const ApproachPlate = dynamic(() => import("./ApproachPlate"), { ssr: false });

/**
 * Client wrapper for the homepage. Two jobs: run the scroll-reveal observer for
 * the `.reveal` / `.stagger-children` groups, and host the scroll-driven
 * approach behind the content.
 *
 * The wrapper element is not decoration. It is the stacking context the flight
 * sits behind (see `.approach-stage` in globals.css) and the element whose
 * height defines the length of the approach — the aircraft touches down as this
 * element's bottom edge reaches the bottom of the viewport, so the landing lands
 * on the colophon rather than behind the footer.
 */
export default function HomeShell({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="approach-stage" data-approach-stage>
      <ApproachPlate />
      {children}
    </div>
  );
}

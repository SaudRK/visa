"use client";

import { useScrollReveal } from "./useScrollReveal";
import AirplaneTrail from "./AirplaneTrail";

/**
 * Client shell for the home page: establishes the stacking context for the
 * full-page airplane trail (behind everything) and wires up scroll reveals.
 * Page content is rendered above the trail at z-10.
 */
export default function HomeShell({ children }: { children: React.ReactNode }) {
  useScrollReveal();

  return (
    <div className="relative">
      <AirplaneTrail />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

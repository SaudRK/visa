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
      {/* Airplane trail: z-0 = behind content (z-10) and header (z-50) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AirplaneTrail />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

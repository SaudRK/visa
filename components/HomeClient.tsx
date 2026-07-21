"use client";

import { useScrollReveal } from "./useScrollReveal";
import AirplaneTrail from "./AirplaneTrail";
import FloatingMoney from "./FloatingMoney";

export default function HomeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollReveal();

  return (
    <div className="relative">
      {/* Airplane trail: z-0 = behind content (z-10) and header (z-50) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AirplaneTrail />
      </div>

      {/* Floating money in the pillars / send-money area */}
      <div className="absolute pointer-events-none z-0 overflow-hidden" style={{ top: "60%", left: 0, right: 0, height: "40%" }}>
        <FloatingMoney />
      </div>

      {/* Actual page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

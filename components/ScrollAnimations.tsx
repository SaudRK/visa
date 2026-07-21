"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function ScrollAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollReveal();
  return <>{children}</>;
}

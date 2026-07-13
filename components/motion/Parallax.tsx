"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const ParallaxContext = createContext(0);

export function useScrollY() {
  return useContext(ParallaxContext);
}

export default function ParallaxProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const value = useMemo(() => scrollY, [scrollY]);

  return (
    <ParallaxContext.Provider value={value}>{children}</ParallaxContext.Provider>
  );
}

interface ParallaxLayerProps {
  speed?: number;
  className?: string;
  children: ReactNode;
}

export function ParallaxLayer({
  speed = 0.2,
  className = "",
  children,
}: ParallaxLayerProps) {
  const scrollY = useScrollY();

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(0, ${scrollY * speed}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

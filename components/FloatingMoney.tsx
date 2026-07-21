"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MoneyBill {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  image: string;
}

export default function FloatingMoney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [bills] = useState<MoneyBill[]>(() => {
    const images = ["/falling-money.png", "/falling-money1.png"];
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 6,
      size: 40 + Math.random() * 50,
      image: images[i % 2],
    }));
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="money-float-container">
      {isVisible &&
        bills.map((bill) => (
          <div
            key={bill.id}
            className="money-bill"
            style={{
              left: `${bill.left}%`,
              animationDelay: `${bill.delay}s`,
              animationDuration: `${bill.duration}s`,
              width: `${bill.size}px`,
            }}
          >
            <Image
              src={bill.image}
              alt=""
              width={bill.size}
              height={bill.size}
              style={{
                width: bill.size,
                height: "auto",
                pointerEvents: "none",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
              }}
              unoptimized
            />
          </div>
        ))}
    </div>
  );
}

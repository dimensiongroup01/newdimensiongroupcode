"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import anime from "animejs";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      anime({
        targets: el,
        opacity: [0, 1],
        translateY: [24, 0],
        easing: "easeOutCubic",
        duration: 800,
        delay,
      });
    };

    // If the element is already in (or near) the viewport on mount,
    // reveal it immediately instead of waiting on the observer.
    // This is what was leaving hero/above-the-fold content stuck at opacity: 0.
    const rect = el.getBoundingClientRect();
    const alreadyInView =
      rect.top < window.innerHeight * 1.1 && rect.bottom > -100;

    if (alreadyInView) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    // Absolute last-resort safety net: if nothing has revealed this
    // element within 2s (anime.js failed to load, observer never fired,
    // etc.), force it visible via CSS class instead of leaving it blank.
    const failsafe = window.setTimeout(() => {
      setFallbackVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal ${fallbackVisible ? "reveal-fallback-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
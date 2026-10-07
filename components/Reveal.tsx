"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

/**
 * Fade-up on scroll. One shared IntersectionObserver drives every Reveal on
 * the page and the animation itself is a CSS transition (see `.reveal` in
 * globals.css), so nothing measures layout or animates from JavaScript —
 * no forced reflows during page load.
 */

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  return observer;
}

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    io.observe(el);
    // Safety net: never leave content hidden if the observer doesn't fire.
    const failsafe = window.setTimeout(() => el.classList.add("is-in"), 2500);
    return () => {
      io.unobserve(el);
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

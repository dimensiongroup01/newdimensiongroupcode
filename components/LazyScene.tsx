"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { SceneVariant } from "./FinanceScene";

// three.js lives in its own chunk and is only downloaded when a live scene starts.
const FinanceScene = dynamic(() => import("./FinanceScene"), { ssr: false });

// Must match SETTLED_TIME in FinanceScene (kept as a literal so this file
// doesn't pull the three.js module into the main bundle).
const SETTLED_TIME = 4;

/* ---- first-interaction gate, shared by every scene on the page ---------- */
let interacted = false;
const waiting = new Set<() => void>();
const EVENTS = ["pointermove", "pointerdown", "touchstart", "wheel", "scroll", "keydown"] as const;

function onFirstInteraction(cb: () => void) {
  if (interacted) {
    cb();
    return () => {};
  }
  if (waiting.size === 0) {
    const fire = () => {
      interacted = true;
      EVENTS.forEach((e) => window.removeEventListener(e, fire));
      waiting.forEach((fn) => fn());
      waiting.clear();
    };
    EVENTS.forEach((e) => window.addEventListener(e, fire, { passive: true, once: true }));
  }
  waiting.add(cb);
  return () => waiting.delete(cb);
}

/**
 * 3D scene with a "facade": a pre-rendered poster of the scene shows instantly,
 * and the live WebGL scene (plus the three.js download) only starts once the
 * visitor interacts with the page and the scene is near the viewport. The live
 * scene starts at the poster's pose and fades in over it, so the swap is seamless.
 *
 * This keeps WebGL setup — the most expensive work on the page — out of the
 * initial load entirely.
 *
 * `?scene-poster` in the URL renders every scene immediately as a still with a
 * readable canvas; scripts/make-scene-posters.mjs uses it to regenerate posters.
 */
export default function LazyScene({
  variant,
  className = "",
  priority = false,
}: {
  variant: SceneVariant;
  className?: string;
  /** Above-the-fold scenes load their poster eagerly. */
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [ready, setReady] = useState(false);
  const [posterMode, setPosterMode] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("scene-poster")) {
      setPosterMode(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // poster only

    const el = ref.current;
    if (!el) return;
    let near = false;
    let wantLive = false;
    const maybeStart = () => near && wantLive && setLive(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        near = entry.isIntersecting;
        maybeStart();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    const cancel = onFirstInteraction(() => {
      wantLive = true;
      maybeStart();
    });
    return () => {
      io.disconnect();
      cancel();
    };
  }, []);

  if (posterMode) {
    return (
      <div ref={ref} aria-hidden="true" className={`relative h-full w-full ${className}`}>
        <FinanceScene variant={variant} poster />
      </div>
    );
  }

  return (
    <div ref={ref} aria-hidden="true" className={`relative h-full w-full ${className}`}>
      <img
        src={`/images/scenes/${variant}.webp`}
        alt=""
        width={900}
        height={900}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      {live && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
          <FinanceScene variant={variant} startAt={SETTLED_TIME} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Team/leadership photo that falls back to an initials tile if the image
 * can't load, so a missing file never shows a broken-image icon.
 */
export default function PersonPhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // An image that errored before hydration never fires onError in React.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    const initials = name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    return (
      <div role="img" aria-label={name} className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cobalt to-cobalt-dim">
        <span className="font-display text-5xl font-semibold text-white/90">{initials}</span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={name}
      width={720}
      height={960}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

export function useHorizontalScroll({
  ease,
  multiplier,
  minWidth = 1024, // default breakpoint
}) {
  const container = useRef(null);
  const raf = useRef(null);
  const target = useRef(0);
  const current = useRef(0);
  const isRunning = useRef(false);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

    // helper
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const animate = () => {
      const t = target.current;
      const c = current.current;
      const next = c + (t - c) * ease;
      current.current = next;
      el.scrollLeft = next;

      if (Math.abs(t - next) > 0.01) {
        raf.current = requestAnimationFrame(animate);
        isRunning.current = true;
      } else {
        el.scrollLeft = t;
        isRunning.current = false;
        raf.current = null;
      }
    };

    const startLoopIfNeeded = () => {
      if (!isRunning.current) {
        raf.current = requestAnimationFrame(animate);
        isRunning.current = true;
      }
    };

    const handleWheel = (e) => {
      if (!mediaQuery.matches) return; // disable below minWidth
      e.preventDefault();
      const delta = e.deltaY * multiplier;
      const maxScroll = el.scrollWidth - el.clientWidth;
      target.current = clamp(target.current + delta, 0, Math.max(0, maxScroll));
      startLoopIfNeeded();
    };

    const handleKey = (e) => {
      if (!mediaQuery.matches) return; // disable below minWidth
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (e.key === "ArrowRight") {
        target.current = clamp(
          target.current + el.clientWidth * 0.2,
          0,
          maxScroll,
        );
        startLoopIfNeeded();
      } else if (e.key === "ArrowLeft") {
        target.current = clamp(
          target.current - el.clientWidth * 0.2,
          0,
          maxScroll,
        );
        startLoopIfNeeded();
      }
    };

    target.current = el.scrollLeft;
    current.current = el.scrollLeft;

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [ease, multiplier, minWidth]);

  return container;
}

"use client";

import { useEffect } from "react";

import MainScroller from "./_sections/main-scroller";

export default function HomePage() {
  useEffect(() => {
    let previousWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const THRESHOLD = 1024;
      if (
        (previousWidth < THRESHOLD && currentWidth >= THRESHOLD) ||
        (previousWidth >= THRESHOLD && currentWidth < THRESHOLD)
      ) {
        window.location.reload();
      }
      previousWidth = currentWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section aria-label="Revord homepage" className="relative min-h-screen">
      <MainScroller />
    </section>
  );
}

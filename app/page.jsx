"use client";

import { useEffect } from "react";
import { useLoading } from "@/contexts/loading";

import MainScroller from "./_sections/main-scroller";
import Preloader from "./_sections/preloader";

export default function HomePage() {
  const { isLoading, onLoadingComplete } = useLoading();

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
      <div
        aria-hidden={isLoading}
        style={{
          visibility: isLoading ? "hidden" : "visible",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        <MainScroller />
      </div>

      {isLoading && <Preloader onLoadingComplete={onLoadingComplete} />}
    </section>
  );
}

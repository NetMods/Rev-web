"use client";

import { useEffect, useState } from "react";

import MainScroller from "./_sections/main-scroller";
import Preloader from "./_sections/preloader";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(
    process.env.NODE_ENV === "production",
  );

  const handleAnimationComplete = () => setIsLoading(false);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth < 1000) {
          window.location.reload();
        }
      }, 300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
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

      {isLoading && <Preloader onAnimationComplete={handleAnimationComplete} />}
    </section>
  );
}

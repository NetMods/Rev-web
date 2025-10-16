// pages/HomePage.jsx
"use client";

import { useState } from "react";

import MainScroller from "./_sections/main-scroller";
import Preloader from "./_sections/preloader";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(
    process.env.NODE_ENV !== "production",
  );

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen">
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
    </div>
  );
}

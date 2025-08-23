"use client";

import { useState } from "react";

import MainScroller from "./_sections/main-scroller";
import PreloaderSection from "./_sections/preloader-section";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <PreloaderSection onAnimationComplete={handleAnimationComplete} />
      )}
      {!isLoading && <MainScroller />}
    </>
  );
}

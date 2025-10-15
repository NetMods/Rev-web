"use client";

import { useState } from "react";

import MainScroller from "./_sections/main-scroller";
import Preloader from "./_sections/preloader";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(
    process.env.NODE_ENV === "production",
  );

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onAnimationComplete={handleAnimationComplete} />;
  }

  return <MainScroller />;
}

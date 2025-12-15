"use client";

import { useEffect } from "react";

import { Banner } from "@/components/layout/banner";
import Navbar from "@/components/layout/navbar";

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
    <section
      aria-label="Revord feature showcase"
      className="relative grid h-screen w-full min-w-[360px] grid-rows-[auto,1fr,auto]"
    >
      <header className="bg-background z-50 w-full">
        <Navbar className="blank-with-lines h-full min-h-[4.4rem]" />
      </header>

      <MainScroller className="noscrollbar z-10 h-full lg:overflow-y-hidden" />

      <footer className="bg-background z-50 w-full max-lg:hidden">
        <div className="blank-with-lines h-full min-h-[4.4rem]" />
      </footer>

      <Banner />
    </section>
  );
}

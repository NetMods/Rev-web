"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import PreloaderSection from "./_sections/preloader-section";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const revealContainerRef = useRef(null);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  useGSAP(() => {
    if (!isLoading && revealContainerRef.current) {
      gsap.from(revealContainerRef.current, {
        y: 30,
        opacity: 0,
        duration: 2,
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <PreloaderSection onAnimationComplete={handleAnimationComplete} />
      )}
      {!isLoading && (
        <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
          <div
            ref={revealContainerRef}
            className="reveal-content text-9xl font-bold"
          >
            REV INITIAL PAGE
          </div>
        </div>
      )}
    </>
  );
}

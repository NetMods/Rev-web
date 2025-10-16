import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloadMedia } from "@/hooks/usePreloadMedia";

const PreloaderSection = ({ onAnimationComplete }) => {
  const { isMobile, isTablet } = useMediaQuery();
  const { isLoading, progress } = usePreloadMedia();

  const [displayPercent, setDisplayPercent] = useState(
    Math.floor(progress * 100),
  );

  const percentAnimRef = useRef(null);

  const [visualDone, setVisualDone] = useState(false);
  const callbackCalledRef = useRef(false);

  useEffect(() => {
    const target = Math.round(progress * 100);
    if (percentAnimRef.current) {
      percentAnimRef.current.kill();
      percentAnimRef.current = null;
    }

    const proxy = { n: displayPercent };
    percentAnimRef.current = gsap.to(proxy, {
      n: target,
      duration: 0.45,
      ease: "power1.out",
      onUpdate: () => {
        setDisplayPercent(Math.floor(proxy.n));
      },
      onComplete: () => {
        setDisplayPercent(target);
      },
    });

    return () => {
      if (percentAnimRef.current) {
        percentAnimRef.current.kill();
        percentAnimRef.current = null;
      }
    };
  }, [progress]);

  const calculateDynamicScale = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const svgElement = document.querySelector(".brand-name img");
    if (!svgElement) return 1;

    const svgSize = {
      width: svgElement.naturalWidth || svgElement.width,
      height: svgElement.naturalHeight || svgElement.height,
    };

    if (!svgSize.width || !svgSize.height) {
      return 1;
    }

    const scaleX = windowWidth / svgSize.width;
    const scaleY = windowHeight / svgSize.height;
    const baseScale = Math.max(scaleX, scaleY);

    const overfillScale = baseScale * 14;

    return overfillScale;
  };

  useGSAP(() => {
    const img = document.querySelector(".brand-name img");
    if (!img) return;

    const runAnimation = () => {
      const animationTimeline = gsap.timeline({
        onComplete: () => {
          // DON'T call onAnimationComplete here — only mark visual done.
          setVisualDone(true);
        },
      });

      animationTimeline
        .fromTo(
          ".tagline-first",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "sine.out" },
        )
        .fromTo(
          ".tagline-second",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "sine.out" },
        )
        .fromTo(
          ".tagline-third",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "sine.out" },
        )
        .to(
          ".tagline-first, .tagline-second, .tagline-third",
          {
            opacity: 0,
            y: -20,
            duration: 0.8,
            stagger: 0.2,
            ease: "sine.inOut",
          },
          "+=0.5",
        )
        .fromTo(
          ".brand-name",
          { opacity: 0, y: 30, scale: 1 },
          { opacity: 1, y: 0, duration: 1, ease: "sine.out" },
          "+=0.5",
        )
        .to(
          ".brand-name",
          {
            scale: calculateDynamicScale(),
            duration: 2.5,
            ease: "power2.inOut",
          },
          "+=0.8",
        );

      animationTimeline.to(
        ".timer",
        { opacity: 1, duration: 0.6, ease: "sine.out" },
        0,
      );
    };

    if (img.complete) {
      runAnimation();
    } else {
      const onImgLoad = () => runAnimation();
      img.addEventListener("load", onImgLoad, { once: true });
      return () => img.removeEventListener("load", onImgLoad);
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (!isLoading) {
      setDisplayPercent(100);
    }
  }, [isLoading]);

  useEffect(() => {
    if (visualDone && !isLoading && !callbackCalledRef.current) {
      callbackCalledRef.current = true;
      typeof onAnimationComplete === "function" && onAnimationComplete();
    }
  }, [visualDone, isLoading, onAnimationComplete]);

  return (
    <div className="bg-foreground text-background absolute inset-0 flex size-full flex-col items-center justify-center gap-4 overflow-hidden px-4">
      <div className="brand-name absolute inline-flex w-full scale-100 items-center justify-center opacity-0">
        <img src="/rev-b.svg" alt="logo" className="max-w-none" />
      </div>

      <Tagline className="tagline-first">
        ✨ Record, annotate, and capture - all in one seamless flow.
      </Tagline>
      <Tagline className="tagline-second">
        🖊️ Don't just record your screen, tell your story with annotations.
      </Tagline>
      <Tagline className="tagline-third">
        📸 Snap. Mark. Share. The smarter way to screen record.
      </Tagline>

      <div className="timer absolute right-4 bottom-4 z-10 text-2xl text-red-800 opacity-0 md:text-4xl">
        {Math.min(100, Math.max(0, displayPercent))}%
      </div>
    </div>
  );
};

export const Tagline = ({ className, children }) => (
  <div
    className={cn(
      "w-full max-w-2xl translate-y-5 text-center text-lg font-semibold opacity-0 md:text-xl",
      className,
    )}
  >
    {children}
  </div>
);

export default PreloaderSection;

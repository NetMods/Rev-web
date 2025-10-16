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

  // Tween the displayed percent smoothly whenever progress changes
  useEffect(() => {
    const target = Math.round(progress * 100);

    // kill previous tween
    if (percentAnimRef.current) {
      percentAnimRef.current.kill();
      percentAnimRef.current = null;
    }

    // use a proxy value so we can animate numbers and call setDisplayPercent on update
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
    // we intentionally use progress as the dependency (displayPercent is captured initially)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  // Ensure we show 100 when loading completes (defensive)
  useEffect(() => {
    if (!isLoading) {
      setDisplayPercent(100);
    }
  }, [isLoading]);

  // Calculates how much to scale the brand for the dramatic zoom
  const calculateDynamicScale = () => {
    try {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const svgElement = document.querySelector(".brand-name img");
      if (!svgElement) return 1;

      const svgSize = {
        width: svgElement.naturalWidth || svgElement.width || 1,
        height: svgElement.naturalHeight || svgElement.height || 1,
      };

      const scaleX = windowWidth / svgSize.width;
      const scaleY = windowHeight / svgSize.height;
      const baseScale = Math.max(scaleX, scaleY);

      // your previous overfill factor — tweak if too aggressive
      const overfillScale = baseScale * 14;

      // guard to avoid NaN / Infinity
      if (!isFinite(overfillScale) || overfillScale <= 0) return 1;
      return Math.max(1, overfillScale);
    } catch (e) {
      return 1;
    }
  };

  // Run GSAP timeline only after loading finished (isLoading === false and progress === 1)
  useGSAP(() => {
    // Wait until all assets loaded and we reached progress 1
    if (isLoading || progress < 1) return;

    const img = document.querySelector(".brand-name img");
    if (!img) return;

    const runAnimation = () => {
      const animationTimeline = gsap.timeline({
        onComplete: () => {
          // mark visual done — onAnimationComplete will be called in effect below when both conditions are met
          setVisualDone(true);
        },
      });

      // tagline reveal sequence
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
        // fade taglines away
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
        // bring brand in
        .fromTo(
          ".brand-name",
          { opacity: 0, y: 30, scale: 1 },
          { opacity: 1, y: 0, duration: 1, ease: "sine.out" },
          "+=0.5",
        )
        // dramatic zoom
        .to(
          ".brand-name",
          {
            scale: calculateDynamicScale(),
            duration: 2.5,
            ease: "power2.inOut",
          },
          "+=0.8",
        );

      // show timer in top-level timeline at time 0
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
    // dependencies include device flags and loading state/progress already checked above
  }, [isMobile, isTablet, isLoading, progress]);

  // call onAnimationComplete only once after visual done and loading finished
  useEffect(() => {
    if (visualDone && !isLoading && !callbackCalledRef.current) {
      callbackCalledRef.current = true;
      if (typeof onAnimationComplete === "function") {
        onAnimationComplete();
      }
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

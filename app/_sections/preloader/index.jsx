import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

const PreloaderSection = ({ onAnimationComplete }) => {
  const { isMobile, isTablet } = useMediaQuery();

  const calculateDynamicScale = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const svgElement = document.querySelector(".brand-name img");
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

    // to make sure SVG fills the screen, use some random ass big number above 12
    const overfillScale = baseScale * 14;

    return overfillScale;
  };

  useGSAP(() => {
    const img = document.querySelector(".brand-name img");
    if (!img) return;

    const runAnimation = () => {
      const animationTimeline = gsap.timeline({
        onComplete: () => {
          onAnimationComplete();
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
        {
          innerText: 100,
          opacity: 1,
          duration: animationTimeline.duration(),
          ease: "linear",
          snap: { innerText: 1 },
          onUpdate: function () {
            const element = document.querySelector(".timer");
            if (element) {
              const progress = this.progress();
              element.innerText = Math.floor(progress * 100);
            }
          },
        },
        0,
      );
    };

    if (img.complete) {
      runAnimation();
    } else {
      img.onload = runAnimation;
    }
  }, [isMobile, isTablet]);

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
        0
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

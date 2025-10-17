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

    const overfillScale = baseScale * 14;

    return overfillScale;
  };

  useGSAP(() => {
    const img = document.querySelector(".brand-name img");
    if (!img) return;

    const waitForAllMedia = () => {
      const images = Array.from(document.querySelectorAll("img"));
      const videos = Array.from(document.querySelectorAll("video"));

      console.log("vides elements", videos);

      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        });
      });

      const videoPromises = videos.map((video) => {
        if (video.readyState >= 3) return Promise.resolve();
        return new Promise((resolve) => {
          const handle = () => {
            video.removeEventListener("canplaythrough", handle);
            video.removeEventListener("error", handle);
            resolve();
          };
          video.addEventListener("canplaythrough", handle);
          video.addEventListener("error", handle);
        });
      });

      return Promise.allSettled([...imagePromises, ...videoPromises]);
    };

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
        );

      animationTimeline.add(async () => {
        animationTimeline.pause();
        console.info("animation paused — waiting for all media to load");

        // Show loader animation
        await gsap
          .fromTo(
            ".loader-spinner",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
          )
          .then();

        // Start spinning animation
        const spinAnimation = gsap.to(".loader-spinner", {
          rotation: 360,
          duration: 1,
          ease: "linear",
          repeat: -1,
        });

        await waitForAllMedia();
        console.info("media loaded — resuming");

        // Stop spinning and hide loader
        spinAnimation.kill();
        await gsap
          .to(".loader-spinner", {
            opacity: 0,
            scale: 0.8,
            duration: 0.35,
            ease: "back.in(1.7)",
          })
          .then();

        animationTimeline.play();
      });

      animationTimeline
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
    };

    if (img.complete) {
      runAnimation();
    } else {
      img.onload = runAnimation;
    }
  }, [isMobile, isTablet]);

  return (
    <section
      aria-label="Loading screen"
      className="bg-foreground text-background absolute inset-0 flex size-full flex-col items-center justify-center gap-4 overflow-hidden px-4"
    >
      {/* Logo */}
      <div
        className="brand-name absolute inline-flex w-full scale-100 items-center justify-center opacity-0"
        aria-hidden="true"
      >
        <img src="/black-revord.svg" alt="Revord logo" className="max-w-none" />
      </div>

      {/* Loader Spinner */}
      <div
        className="loader-spinner absolute opacity-0"
        role="status"
        aria-label="Loading animation"
      >
        <div className="border-background/20 border-t-background h-12 w-12 rounded-full border-4" />
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
    </section>
  );
};

export const Tagline = ({ className, children }) => (
  <p
    className={cn(
      "w-full max-w-2xl translate-y-5 text-center text-lg font-semibold opacity-0 md:text-xl",
      className,
    )}
  >
    {children}
  </p>
);

export default PreloaderSection;

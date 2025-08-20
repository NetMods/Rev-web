import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const PreloaderSection = ({ onAnimationComplete }) => {
  // Media queries for responsive scaling
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });

  // Set scale based on device
  const brandNameScale = isMobile || isTablet ? 200 : 65;

  console.log(brandNameScale);

  useGSAP(() => {
    const animationTimeline = gsap.timeline({
      onComplete: () => {
        onAnimationComplete();
      },
    });

    animationTimeline
      .fromTo(
        ".tagline-first",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      )
      .fromTo(
        ".tagline-second",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      )
      .fromTo(
        ".tagline-third",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      )
      .fromTo(
        ".brand-name",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      )
      .to(
        ".tagline-first, .tagline-second, .tagline-third",
        {
          opacity: 0,
          y: -20,
          duration: 1,
          stagger: 0.2,
          ease: "power3.inOut",
        },
        "scaleAndCount",
      )
      .to(
        ".brand-name",
        {
          scale: brandNameScale,
          y: 205,
          duration: 2.5,
          delay: 0.5,
          ease: "power3.out",
        },
        "scaleAndCount",
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
            element.innerText = Math.floor(this.targets()[0].innerText);
          }
        },
      },
      0,
    );
  }, [brandNameScale]); // Re-run animation if brandNameScale changes

  return (
    <div className="absolute inset-0 flex min-h-screen w-screen flex-col items-center justify-center gap-2 bg-white px-4 text-black sm:gap-3 md:gap-4">
      <div className="timer absolute right-2 bottom-2 z-10 text-4xl text-red-800 opacity-0 sm:right-4 sm:bottom-4 sm:text-6xl md:right-6 md:bottom-6 md:text-8xl lg:text-9xl">
        0
      </div>
      <div className="brand-name flex w-full translate-y-[30px] scale-50 items-center justify-center text-center text-4xl font-bold opacity-0 sm:text-6xl md:text-8xl lg:text-9xl">
        REV
      </div>
      <div className="tagline-first w-full max-w-2xl translate-y-[20px] text-center text-base font-semibold opacity-0 sm:text-lg md:text-xl lg:text-2xl">
        ✨ Record, annotate, and capture — all in one seamless flow.
      </div>
      <div className="tagline-second w-full max-w-2xl translate-y-[20px] text-center text-base font-semibold opacity-0 sm:text-lg md:text-xl lg:text-2xl">
        🖊️ Don’t just record your screen, tell your story with annotations.
      </div>
      <div className="tagline-third w-full max-w-2xl translate-y-[20px] text-center text-base font-semibold opacity-0 sm:text-lg md:text-xl lg:text-2xl">
        📸 Snap. Mark. Share. The smarter way to screen record.
      </div>
    </div>
  );
};

export default PreloaderSection;

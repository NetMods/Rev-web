import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PreloaderSection = ({ onAnimationComplete }) => {
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
      .to(".brand-name", {
        scale: 56,
        y: 200,
        duration: 4,
        delay: 2,
        ease: "power3.out",
      })
      .set(
        ".tagline-first, .tagline-second, .tagline-third",
        { opacity: 0 },
        "<",
      );
  }, []);

  return (
    <div className="absolute inset-0 flex min-h-screen w-screen flex-col items-center justify-center gap-4 bg-white text-black">
      <div className="brand-name flex w-full translate-y-[30px] scale-50 items-center justify-center text-center text-9xl font-bold opacity-0">
        REV
      </div>
      <div className="tagline-first w-full translate-y-[20px] text-center text-2xl font-semibold opacity-0">
        ✨ Record, annotate, and capture — all in one seamless flow.
      </div>
      <div className="tagline-second w-full translate-y-[20px] text-center text-2xl font-semibold opacity-0">
        🖊️ Don’t just record your screen, tell your story with annotations.
      </div>
      <div className="tagline-third w-full translate-y-[20px] text-center text-2xl font-semibold opacity-0">
        📸 Snap. Mark. Share. The smarter way to screen record.
      </div>
    </div>
  );
};

export default PreloaderSection;

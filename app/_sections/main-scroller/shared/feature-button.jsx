import { useRef } from "react";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa6";

const FeatureButton = ({ className, title }) => {
  const firstButtonAnimationRef = useRef(null);
  const secondButtonAnimationRef = useRef(null);
  const featureButtonRef = useRef(null);

  useGSAP(() => {
    const animateButton = () => {
      gsap.to(secondButtonAnimationRef.current, {
        autoAlpha: 0,
        x: 20,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(firstButtonAnimationRef.current, {
        autoAlpha: 1,
        x: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(featureButtonRef.current, {
        x: 20,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const reverseButton = () => {
      gsap.to(secondButtonAnimationRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(firstButtonAnimationRef.current, {
        autoAlpha: 0,
        x: -20,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(featureButtonRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const button = featureButtonRef.current;
    if (button) {
      button.addEventListener("mouseenter", animateButton);
      button.addEventListener("mouseleave", reverseButton);

      return () => {
        button.removeEventListener("mouseenter", animateButton);
        button.removeEventListener("mouseleave", reverseButton);
      };
    }
  }, []);

  return (
    <div
      ref={featureButtonRef}
      className={cn("feature-button relative flex items-center p-1", className)}
    >
      <div
        ref={firstButtonAnimationRef}
        className="first-arrow 3xl:h-28 3xl:w-28 4xl:h-32 4xl:w-32 flex h-16 w-16 items-center justify-center rounded-full bg-white xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"
        style={{ opacity: 0, transform: "translateX(-20px)" }}
      >
        <FaArrowRight className="3xl:text-3xl 4xl:text-4xl text-lg text-black xl:text-xl 2xl:text-2xl" />
      </div>
      <button
        className={cn(
          "3xl:h-28 3xl:w-[28rem] 4xl:h-32 4xl:w-[32rem] 3xl:text-4xl 4xl:text-5xl flex h-16 w-64 items-center justify-center overflow-hidden rounded-full bg-white p-1 text-lg font-bold text-black xl:h-20 xl:w-80 xl:text-2xl 2xl:h-24 2xl:w-96 2xl:text-3xl",
          className,
        )}
      >
        <span className="truncate">{title}</span>
      </button>
      <div
        ref={secondButtonAnimationRef}
        className="second-arrow 3xl:h-28 3xl:w-28 4xl:h-32 4xl:w-32 flex h-16 w-16 items-center justify-center rounded-full bg-white xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"
      >
        <FaArrowRight className="3xl:text-3xl 4xl:text-4xl text-lg text-black xl:text-xl 2xl:text-2xl" />
      </div>
    </div>
  );
};

export default FeatureButton;

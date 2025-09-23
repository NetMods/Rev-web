import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRight as Arrow } from "react-icons/fa";

import { cn } from "@/lib/utils";

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
      className={cn(
        "feature-button relative flex w-full items-center py-1",
        className,
      )}
    >
      <div
        ref={firstButtonAnimationRef}
        className="first-arrow bg-foreground inline-flex h-16 w-16 items-center justify-center rounded-full"
        style={{ opacity: 0, transform: "translateX(-20px)" }}
      >
        <Arrow className="text-background text-lg" />
      </div>
      <button
        className={cn(
          "bg-foreground text-background flex h-16 max-w-80 flex-1 shrink-0 items-center justify-center overflow-hidden rounded-full p-1 text-xl font-bold lg:w-80",
          className,
        )}
      >
        {title}
      </button>
      <div
        ref={secondButtonAnimationRef}
        className="second-arrow bg-foreground flex h-16 w-16 items-center justify-center rounded-full"
      >
        <Arrow className="text-background text-lg" />
      </div>
    </div>
  );
};

export default FeatureButton;

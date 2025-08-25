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
      className={cn("feature-button relative flex p-1", className)}
    >
      <div
        ref={firstButtonAnimationRef}
        className="first-arrow flex h-28 w-28 items-center justify-center rounded-[50%] bg-white"
        style={{ opacity: 0, transform: "translateX(-20px)" }}
      >
        <FaArrowRight className="text-black" />
      </div>
      <button className="min-h-28 min-w-72 rounded-4xl bg-white p-1 text-4xl font-bold text-black">
        {title}
      </button>
      <div
        ref={secondButtonAnimationRef}
        className="second-arrow flex h-28 w-28 items-center justify-center rounded-[50%] bg-white"
      >
        <FaArrowRight className="text-black" />
      </div>
    </div>
  );
};

export default FeatureButton;

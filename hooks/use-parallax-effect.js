import { useEffect, useState } from "react";

export const useParallaxEffect = (screenRef, imageRef, textRef) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setShouldAnimate(window.innerWidth > 1024);
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    if (!shouldAnimate) return;

    const screen = screenRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bounding = entry.boundingClientRect;
          const rootBounds = entry.rootBounds;
          if (!rootBounds) return;

          const V = rootBounds.width;
          const W = bounding.width;
          const progress = (V - bounding.x) / (V + W);

          if (imageRef.current) {
            const parallaxSpeed = 0.5;
            const maxShift = 500;
            const xPos = progress * maxShift * parallaxSpeed;

            imageRef.current.style.backgroundPosition = `calc(30% + ${xPos}px) 50%`;
          }

          if (textRef?.current) {
            const amplitude = 30;
            const xMove = Math.sin(progress * Math.PI * 2) * amplitude;
            textRef.current.style.transform = `translateX(${xMove}px)`;
          }
        }
      },
      {
        root: null,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    if (screen) observer.observe(screen);

    return () => {
      if (screen) observer.unobserve(screen);
      window.removeEventListener("resize", checkWidth);
    };
  }, [shouldAnimate, screenRef, imageRef, textRef]);

  return shouldAnimate;
};

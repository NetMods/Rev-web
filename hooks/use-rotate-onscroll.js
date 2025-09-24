import { useEffect } from "react";

export const useRotateOnScroll = (screenRef, floatRef, opts) => {
  useEffect(() => {
    const screen = screenRef.current;
    if (!screen || !floatRef.current) return;

    const { start, end } = opts;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bounding = entry.boundingClientRect;
          const rootBounds = entry.rootBounds;
          if (!rootBounds) return;

          const V = rootBounds.width;
          const W = bounding.width;
          const progress = (V - bounding.x) / (V + W);

          const rotate = start + (end - start) * progress;

          floatRef.current.style.transform = `rotate(${rotate}deg)`;
        }
      },
      {
        root: null,
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      },
    );

    observer.observe(screen);

    return () => {
      observer.unobserve(screen);
    };
  }, [screenRef, floatRef]);
};

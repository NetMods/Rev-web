import { useEffect, useRef, useState } from "react";

const useStaggerAnimation = (triggerRef, listRef, threshold) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const checkWidth = () => {
      setShouldAnimate(window.innerWidth > 1024);
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    if (!shouldAnimate) {
      if (listRef.current) {
        const items = listRef.current.querySelectorAll("li");
        items.forEach((item) => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0px)";
          item.style.transition = "none";
        });
      }
      return;
    }

    const trigger = triggerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          if (listRef.current) {
            const items = listRef.current.querySelectorAll("li");
            items.forEach((item, index) => {
              item.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
              item.style.opacity = "1";
              item.style.transform = "translateX(0px)";
            });
            hasAnimated.current = true;
            observer.disconnect();
          }
        }
      },
      {
        root: null,
        threshold: threshold,
      },
    );

    // Set initial styles
    if (listRef.current) {
      const items = listRef.current.querySelectorAll("li");
      items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(100px)";
      });
    }

    if (trigger) observer.observe(trigger);

    return () => {
      if (trigger) observer.unobserve(trigger);
      window.removeEventListener("resize", checkWidth);
    };
  }, [shouldAnimate, triggerRef, listRef]);
};

export default useStaggerAnimation;

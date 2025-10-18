import { useLoading } from "@/contexts/loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useHorizontalScroll } from "@/hooks/use-horizantal-scroll";
import Navbar from "@/components/layout/navbar";

import Screen1 from "./screens/screen-1";
import Screen2 from "./screens/screen-2";
import Screen3 from "./screens/screen-3";
import Screen4 from "./screens/screen-4";
import Screen5 from "./screens/screen-5";
import Screen6 from "./screens/screen-6";
import Screen7 from "./screens/screen-7";

const MainScroller = () => {
  const { isLoading, onBackgroundReady } = useLoading();
  const container = useHorizontalScroll({
    ease: 0.05, // smaller = smoother/slower
    multiplier: 1.5, // wheel sensitivity
  });

  useGSAP(() => {
    if (isLoading) return;

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
      onComplete: () => onBackgroundReady(true),
    });

    tl.to(".dark-overlay", { opacity: 0.9 })
      .to(".grain-overlay", { opacity: 0.5 })
      .to(".bg-grad", { opacity: 1 });
  }, [isLoading, container]);

  return (
    <section aria-label="Revord feature showcase">
      <header className="relative z-10">
        <Navbar className="h-16 lg:h-32" />
      </header>

      <div
        ref={container}
        role="region"
        aria-label="Interactive feature scroller"
        className="bg-grad h-screen min-w-[250px] overflow-x-auto opacity-0 lg:flex lg:overflow-y-hidden"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          scrollbarWidth: "thin",
          WebkitOverflowScrolling: "auto",
        }}
      >
        <div
          className="dark-overlay pointer-events-none absolute inset-0 bg-black opacity-0"
          aria-hidden="true"
        />
        <div className="grain-overlay opacity-0" aria-hidden="true" />
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 />
        <Screen6 />
        <Screen7 />
      </div>
    </section>
  );
};

export default MainScroller;

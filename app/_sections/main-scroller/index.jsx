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
  const container = useHorizontalScroll({
    ease: 0.05, // smaller = smoother/slower
    multiplier: 1.5, // wheel sensitivity
  });

  return (
    <section aria-label="Revord feature showcase">
      <header className="relative z-10">
        <Navbar className="h-16 lg:h-32" />
      </header>

      <div
        ref={container}
        role="region"
        aria-label="Interactive feature scroller"
        className="h-screen min-w-[250px] overflow-x-auto lg:flex lg:overflow-y-hidden"
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
          className="pointer-events-none absolute inset-0 bg-black/90"
          aria-hidden="true"
        />
        <div className="grain-overlay opacity-50" aria-hidden="true" />

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

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
    <section aria-label="Revord feature showcase" className="lg:h-screen">
      <header className="relative z-200">
        <Navbar className="h-16" />
      </header>

      <div ref={container} className="flex h-full py-16">
        <Screen1 />
      </div>

      <footer className="relative z-200">
        <div className="blank fixed bottom-0 h-16 w-full" />
      </footer>
    </section>
  );
};

export default MainScroller;

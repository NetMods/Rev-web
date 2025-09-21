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
    <>
      <Navbar className="h-16 min-[1200px]:h-32" />

      <div
        ref={container}
        className="h-screen min-w-[250px] overflow-x-auto min-[1000px]:flex min-[1000px]:overflow-y-hidden"
        style={{
          scrollbarWidth: "thin",
          WebkitOverflowScrolling: "auto",
        }}
      >
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 />
        <Screen6 />
        <Screen7 />
      </div>
    </>
  );
};

export default MainScroller;

"use client";

import { cn } from "@/lib/utils";
import { useHorizontalScroll } from "@/hooks/use-horizantal-scroll";

import Screen1 from "./screens/screen-1";
import Screen2 from "./screens/screen-2";
import Screen3 from "./screens/screen-3";
import Screen4 from "./screens/screen-4";
import Screen5 from "./screens/screen-5";
import Screen6 from "./screens/screen-6";
import Screen7 from "./screens/screen-7";

const MainScroller = ({ className }) => {
  const container = useHorizontalScroll({
    ease: 0.05, // smaller = smoother/slower
    multiplier: 1.5, // wheel sensitivity
  });

  const DotBreak = (
    <div className="blank-with-dots mx-10 hidden h-full min-w-52 lg:block"></div>
  );

  return (
    <div
      role="region"
      aria-label="Interactive feature scroller"
      ref={container}
      className={cn("flex max-lg:flex-col", className)}
    >
      <Screen1 />
      {DotBreak}
      <Screen2 />
      <Screen3 />
      {DotBreak}
      <Screen4 />
      {DotBreak}
      <Screen5 />
      {DotBreak}
      <Screen6 />
      <Screen7 />
    </div>
  );
};

export default MainScroller;

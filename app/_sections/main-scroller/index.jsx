"use client";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import DotGrid from "@/components/shared/dotgrid";

import Screen1 from "./screens/screen-1";
import Screen2 from "./screens/screen-2";
import Screen3 from "./screens/screen-3";
import Screen4 from "./screens/screen-4";
import Screen5 from "./screens/screen-5";
import Screen6 from "./screens/screen-6";
import Screen7 from "./screens/screen-7";

const MainScroller = ({ className, container, isAnimationDone, showModal }) => {
  const DotBreak = (
    <div className="relative mx-10 hidden h-full min-w-52 lg:block">
      <DotGrid
        dotSpacing={22}
        dotBaseSize={2}
        color={"#d6d6d6"}
        backgroundColor={"#ededed"}
        maxScale={5}
        influenceRadius={125}
      />
    </div>
  );

  const { isMobile } = useMediaQuery();

  return (
    <div
      role="region"
      aria-label="Interactive feature scroller"
      ref={container}
      className={cn("main-scrollable flex max-lg:flex-col", className)}
    >
      <Screen1 />
      {isMobile && <Screen2 />}

      {isAnimationDone && (
        <>
          {DotBreak}
          {!isMobile && <Screen2 />}
          <Screen3 />
          {DotBreak}
          <Screen4 />
          {DotBreak}
          <Screen5 />
          {DotBreak}
          <Screen6 />
          <Screen7 showModal={showModal} />
        </>
      )}
    </div>
  );
};

export default MainScroller;

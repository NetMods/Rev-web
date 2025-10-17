import { useRef } from "react";

import useStaggerAnimation from "@/hooks/use-stagger-animatation";

const Screen5 = () => {
  const screenRef = useRef(null);
  const listRef = useRef(null);

  useStaggerAnimation(screenRef, listRef, 0.5);

  return (
    <div id="screen-5" ref={screenRef} className="screen relative min-w-full">
      <div className="flex h-full w-full flex-col items-center gap-4 overflow-hidden max-lg:pt-10 lg:flex-row">
        <div className="bg-foreground/10 relative h-full place-content-center">
          <div className="absolute z-20 text-4xl font-extrabold mix-blend-difference max-lg:top-0 max-lg:left-0 min-lg:-right-32 min-lg:bottom-0 lg:text-6xl">
            Video <br className="lg:hidden" /> Editor
          </div>
          <div className="overflow-hidden rounded-lg">
            <video
              src="/video-editor.mp4"
              autoPlay
              muted
              loop
              preload="auto"
              className="relative place-content-baseline"
            />
          </div>
        </div>

        <div className="flex w-full flex-col justify-center-safe overflow-auto py-10 max-md:py-28 lg:pb-20">
          <div className="mx-auto flex flex-col text-left">
            <div className="relative max-w-fit">
              <h2 className="text-foreground z-10 font-serif text-5xl font-bold lg:text-7xl">
                Precision <br /> Motion
              </h2>
              <div className="screen-3-floatingtext absolute top-1/2 left-4/6 rotate-10">
                <span className="text-md z-20 w-full transform bg-rose-600 px-2 pt-1 font-bold text-nowrap lg:pt-2 lg:text-xl">
                  Built-In Video Editor
                </span>
              </div>
            </div>
            <p className="text-md mt-7 max-w-96 lg:text-xl">
              Revord automatically applies precise zooms and pans to every mouse
              click and drag, giving you full control to edit and export your
              video in stunning, high-resolution quality.
            </p>
          </div>
        </div>

        <div className="text-foreground absolute right-30 hidden text-xl font-semibold lg:bottom-0 lg:block">
          {" "}
          02{" "}
        </div>
      </div>
    </div>
  );
};

export default Screen5;

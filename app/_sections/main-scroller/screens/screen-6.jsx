import { useRef } from "react";

import useStaggerAnimation from "@/hooks/use-stagger-animatation";

const Screen6 = () => {
  const screenRef = useRef(null);
  const listRef = useRef(null);

  useStaggerAnimation(screenRef, listRef);

  return (
    <div id="screen-6" ref={screenRef} className="screen relative min-w-full">
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden lg:flex-row">
        <div className="justify-start-safe flex flex-1 flex-col overflow-auto py-10 lg:pt-40">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-8 text-5xl font-extrabold">Image Editor</h2>
            <ul
              ref={listRef}
              className="*:border-b-foreground/50 *:hover:border-b-foreground w-full flex-1 space-y-2 text-2xl font-bold *:cursor-pointer *:border-b *:py-2 max-lg:px-2 lg:w-2/3"
            >
              <li>Auto-zoom</li>
              <li>Auto-pan</li>
              <li>Export in high quality</li>
              <li>Aesthetic Background</li>
              <li>Annotate while recording</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            backgroundImage: "url('/6.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative flex h-[50vh] w-full shrink-0 justify-center lg:h-auto lg:w-1/2 lg:shrink-0"
        />
      </div>
    </div>
  );
};

export default Screen6;

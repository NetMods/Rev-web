import { useRef } from "react";

import useStaggerAnimation from "@/hooks/use-stagger-animatation";

const Screen5 = () => {
  const screenRef = useRef(null);
  const listRef = useRef(null);

  useStaggerAnimation(screenRef, listRef, 0.5);

  return (
    <div id="screen-5" ref={screenRef} className="screen relative min-w-full">
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden lg:flex-row">
        <div
          style={{
            backgroundImage: "url('/5.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative flex h-[50vh] min-w-1/2 shrink-0 justify-center lg:h-auto"
        />

        <div className="flex w-full flex-col justify-end-safe overflow-auto py-10 lg:pb-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-8 font-serif text-5xl font-extrabold">
              Video Editor
            </h2>
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
      </div>
    </div>
  );
};

export default Screen5;

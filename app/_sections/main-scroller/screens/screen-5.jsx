import { useRef } from "react";
import Image from "next/image";

import { isDev } from "@/lib/utils";
import useStaggerAnimation from "@/hooks/use-stagger-animatation";

const Screen5 = () => {
  const screenRef = useRef(null);
  const listRef = useRef(null);

  useStaggerAnimation(screenRef, listRef, 0.5);

  return (
    <div id="screen-5" ref={screenRef} className="screen relative min-w-full">
      <div className="flex h-full w-full flex-col items-center gap-4 overflow-hidden max-lg:pt-10 lg:flex-row">
        <div className="relative">
          <div className="absolute top-0 left-0 z-20 text-4xl font-extrabold mix-blend-difference lg:top-1/6 lg:-left-10 lg:text-6xl">
            Video <br className="lg:hidden" /> Editor
          </div>
          {isDev ? (
            <Image
              src={"https://placewaifu.com/image"}
              alt="image"
              width={1000}
              height={1000}
              unoptimized
              className="rounded"
            />
          ) : (
            <video
              src="/screen-editor.mp4"
              autoPlay
              muted
              loop
              className="bg-foreground/10 relative max-w-1/2 place-content-baseline"
            />
          )}
        </div>

        <div className="flex w-full flex-col justify-center-safe overflow-auto py-10 max-md:py-28 lg:pb-20">
          <div className="mx-auto flex flex-col text-left">
            <div className="relative max-w-fit">
              <h2 className="text-foreground z-10 font-serif text-5xl font-bold lg:text-7xl">
                Suck & <br /> Fuck
              </h2>
              <div className="screen-3-floatingtext absolute top-1/2 left-4/6">
                <span className="text-md z-20 w-full rotate-6 transform bg-rose-600 px-2 pt-1 font-bold text-nowrap lg:pt-2 lg:text-xl">
                  Built-In Editor
                </span>
              </div>
            </div>
            <p className="text-md mt-7 max-w-96 lg:text-xl">
              Record in crisp quality, add edits and doodles on the fly, and
              zoom right into the action — perfect for creators who want to
              teach, share, or just show off in style.
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

// <div className="flex flex-col items-center justify-center">
//   <h2 className="mb-8 font-serif text-5xl font-extrabold">
//     Video Editor
//   </h2>
//   <ul
//     ref={listRef}
//     className="*:border-b-foreground/50 *:hover:border-b-foreground w-full flex-1 space-y-2 text-2xl font-bold *:cursor-pointer *:border-b *:py-2 max-lg:px-2 lg:w-2/3"
//   >
//     <li>Auto-zoom</li>
//     <li>Auto-pan</li>
//     <li>Export in high quality</li>
//     <li>Aesthetic Background</li>
//     <li>Annotate while recording</li>
//   </ul>
// </div>

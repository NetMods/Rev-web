"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useParallaxEffect } from "@/hooks/use-parallax-effect";

const Screen4 = () => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useParallaxEffect(screenRef, imageRef, textRef);
  const { isTablet, isSm } = useMediaQuery();

  return (
    <section
      ref={screenRef}
      className={`relative size-full min-w-full overflow-hidden max-lg:mb-10`}
      aria-labelledby="screen4-heading"
    >
      <div className="relative flex size-full max-lg:flex-col">
        <article className="relative flex items-center justify-center overflow-hidden max-lg:mb-5 max-sm:px-4 lg:w-1/2">
          <div>
            <div className="relative max-w-fit">
              <h2 className="text-foreground font-serif text-4xl md:text-5xl lg:text-7xl">
                Draw & <br /> Explain
              </h2>
              <div className="absolute top-1/2 left-5/6 -rotate-6">
                <span className="md:text-md z-20 w-full transform bg-rose-600 px-2 text-sm text-nowrap text-rose-200 lg:text-xl">
                  Visual presentation
                </span>
              </div>
            </div>
            <p className="md:text-md text-foreground/60 mt-7 max-w-96 text-sm lg:text-xl">
              Turn your screen into a canvas by highlighting your ideas
              effortlessly with pencils, arrows, and text boxes with dynamic
              colors and brush sizes.
            </p>
          </div>
        </article>

        <svg
          viewBox="0 0 524 544"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-svg absolute -top-15 -left-15 hidden size-96 origin-center scale-50 opacity-80 lg:block"
        >
          <path d="M208.809 544V0H313.809V544H208.809Z" fill="#D6D6D6" />
          <path
            d="M4.3869e-05 361.534L471.118 89.5336L523.618 180.466L52.5001 452.466L4.3869e-05 361.534Z"
            fill="#D6D6D6"
          />
          <path
            d="M52.5 89.5336L523.618 361.534L471.118 452.466L3.76105e-05 180.466L52.5 89.5336Z"
            fill="#D6D6D6"
          />
        </svg>

        <div
          ref={textRef}
          className="text-foreground/10 absolute bottom-0 left-5 text-right text-7xl leading-16 font-semibold tracking-tight max-lg:hidden"
        >
          Annotation <br /> Panel
        </div>

        <figure className="relative flex justify-center lg:w-1/2">
          <div className="relative size-full">
            <video
              ref={imageRef}
              className={cn(
                `h-full w-full object-cover max-lg:aspect-video`,
                (isTablet || isSm) && "frame",
              )}
              style={{ objectPosition: "10% 50%" }}
              loop
              muted
              autoPlay
              preload="auto"
              src={"/annotation.mp4"}
              aria-label="Revord annotation panel demonstration"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Screen4;

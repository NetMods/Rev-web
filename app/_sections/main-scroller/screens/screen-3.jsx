"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useParallaxEffect } from "@/hooks/use-parallax-effect";

const Screen3 = () => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useParallaxEffect(screenRef, imageRef, textRef);
  const { isTablet, isSm } = useMediaQuery();

  return (
    <section
      ref={screenRef}
      className={`relative size-full min-w-full font-sans max-lg:my-10`}
      aria-labelledby="screen3-heading"
    >
      <div className="flex size-full max-lg:flex-col">
        <figure className="relative lg:w-1/2">
          <video
            ref={imageRef}
            className={cn(
              `h-full w-full object-cover max-lg:aspect-video`,
              (isTablet || isSm) && "frame",
            )}
            style={{ objectPosition: "70% 50%" }}
            autoPlay
            loop
            muted
            preload="auto"
            src="/recording.mp4"
            aria-label="Revord screen recording preview in action"
          />
        </figure>

        <div className="flex w-full flex-col items-center justify-center max-lg:mt-5 max-lg:h-1/2 lg:w-1/2">
          <article className="max-sm:px-4">
            <header className="relative max-w-fit">
              <h2 className="text-foreground z-10 font-serif text-4xl md:text-5xl lg:text-7xl">
                Capture <br /> Everything
              </h2>
              <div className="absolute top-1/2 left-4/6 rotate-6">
                <span className="md:text-md z-20 w-full transform bg-rose-600 px-2 text-sm text-nowrap text-rose-200 lg:text-xl">
                  Smart Recorder
                </span>
              </div>
            </header>

            <p className="md:text-md text-foreground/60 mt-7 max-w-96 text-sm lg:text-xl">
              Revord captures every detail in stunning quality, automatically
              adjusting focus and framing so you can stay in the moment. Just
              record and let the magic unfold.
            </p>
          </article>
        </div>
      </div>

      <div
        ref={textRef}
        aria-hidden="true"
        className="text-foreground/10 absolute right-5 bottom-0 text-7xl leading-16 font-semibold tracking-tight max-lg:hidden"
      >
        Screen <br /> Recorder
      </div>

      <div
        aria-hidden="true"
        className="text-foreground absolute right-5 hidden text-2xl select-none lg:top-32 lg:block"
      >
        01
      </div>
    </section>
  );
};

export default Screen3;

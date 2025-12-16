"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useParallaxEffect } from "@/hooks/use-parallax-effect";
import FeatureButton from "@/components/ui/feature-button";

const Screen2 = () => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useParallaxEffect(screenRef, imageRef, textRef);
  const { isTablet, isSm } = useMediaQuery();

  return (
    <section
      ref={screenRef}
      className={"relative min-w-full font-sans"}
      aria-labelledby="screen2-heading"
    >
      <div className="flex size-full max-lg:flex-col">
        <figure className="relative inline-flex h-full justify-center lg:w-1/2">
          <div className="relative h-full w-full">
            <video
              ref={imageRef}
              className={cn(
                `h-full w-full object-cover max-lg:aspect-video`,
                (isTablet || isSm) && "frame",
              )}
              style={{ objectPosition: "80% 50%" }}
              loop
              muted
              autoPlay
              preload="auto"
              src={"/aio.mp4"}
            />
          </div>
        </figure>

        <div className="relative items-center justify-center max-lg:mt-10 max-lg:flex max-sm:flex-col lg:w-1/2 lg:place-content-center">
          <div
            ref={textRef}
            className={cn(
              "text-foreground text-center text-3xl tracking-tight uppercase md:text-5xl xl:text-6xl",
              "top-10 left-1/2 max-lg:ml-5 lg:absolute lg:translate-x-[-50%]",
            )}
          >
            <p>One Tool</p>
            <p>For</p>
            <p>Everything</p>
          </div>

          <ul
            className="flex w-full flex-col gap-0.5 max-lg:p-3"
            aria-label="Key features of Revord"
          >
            <FeatureButton title="Screen Recorder" i={"01"} />
            <FeatureButton title="Video Editor" i={"02"} />
            <FeatureButton title="Screenshot Editor" i={"03"} />
            <FeatureButton title="Annotater" i={"04"} />
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="text-foreground/10 absolute right-5 bottom-0 text-8xl font-semibold select-none max-lg:hidden"
        >
          #2025
        </div>
      </div>
    </section>
  );
};

export default Screen2;

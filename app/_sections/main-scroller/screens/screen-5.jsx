"use client";

import { useRef } from "react";

import useStaggerAnimation from "@/hooks/use-stagger-animatation";

const Screen5 = () => {
  const screenRef = useRef(null);
  const listRef = useRef(null);

  useStaggerAnimation(screenRef, listRef, 0.5);

  return (
    <section
      aria-labelledby="screen5-heading"
      id="screen-5"
      ref={screenRef}
      className={`screen border- relative min-w-full`}
    >
      <div className="flex size-full max-lg:flex-col">
        <figure className="relative flex w-full shrink-0 justify-center lg:h-auto lg:w-1/2">
          <video
            src="/video-editor.mp4"
            muted
            autoPlay
            loop
            preload="auto"
            className="relative object-cover"
            aria-label="Revord built-in video editor demonstration"
          />
        </figure>

        <div className="flex w-full flex-col items-center justify-center max-lg:my-5 max-lg:h-1/2 lg:w-1/2">
          <article className="max-sm:px-4">
            <header className="relative max-w-fit">
              <h2 className="text-foreground tall-narrow:text-5xl z-10 font-serif text-4xl md:text-5xl lg:text-7xl">
                Precision <br /> Motion
              </h2>
              <div className="absolute top-1/2 left-4/6 rotate-6">
                <span className="md:text-md z-20 w-full transform bg-rose-600 px-2 text-sm text-nowrap text-rose-200 lg:text-xl">
                  Built-In Video Editor
                </span>
              </div>
            </header>

            <p className="md:text-md text-foreground/60 tall-narrow:text-sm mt-7 max-w-96 text-sm lg:text-xl">
              Revord automatically applies precise zooms and pans to every mouse
              click and drag, giving you full control to edit and export your
              video in stunning, high-resolution quality.
            </p>
          </article>
        </div>

        <div
          aria-hidden="true"
          className="text-foreground absolute right-5 hidden text-xl lg:bottom-32 lg:block"
        >
          02
        </div>

        <div className="text-foreground/10 tall-narrow:text-5xl tall-narrow:leading-10 absolute top-0 right-5 text-right text-7xl leading-16 font-semibold tracking-tight max-lg:hidden">
          Video Editor
        </div>
      </div>
    </section>
  );
};

export default Screen5;

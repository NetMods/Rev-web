import { useRef } from "react";
import { useLoading } from "@/contexts/loading";

import { useParallaxEffect } from "@/hooks/use-parallax-effect";
import { useRotateOnScroll } from "@/hooks/use-rotate-onscroll";

const Screen3 = () => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const floatRef = useRef(null);
  const { isAnimationDone } = useLoading();

  useParallaxEffect(screenRef, imageRef, textRef);
  useRotateOnScroll(screenRef, floatRef, { start: -1, end: 10 });

  return (
    <section
      ref={screenRef}
      className={`${!isAnimationDone ? "hidden" : "lg:flex"} screen relative size-full min-w-full max-lg:mt-16`}
      aria-labelledby="screen3-heading"
    >
      <figure className="parallax-bg-3 relative h-1/2 max-w-[55rem] rounded-xl lg:size-full lg:w-2/3">
        <video
          ref={imageRef}
          className="absolute inset-0 h-full w-full rounded-xl object-cover"
          style={{ objectPosition: "70% 50%" }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/recording.mp4"
          aria-label="Revord screen recording preview in action"
        />
        <figcaption
          ref={textRef}
          className="screen-3-text absolute right-0 bottom-0 text-4xl font-extrabold mix-blend-difference lg:-right-1/6 lg:bottom-1/12 lg:text-6xl"
        >
          Screen <br /> Recorder
        </figcaption>
      </figure>

      <div
        aria-hidden="true"
        className="text-foreground absolute right-5 hidden text-xl font-semibold lg:top-32 lg:block"
      >
        {" "}
        01{" "}
      </div>

      <div className="flex w-full flex-col items-center justify-center pt-10 max-lg:h-1/2 lg:w-1/2 lg:pt-32">
        <article className="screen-3-main-content">
          <header className="relative max-w-fit">
            <h2 className="text-foreground z-10 font-serif text-5xl font-bold lg:text-7xl">
              Capture <br /> Everything
            </h2>
            <div
              className="screen-3-floatingtext absolute top-1/2 left-4/6"
              ref={floatRef}
            >
              <span className="text-md z-20 w-full rotate-6 transform bg-rose-600 px-2 pt-2 font-bold text-nowrap text-rose-200 lg:text-xl">
                Smart Recorder
              </span>
            </div>
          </header>

          <p className="text-md text-foreground/60 mt-7 max-w-96 lg:text-xl">
            Revord captures every detail in stunning quality, automatically
            adjusting focus and framing so you can stay in the moment. Just
            record and let the magic unfold
          </p>
        </article>
      </div>
    </section>
  );
};

export default Screen3;

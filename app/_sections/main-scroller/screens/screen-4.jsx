import { useRef } from "react";

import { useParallaxEffect } from "@/hooks/use-parallax-effect";
import { useRotateOnScroll } from "@/hooks/use-rotate-onscroll";

const Screen4 = () => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const floatRef = useRef(null);

  useParallaxEffect(screenRef, imageRef, textRef);
  useRotateOnScroll(screenRef, floatRef, { start: 6, end: -20 });

  return (
    <section
      ref={screenRef}
      className="screen relative size-full min-w-full overflow-hidden lg:mr-10 lg:flex"
      aria-labelledby="screen4-heading"
    >
      <article className="relative flex h-1/2 items-center justify-center overflow-hidden lg:w-1/2">
        <div className="screen-4-main-content">
          <div className="relative max-w-fit lg:pt-32">
            <h2 className="text-foreground font-serif text-5xl font-bold lg:text-7xl">
              Draw & <br /> Explain
            </h2>
            <div
              className="screen-4-floatingtext absolute top-1/2 left-5/6"
              ref={floatRef}
            >
              <span className="text-md z-20 w-full rotate-6 transform bg-rose-600 px-2 pt-2 font-bold text-nowrap text-rose-200 lg:text-xl">
                Visual presentation
              </span>
            </div>
          </div>
          <p className="text-md text-foreground/60 mt-7 max-w-96 lg:text-xl">
            Turn your screen into a canvas — Highlight your ideas effortlessly
            with pencils, arrows, and text boxes with dynamic colors and brush
            sizes
          </p>
        </div>
      </article>

      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-svg absolute bottom-0 left-0 hidden size-96 origin-center opacity-80 lg:block"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
      >
        <path
          fill="#ffffff"
          d="m66 50 22.641 13.07-8 13.855-22.641-13.07v26.145h-16v-26.145l-22.641 13.07-8-13.855 22.641-13.07-22.641-13.07 8-13.855 22.641 13.07v-26.145h16v26.145l22.641-13.07 8 13.855z"
        />
      </svg>

      <figure className="relative flex justify-center max-lg:h-1/2 lg:w-1/2">
        <div className="parallax-bg-4 relative h-full w-full rounded-xl">
          <video
            ref={imageRef}
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
            style={{ objectPosition: "10% 50%" }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={"/annotation.mp4"}
            aria-label="Revord annotation panel demonstration"
          />
          <figcaption
            ref={textRef}
            className="screen-4-text absolute bottom-0 left-0 text-4xl font-extrabold mix-blend-difference lg:right-3/5 lg:bottom-1/12 lg:text-6xl"
          >
            Annotation <br /> Panel
          </figcaption>
        </div>
      </figure>
    </section>
  );
};

export default Screen4;

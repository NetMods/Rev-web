import { useRef } from "react";

import { isDev } from "@/lib/utils";
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
    <div
      ref={screenRef}
      className="screen relative size-full min-w-full overflow-hidden lg:mr-10 lg:flex"
    >
      <div className="relative flex h-1/2 items-center justify-center overflow-hidden lg:w-1/2">
        <div className="screen-4-main-content">
          <div className="relative max-w-fit lg:pt-32">
            <h2 className="text-foreground font-serif text-5xl font-bold lg:text-7xl">
              Lively & <br /> Colorful
            </h2>
            <div
              className="screen-4-floatingtext absolute top-1/2 left-5/6"
              ref={floatRef}
            >
              <span className="text-md z-20 w-full rotate-6 transform bg-rose-600 px-2 pt-2 font-bold text-nowrap lg:text-xl">
                Just Draw it
              </span>
            </div>
          </div>
          <p className="text-md mt-7 max-w-96 lg:text-xl">
            Highlight, draw, and point with ease while recording or presenting —
            make your screen talk, not just show.
          </p>
        </div>
      </div>

      <svg
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

      <div
        style={{
          backgroundImage: isDev
            ? "url('https://placewaifu.com/image')"
            : "url('/4.gif')",
          backgroundPosition: "10% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        ref={imageRef}
        className="parallax-bg-4 relative flex justify-center max-lg:h-1/2 lg:w-1/2"
      >
        <div
          ref={textRef}
          className="screen-4-text absolute bottom-0 left-0 z-20 text-4xl font-extrabold mix-blend-difference lg:right-3/5 lg:bottom-1/12 lg:text-6xl"
        >
          Annotation <br /> Panel
        </div>
      </div>
    </div>
  );
};

export default Screen4;

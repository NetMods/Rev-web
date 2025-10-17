import { useRef } from "react";

import { useParallaxEffect } from "@/hooks/use-parallax-effect";
import FeatureButton from "@/components/ui/feature-button";

const Screen2 = () => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useParallaxEffect(screenRef, imageRef, textRef);

  return (
    <div
      ref={screenRef}
      className="screen relative flex size-full min-w-full items-center justify-center pt-16 lg:pt-32"
    >
      <div className="flex h-full w-full max-lg:flex-col">
        <div className="relative inline-flex h-full justify-center lg:w-1/2">
          <div className="parallax-bg-2 relative h-full w-full rounded-xl lg:w-2/3">
            <video
              ref={imageRef}
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
              style={{ objectPosition: "70% 50%" }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src={"/aio.mp4"}
            />
            <div
              ref={textRef}
              className="text-foreground absolute z-10 text-center text-4xl font-black mix-blend-difference max-lg:right-0 max-lg:bottom-0 lg:top-0 lg:left-4/5 lg:text-6xl"
            >
              One Tool
              <p> For </p>
              Everything
            </div>
          </div>
        </div>

        <div className="flex-col items-center justify-center max-lg:mt-10 max-lg:flex lg:w-1/2 lg:place-content-center">
          <FeatureButton title="Screen Recorder" />
          <FeatureButton title="Video Editor" />
          <FeatureButton title="Screenshot" />
          <FeatureButton title="Annotate" />
        </div>

        <div className="text-foreground/10 absolute right-5 bottom-0 text-8xl font-semibold max-md:hidden">
          #2025
        </div>
      </div>
    </div>
  );
};

export default Screen2;

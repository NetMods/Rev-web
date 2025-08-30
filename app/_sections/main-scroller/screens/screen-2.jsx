import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureButton from "@/components/ui/feature-button";

gsap.registerPlugin(ScrollTrigger);

const Screen2 = () => {
  useGSAP(() => {
    gsap.to(".moving-label", {
      x: -100,
      scrollTrigger: {
        trigger: "#screen-2",
        scrub: 3,
        markers: false,
        start: "120% top",
        end: "350% bottom",
      },
    });
  });

  return (
    <div
      id="screen-2"
      className="screen flex size-full min-w-full items-center justify-center pt-32"
    >
      <div className="flex h-full w-full max-w-[200rem] justify-center gap-56">
        <div className="relative flex">
          <img
            src="2.gif"
            className="h-full w-full rounded-xl object-cover"
            alt="Tool visual"
          />
          <div className="moving-label absolute top-0 left-4/5 text-center text-6xl font-extrabold text-white mix-blend-difference">
            One Tool
            <p> For </p>
            Everything
          </div>
        </div>

        <div className="place-content-around">
          <FeatureButton title="Screen Recorder" />
          <FeatureButton title="Screenshot" />
          <FeatureButton title="Annotate" />
        </div>
      </div>
    </div>
  );
};

export default Screen2;

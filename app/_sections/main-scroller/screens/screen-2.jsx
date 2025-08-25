import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureButton from "../shared/feature-button";

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
      className="screen relative flex h-full w-screen shrink-0 items-center justify-center bg-black"
    >
      <div className="flex h-full w-full gap-2 p-1">
        <div className="relative h-full w-full">
          {/* Moving label with blend mode */}
          <div className="moving-label absolute top-7/12 left-10/12 z-20 max-w-64 text-center text-5xl font-extrabold text-white mix-blend-difference">
            One Tool For Everything
          </div>

          {/* Image container */}
          <div className="absolute top-48 left-14 z-10 h-[700px] w-[600px] overflow-hidden rounded-2xl">
            <img
              src="2.gif"
              alt="Tool visual"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="h-full w-full p-5">
          <div className="flex h-full w-full items-center justify-center">
            <div className="">
              <FeatureButton className={""} title={"Screen Recorder"} />
              <FeatureButton className={""} title={"Screenshot"} />
              <FeatureButton className={""} title={"Annotate"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;

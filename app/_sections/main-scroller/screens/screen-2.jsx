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
    <div id="screen-2" className="screen relative h-full w-screen shrink-0">
      <div className="flex h-full w-full gap-2 p-1">
        <div className="relative h-full w-full">
          {/* Moving label with blend mode */}

          {/* Image container */}
          <div className="2xl: absolute z-10 rounded-2xl xl:top-3/12 xl:left-1/12 xl:h-[90vh] xl:w-[40vw]">
            <div className="relative h-full w-full">
              <div className="moving-label 3xl:text-8xl 4xl:text-9xl 4xl:left-10/12 absolute top-5/12 left-9/12 text-center text-5xl font-extrabold text-white mix-blend-difference">
                One Tool
                <br /> For <br /> Everything
              </div>
              <img
                src="2.gif"
                alt="Tool visual"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
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

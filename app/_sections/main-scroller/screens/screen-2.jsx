import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureButton from "@/components/ui/feature-button";

gsap.registerPlugin(ScrollTrigger);

const Screen2 = () => {
  useGSAP(() => {
    if (window.innerWidth >= 1200) {
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

      gsap.fromTo(
        ".parallax-bg-2",
        {
          backgroundPosition: "15% 50%",
        },
        {
          backgroundPosition: "40% 50%",
          scrollTrigger: {
            trigger: "#screen-2",
            scrub: 3,
            markers: false,
            start: "150% top",
            end: "400% bottom",
          },
        },
      );
    }
  });

  return (
    <div
      id="screen-2"
      className="screen flex size-full min-w-full items-center justify-center pt-32 max-[1200px]:mt-44"
    >
      <div className="flex h-full w-full max-w-[200rem] justify-center gap-10 max-[1200px]:flex-col min-[1200px]:gap-56">
        <div
          className="parallax-bg-2 relative flex h-full rounded-xl min-[1200px]:w-[30vw]"
          style={{
            backgroundImage: "url('/2.png')",
            backgroundPosition: "15% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="moving-label absolute z-10 text-center text-6xl font-extrabold text-white mix-blend-difference max-[1200px]:right-0 max-[1200px]:bottom-0 min-[1200px]:top-0 min-[1200px]:left-4/5">
            One Tool
            <p> For </p>
            Everything
          </div>
        </div>
        <div className="flex-col items-center max-[1200px]:flex min-[1200px]:place-content-around">
          <FeatureButton title="Screen Recorder" />
          <FeatureButton title="Screenshot" />
          <FeatureButton title="Annotate" />
        </div>
      </div>
    </div>
  );
};

export default Screen2;

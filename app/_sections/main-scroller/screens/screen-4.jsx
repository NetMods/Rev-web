import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Screen4 = () => {
  useGSAP(() => {
    gsap.to(".screen-4-text", {
      x: -50,
      scrollTrigger: {
        trigger: "#screen-4",
        scrub: 4,
        start: "450% top",
        end: "600% bottom",
        markers: false,
      },
    });

    gsap.fromTo(
      ".screen-4-main-content",
      {
        xPercent: -120,
      },
      {
        xPercent: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#screen-4",
          start: "450% center",
          end: "500% center",
          scrub: 2,
          markers: false,
        },
      },
    );

    gsap.to(".screen-4-floatingtext", {
      x: 100,
      scrollTrigger: {
        trigger: "#screen-4",
        scrub: 2,
        start: "400% top",
        end: "600% bottom",
        markers: false,
      },
    });
  });

  return (
    <div
      id="screen-4"
      className="screen relative flex size-full min-w-full overflow-hidden"
    >
      <div className="screen-4-main-content flex h-full w-1/2 flex-col items-center justify-center overflow-hidden">
        <div>
          <div className="relative max-w-fit pt-32">
            <h2 className="text-7xl font-bold text-white">
              Lively & <br /> Colorful
            </h2>
            <div className="absolute top-1/2 left-5/6 rotate-6">
              <span className="screen-3-floatingtext top-1/2 left-full z-20 w-full rotate-6 transform bg-rose-600 px-2 text-xl font-bold text-nowrap">
                Just Draw it
              </span>
            </div>
          </div>
          <p className="mt-7 max-w-96 text-xl">
            Highlight, draw, and point with ease while recording or presenting —
            make your screen talk, not just show.
          </p>
        </div>
      </div>

      <div className="relative flex w-1/2 justify-center">
        <img src="3.gif" alt="Placeholder 1" className="rounded-xl" />

        <div className="screen-3-text absolute right-3/5 bottom-1/12 z-20 text-6xl font-extrabold mix-blend-difference">
          Annotation <br /> Panel
        </div>
      </div>
    </div>
  );
};

export default Screen4;

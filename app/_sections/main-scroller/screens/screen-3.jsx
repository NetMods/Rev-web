import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Screen3 = () => {
  useGSAP(() => {
    gsap.to(".screen-3-text", {
      x: -120,
      scrollTrigger: {
        trigger: "#screen-3",
        scrub: 4,
        start: "220% top",
        end: "500% bottom",
        markers: false,
      },
    });

    gsap.fromTo(
      ".screen-3-main-content",
      { xPercent: 120 },
      {
        xPercent: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#screen-3",
          start: "350% center",
          end: "400% center",
          scrub: 2,
          markers: false,
        },
      },
    );

    gsap.to(".screen-3-floatingtext", {
      x: -100,
      scrollTrigger: {
        trigger: "#screen-3",
        scrub: 3,
        start: "400% top",
        end: "600% bottom",
        markers: false,
      },
    });
  });

  return (
    <div id="screen-3" className="screen relative flex size-full min-w-full">
      <div className="relative flex w-1/2 justify-center">
        <img src="4.gif" alt="Placeholder 1" className="rounded-xl" />
        <div className="screen-3-text absolute bottom-1/12 left-4/5 z-20 text-6xl font-extrabold mix-blend-difference">
          Screen <br /> Recorder
        </div>
      </div>

      <div className="screen-3-main-content flex w-1/2 flex-col items-center justify-center pt-32">
        <div>
          <div className="relative max-w-fit">
            <h2 className="z-10 text-7xl font-bold text-white">
              Edit & <br /> Merge
            </h2>
            <div className="absolute top-1/2 left-5/6 -rotate-6">
              <span className="screen-3-floatingtext top-1/2 left-full z-20 w-full rotate-6 transform bg-rose-600 px-2 text-xl font-bold text-nowrap">
                Built-In Editor
              </span>
            </div>
          </div>
          <p className="mt-7 max-w-96 text-xl">
            Record in crisp quality, add edits and doodles on the fly, and zoom
            right into the action — perfect for creators who want to teach,
            share, or just show off in style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen3;

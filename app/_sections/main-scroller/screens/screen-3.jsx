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
    <div
      id="screen-3"
      className="screen relative flex h-full w-screen shrink-0 bg-black text-white"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="screen-3-text absolute top-7/12 left-10/12 z-20 min-w-xl text-7xl font-extrabold mix-blend-difference">
          Screen Recorder
        </div>
        <div className="absolute flex h-[900px] w-[650px] items-center justify-center rounded-lg text-white">
          <img
            src="3.gif"
            alt="Placeholder 1"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="h-full w-full overflow-hidden p-1">
        <div className="relative h-full w-full">
          <div className="screen-3-main-content absolute top-40 left-56 rounded-lg p-1">
            <div className="relative rounded-lg p-8">
              <h2 className="relative z-10 text-9xl font-bold text-white">
                Edit & <br /> Merge
              </h2>
              <span className="screen-3-floatingtext absolute top-56 left-48 z-20 text-4xl font-bold text-rose-400">
                Built-In Editor
              </span>
              <p className="relative z-10 mt-6 max-w-md text-right text-2xl text-white">
                Record in crisp quality, add edits and doodles on the fly, and
                zoom right into the action — perfect for creators who want to
                teach, share, or just show off in style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;

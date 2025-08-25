import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Screen4 = () => {
  useGSAP(() => {
    gsap.to(".screen-4-text", {
      x: -120,
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
      className="screen relative flex h-full w-screen shrink-0 text-white"
    >
      <div className="h-full w-full overflow-hidden p-1">
        <div className="relative h-full w-full">
          <div className="screen-4-main-content absolute top-40 right-2/12 rounded-lg p-1">
            <div className="relative rounded-lg p-8">
              <h2 className="relative z-10 text-9xl font-bold text-white">
                Lively & <br /> Colorfull
              </h2>
              <span className="screen-4-floatingtext absolute top-56 left-10 z-20 text-4xl font-bold text-rose-400">
                Just Draw it
              </span>
              <p className="relative z-10 mt-6 max-w-md text-left text-2xl text-white">
                Highlight, draw, and point with ease while recording or
                presenting — make your screen talk, not just show.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="screen-4-text absolute top-9/12 z-20 min-w-xl text-7xl font-extrabold mix-blend-difference">
          Annotate
        </div>
        <div className="absolute flex h-[900px] w-[600px] items-center justify-center rounded-lg text-white">
          <img
            src="4.gif"
            alt="Placeholder 1"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Screen4;

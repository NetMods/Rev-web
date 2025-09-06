import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Screen4 = () => {
  useGSAP(() => {
    if (window.innerWidth >= 1200) {
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
          x: -800,
        },
        {
          x: 0,
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
        x: -100,
        scrollTrigger: {
          trigger: "#screen-4",
          scrub: 2,
          start: "500% top",
          end: "700% bottom",
          markers: false,
        },
      });

      gsap.fromTo(
        ".parallax-bg-4",
        {
          backgroundPosition: "10% 50%",
        },
        {
          backgroundPosition: "40% 50%",
          scrollTrigger: {
            trigger: "#screen-3",
            scrub: 3,
            markers: false,
            start: "500% top",
            end: "700% bottom",
          },
        },
      );
    }
  });

  return (
    <div
      id="screen-4"
      className="screen relative size-full min-w-full overflow-hidden min-[1200px]:flex"
    >
      <div className="relative flex h-1/2 w-full flex-col items-center justify-center overflow-hidden min-[1200px]:w-1/2">
        <div className="screen-4-main-content">
          <div className="relative max-w-fit min-[1200px]:pt-32">
            <h2 className="text-7xl font-bold text-white">
              Lively & <br /> Colorful
            </h2>
            <div className="screen-4-floatingtext absolute top-1/2 left-5/6 rotate-6">
              <span className="z-20 w-full rotate-6 transform bg-rose-600 px-2 text-xl font-bold text-nowrap">
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

      <div
        style={{
          backgroundImage: "url('/4.gif')",
          backgroundPosition: "10% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="parallax-bg-4 relative flex justify-center max-[1200px]:h-1/2 min-[1200px]:w-1/2"
      >
        <div className="screen-4-text absolute bottom-0 left-0 z-20 text-6xl font-extrabold mix-blend-difference min-[1200px]:right-3/5 min-[1200px]:bottom-1/12">
          Annotation <br /> Panel
        </div>
      </div>
    </div>
  );
};

export default Screen4;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const heading = "Your Screen StorY. Told With ClaritY";

const Screen1 = () => {
  useGSAP(() => {
    gsap.from(".heading-letter", {
      opacity: 0,
      y: 40,
      stagger: 0.05,
      ease: "power3.out",
      duration: 0.8,
    });

    gsap.from(".share-text", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "power3.out",
    });

    gsap.from(".gif-box", {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 1,
      delay: 1.5,
      ease: "power2.out",
    });

    gsap.from(".lorem-text", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 2,
      ease: "power2.out",
    });

    gsap.to(".heading-group", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#screen-1",
        markers: false,
        scrub: 4,
        start: "top top",
      },
    });

    gsap.to(".share-text", {
      xPercent: -25,
      scrollTrigger: {
        trigger: "#screen-1",
        markers: false,
        scrub: 4,
        start: "top top",
      },
    });
  }, []);

  return (
    <div
      id="screen-1"
      className="screen flex h-full w-screen shrink-0 items-center justify-center bg-black text-white"
    >
      <div className="flex h-full w-screen flex-col">
        {/* Heading */}
        <div className="relative mt-36 flex w-screen items-center justify-center">
          <div className="share-text absolute right-[460px] bottom-10 text-[2rem] font-bold text-white">
            Record it ....
          </div>
          <div className="heading-group flex flex-wrap justify-center text-center text-[4rem] leading-tight font-bold">
            {heading.split("").map((char, i) => (
              <span
                key={i}
                className={`heading-letter inline-block ${
                  char === "Y" ? "text-[11rem] leading-none" : ""
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-screen flex-1 p-1">
          <div className="flex h-full w-full gap-4 p-4">
            {/* Left Column - Image */}
            <div className="gif-box flex h-[500px] w-[400px] flex-1 items-center justify-center overflow-hidden rounded-xl">
              <img
                src="1.gif"
                alt="Demo"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex h-full flex-1 items-center justify-center rounded-xl p-6">
              <p className="lorem-text text-justify text-lg leading-relaxed text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                feugiat, risus nec aliquam gravida, eros urna laoreet elit,
                vitae accumsan odio arcu a nunc. Donec suscipit augue et metus
                placerat, nec malesuada sapien iaculis. Integer nec ex eget
                massa porta viverra sit amet nec urna. Suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;

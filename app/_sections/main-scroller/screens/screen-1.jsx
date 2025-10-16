import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

const heading = "Your Screen Story, Told With Clarity";

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
      xPercent: 0,
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
      className="screen flex min-w-full flex-col pt-16 max-md:pb-20 lg:h-screen lg:overflow-hidden lg:pt-32"
    >
      <div className="flex size-full items-center justify-center">
        <div className="heading-group relative my-16 font-sans tracking-tighter max-lg:hidden">
          {heading.split("").map((char, i) => (
            <span
              key={i}
              className={cn(
                `heading-letter`,
                char === "S" || char === "C"
                  ? "font-cursive pr-1 text-[6.5rem] leading-none text-red-500"
                  : "text-6xl",
              )}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="hidden text-center max-lg:block">
          <span className="heading-group relative my-10 flex w-full flex-col items-center justify-center text-3xl font-bold tracking-tighter md:text-5xl">
            {heading.split(",").map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </span>
        </div>
      </div>

      <div>
        <div className="items-center lg:mx-10 lg:flex">
          <div className="gif-box inline-flex w-full justify-center overflow-hidden rounded-lg max-lg:mb-16 lg:mr-10 lg:max-w-2/3">
            <video src="/intro.mp4" autoPlay muted loop preload="auto" />
          </div>

          <div className="w-full place-content-center-safe lg:w-1/2">
            <p className="lorem-text text-md text-center text-balance min-lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, risus nec aliquam gravida, eros urna laoreet elit, vitae
              accumsan odio arcu a nunc. Donec suscipit augue et metus placerat,
              nec malesuada sapien iaculis. Integer nec ex eget massa porta
              viverra sit amet nec urna. Suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;

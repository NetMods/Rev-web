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
    <div id="screen-1" className="screen flex h-full min-w-full flex-col pt-32">
      <div className="flex w-full items-center justify-center">
        <div className="heading-group relative my-20 font-bold tracking-tighter">
          {heading.split("").map((char, i) => (
            <span
              key={i}
              className={cn(
                `heading-letter`,
                char === "S"
                  ? "font-cursive pr-1 text-[6rem] leading-none"
                  : "text-5xl",
              )}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}

          <span className="share-text font-cursive block text-right text-3xl font-bold">
            <span className="text-3xl text-red-400">S</span>hare it
          </span>
        </div>
      </div>

      <div className="h-full">
        <div className="flex size-full">
          <div className="gif-box inline-flex w-1/2 justify-center">
            <img
              src="1.gif"
              alt="Something Is Coming"
              className="rounded-xl object-cover"
            />
          </div>

          <div className="w-1/2">
            <p className="lorem-text text-xl text-balance">
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

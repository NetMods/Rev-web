import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import VideoEditor from "../../../../public/5.jpg";

const Screen6 = () => {
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth >= 1200) {
      gsap.to(".pixel-6", {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#screen-6",
          start: "750% top",
          end: "950% bottom",
          scrub: true,
        },
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#screen-6",
          start: "750% top",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(listRef.current.querySelectorAll("li"), {
        opacity: 0,
        x: -100,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#screen-5",
          start: "750% top",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  return (
    <div id="screen-6" className="screen relative min-w-full p-4 sm:p-6 md:p-8">
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden p-4 min-[1200px]:flex-row">
        <div className="mt-56 max-h-[50vh] w-full overflow-auto rounded-2xl p-4 min-[1200px]:max-h-none min-[1200px]:w-[30vw]">
          <div className="flex h-full flex-col">
            <h2
              ref={headingRef}
              className="mb-2 text-lg font-extrabold sm:text-xl md:text-5xl"
            >
              Image Editor
            </h2>
            <ul
              ref={listRef}
              className="flex-1 list-inside list-disc space-y-2 text-2xl font-bold"
            >
              <li>Auto-zoom</li>
              <li>Auto-pan</li>
              <li>Export in high quality</li>
              <li>Aesthetic Background</li>
              <li>Annotate while recording</li>
            </ul>
          </div>
        </div>

        <div className="relative mt-24 flex h-[50vh] w-full items-center justify-center overflow-hidden rounded-2xl min-[1200px]:h-[80vh] min-[1200px]:w-[70vw]">
          <Image
            src={VideoEditor}
            alt="Editor preview"
            fill
            className="h-full w-full object-contain"
            priority
          />
          <div className="absolute inset-0 z-10 grid grid-cols-[repeat(10,1fr)]">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="pixel-6 min-[1200px]:bg-background"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen6;

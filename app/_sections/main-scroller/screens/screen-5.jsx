import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import VideoEditor from "../../../../public/5.jpg";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Screen5 = () => {
  // const CursorHoverAnimationRef = useRef(null);
  const EditorImageRef = useRef(null);
  // const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth >= 1200) {
      gsap.to(".pixel-5", {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#screen-5",
          start: "550% top",
          end: "750% bottom",
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
          trigger: "#screen-5",
          start: "650% top",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(listRef.current.querySelectorAll("li"), {
        opacity: 0,
        x: 100,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#screen-5",
          start: "650% top",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  // this useEffect is for open the overlay over mouse
  // useEffect(() => {
  //   if (!EditorImageRef.current || !cursorRef.current || !containerRef.current) return;
  //
  //   const handleMouseEnter = () => CursorHoverAnimationRef.current?.play();
  //   const handleMouseLeave = () => CursorHoverAnimationRef.current?.reverse();
  //
  //   const handleMouseMove = (e) => {
  //     const rect = containerRef.current.getBoundingClientRect();
  //     const mouseX = e.clientX - rect.left;
  //     const mouseY = e.clientY - rect.top;
  //     gsap.to(cursorRef.current, {
  //       left: mouseX,
  //       top: mouseY,
  //       duration: 0.1,
  //       overwrite: "auto",
  //     });
  //   };

  //   const editorElement = EditorImageRef.current;
  //   editorElement.addEventListener("mouseenter", handleMouseEnter);
  //   editorElement.addEventListener("mouseleave", handleMouseLeave);
  //   editorElement.addEventListener("mousemove", handleMouseMove);
  //
  //   return () => {
  //     editorElement.removeEventListener("mouseenter", handleMouseEnter);
  //     editorElement.removeEventListener("mouseleave", handleMouseLeave);
  //     editorElement.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div
      ref={containerRef}
      id="screen-5"
      className="screen relative min-w-full p-4 sm:p-6 md:p-8"
    >
      {/*
      <div
        ref={cursorRef}
        className="absolute cursor-overflow z-20 opacity-0 h-24 w-24 bg-green-300 rounded-full pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
      */}
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden p-4 min-[1200px]:flex-row">
        <div className="editor-image relative mt-24 flex h-[50vh] w-full items-center justify-center overflow-hidden rounded-2xl min-[1200px]:h-[80vh] min-[1200px]:w-[70vw]">
          <Image
            ref={EditorImageRef}
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
                className="pixel-5 min-[1200px]:bg-background"
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-56 max-h-[50vh] w-full overflow-auto rounded-2xl p-4 min-[1200px]:max-h-none min-[1200px]:w-[30vw]">
          <div className="flex h-full flex-col">
            <h2
              ref={headingRef}
              className="mb-2 text-lg font-extrabold sm:text-xl md:text-5xl"
            >
              Video Editor
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
      </div>
    </div>
  );
};

export default Screen5;

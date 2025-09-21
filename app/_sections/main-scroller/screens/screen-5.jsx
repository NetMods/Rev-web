import { useRef } from "react";
import Image from "next/image";

import VideoEditor from "../../../../public/5.jpg";

const Screen5 = () => {
  // const CursorHoverAnimationRef = useRef(null);
  const EditorImageRef = useRef(null);
  // const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

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
            src={VideoEditor}
            alt="Editor preview"
            fill
            className="h-full w-full object-contain"
            priority
          />
        </div>

        <div className="mt-56 max-h-1/2 w-full overflow-auto rounded-2xl p-4 min-[1200px]:max-h-none min-[1200px]:w-[30vw]">
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

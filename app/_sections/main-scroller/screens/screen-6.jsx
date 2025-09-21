import { useRef } from "react";
import Image from "next/image";

import VideoEditor from "../../../../public/5.jpg";

const Screen6 = () => {
  const headingRef = useRef(null);
  const listRef = useRef(null);

  return (
    <div id="screen-6" className="screen relative min-w-full p-4 sm:p-6 md:p-8">
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden p-4 min-[1200px]:flex-row">
        <div className="mt-56 max-h-1/2 w-full overflow-auto rounded-2xl p-4 min-[1200px]:max-h-none min-[1200px]:w-[30vw]">
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
        </div>
      </div>
    </div>
  );
};

export default Screen6;

import { useEffect, useRef } from "react";

const Screen7 = () => {
  const LinuxRef = useRef(null);
  const MacRef = useRef(null);
  const WindowRef = useRef(null);

  useEffect(() => {
    const LinuxBox = document.querySelector(".linux-box");
    const MacBox = document.querySelector(".mac-box");
    const WindowBox = document.querySelector(".window-box");

    LinuxBox.addEventListener("mouseenter", () => {
      if (LinuxRef.current) {
        LinuxRef.current.play();
      }
    });
    LinuxBox.addEventListener("mouseleave", () => {
      if (LinuxRef.current) {
        LinuxRef.current.reverse();
      }
    });

    MacBox.addEventListener("mouseenter", () => {
      if (MacRef.current) {
        MacRef.current.play();
      }
    });
    MacBox.addEventListener("mouseleave", () => {
      if (MacRef.current) {
        MacRef.current.reverse();
      }
    });

    WindowBox.addEventListener("mouseenter", () => {
      if (WindowRef.current) {
        WindowRef.current.play();
      }
    });
    WindowBox.addEventListener("mouseleave", () => {
      if (WindowRef.current) {
        WindowRef.current.reverse();
      }
    });

    return () => {};
  });

  return (
    <div id="screen-6" className="screen relative min-w-full">
      <div className="h-full w-full overflow-hidden p-4">
        <div className="h-full w-full overflow-hidden p-4">
          <div className="flex h-full w-full flex-col p-2 min-[1200px]:flex-row">
            <div className="grid w-full grid-cols-1 gap-3 min-[1200px]:mt-28 min-[1200px]:grid-cols-3">
              <div
                style={{
                  backgroundImage: "url('./color-1.jpeg')",
                  backgroundPosition: "0% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "fill",
                }}
                className="linux-box relative flex items-center justify-center rounded-2xl bg-white"
              >
                <div className="text-5xl font-extrabold">Linux</div>
                <div className="linux-animated-box absolute bottom-0 left-0 z-20 flex h-0 w-0 items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-black opacity-0">
                  <button>Download for Linux</button>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: "url('./color-2.jpeg')",
                  backgroundPosition: "0% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "fill",
                }}
                className="mac-box relative flex items-center justify-center rounded-2xl bg-white"
              >
                <div className="text-5xl font-extrabold">MacOS</div>
                <div className="mac-animated-box absolute bottom-0 left-0 z-20 flex h-0 w-0 items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-black opacity-0">
                  <button>Download for Macos</button>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: "url('./color-3.jpeg')",
                  backgroundPosition: "0% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "fill",
                }}
                className="window-box relative flex items-center justify-center rounded-2xl bg-white"
              >
                <div className="text-5xl font-extrabold">Window</div>
                <div className="window-animated-box bg-background absolute bottom-0 left-0 z-20 flex h-0 w-0 items-center justify-center rounded-tr-2xl rounded-bl-2xl opacity-0">
                  <button>Download for Window</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen7;

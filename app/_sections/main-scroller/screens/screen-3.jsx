import React from "react";

const Screen3 = () => {
  return (
    <div
      id="screen-3"
      className="screen relative size-full min-w-full max-[1000px]:mt-32 min-[1000px]:flex"
    >
      <div
        style={{
          backgroundImage: "url('/3.gif')",
          backgroundPosition: "0% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="parallax-bg-3 relative flex justify-center max-[1000px]:h-1/2 min-[1000px]:w-1/2"
      >
        <div className="screen-3-text absolute right-0 bottom-0 z-20 text-6xl font-extrabold mix-blend-difference min-[1000px]:-right-1/6 min-[1200px]:bottom-1/12">
          Screen <br /> Recorder
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center pt-32 min-[1000px]:w-1/2">
        <div className="screen-3-main-content">
          <div className="relative max-w-fit">
            <h2 className="z-10 text-7xl font-bold text-white">
              Edit & <br /> Merge
            </h2>
            <div className="screen-3-floatingtext absolute top-1/2 left-5/6 -rotate-6">
              <span className="z-20 w-full rotate-6 transform bg-rose-600 px-2 text-xl font-bold text-nowrap">
                Built-In Editor
              </span>
            </div>
          </div>
          <p className="mt-7 max-w-96 text-xl">
            Record in crisp quality, add edits and doodles on the fly, and zoom
            right into the action — perfect for creators who want to teach,
            share, or just show off in style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen3;

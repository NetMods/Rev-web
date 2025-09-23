const Screen4 = () => {
  return (
    <div
      id="screen-4"
      className="screen relative size-full min-w-full overflow-hidden lg:flex"
    >
      <div className="relative flex h-1/2 items-center justify-center overflow-hidden lg:w-1/2">
        <div className="screen-4-main-content">
          <div className="relative max-w-fit lg:pt-32">
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
        className="parallax-bg-4 relative flex justify-center max-lg:h-1/2 lg:w-1/2"
      >
        <div className="screen-4-text absolute bottom-0 left-0 z-20 text-6xl font-extrabold mix-blend-difference lg:right-3/5 lg:bottom-1/12">
          Annotation <br /> Panel
        </div>
      </div>
    </div>
  );
};

export default Screen4;

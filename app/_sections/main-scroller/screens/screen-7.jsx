import { useRef } from "react";

const AnimatedBox = ({ label, bgImage, buttonLabel }) => {
  const boxRef = useRef(null);

  const handleEnter = () => {
    if (boxRef.current) {
      boxRef.current.style.opacity = "1";
      boxRef.current.style.width = "50%";
      boxRef.current.style.height = "50%";
    }
  };

  const handleLeave = () => {
    if (boxRef.current) {
      boxRef.current.style.opacity = "0";
      boxRef.current.style.width = "0";
      boxRef.current.style.height = "0";
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "0% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative flex h-full items-center justify-center rounded-2xl bg-white transition-all duration-500 ease-in-out"
    >
      <div className="text-5xl font-extrabold">{label}</div>
      <div
        ref={boxRef}
        className="absolute bottom-0 left-0 z-20 flex h-0 w-0 items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-black opacity-0 transition-all duration-500 ease-in-out"
      >
        <button className="cursor-pointer rounded-lg bg-white px-4 py-2 text-black hover:bg-gray-200">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

const Screen7 = () => {
  return (
    <div id="screen-7" className="screen relative h-full min-w-full">
      <div className="h-full w-full overflow-hidden p-4">
        <div className="flex h-full w-full flex-col p-2 lg:flex-row">
          <div className="grid h-full w-full grid-cols-1 gap-3 lg:mt-28 lg:grid-cols-3">
            <AnimatedBox
              label="Linux"
              bgImage="./color-1.jpeg"
              buttonLabel="Download for Linux"
            />
            <AnimatedBox
              label="MacOS"
              bgImage="./color-2.jpeg"
              buttonLabel="Download for MacOS"
            />
            <AnimatedBox
              label="Windows"
              bgImage="./color-3.jpeg"
              buttonLabel="Download for Windows"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen7;

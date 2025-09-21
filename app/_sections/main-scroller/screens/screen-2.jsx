import FeatureButton from "@/components/ui/feature-button";

const Screen2 = () => {
  return (
    <div
      id="screen-2"
      className="screen flex size-full min-w-full items-center justify-center pt-32 max-[1000px]:mt-44"
    >
      <div className="flex h-full w-full max-w-[200rem] justify-center gap-10 max-[1000px]:flex-col min-[1000px]:gap-56">
        <div
          className="parallax-bg-2 relative flex h-full rounded-xl min-[1000px]:w-[30vw]"
          style={{
            backgroundImage: "url('/2.png')",
            backgroundPosition: "15% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="moving-label absolute z-10 text-center text-6xl font-extrabold text-white mix-blend-difference max-[1000px]:right-0 max-[1000px]:bottom-0 min-[1000px]:top-0 min-[1000px]:left-4/5">
            One Tool
            <p> For </p>
            Everything
          </div>
        </div>
        <div className="flex-col items-center max-[1000px]:flex min-[1000px]:place-content-around">
          <FeatureButton title="Screen Recorder" />
          <FeatureButton title="Screenshot" />
          <FeatureButton title="Annotate" />
        </div>
      </div>
    </div>
  );
};

export default Screen2;

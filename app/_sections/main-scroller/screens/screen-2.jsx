import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Screen2 = () => {
  // useGSAP(() => {
  //   gsap.to("#moving-div", {
  //     xPercent: -100,
  //     scrollTrigger: {
  //       trigger: ".second-screen",
  //       scrub: true,
  //       markers: false,
  //       start: "top top"
  //     }
  //   })
  // })

  // <div id="moving-div" className="w-60 h-60 bg-white absolute left-0"></div>
  return (
    <div className="screen second-screen relative flex h-full w-screen shrink-0 items-center justify-center bg-black text-9xl text-white">
      <div className="text-9xl font-bold">Screen2</div>
    </div>
  );
};

export default Screen2;

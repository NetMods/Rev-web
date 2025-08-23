import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Screen1 from "./screens/screen-1";
import Screen2 from "./screens/screen-2";
import Navbar from "./shared/navbar";

gsap.registerPlugin(ScrollTrigger);

const MainScroller = () => {
  useGSAP(() => {
    const screens = gsap.utils.toArray(".screen");

    gsap.to(screens, {
      xPercent: -100 * (screens.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".main-scroller",
        pin: true,
        scrub: 1,
        end: () => "+=" + window.innerWidth * (screens.length - 1),
      },
    });
  }, []);

  return (
    <div className="main-scroller flex h-screen overflow-x-hidden overflow-y-hidden bg-black text-white">
      <Navbar />
      <Screen1 />
      <Screen2 />
    </div>
  );
};

export default MainScroller;

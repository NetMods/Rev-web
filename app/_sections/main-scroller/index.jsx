import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/layout/navbar";

import Screen1 from "./screens/screen-1";
import Screen2 from "./screens/screen-2";
import Screen3 from "./screens/screen-3";
import Screen4 from "./screens/screen-4";
import Screen5 from "./screens/screen-5";

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
    <div className="main-scroller flex h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <Navbar className="h-32" />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
    </div>
  );
};

export default MainScroller;

import { useEffect } from "react";
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
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");
    let previousState = mediaQuery.matches;

    const handleResize = () => {
      const currentState = mediaQuery.matches;
      if (currentState !== previousState) {
        window.location.reload();
      }
      previousState = currentState;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)").matches;

    if (mediaQuery) {
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
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="main-scroller h-screen w-screen min-w-[400px] min-[1200px]:flex min-[1200px]:overflow-x-hidden min-[1200px]:overflow-y-hidden">
          <Navbar className="h-16 min-[1200px]:h-32" />
          <Screen1 />
          <Screen2 />
          <Screen3 />
          <Screen4 />
          <Screen5 />
        </div>
      </div>
    </div>
  );
};

export default MainScroller;

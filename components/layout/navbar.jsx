import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { cn } from "@/lib/utils";

import { MenuIcon } from "./menu-icon";

gsap.registerPlugin(SplitText);

const Navbar = ({ className }) => {
  useGSAP(() => {
    const splitlogo = new SplitText(".word-logo", { type: "chars" });
    const splitword = new SplitText(".navbar-word", { type: "chars" });

    gsap.fromTo(
      splitlogo.chars,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      splitword.chars,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      },
    );
  });

  return (
    <div
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-50 flex w-full items-center justify-around",
        className,
      )}
    >
      <div className="word-logo relative text-4xl font-semibold text-white">
        Rev
      </div>

      <div className="pointer-events-auto relative hidden text-4xl font-bold sm:block">
        <div className="navbar-word text-white mix-blend-difference">Krynn</div>
      </div>

      <div className="pointer-events-auto relative mix-blend-difference sm:hidden">
        <MenuIcon className={"scale-x-[-1]"} />
      </div>
    </div>
  );
};

export default Navbar;

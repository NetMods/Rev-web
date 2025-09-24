import { useGSAP } from "@gsap/react";
import { HamburgerIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { cn } from "@/lib/utils";

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
        "max-[1000px]:bg-background/10 pointer-events-none fixed top-0 left-0 z-50 flex w-full items-center justify-around max-[1000px]:backdrop-blur-xl",
        className,
      )}
    >
      <div className="word-logo text-foreground relative text-4xl font-semibold">
        Rev
      </div>

      <div className="pointer-events-auto relative hidden min-[1000px]:block">
        <button className="hover:bg-foreground/90 bg-foreground text-background inline-flex cursor-pointer items-center justify-center rounded-md px-6 py-3 transition-all ease-linear active:scale-95">
          Download
        </button>
      </div>

      <div className="pointer-events-auto relative mix-blend-difference min-[1000px]:hidden">
        <HamburgerIcon size={40} />
      </div>
    </div>
  );
};

export default Navbar;

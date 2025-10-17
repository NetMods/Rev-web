"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

import Register from "../ui/registration";

gsap.registerPlugin(SplitText);

const Navbar = ({ className }) => {
  const [showExport, setShowExport] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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
        "max-[1000px]:bg-background/10 pointer-events-none fixed top-0 left-0 z-[200] flex w-full items-center justify-around max-[1000px]:backdrop-blur-xl",
        className,
      )}
    >
      <div className="word-logo text-foreground relative inline-flex items-center justify-center text-3xl font-semibold">
        <figure>
          <Image
            src={"/icons/white-icon-filled.svg"}
            alt="logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </figure>
        Revord
      </div>

      <div className="pointer-events-auto relative block">
        <button
          className="hover:bg-foreground/90 bg-foreground/90 text-background inline-flex cursor-pointer items-center justify-center rounded-md px-5 pt-2.5 pb-2 transition-all ease-linear active:scale-95"
          onClick={() => setShowExport(true)}
        >
          Join waitlist
        </button>
      </div>

      {mounted &&
        createPortal(
          <Register isOpen={showExport} onClose={() => setShowExport(false)} />,
          document.body,
        )}
    </div>
  );
};

export default Navbar;

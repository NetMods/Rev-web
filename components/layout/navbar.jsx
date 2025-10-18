"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLoading } from "@/contexts/loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

import Register from "../ui/registration";

gsap.registerPlugin(SplitText);

const Navbar = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, isBackgroundReady } = useLoading();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (isLoading || !isBackgroundReady) return;

    const splitlogo = new SplitText(".word-logo", { type: "chars" });

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
      ".logo-icon",
      { rotation: -180, opacity: 0, scale: 0.5 },
      {
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
    );

    gsap.fromTo(
      ".join-button",
      { y: 20, opacity: 0 }, // Start 20px below
      {
        y: 0,
        opacity: 1,
        duration: 1, // Slightly longer for smoothness
        ease: "power1.out", // Linear-like easing to avoid bounce
        delay: 0.3, // Keep stagger after text
      },
    );
  }, [isLoading, isBackgroundReady]);

  return (
    <div
      className={cn(
        "max-[1000px]:bg-background/10 pointer-events-none fixed top-0 left-0 z-[200] flex w-full items-center justify-around max-[1000px]:backdrop-blur-xl",
        className,
        !isBackgroundReady && "opacity-0",
      )}
    >
      <div className="word-logo text-foreground relative inline-flex items-center justify-center text-3xl font-semibold max-md:text-xl">
        <figure>
          <Image
            src={"/icons/white-icon-filled.svg"}
            alt="logo"
            width={40}
            height={40}
            className="logo-icon mr-2 mb-2.5 scale-75"
          />
        </figure>
        Revord
      </div>

      <div className="pointer-events-auto relative block">
        <button
          className="join-button hover:bg-foreground/90 bg-foreground/90 text-background inline-flex cursor-pointer items-center justify-center rounded-md px-5 pt-2.5 pb-2 opacity-0 transition-all ease-linear active:scale-95 max-md:scale-[83%]"
          onClick={() => setShowModal(true)}
        >
          Join waitlist
        </button>
      </div>

      {mounted &&
        createPortal(
          <Register isOpen={showModal} onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </div>
  );
};

export default Navbar;

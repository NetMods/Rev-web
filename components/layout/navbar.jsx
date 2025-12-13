"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

import Register from "../ui/registration";

const Navbar = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={cn("blank fixed top-0 left-0 w-full", className)}>
      <div
        className={cn(
          "flex h-full items-center justify-between gap-2 font-sans",
          "bg-background border-foreground/10 mx-auto max-w-240 border-x px-2",
        )}
      >
        <div
          className={cn(
            "text-foreground relative mb-2.5 inline-flex items-center",
            "mt-2 shrink-0 justify-center text-2xl tracking-tighter max-md:text-xl",
          )}
        >
          <figure>
            <Image
              src={"/icons/black-icon-filled.svg"}
              alt="logo"
              width={40}
              height={40}
              className="mr-2 hover:animate-spin"
            />
          </figure>
          <span> Revord </span>
        </div>

        <div className="pointer-events-auto relative block shrink-0">
          <button
            className={cn(
              "bg-foreground/90 text-background inline-flex cursor-pointer",
              "items-center justify-center px-5 pt-2.5 pb-2 transition-all ease-linear active:scale-95 max-md:scale-[83%]",
            )}
            onClick={() => setShowModal(true)}
          >
            Join waitlist
          </button>
        </div>
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

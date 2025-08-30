import { cn } from "@/lib/utils";

import { MenuIcon } from "./menu-icon";

const Navbar = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-10 flex w-full items-center justify-around",
        className,
      )}
    >
      <div className="relative mix-blend-difference">
        <img src="/rev-w.svg" alt="logo" className="size-20" />
      </div>
      <div className="pointer-events-auto relative hidden text-4xl font-bold sm:block">
        <div className="text-white mix-blend-difference">Krynn</div>
      </div>
      <div className="pointer-events-auto relative mix-blend-difference sm:hidden">
        <MenuIcon className={"scale-x-[-1]"} />
      </div>
    </div>
  );
};

export default Navbar;

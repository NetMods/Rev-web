import { CiMenuKebab as MenuIcon } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-10 flex w-screen items-center justify-around p-4">
      <div className="pointer-events-auto relative z-10 mt-1 flex-1 text-3xl font-bold">
        <div className="z-10 ml-64 text-white mix-blend-difference">REV</div>
      </div>
      <div className="pointer-events-auto relative mt-1 flex-1 text-xl font-bold">
        <div className="ml-64 text-white mix-blend-difference">
          Made by: NetMods
        </div>
      </div>
      <div className="pointer-events-auto relative rounded-full border p-2 mix-blend-difference">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;

import { CiMenuKebab as MenuIcon } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 flex w-screen items-center justify-around bg-black p-4">
      <div className="mt-1 flex-1 text-3xl font-bold text-white">
        <div className="ml-64">REV</div>
      </div>
      <div className="mt-1 flex-1 text-xl font-bold text-white">
        <div className="ml-64">Made by: NetMods</div>
      </div>
      <div className="rounded-full border p-2">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;

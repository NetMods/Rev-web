import {
  AppStoreLogo,
  DownloadIcon,
  LinuxLogoIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react";

import { cn, isDev } from "@/lib/utils";
import { useDetectOS } from "@/hooks/use-detect-os";

const AnimatedBox = ({
  label,
  bgImage,
  icon: Icon,
  systemReq,
  buttonLabel,
  current,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground relative flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
        current && "border-foreground/20 border-2",
      )}
      style={{ position: "relative" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDev
            ? "url('https://placewaifu.com/image')"
            : `url(${bgImage})`,
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative z-10 flex size-full flex-col items-center justify-center font-normal backdrop-blur-sm backdrop-brightness-75 transition-all ease-linear hover:backdrop-brightness-50">
        <div className="w-2/3 text-center">
          <span className="inline-flex w-full items-center justify-center text-4xl lg:text-5xl">
            <Icon className="mr-3" />
            {label}
          </span>
          <div className="mt-2 text-sm text-gray-300">
            <p className="mt-1 text-xs">{systemReq}</p>
          </div>
          <div className="mt-4">
            <button className="bg-background/10 hover:bg-background/50 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded py-2 backdrop-blur-2xl transition-all ease-linear">
              <DownloadIcon size={25} />
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen7 = () => {
  const os = useDetectOS();

  return (
    <div
      id="screen-7"
      className="screen relative h-full min-w-full px-4 max-lg:py-10"
    >
      <div className="h-full w-full overflow-hidden">
        <div className="flex h-full w-full flex-col lg:flex-row">
          <div className="grid h-full w-full grid-cols-1 gap-3 lg:grid-cols-3 lg:pt-32">
            <AnimatedBox
              label="Windows"
              bgImage="/windows.jpg"
              icon={WindowsLogoIcon}
              buttonLabel="Download (.exe)"
              systemReq="Windows 10/11 (64-bit), 4 GB RAM, 500 MB free space"
              current={os === "Windows"}
            />
            <AnimatedBox
              label="MacOS"
              bgImage="/macos.jpg"
              icon={AppStoreLogo}
              buttonLabel="Download (.dmg)"
              systemReq="macOS 12 Monterey or later, 4 GB RAM, 500 MB free space"
              current={os === "MacOS"}
            />
            <AnimatedBox
              label="Linux"
              bgImage="/linux.jpg"
              icon={LinuxLogoIcon}
              systemReq="Any distribution, 4 GB RAM, 500 MB free space"
              buttonLabel="Download (.tar.gz)"
              current={os === "Linux"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen7;

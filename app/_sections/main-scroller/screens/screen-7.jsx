import {
  AppStoreLogoIcon,
  DownloadIcon,
  LinuxLogoIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/lib/utils";
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
    <article
      className={cn(
        "bg-background relative flex h-full items-end justify-center overflow-hidden font-sans transition-all duration-500 ease-in-out",
      )}
      style={{ position: "relative" }}
      aria-current={current ? "true" : undefined}
    >
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="bg-background border-foreground/15 relative flex w-full flex-col items-center justify-center border py-10 font-normal lg:border-y-0 xl:h-1/4">
        <header className="w-2/3 text-center">
          <h3 className="text-foreground inline-flex w-full items-center justify-center text-3xl lg:text-4xl xl:text-5xl">
            <Icon className="mr-3" />
            {label}
          </h3>
          <div className="text-foreground/60 mt-2 text-sm">
            <p className="mt-1 text-xs">{systemReq}</p>
          </div>
          <div className="mt-4">
            <button
              className={cn(
                "inline-flex w-full items-center justify-center gap-3 py-2 backdrop-blur-2xl transition-all ease-linear",
                "hover:text-background bg-background hover:bg-foreground border-foreground lg:border",
              )}
            >
              <DownloadIcon size={25} />
              Coming Soon
            </button>
          </div>
        </header>
      </div>
    </article>
  );
};

const Screen7 = () => {
  const os = useDetectOS();

  return (
    <section
      id="screen-7"
      className={`screen relative h-full min-w-full px-4 max-lg:my-10`}
      aria-labelledby="download-heading"
    >
      <div className="h-full w-full overflow-hidden">
        <div className="flex h-full w-full flex-col lg:flex-row">
          <div className="grid h-full w-full grid-cols-1 gap-3 lg:grid-cols-3">
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
              icon={AppStoreLogoIcon}
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
    </section>
  );
};

export default Screen7;

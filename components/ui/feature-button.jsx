import { cn } from "@/lib/utils";

const FeatureButton = ({ className, title, i }) => {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center py-1",
        className,
      )}
    >
      <button
        className={cn(
          "flex h-10 w-full max-w-100 shrink-0 items-end justify-between font-serif md:h-14",
          "border-foreground/20 hover:border-foreground overflow-hidden border-b lg:w-100",
          className,
        )}
      >
        <span className="text-md font-sans">{i}</span>
        <span className="text-lg md:text-xl lg:text-2xl"> {title} </span>
      </button>
    </div>
  );
};

export default FeatureButton;

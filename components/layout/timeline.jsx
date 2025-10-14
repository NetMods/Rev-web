import { cn } from "@/lib/utils";

const Timeline = () => {
  const items = [
    { label: "Project ", value: "briefing" },
    { label: "Color ", value: "color" },
    { label: "Photography ", value: "photography" },
    { label: "Final ", value: "deliverables" },
  ];

  const activeItem = "typography";
  const activeIndex = items.findIndex((item) => item.value === activeItem);

  return (
    <div
      className={cn(
        "hidden max-[1000px]:hidden",
        "min-[1000px]:fixed min-[1000px]:flex",
        "bottom-0 z-50 h-20 w-full bg-transparent",
        "items-center justify-center",
        "font-extrabold text-white",
      )}
    >
      <div className="relative flex w-full items-center justify-end overflow-x-auto">
        <div className="relative flex flex-1 justify-between px-4">
          <div className="absolute top-2.5 right-0 left-0 z-0 h-1.5 bg-[repeating-linear-gradient(to_right,#78716c_0_2px,transparent_1px_15px)]"></div>

          {items.map((item, index) => (
            <div
              key={item.value}
              className={cn(
                "relative z-10 mx-4 flex flex-shrink-0 flex-col items-center",
                "transition-transform duration-300 hover:scale-105",
                activeIndex === index ? "text-stone-800" : "text-stone-500",
                "min-w-[100px]",
              )}
              style={{ width: `${100 / items.length}%` }}
            >
              <span
                className={cn(
                  "mt-8 text-center text-xs font-extrabold whitespace-nowrap",
                  "md:text-base",
                  activeIndex === index ? "font-normal" : "font-normal",
                )}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

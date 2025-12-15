export const Banner = () => {
  const basetext = "• join the waitlist now ";
  const text = basetext.repeat(20);

  return (
    <>
      <div
        className="banner absolute left-0 z-30 mr-4 flex h-full w-6 flex-col items-center justify-center overflow-hidden select-none max-lg:hidden"
        style={{ backgroundColor: "#d6d6d6" }}
      >
        <span className="vertical text-foreground/70 ml-1 tracking-wide whitespace-nowrap uppercase">
          {text}
        </span>
      </div>

      <div
        className="fixed bottom-0 z-100 flex w-screen overflow-hidden select-none lg:hidden"
        style={{ backgroundColor: "#d6d6d6" }}
      >
        <span className="horizontal text-foreground/70 ml-1 tracking-wide whitespace-nowrap uppercase">
          {text}
        </span>
      </div>
    </>
  );
};

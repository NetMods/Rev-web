export const Banner = () => {
  const basetext = "• join the waitlist now ";
  const text = basetext.repeat(10);

  return (
    <div className="bg-foreground/10 mr-4 flex w-20 flex-col items-center justify-center overflow-hidden">
      <span className="vertical text-foreground/70 ml-1 tracking-wide whitespace-nowrap uppercase">
        {text}
      </span>
      <style jsx>{`
        .vertical {
          writing-mode: sideways-lr;
          animation: moveup 20s linear infinite;
        }

        @keyframes moveup {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(10%);
          }
        }
      `}</style>
    </div>
  );
};

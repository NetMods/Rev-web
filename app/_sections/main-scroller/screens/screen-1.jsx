import { Banner } from "@/components/layout/banner";

const Screen1 = () => {
  const heading = "Your Screen Story, Told With Clarity";

  return (
    <section
      id="screen-1"
      aria-labelledby="hero-heading"
      className={`flex min-w-full`}
    >
      <Banner />

      <div className="flex h-full flex-col font-sans">
        <div className="flex w-full items-center justify-center">
          <h1
            id="hero-heading"
            className="relative my-16 text-6xl tracking-tighter max-lg:text-5xl"
          >
            {heading}
          </h1>
        </div>

        <div className="size-full grid-cols-5 lg:grid">
          <figure className="col-span-3 self-center">
            <video
              src="/intro.mp4"
              muted
              loop
              preload="auto"
              className="border-foreground/10 frame"
              aria-label="Revord demo showing automatic zoom and pan while screen recording"
            />
          </figure>

          <article className="col-span-2 self-end">
            <p className="text-md text-foreground/70 py-10 text-center text-balance lg:text-xl">
              Record your screen with precise automatic zoom and pan, capture
              perfect screenshots to share, and draw or annotate on screen in
              realtime effortlessly, Revord provides all in one seamless desktop
              experience. Perfect for creators, teams, and educators who want
              clarity without the clutter.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Screen1;

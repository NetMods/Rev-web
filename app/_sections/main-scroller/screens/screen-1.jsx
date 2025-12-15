import Balancer from "react-wrap-balancer";

const Screen1 = () => {
  const heading = "Your Screen Story, Told With Clarity";

  return (
    <section
      id="screen-1"
      aria-labelledby="hero-heading"
      className={"relative min-w-full"}
    >
      <div className="font-sans">
        <div className="inline-flex w-full items-center justify-center">
          <Balancer className="hero-heading relative my-8 text-center text-4xl tracking-tighter md:text-5xl lg:my-16 xl:text-6xl">
            {heading}
          </Balancer>
        </div>

        <div className="grid-cols-5 lg:ml-8 lg:grid">
          <figure className="hero-video col-span-3 self-center">
            <video
              src="/intro.mp4"
              muted
              loop
              autoPlay
              preload="auto"
              className="border-foreground/10 frame hero-clip aspect-video"
              aria-label="Revord demo showing automatic zoom and pan while screen recording"
            />
          </figure>

          <article className="hero-subheading col-span-2 self-center">
            <p className="md:text-md text-foreground/70 py-10 text-center text-sm text-balance xl:text-xl">
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

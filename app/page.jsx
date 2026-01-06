"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/loading";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import { useHorizontalScroll } from "@/hooks/use-horizantal-scroll";
import Register from "@/components/ui/registration";
import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import MainScroller from "./_sections/main-scroller";
import Preloader from "./_sections/preloader";

export default function HomePage() {
  const { isLoading, onLoadingComplete, isAnimationDone, setIsAnimationDone } =
    useLoading();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);

  const runAnimation = () => {
    const animationTimeline = gsap.timeline({});

    animationTimeline
      .fromTo(
        ".header",
        { yPercent: -100 },
        { yPercent: 0, duration: 1, ease: "expo.inOut" },
      )
      .fromTo(
        ".footer",
        { yPercent: 100 },
        { yPercent: 0, duration: 1, ease: "expo.inOut" },
        "<",
      )
      .fromTo(
        ".hero-heading",
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.75, ease: "expo.inOut" },
      )
      .fromTo(
        ".hero-subheading",
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.75, ease: "expo.inOut" },
        "<",
      )
      .fromTo(
        ".hero-video",
        { clipPath: "inset(100% 0  0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "power4.out",
        },
      )
      .fromTo(
        ".hero-clip",
        { scale: 1.2 },
        {
          scale: 1,
          duration: 1,
          ease: "expo.inOut",
          onStart: () => setIsAnimationDone(true),
        },
        "<",
      )
      .fromTo(".banner", { x: -25 }, { x: 0, duration: 1, ease: "expo.inOut" });
  };

  useEffect(() => {
    gsap.set(".header", { yPercent: -100 });
    gsap.set(".footer", { yPercent: 100 });
    gsap.set(".hero-heading", { opacity: 0 });
    gsap.set(".hero-subheading", { opacity: 0 });
    gsap.set(".hero-video", { clipPath: "inset(100% 0  0 0)" });
    gsap.set(".banner", { x: -20 });

    if (!isLoading && !isAnimationDone) runAnimation();

    let previousWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const THRESHOLD = 1024;
      if (
        (previousWidth < THRESHOLD && currentWidth >= THRESHOLD) ||
        (previousWidth >= THRESHOLD && currentWidth < THRESHOLD)
      ) {
        window.location.reload();
      }
      previousWidth = currentWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoading]);

  const container = useHorizontalScroll({
    ease: 0.06, // smaller = smoother/slower
    multiplier: 1.5, // wheel sensitivity
  });

  return (
    <>
      <section
        aria-label="Revord feature showcase"
        className={cn(
          "relative grid h-screen w-full min-w-[360px] grid-rows-[auto,1fr,auto]",
        )}
      >
        <header className="header bg-background relative z-50 w-full max-lg:max-h-16">
          <Navbar className="h-full min-h-[4.4rem]" showModal={showModal} />
        </header>

        <MainScroller
          className="noscrollbar z-10 h-full lg:overflow-y-hidden"
          isAnimationDone={isAnimationDone}
          container={container}
          showModal={showModal}
        />

        <footer
          className={cn(
            "bg-background footer relative z-50 w-full max-lg:hidden",
            isLoading && "hidden",
          )}
        >
          <Footer className="h-full min-h-[4.4rem]" container={container} />
        </footer>

        <Banner />
      </section>

      {isLoading && <Preloader onLoadingComplete={onLoadingComplete} />}

      <Register isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

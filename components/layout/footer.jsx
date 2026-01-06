"use client";

import { cn } from "@/lib/utils";

import FluidLines from "../shared/lines";

export const Footer = ({ className }) => {
  return (
    <div className={cn(className, "border-t-[0.1rem] border-[#d6d6d6]")}>
      <FluidLines
        backgroundColor={"#ededed"}
        lineColor={"#00000054"}
        gap={12}
        radius={160}
        force={2}
        gravity={0.3}
        waveSpeed={8000}
        rotation={45}
        lineWidth={0.4}
        mouseInteraction={"diverge"}
        effects={"none"}
      />

      <div className="indicator absolute -top-2 bottom-0 flex w-3 justify-center">
        <div
          className="z-50 w-px rounded-full bg-rose-600"
          style={{
            left: "0px",
            willChange: "transform",
            transform: "translate3d(0px,0,0)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute -top-1 -left-[0.35rem] h-3 w-3 rounded-full border-2 border-rose-600 bg-rose-600" />
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            const scrollContainer = document.querySelector('.main-scrollable');
            const footer = document.querySelector('.footer');
            const indicator = document.querySelector('.indicator');

            if (!scrollContainer || !footer || !indicator) return;

            let isDragging = false;
            let startX = 0;
            let startScrollLeft = 0;

            const updatePosition = () => {
              const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth + 80;
              const percentage = maxScroll > 0 ? scrollContainer.scrollLeft / maxScroll : 0;
              const moveDistance = percentage * footer.clientWidth;
              indicator.style.transform = 'translate3d(' + moveDistance + 'px, 0, 0)';
            };

            const handleMove = (e) => {
              if (!isDragging) return;
              e.preventDefault();

              const deltaX = e.clientX - startX;
              const footerWidth = footer.clientWidth;
              const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth + 80;
              
              const scrollDelta = (deltaX / footerWidth) * maxScroll;
              scrollContainer.scrollLeft = startScrollLeft + scrollDelta;
            };

            const handleDown = (e) => {
              isDragging = true;
              startX = e.clientX;
              startScrollLeft = scrollContainer.scrollLeft;
              
              indicator.style.cursor = 'grabbing';
              document.body.style.cursor = 'grabbing';
              document.body.style.userSelect = 'none';
            };

            const handleUp = () => {
              if (isDragging) {
                isDragging = false;
                indicator.style.cursor = 'grab';
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
              }
            };

            // Initialize
            indicator.style.cursor = 'grab';
            
            // Attach Events
            scrollContainer.addEventListener('scroll', updatePosition);
            indicator.addEventListener('mousedown', handleDown);
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleUp);
            
            // Initial position check
            updatePosition();
            
            // Resize Observer
            const resizeObserver = new ResizeObserver(() => updatePosition());
            resizeObserver.observe(scrollContainer);
            resizeObserver.observe(footer);
          })();
        `,
        }}
      />
    </div>
  );
};

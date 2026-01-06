"use client";

import { useEffect, useRef } from "react";

const SimpleDotGrid = ({
  dotSpacing = 30,
  dotBaseSize = 2,
  influenceRadius = 150,
  maxScale = 8,
  color = "#d6d6d6",
  backgroundColor = "#0a0a0a",
}) => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef([]);
  const animationIdRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);

      dotsRef.current = [];
      for (let x = dotSpacing; x < canvas.offsetWidth; x += dotSpacing) {
        for (let y = dotSpacing; y < canvas.offsetHeight; y += dotSpacing) {
          dotsRef.current.push({ x, y });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      ctx.fillStyle = color;

      dotsRef.current.forEach((dot) => {
        const dx = mx - dot.x;
        const dy = my - dot.y;
        const distanceSq = dx * dx + dy * dy;
        const influenceRadiusSq = influenceRadius * influenceRadius;

        let currentRadius = dotBaseSize;

        if (distanceSq < influenceRadiusSq) {
          const distance = Math.sqrt(distanceSq);
          const influence = 1 - distance / influenceRadius;

          const scale = 1 + influence * influence * (maxScale - 1);
          currentRadius = dotBaseSize * scale;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mousePos.current.x = -1000;
      mousePos.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [
    dotSpacing,
    dotBaseSize,
    influenceRadius,
    maxScale,
    color,
    backgroundColor,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
};

export default SimpleDotGrid;

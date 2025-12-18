"use client";

import { useEffect, useRef } from "react";

export const FluidLines = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pointsRef = useRef([]);
  const animationRef = useRef(0);
  const gridDimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef?.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gap = 10;
    const radius = 70;
    const force = 4;
    const rotation = 45;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      initPoints(rect.width, rect.height);
    };

    const initPoints = (width, height) => {
      const diagonal = Math.sqrt(width * width + height * height);
      const gridSize = diagonal + 100;
      gridDimensionsRef.current = { width: gridSize, height: gridSize };

      const cols = Math.ceil(gridSize / gap);
      const rows = Math.ceil(gridSize / gap);
      pointsRef.current = [];

      for (let i = 0; i <= cols; i++) {
        const column = [];
        for (let j = 0; j <= rows; j++) {
          column.push({
            x: i * gap,
            y: j * gap,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
          });
        }
        pointsRef.current.push(column);
      }
    };

    resizeCanvas();

    const setMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const { width: gridW, height: gridH } = gridDimensionsRef.current;
      const { width: canvasW, height: canvasH } = rect;

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const centerX = canvasW / 2;
      const centerY = canvasH / 2;
      const relX = mouseX - centerX;
      const relY = mouseY - centerY;

      const angleRad = (rotation * Math.PI) / 180;
      const rotatedX = relX * Math.cos(-angleRad) - relY * Math.sin(-angleRad);
      const rotatedY = relX * Math.sin(-angleRad) + relY * Math.cos(-angleRad);

      const finalX = rotatedX + gridW / 2;
      const finalY = rotatedY + gridH / 2;

      mouseRef.current = { x: finalX, y: finalY };
    };

    const setMouseLeave = () => (mouseRef.current = { x: -1000, y: -1000 });

    const updatePoints = () => {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const radiusSq = radius * radius;

      const columns = pointsRef.current;
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        for (let j = 0; j < column.length; j++) {
          const point = column[j];

          const dx = point.x - mouseX;
          const dy = point.y - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < radiusSq) {
            const distance = Math.sqrt(distSq);
            const ratio = 1 - distance / radius;
            const ratio3 = ratio * ratio * ratio;
            point.vx += Math.sign(dx) * force * ratio3 * 0.1;
            point.vy += Math.sign(dy) * force * ratio3;
          }

          point.vx *= 0.7;
          point.vy *= 0.7;
          point.vx += point.dx * -0.1;
          point.vy += point.dy * -0.1;
          point.dx += point.vx;
          point.dy += point.vy;
        }
      }
    };

    const animate = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ededed";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updatePoints();

      const { width: gridW, height: gridH } = gridDimensionsRef.current;

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-gridW / 2, -gridH / 2);

      ctx.strokeStyle = "#00000024";
      ctx.lineWidth = 1;

      const columns = pointsRef.current;
      if (columns[0]) {
        const numRows = columns[0].length;
        const numCols = columns.length;

        for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
          ctx.beginPath();
          for (let colIndex = 0; colIndex < numCols; colIndex++) {
            const point = columns[colIndex][rowIndex];
            if (!point) continue;

            const x = point.x + point.dx;
            const y = point.y + point.dy;

            if (colIndex === 0) {
              ctx.moveTo(x, y);
            } else {
              const prevPoint = columns[colIndex - 1][rowIndex];
              if (prevPoint) {
                const px = prevPoint.x + prevPoint.dx;
                const py = prevPoint.y + prevPoint.dy;
                const cx = (px + x) / 2;
                const cy = (py + y) / 2;
                ctx.quadraticCurveTo(px, py, cx, cy);
              }
            }
          }
          ctx.stroke();
        }
      }

      ctx.restore();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    window.addEventListener("mousemove", setMouseMove);
    window.addEventListener("mouseleave", setMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", setMouseMove);
      window.removeEventListener("mouseleave", setMouseLeave);
    };
  }, [containerRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

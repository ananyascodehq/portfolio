"use client";

import { useEffect, useRef } from "react";

interface InteractiveGridProps {
  color?: string;
  dotSize?: number;
  spacing?: number;
  mouseRadius?: number;
  className?: string;
}

export default function InteractiveGrid({
  color = "rgba(255, 255, 255, 0.2)",
  dotSize = 1.5,
  spacing = 32,
  mouseRadius = 150,
  className = "",
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Use a device pixel ratio for sharp rendering on retina displays
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to canvas
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      const { x: mouseX, y: mouseY } = mouseRef.current;

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let drawSize = dotSize;
          let drawX = x;
          let drawY = y;
          let alpha = 1;

          if (distance < mouseRadius) {
            // Calculate scale and position offset
            const factor = 1 - distance / mouseRadius;
            
            // Pop effect (dots grow)
            drawSize = dotSize + factor * 2;
            
            // Subtle magnetic pull
            const pullStrength = 8 * factor;
            drawX -= (dx / distance) * pullStrength;
            drawY -= (dy / distance) * pullStrength;
            
            // Subtle brightness increase
            alpha = 1 + factor * 2;
          }

          ctx.globalAlpha = Math.min(alpha, 1); // Adjust global opacity
          ctx.beginPath();
          ctx.arc(drawX, drawY, drawSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, dotSize, spacing, mouseRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 pointer-events-none w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}

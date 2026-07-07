"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  alpha: number;
};

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let stars: Star[] = [];
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const SPEED_MULTIPLIER = 2.25;

    const reset = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.floor((width * height) / 10500);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.18 + 0.04,
        alpha: Math.random() * 0.65 + 0.15
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = "#ffffff";

      stars.forEach((star) => {
        star.y += star.speed * SPEED_MULTIPLIER;
        if (star.y > window.innerHeight + 8) {
          star.y = -8;
          star.x = Math.random() * window.innerWidth;
        }

        context.globalAlpha = star.alpha;
        context.fillRect(star.x, star.y, star.size, star.size);
      });

      context.globalAlpha = 1;
      animationFrame = window.requestAnimationFrame(draw);
    };

    reset();
    draw();
    window.addEventListener("resize", reset);

    return () => {
      window.removeEventListener("resize", reset);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}

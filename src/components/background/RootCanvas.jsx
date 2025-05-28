// src/components/RootCanvas.jsx
import { useEffect, useRef } from "react";

export default function RootCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const roots = Array.from({ length: 5 }, (_, i) => ({
      x: width * 0.2 * (i + 1),
      y: height - 50,
      depth: 0,
    }));

    function drawRoot(r) {
      ctx.beginPath();
      ctx.moveTo(r.x, r.y);
      for (let i = 0; i < 10; i++) {
        r.x += Math.random() * 10 - 5;
        r.y += Math.random() * 8;
        ctx.lineTo(r.x, r.y);
      }
      ctx.strokeStyle = "#92400e66";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      roots.forEach(drawRoot);
      requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full h-full z-[-2]"
    />
  );
}

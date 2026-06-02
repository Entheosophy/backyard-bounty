// /Users/entheos/Documents/Backyard Bounty/components/background/RootCanvas.jsx
import { useEffect, useRef } from "react";

export default function RootCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rootSystems = [
      { x: 0.18, y: 0.88, segments: [-10, 16, -6, 12, 4, 18, -8, 14] },
      { x: 0.36, y: 0.9, segments: [8, 14, -10, 15, 5, 18, 10, 12] },
      { x: 0.54, y: 0.89, segments: [-4, 13, 9, 17, -9, 14, 6, 16] },
      { x: 0.72, y: 0.91, segments: [10, 13, 7, 15, -8, 17, -6, 13] },
      { x: 0.88, y: 0.88, segments: [-8, 14, 5, 15, 10, 14, -5, 18] },
    ];

    function drawRoot(root, width, height) {
      let x = width * root.x;
      let y = height * root.y;
      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 0; i < root.segments.length; i += 2) {
        x += root.segments[i];
        y += root.segments[i + 1];
        ctx.lineTo(x, y);

        if (i === 2 || i === 4) {
          ctx.moveTo(x, y);
          ctx.lineTo(x - 12, y + 8);
          ctx.moveTo(x, y);
          ctx.lineTo(x + 10, y + 7);
        }
      }

      ctx.strokeStyle = "#92400e66";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function draw() {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.clearRect(0, 0, width, height);
      rootSystems.forEach((root) => drawRoot(root, width, height));
    }

    draw();
    window.addEventListener("resize", draw);

    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full h-full z-[-2]"
    />
  );
}

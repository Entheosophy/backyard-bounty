// src/components/background/LandscapeBackdrop.jsx
import { useEffect, useState } from "react";
import FieldPlants from "./FieldPlants";

export default function LandscapeBackdrop() {
  const [theme, setTheme] = useState("day");
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    const updateTheme = () => {
      const isNight = html.classList.contains("theme-night");
      setTheme(isNight ? "night" : "day");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Generate stars for the top 45% of the sky
    const newStars = Array.from({ length: 100 }, () => ({
      top: Math.random() * 45, // Use raw percentage for calculations
      left: Math.random() * 100, // Use raw percentage for calculations
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  const { width, height } = dimensions;

  const skyGradient =
    theme === "night"
      ? ["#0f172a", "#1e1b4b"]
      : ["#a8d8d8", "#f4e6a1", "#f0d080"];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full z-[-1] transition-opacity duration-700"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2={height}>
          {skyGradient.map((color, i) => (
            <stop
              key={i}
              offset={`${(i / (skyGradient.length - 1)) * 100}%`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>

      <rect width={width} height={height} fill="url(#skyGradient)" />

      {/* Stars, rendered within the SVG and controlled by theme */}
      {theme === "night" &&
        stars.map((star, i) => (
          <circle
            key={i}
            cx={star.left / 100 * width} // Convert % to actual coordinate
            cy={star.top / 100 * height} // Convert % to actual coordinate
            r={star.size / 2} // SVG circle uses radius
            fill="white"
            className="star-twinkle" // Use a specific class for the new animation
            style={{
              animationDelay: `${star.delay}s`,
              // No opacity here, it will be controlled by the animation
            }}
          >
            {/* SVG animation for twinkling - pure opacity change */}
            <animate
              attributeName="opacity"
              values="0.3; 1; 0.3"
              dur="3s"
              repeatCount="indefinite"
              begin={`${star.delay}s`}
            />
            {/* Optional: subtle size change if desired, but avoid transform for position */}
            <animate
              attributeName="r"
              values={`${star.size / 2}; ${star.size / 2 * 1.2}; ${star.size / 2}`}
              dur="3s"
              repeatCount="indefinite"
              begin={`${star.delay}s`}
            />
          </circle>
        ))}

      {/* Back Hills */}
      <path
        d={`M 0,${height * 0.53} Q ${width * 0.15},${height * 0.47} ${width * 0.35},${height * 0.5}
           Q ${width * 0.55},${height * 0.53} ${width * 0.75},${height * 0.48}
           Q ${width * 0.9},${height * 0.46} ${width},${height * 0.485}
           L ${width},${height} L 0,${height} Z`}
        fill="var(--hill-back)"
      />
      
      {/* Mid Hills */}
      <path
        d={`M 0,${height * 0.57} Q ${width * 0.12},${height * 0.52} ${width * 0.25},${height * 0.55}
           Q ${width * 0.4},${height * 0.58} ${width * 0.6},${height * 0.53}
           Q ${width * 0.8},${height * 0.49} ${width},${height * 0.54}
           L ${width},${height} L 0,${height} Z`}
        fill="var(--hill-mid)"
      />
      
      {/* Front Hills */}
      <path
        d={`M 0,${height * 0.6} Q ${width * 0.1},${height * 0.57} ${width * 0.22},${height * 0.59}
           Q ${width * 0.35},${height * 0.62} ${width * 0.5},${height * 0.58}
           Q ${width * 0.7},${height * 0.55} ${width * 0.85},${height * 0.575}
           Q ${width * 0.92},${height * 0.58} ${width},${height * 0.58}
           L ${width},${height} L 0,${height} Z`}
        fill="var(--hill-front)"
      />
      
      {/* Back Field */}
      <path
        d={`M 0,${height * 0.67} Q ${width * 0.2},${height * 0.64} ${width * 0.4},${height * 0.68}
           Q ${width * 0.6},${height * 0.72} ${width * 0.8},${height * 0.66}
           Q ${width * 0.9},${height * 0.64} ${width},${height * 0.67}
           L ${width},${height} L 0,${height} Z`}
        fill="var(--field-back)"
      />
      
      {/* Mid Field */}
      <path
        d={`M 0,${height * 0.72} Q ${width * 0.15},${height * 0.69} ${width * 0.35},${height * 0.73}
           Q ${width * 0.55},${height * 0.77} ${width * 0.75},${height * 0.71}
           Q ${width * 0.88},${height * 0.69} ${width},${height * 0.72}
           L ${width},${height} L 0,${height} Z`}
        fill="var(--field-mid)"
      />
      
      {/* Front Field */}
      <path
        d={`M 0,${height * 0.8} Q ${width * 0.12},${height * 0.77} ${width * 0.3},${height * 0.81}
           Q ${width * 0.5},${height * 0.85} ${width * 0.7},${height * 0.79}
           Q ${width * 0.85},${height * 0.77} ${width},${height * 0.8}
           L ${width},${height} L 0,${height} Z`}
        fill="var(--field-front)"
      />

      <FieldPlants width={width} height={height} />
    </svg>
  );
}
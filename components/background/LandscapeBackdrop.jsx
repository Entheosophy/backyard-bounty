// /Users/entheos/Documents/Backyard Bounty/components/background/LandscapeBackdrop.jsx
import { useEffect, useState } from "react";
import FieldPlants from "./FieldPlants";

const starSeed = [
  [7, 12, 0.9, 0.2], [14, 26, 0.8, 1.2], [21, 17, 0.7, 0.7], [27, 35, 1.1, 1.9],
  [34, 11, 0.9, 1.4], [39, 29, 0.6, 0.4], [46, 19, 0.8, 2.2], [53, 33, 0.7, 1.1],
  [61, 14, 1, 0.6], [68, 28, 0.7, 1.7], [73, 9, 0.8, 0.9], [81, 21, 1, 2.4],
  [88, 37, 0.6, 1.3], [94, 15, 0.8, 0.3], [12, 40, 0.6, 2.1], [58, 7, 0.7, 1.6],
];

function rollingPath(width, height, points, bottom = 1) {
  const [first, ...rest] = points;
  const commands = [`M 0,${height * first.y}`];

  rest.forEach((point, index) => {
    const previous = index === 0 ? first : rest[index - 1];
    const controlX = width * ((previous.x + point.x) / 2);
    const controlY = height * point.controlY;
    commands.push(`Q ${controlX},${controlY} ${width * point.x},${height * point.y}`);
  });

  commands.push(`L ${width},${height * bottom} L 0,${height * bottom} Z`);
  return commands.join(" ");
}

export default function LandscapeBackdrop() {
  const [theme, setTheme] = useState("day");
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

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

  const { width, height } = dimensions;

  const skyGradient =
    theme === "night"
      ? ["#0b1226", "#17224c", "#252052"]
      : ["#9fd4d3", "#cce8cf", "#f2d273"];

  const backHillPath = rollingPath(width, height, [
    { x: 0, y: 0.55 },
    { x: 0.18, y: 0.49, controlY: 0.48 },
    { x: 0.39, y: 0.535, controlY: 0.47 },
    { x: 0.58, y: 0.5, controlY: 0.57 },
    { x: 0.76, y: 0.465, controlY: 0.43 },
    { x: 1, y: 0.51, controlY: 0.48 },
  ]);

  const midHillPath = rollingPath(width, height, [
    { x: 0, y: 0.605 },
    { x: 0.16, y: 0.55, controlY: 0.52 },
    { x: 0.35, y: 0.585, controlY: 0.62 },
    { x: 0.55, y: 0.555, controlY: 0.51 },
    { x: 0.78, y: 0.535, controlY: 0.49 },
    { x: 1, y: 0.575, controlY: 0.55 },
  ]);

  const frontHillPath = rollingPath(width, height, [
    { x: 0, y: 0.66 },
    { x: 0.12, y: 0.61, controlY: 0.58 },
    { x: 0.31, y: 0.645, controlY: 0.69 },
    { x: 0.5, y: 0.61, controlY: 0.58 },
    { x: 0.72, y: 0.595, controlY: 0.55 },
    { x: 1, y: 0.635, controlY: 0.62 },
  ]);

  const backFieldPath = rollingPath(width, height, [
    { x: 0, y: 0.71 },
    { x: 0.2, y: 0.675, controlY: 0.65 },
    { x: 0.42, y: 0.715, controlY: 0.75 },
    { x: 0.63, y: 0.69, controlY: 0.66 },
    { x: 0.82, y: 0.665, controlY: 0.64 },
    { x: 1, y: 0.7, controlY: 0.68 },
  ]);

  const midFieldPath = rollingPath(width, height, [
    { x: 0, y: 0.77 },
    { x: 0.16, y: 0.735, controlY: 0.71 },
    { x: 0.34, y: 0.765, controlY: 0.8 },
    { x: 0.56, y: 0.79, controlY: 0.78 },
    { x: 0.78, y: 0.735, controlY: 0.7 },
    { x: 1, y: 0.765, controlY: 0.75 },
  ]);

  const frontFieldPath = rollingPath(width, height, [
    { x: 0, y: 0.86 },
    { x: 0.18, y: 0.815, controlY: 0.78 },
    { x: 0.36, y: 0.855, controlY: 0.9 },
    { x: 0.55, y: 0.88, controlY: 0.89 },
    { x: 0.76, y: 0.825, controlY: 0.78 },
    { x: 1, y: 0.86, controlY: 0.84 },
  ]);

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
        <linearGradient id="backHillGradient" x1="0" y1={height * 0.44} x2="0" y2={height}>
          <stop offset="0%" stopColor="var(--hill-back)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--hill-mid)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="midHillGradient" x1="0" y1={height * 0.5} x2="0" y2={height}>
          <stop offset="0%" stopColor="var(--hill-mid)" />
          <stop offset="100%" stopColor="var(--hill-front)" />
        </linearGradient>
        <linearGradient id="frontHillGradient" x1="0" y1={height * 0.55} x2="0" y2={height}>
          <stop offset="0%" stopColor="var(--hill-front)" />
          <stop offset="100%" stopColor="var(--field-back)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="fieldGradient" x1="0" y1={height * 0.64} x2="0" y2={height}>
          <stop offset="0%" stopColor="var(--field-back)" />
          <stop offset="52%" stopColor="var(--field-mid)" />
          <stop offset="100%" stopColor="var(--field-front)" />
        </linearGradient>
        <filter id="softHillShadow" x="-10%" y="-20%" width="120%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#172012" floodOpacity={theme === "night" ? "0.28" : "0.12"} />
        </filter>
      </defs>

      <rect width={width} height={height} fill="url(#skyGradient)" />

      {theme === "night" &&
        starSeed.map(([left, top, size, delay], i) => (
          <circle
            key={i}
            cx={(left / 100) * width}
            cy={(top / 100) * height}
            r={size}
            fill="white"
            opacity="0.75"
          >
            <animate
              attributeName="opacity"
              values="0.25; 0.95; 0.25"
              dur="4s"
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
          </circle>
        ))}

      <path d={backHillPath} fill="url(#backHillGradient)" opacity="0.96" filter="url(#softHillShadow)" />
      <path d={midHillPath} fill="url(#midHillGradient)" opacity="0.95" />
      <path d={frontHillPath} fill="url(#frontHillGradient)" />
      <path d={backFieldPath} fill="var(--field-back)" />
      <path d={midFieldPath} fill="var(--field-mid)" opacity="0.96" />
      <path d={frontFieldPath} fill="url(#fieldGradient)" />

      <g fill="none" strokeLinecap="round">
        {Array.from({ length: 7 }, (_, index) => {
          const x = width * (0.08 + index * 0.14);
          return (
            <path
              key={index}
              d={`M ${x},${height * 0.76} C ${x - width * 0.03},${height * 0.83} ${x + width * 0.04},${height * 0.91} ${x},${height}`}
              stroke={theme === "night" ? "rgba(255,242,192,0.08)" : "rgba(120,79,16,0.12)"}
              strokeWidth="1.5"
            />
          );
        })}
      </g>

      <FieldPlants width={width} height={height} />
    </svg>
  );
}

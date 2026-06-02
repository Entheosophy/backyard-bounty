// /Users/entheos/Documents/Backyard Bounty/components/background/DayNightInsects.jsx
import { useEffect, useState } from "react";

const bees = [
  { id: 1, top: "64%", left: "8%", delay: "0s", driftX: "38px", driftY: "-12px" },
  { id: 2, top: "72%", left: "29%", delay: "1.7s", driftX: "46px", driftY: "10px" },
  { id: 3, top: "60%", left: "55%", delay: "0.9s", driftX: "-34px", driftY: "-14px" },
  { id: 4, top: "78%", left: "84%", delay: "2.4s", driftX: "-42px", driftY: "12px" },
];

const fireflies = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  top: `${18 + ((index * 17) % 62)}%`,
  left: `${4 + ((index * 29) % 92)}%`,
  size: 1.2 + (index % 4) * 0.45,
  delay: `${(index % 9) * 0.55}s`,
  duration: `${7 + (index % 6) * 1.4}s`,
}));

export default function DayNightInsects() {
  const [isNight, setIsNight] = useState(false);
  const [clickedBee, setClickedBee] = useState(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsNight(document.documentElement.classList.contains("theme-night"));
    };

    updateTheme();
    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => themeObserver.disconnect();
  }, []);

  const handleBeeClick = (id) => {
    setClickedBee(id);
    window.setTimeout(() => setClickedBee(null), 650);
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isNight ? "opacity-100" : "opacity-0"
        }`}
      >
        {fireflies.map((bug) => (
          <div
            key={bug.id}
            className="firefly absolute rounded-full"
            style={{
              top: bug.top,
              left: bug.left,
              width: `${bug.size}px`,
              height: `${bug.size}px`,
              animationDelay: bug.delay,
              animationDuration: bug.duration,
            }}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isNight ? "opacity-0" : "opacity-100"
        }`}
      >
        {bees.map((bee) => (
          <button
            key={bee.id}
            type="button"
            aria-label="Bee"
            className={`bee-flight absolute pointer-events-auto h-5 w-5 border-0 bg-transparent p-0 ${
              clickedBee === bee.id ? "bee-dash" : ""
            }`}
            style={{
              top: bee.top,
              left: bee.left,
              animationDelay: bee.delay,
              "--bee-x": bee.driftX,
              "--bee-y": bee.driftY,
            }}
            onClick={() => handleBeeClick(bee.id)}
          >
            <svg viewBox="0 0 32 32" width="20" height="20" className="drop-shadow-sm">
              <ellipse cx="16" cy="17" rx="7" ry="5.5" fill="#facc15" stroke="#7c4a03" strokeWidth="1" />
              <path d="M 12 12 C 9 8, 5 9, 5 14 C 8 13, 10 14, 12 16" fill="#ffffff" opacity="0.72" />
              <path d="M 20 12 C 23 8, 27 9, 27 14 C 24 13, 22 14, 20 16" fill="#ffffff" opacity="0.72" />
              <path d="M 13 12 L 11 8 M 19 12 L 21 8" stroke="#7c4a03" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 14 13 C 13 16, 13 18, 14 21 M 18 13 C 19 16, 19 18, 18 21" stroke="#7c4a03" strokeWidth="1.1" opacity="0.55" />
            </svg>
          </button>
        ))}
      </div>

      <style>{`
        .firefly {
          background: #facc15;
          filter: blur(0.4px) drop-shadow(0 0 8px #fde68a);
          animation: firefly-glow ease-in-out infinite;
        }

        .bee-flight {
          animation: bee-flight 9s ease-in-out infinite;
        }

        .bee-dash {
          animation: bee-dash 0.65s ease-out forwards;
        }

        @keyframes firefly-glow {
          0%, 100% { transform: translate(0, 0) scale(0.9); opacity: 0.18; }
          35% { transform: translate(8px, -8px) scale(1.15); opacity: 0.78; }
          70% { transform: translate(-7px, 6px) scale(1); opacity: 0.42; }
        }

        @keyframes bee-flight {
          0%, 100% { transform: translate(0, 0) rotate(-7deg); }
          25% { transform: translate(calc(var(--bee-x) * 0.42), calc(var(--bee-y) * 0.8)) rotate(10deg); }
          55% { transform: translate(var(--bee-x), var(--bee-y)) rotate(-12deg); }
          78% { transform: translate(calc(var(--bee-x) * 0.22), calc(var(--bee-y) * -0.4)) rotate(8deg); }
        }

        @keyframes bee-dash {
          0% { transform: translate(0,0) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(58px,-42px) scale(1.15) rotate(24deg); opacity: 0.82; }
        }

        @media (prefers-reduced-motion: reduce) {
          .firefly,
          .bee-flight,
          .bee-dash {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

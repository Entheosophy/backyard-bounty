// src/components/background/DayNightInsects.jsx
import { useEffect, useState } from "react";

export default function DayNightInsects() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const update = () =>
      setIsNight(document.documentElement.classList.contains("theme-night"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const [bees, setBees] = useState(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 60 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
    delay: Math.random() * 4,
    isClicked: false,
  })));

  const handleBeeClick = (id) => {
    setBees(prevBees =>
      prevBees.map(bee =>
        bee.id === id ? { ...bee, isClicked: true } : bee
      )
    );
    // Reset isClicked after animation duration
    setTimeout(() => {
      setBees(prevBees =>
        prevBees.map(bee =>
          bee.id === id ? { ...bee, isClicked: false } : bee
        )
      );
    }, 700); // Match this with the animation duration
  };

  const fireflies = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    color: "#facc15",
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
  }));

  return (
    <div className="absolute inset-0 z-[1]">
      {/* Fireflies (night) */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isNight ? "opacity-100" : "opacity-0"}`}>
        {fireflies.map((bug) => (
          <div
            key={bug.id}
            className="absolute rounded-full animate-firefly-glow"
            style={{
              top: bug.top,
              left: bug.left,
              width: `${bug.size}px`,
              height: `${bug.size}px`,
              backgroundColor: bug.color,
              filter: `blur(0.5px) drop-shadow(0 0 ${bug.size * 2}px ${bug.color})`,
              animationDelay: `${bug.delay}s`,
              animationDuration: `${bug.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Bees (day) */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isNight ? "opacity-0" : "opacity-100"}`}>
        {bees.map((bee) => (
          <div
            key={bee.id}
            className={`absolute pointer-events-auto transition-transform hover:scale-125 hover:rotate-12
                        ${bee.isClicked ? 'animate-bee-dash' : 'animate-bee-flight'}`}
            style={{ top: bee.top, left: bee.left, animationDelay: `${bee.delay}s` }}
            onClick={() => handleBeeClick(bee.id)}
          >
            <svg viewBox="0 0 32 32" width="24" height="24" fill="gold" className="drop-shadow-sm">
              <circle cx="16" cy="16" r="6" fill="#facc15" stroke="#92400e" strokeWidth="1" />
              <ellipse cx="12" cy="12" rx="2" ry="4" fill="#fff" opacity="0.8" />
              <ellipse cx="20" cy="12" rx="2" ry="4" fill="#fff\" opacity="0.8" />
            </svg>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes firefly-glow {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-5px) translateX(5px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(10px) translateX(-10px) scale(1);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-8px) translateX(8px) scale(1.1);
            opacity: 1;
          }
        }
        .animate-firefly-glow {
          animation: firefly-glow ease-in-out infinite;
        }

        @keyframes bee-flight {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(10px, -10px) rotate(10deg); }
          40% { transform: translate(-10px, -5px) rotate(-5deg); }
          60% { transform: translate(5px, 10px) rotate(15deg); }
          80% { transform: translate(-8px, 0px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-bee-flight {
          animation: bee-flight 8s linear infinite;
        }

        /* Refined Bee Dash Animation */
        @keyframes bee-dash {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
          25% { transform: translate(80px, -80px) scale(1.3) rotate(60deg); opacity: 0.7; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-bee-dash {
          animation: bee-dash 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
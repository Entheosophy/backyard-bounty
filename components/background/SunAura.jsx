// components/background/SunAura.jsx
import { forwardRef } from "react";

const SunAura = forwardRef(function SunAura(_, ref) {
  return (
    <div
      ref={ref}
      className="fixed top-[60px] left-1/2 -translate-x-1/2 z-0 w-[220px] h-[220px] transition-opacity duration-700 theme-day:opacity-100 theme-night:opacity-0"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full blur-3xl bg-[var(--scene-sun)] opacity-50" />

      {/* Animated ray wrapper */}
      <div className="absolute inset-0 animate-rotate-and-pulse pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const angle = i * 45;
          return (
            <div
              key={i}
              className="absolute w-0 h-0 border-l-[9px] border-r-[9px] border-b-[18px] border-l-transparent border-r-transparent border-b-[var(--scene-sun)] opacity-70"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-95px)`,
                transformOrigin: "center",
              }}
            />
          );
        })}
      </div>

      {/* Solid sun */}
      <div className="absolute inset-0 m-auto w-[160px] h-[160px] rounded-full bg-[var(--scene-sun)] opacity-60 shadow-md" />

      {/* Keyframes */}
      <style>{`
        @keyframes rotate-and-pulse {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.07);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        .animate-rotate-and-pulse {
          animation: rotate-and-pulse 12s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
});

export default SunAura;

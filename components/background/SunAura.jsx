// /Users/entheos/Documents/Backyard Bounty/components/background/SunAura.jsx
import { forwardRef } from "react";

const SunAura = forwardRef(function SunAura(_, ref) {
  return (
    <div
      ref={ref}
      className="fixed left-1/2 top-[100px] z-0 h-[170px] w-[170px] -translate-x-1/2 transition-opacity duration-700 theme-day:opacity-100 theme-night:opacity-0 md:top-[92px] md:h-[220px] md:w-[220px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full blur-3xl bg-[var(--scene-sun)] opacity-50" />

      {/* Rays */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {[...Array(8)].map((_, i) => {
          const angle = i * 45;
          return (
            <div
              key={i}
              className="absolute h-0 w-0 border-b-[22px] border-l-[10px] border-r-[10px] border-b-[var(--scene-sun)] border-l-transparent border-r-transparent opacity-80 md:border-b-[30px] md:border-l-[14px] md:border-r-[14px]"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-96px)`,
                transformOrigin: "center",
              }}
            />
          );
        })}
      </div>

      {/* Solid sun */}
      <div className="absolute inset-0 z-20 m-auto h-[120px] w-[120px] rounded-full bg-[var(--scene-sun)] opacity-95 shadow-md md:h-[160px] md:w-[160px]" />
    </div>
  );
});

export default SunAura;

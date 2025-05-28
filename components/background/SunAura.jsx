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

      {/* Solid sun */}
      <div className="absolute inset-0 m-auto w-[160px] h-[160px] rounded-full bg-[var(--scene-sun)] opacity-60 shadow-md" />
    </div>
  );
});

export default SunAura;

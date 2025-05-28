// components/background/CrescentMoon.jsx
import { forwardRef } from "react";

const CrescentMoon = forwardRef(function CrescentMoon(_, ref) {
  return (
    <div
      ref={ref}
      className="fixed top-[60px] left-1/2 -translate-x-1/2 z-0 w-[220px] h-[220px] transition-opacity duration-700 theme-day:opacity-0 theme-night:opacity-100"
    >
      {/* Soft yellow moon glow */}
      <div className="absolute inset-0 rounded-full bg-[#fef9c3] opacity-40 blur-[60px]" />

      {/* Visible crescent moon body */}
      <div className="absolute inset-0 m-auto w-[160px] h-[160px] rounded-full bg-[#fef08a] shadow-md overflow-hidden">
        {/* Cutout to form crescent */}
        <div className="absolute -left-1/4 top-0 w-full h-full rounded-full bg-[var(--scene-bg)]" />
      </div>
    </div>
  );
});

export default CrescentMoon;

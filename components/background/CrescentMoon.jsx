// /Users/entheos/Documents/Backyard Bounty/components/background/CrescentMoon.jsx
import { forwardRef } from "react";

const CrescentMoon = forwardRef(function CrescentMoon(_, ref) {
  return (
    <div
      ref={ref}
      className="fixed left-1/2 top-[100px] z-0 h-[170px] w-[170px] -translate-x-1/2 transition-opacity duration-700 theme-day:opacity-0 theme-night:opacity-100 md:top-[92px] md:h-[220px] md:w-[220px]"
    >
      {/* Soft yellow moon glow */}
      <div className="absolute inset-0 rounded-full bg-[#fef9c3] opacity-40 blur-[60px]" />

      {/* Visible crescent moon body */}
      <div className="absolute inset-0 m-auto h-[120px] w-[120px] overflow-hidden rounded-full bg-[#fef08a] shadow-md md:h-[160px] md:w-[160px]">
        {/* Cutout to form crescent */}
        <div className="absolute -left-1/4 top-0 w-full h-full rounded-full bg-[var(--scene-bg)]" />
      </div>
    </div>
  );
});

export default CrescentMoon;

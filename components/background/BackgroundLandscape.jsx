// components/background/BackgroundLandscape.jsx
export default function BackgroundLandscape({ theme = "day" }) {
  const isDay = theme === "day";

  return (
    <div className="absolute inset-0 -z-1 overflow-hidden">
      <svg
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky */}
        <rect width="1440" height="1024" fill={isDay ? "#fdf6e4" : "#1a1a2e"} />

        {/* Farthest Hills (light green or dusk blue) */}
        <path
          d="
            M0 520 
            C 240 380, 480 580, 720 500 
            S 1200 450, 1440 500 
            V1024 H0 Z
          "
          fill={isDay ? "#c6e3ba" : "#2d3a3f"}
        />

        {/* Mid Hills (deeper green or steel tone) */}
        <path
          d="
            M0 620 
            C 300 460, 540 720, 840 620 
            S 1260 580, 1440 600 
            V1024 H0 Z
          "
          fill={isDay ? "#9dc88d" : "#243035"}
        />

        {/* Foreground Hill (golden field or earthy brown) */}
        <path
          d="
            M0 750 
            C 360 670, 720 820, 1080 740 
            S 1440 760, 1440 760 
            V1024 H0 Z
          "
          fill={isDay ? "#f4da89" : "#3a2d1e"}
        />
      </svg>
    </div>
  );
}

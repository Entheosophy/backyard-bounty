// src/components/BackgroundLandscape.jsx
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
  
          {/* Farthest Hills */}
          <path
            d="M0 500 Q300 300 600 500 T1440 500 V1024 H0 Z"
            fill={isDay ? "#c6e3ba" : "#2d3a3f"}
          />
  
          {/* Mid Hills */}
          <path
            d="M0 600 Q360 420 720 600 T1440 600 V1024 H0 Z"
            fill={isDay ? "#9dc88d" : "#243035"}
          />
  
          {/* Foreground Hill */}
          <path
            d="M0 750 Q400 650 800 750 T1440 750 V1024 H0 Z"
            fill={isDay ? "#f4da89" : "#3a2d1e"}
          />
        </svg>
      </div>
    );
  }
  
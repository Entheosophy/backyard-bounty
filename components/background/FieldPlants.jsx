// /Users/entheos/Documents/Backyard Bounty/components/background/FieldPlants.jsx
const plantPatches = [
  { type: "tomato", x: 0.13, y: 0.92, scale: 0.72, delay: "0s" },
  { type: "tomato", x: 0.18, y: 0.84, scale: 0.48, delay: "0.7s" },
  { type: "pepper", x: 0.43, y: 0.93, scale: 0.66, delay: "0.35s", color: "#d94a22" },
  { type: "pepper", x: 0.48, y: 0.82, scale: 0.5, delay: "1.1s", color: "#4f9e3b" },
  { type: "onion", x: 0.73, y: 0.88, scale: 0.5, delay: "0.2s" },
  { type: "onion", x: 0.82, y: 0.96, scale: 0.68, delay: "0.9s" },
  { type: "grass", x: 0.07, y: 0.79, scale: 0.44, delay: "0.4s" },
  { type: "grass", x: 0.28, y: 0.86, scale: 0.5, delay: "1.3s" },
  { type: "grass", x: 0.62, y: 0.78, scale: 0.42, delay: "0.8s" },
  { type: "grass", x: 0.92, y: 0.9, scale: 0.55, delay: "1.6s" },
];

function TomatoPlant({ x, y, scale = 1, delay = "0s" }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <g className="field-plant" style={{ animationDelay: delay }}>
        <line x1="0" y1="0" x2="0" y2="-62" stroke="var(--scene-plant)" strokeWidth="3" strokeLinecap="round" />
        {[-18, -31, -45, -56].map((leafY, index) => (
          <g key={leafY} transform={`rotate(${index % 2 === 0 ? -18 : 18})`}>
            <ellipse cx={index % 2 === 0 ? -9 : 9} cy={leafY} rx="6" ry="13" fill="var(--scene-plant)" opacity="0.92" />
          </g>
        ))}
        <circle cx="-10" cy="-29" r="7" fill="#df3f2f" />
        <circle cx="-3" cy="-41" r="5.8" fill="#f05a38" />
        <circle cx="-13" cy="-31" r="2.5" fill="#ff8a68" opacity="0.8" />
        <circle cx="-5" cy="-43" r="2" fill="#ffb08a" opacity="0.75" />
      </g>
    </g>
  );
}

function PepperPlant({ x, y, scale = 1, color = "#d94a22", delay = "0s" }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <g className="field-plant" style={{ animationDelay: delay }}>
        <line x1="0" y1="0" x2="0" y2="-54" stroke="var(--scene-plant)" strokeWidth="2.6" strokeLinecap="round" />
        <ellipse cx="-7" cy="-15" rx="5" ry="11" fill="var(--scene-plant)" transform="rotate(-16 -7 -15)" />
        <ellipse cx="8" cy="-26" rx="5" ry="12" fill="var(--scene-plant)" transform="rotate(14 8 -26)" />
        <ellipse cx="-6" cy="-39" rx="5" ry="10" fill="var(--scene-plant)" transform="rotate(-10 -6 -39)" />
        <ellipse cx="9" cy="-23" rx="4" ry="13" fill={color} transform="rotate(14 9 -23)" />
        <ellipse cx="5" cy="-40" rx="3.5" ry="11" fill={color} transform="rotate(-12 5 -40)" opacity="0.92" />
      </g>
    </g>
  );
}

function OnionPlant({ x, y, scale = 1, delay = "0s" }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <g className="field-plant" style={{ animationDelay: delay }}>
        <g stroke="var(--scene-plant)" strokeWidth="2.3" strokeLinecap="round" fill="none">
          <path d="M -5,0 C -11,-21 -5,-34 -9,-50" />
          <path d="M 0,0 C -2,-23 4,-35 0,-55" />
          <path d="M 5,0 C 10,-18 4,-33 9,-47" />
        </g>
        <ellipse cx="0" cy="5" rx="8" ry="12" fill="#f2ead0" />
        <ellipse cx="2" cy="1" rx="3" ry="5" fill="#ffffff" opacity="0.7" />
      </g>
    </g>
  );
}

function GrassTuft({ x, y, scale = 1, delay = "0s" }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <g className="field-plant" style={{ animationDelay: delay }}>
        <g stroke="var(--scene-plant)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.78">
          <path d="M 0,0 C -6,-20 -3,-37 -10,-54" />
          <path d="M 0,0 C 0,-24 2,-44 1,-64" />
          <path d="M 0,0 C 7,-21 8,-39 16,-58" />
          <path d="M -3,0 C -14,-14 -17,-26 -24,-40" />
          <path d="M 4,0 C 16,-16 21,-29 29,-43" />
        </g>
        <circle cx="1" cy="-64" r="2" fill="#f4e7a8" opacity="0.65" />
      </g>
    </g>
  );
}

export default function FieldPlants({ width, height }) {
  const renderPlant = (patch) => {
    const props = {
      key: `${patch.type}-${patch.x}-${patch.y}`,
      x: width * patch.x,
      y: height * patch.y,
      scale: patch.scale,
      delay: patch.delay,
    };

    if (patch.type === "tomato") return <TomatoPlant {...props} />;
    if (patch.type === "pepper") return <PepperPlant {...props} color={patch.color} />;
    if (patch.type === "onion") return <OnionPlant {...props} />;
    return <GrassTuft {...props} />;
  };

  return (
    <g>
      <g opacity="0.25">
        {Array.from({ length: 8 }, (_, index) => {
          const x = width * (0.08 + index * 0.13);
          const y = height * (0.86 + (index % 3) * 0.035);
          return <ellipse key={index} cx={x} cy={y} rx={width * 0.012} ry={height * 0.006} fill="#5b3a17" />;
        })}
      </g>
      {plantPatches.map(renderPlant)}
      <style>{`
        .field-plant {
          transform-box: fill-box;
          transform-origin: 50% 100%;
          animation: plant-sway 7s ease-in-out infinite;
        }

        @keyframes plant-sway {
          0%, 100% { transform: rotate(-0.7deg); }
          50% { transform: rotate(1deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .field-plant {
            animation: none;
          }
        }
      `}</style>
    </g>
  );
}

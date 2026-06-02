// /Users/entheos/Documents/Backyard Bounty/components/background/BreezeLayer.jsx
const breezeLines = [
  { top: "18%", width: "38vw", delay: "-13s", duration: "21s", opacity: 0.2 },
  { top: "25%", width: "46vw", delay: "-6s", duration: "19s", opacity: 0.24 },
  { top: "34%", width: "34vw", delay: "-18s", duration: "24s", opacity: 0.2 },
  { top: "42%", width: "40vw", delay: "-3s", duration: "23s", opacity: 0.18 },
  { top: "51%", width: "48vw", delay: "-15s", duration: "22s", opacity: 0.2 },
  { top: "61%", width: "30vw", delay: "-9s", duration: "20s", opacity: 0.16 },
  { top: "70%", width: "36vw", delay: "-21s", duration: "26s", opacity: 0.14 },
];

const leafDrifts = [
  { top: "38%", delay: "1s", duration: "18s", scale: 0.75 },
  { top: "52%", delay: "7s", duration: "22s", scale: 0.58 },
  { top: "69%", delay: "4s", duration: "20s", scale: 0.68 },
  { top: "78%", delay: "11s", duration: "26s", scale: 0.5 },
];

export default function BreezeLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[0] overflow-hidden">
      {breezeLines.map((line, index) => (
        <svg
          key={index}
          viewBox="0 0 420 60"
          aria-hidden="true"
          className="breeze-ribbon absolute -left-[48vw] h-[60px] text-white/70 theme-night:text-sky-200/35"
          style={{
            top: line.top,
            width: line.width,
            animationDelay: line.delay,
            animationDuration: line.duration,
            opacity: line.opacity,
          }}
        >
          <path
            d="M 4 35 C 70 10, 126 56, 190 31 S 310 5, 416 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="56 28"
          />
          <path
            d="M 86 39 C 126 24, 158 44, 198 33"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.72"
          />
        </svg>
      ))}

      {leafDrifts.map((leaf, index) => (
        <span
          key={index}
          className="leaf-drift absolute -left-8 block h-3 w-5 rounded-[100%_0_100%_0] bg-lime-300/55 shadow-[0_0_10px_rgba(190,242,100,0.2)] theme-night:bg-cyan-200/28"
          style={{
            top: leaf.top,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            transform: `scale(${leaf.scale}) rotate(-18deg)`,
          }}
        />
      ))}

      <style>{`
        .breeze-ribbon {
          animation-name: breeze-cross;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .leaf-drift {
          animation-name: leaf-drift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes breeze-cross {
          0% { transform: translateX(0); }
          100% { transform: translateX(150vw); }
        }

        @keyframes leaf-drift {
          0% { transform: translateX(0) translateY(0) rotate(-18deg); opacity: 0; }
          10% { opacity: 0.6; }
          45% { transform: translateX(64vw) translateY(-22px) rotate(18deg); opacity: 0.5; }
          85% { opacity: 0.42; }
          100% { transform: translateX(120vw) translateY(16px) rotate(42deg); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .breeze-ribbon,
          .leaf-drift {
            animation: none;
            opacity: 0.14;
          }
        }
      `}</style>
    </div>
  );
}

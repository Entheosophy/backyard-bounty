// /Users/entheos/Documents/Backyard Bounty/components/HeatScale.jsx
export default function HeatScale({ heatLevel = 1, className = "" }) {
  const level = Math.min(Math.max(heatLevel, 1), 4);
  const peppers = Array.from({ length: 4 }, (_, index) => index < level);
  const heatColors = ["#4d9f36", "#d6b42a", "#d96a22", "#c92828"];

  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      aria-label={`Heat level ${level} of 4`}
      role="img"
    >
      {peppers.map((isActive, index) => (
        <span
          key={index}
          className={`block h-2.5 w-5 rounded-full border transition ${
            isActive
              ? "border-black/10"
              : "border-stone-400/50 bg-stone-200/70 theme-night:bg-stone-700/70"
          }`}
          style={
            isActive
              ? {
                  backgroundColor: heatColors[index],
                  boxShadow: `0 0 8px ${heatColors[index]}66`,
                }
              : undefined
          }
        />
      ))}
    </div>
  );
}

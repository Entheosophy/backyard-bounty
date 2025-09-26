// components/HeatScale.jsx
export default function HeatScale({ heatLevel = 1, className = "" }) {
  const level = Math.min(Math.max(heatLevel, 1), 4); // Clamp between 1 and 4
  const src = `/heat-${level}.svg`;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <img
  src={src}
  alt={`Heat Level ${level}`}
  className="h-8 md:h-10 w-auto object-contain drop-shadow-sm"
  draggable={false}
/>
    </div>
  );
}

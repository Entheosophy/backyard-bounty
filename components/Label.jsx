// components/Label.jsx
// import BasketIcon from "./BasketIcon";
import HeatScale from "./HeatScale";

export default function Label({ productName, tagline, heatLevel }) {
  return (
    <div className="max-w-md mx-auto text-center bg-white/30 shadow-lg border border-gray-200 rounded p-6">
      <h1 className="text-3xl font-bold tracking-wide mb-4">BACKYARD BOUNTY</h1>
      <div className="mb-4">

      </div>
      <h2 className="text-xl uppercase font-semibold text-gray-800">{productName}</h2>
      <p className="italic text-sm text-gray-600 mt-1">{tagline}</p>
      <div className="mt-4 flex justify-center">
        <HeatScale level={heatLevel} />
      </div>
    </div>
  );
}
//         <BasketIcon className="w-24 h-auto mx-auto" />
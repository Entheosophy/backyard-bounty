// components/ProductModal.jsx

import { useEffect } from "react";
import { createPortal } from "react-dom";

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function ProductModal({ product, onClose, rawColorData }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!product) return null;

  const productRawColors = rawColorData[product.name];
  const modalGradientAlpha = 0.75;
  const gradientStyle = `linear-gradient(to bottom right, ${hexToRgba(
    productRawColors.dark,
    modalGradientAlpha
  )}, ${hexToRgba(productRawColors.light, modalGradientAlpha)})`;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={handleBackdrop}
    >
      <div
        className="relative rounded-lg shadow-lg w-full max-w-md p-6 space-y-4 overflow-auto"
        style={{
          background: gradientStyle,
          maxHeight: "90vh",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-xl font-bold opacity-70 hover:opacity-100 text-white"
        >
          &times;
        </button>

        <h3 className="text-3xl font-bold text-white">{product.name}</h3>
        <p className="text-md text-white">{product.description}</p>

        <ul className="text-sm list-disc list-inside text-white">
          {product.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className="text-xs italic text-white">*Organic</p>

        <div
          className="text-sm pt-3 opacity-90 text-white"
          style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}
        >
          <strong>Nutrition:</strong> {product.nutrition}
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}

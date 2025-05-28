// src/components/ProductModal.jsx

import { useEffect } from "react";
import { useBasket } from "../context/BasketContext";
import { toast } from "react-hot-toast";

// Helper function to convert hex to rgba (duplicate in both files for simplicity)
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Destructure new prop: rawColorData
export default function ProductModal({ product, onClose, isNightMode, colorMap, rawColorData }) { 
  const { addItem } = useBasket();
  
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

  const handleAdd = () => {
    if (!product || !addItem) return;
    addItem(product, 1);
    toast.success(`${product.name} added to basket`);
    onClose();
  };

  if (!product) return null;

  // Get the raw hex colors for the current product
  const productRawColors = rawColorData[product.name];
  
  // Define opacity for the modal background (less intense)
  const modalGradientAlpha = 0.75; // You can adjust this value (e.g., 0.7 for more transparency)

  // Convert hex colors to RGBA with desired opacity
  const modalStartColorRgba = hexToRgba(productRawColors.dark, modalGradientAlpha);
  const modalEndColorRgba = hexToRgba(productRawColors.light, modalGradientAlpha);

  // Define the gradient style for the modal background
  const gradientStyle = `linear-gradient(to bottom right, ${modalStartColorRgba}, ${modalEndColorRgba})`;

  // Text color inside the modal will be white for contrast
  const modalTextColor = 'text-white'; 

  // Border color for the nutrition section: a subtle, semi-transparent white
  const borderColor = 'rgba(255, 255, 255, 0.3)'; 

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={handleBackdrop}
    >
      <div 
        className={`relative rounded-lg shadow-lg max-w-md w-full p-6 space-y-4 overflow-hidden`} 
        style={{ 
          background: gradientStyle, // Apply the dynamic gradient
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className={`absolute top-3 right-3 text-xl font-bold opacity-70 hover:opacity-100 transition ${modalTextColor}`}
        >
          &times;
        </button>

        {/* Product Name */}
        <h3 className={`text-3xl font-bold ${modalTextColor}`}>{product.name}</h3>
        
        {/* Product Description */}
        <p className={`text-md ${modalTextColor}`}>{product.description}</p>

        {/* Ingredients List */}
        <ul className={`text-sm list-disc list-inside ${modalTextColor}`}>
          {product.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Nutrition Info with dynamic border */}
        <div 
            className={`text-sm pt-3 opacity-90 ${modalTextColor}`}
            style={{ 
                borderTop: `1px solid ${borderColor}` // Apply dynamic border color
            }}
        >
          <strong>Nutrition:</strong> {product.nutrition}
        </div>

        {/* Add to Basket Button */}
        <button
          className="mt-4 w-full px-4 py-2 rounded bg-amber-500 hover:bg-amber-600 text-white font-semibold"
          onClick={handleAdd}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}
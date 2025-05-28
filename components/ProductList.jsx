// components/ProductList.jsx
import { useState, useEffect } from "react";
import HeatScale from "./HeatScale";
import ProductModal from "./ProductModal";

// Define the raw hex color data for direct use in JS
const rawColorData = {
  Mild: { light: '#76D74B', dark: '#458B2E' },
  Med: { light: '#FFEA30', dark: '#E1A600' },
  Hot: { light: '#FF8533', dark: '#C84E00' },
  Fire: { light: '#FF4B4B', dark: '#BE0000' },
};

// Helper function to convert hex to rgba
const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const products = [
  {
    name: "Mild",
    description: "Bright and fresh with just a spark of warmth.",
    heatLevel: 1,
    ingredients: ["Heirloom Tomatoes", "Backyard Peppers", "Garlic", "Cilantro", "Salt", "Black Pepper", "Citric Acid"],
    nutrition: "20 cal / 2 tbsp"
  },
  {
    name: "Med",
    description: "Balanced jalapeño kick and garden sweetness.",
    heatLevel: 2,
    ingredients: ["Heirloom Tomatoes", "Jalapeños", "Onion", "Garlic", "Salt"],
    nutrition: "25 cal / 2 tbsp"
  },
  {
    name: "Hot",
    description: "Serrano heat with deep, smoky undertones.",
    heatLevel: 3,
    ingredients: ["Heirloom Tomatoes", "Serrano Peppers", "Garlic", "Smoked Paprika"],
    nutrition: "30 cal / 2 tbsp"
  },
  {
    name: "Fire",
    description: "Best come prepared.",
    heatLevel: 4,
    ingredients: ["Fire-roasted Heirloom Tomatoes", "Hot AF Peppers", "Garlic", "Smoked Paprika"],
    nutrition: "30 cal / 2 tbsp"
  }
];

export default function ProductList() {
  const [selected, setSelected] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsNightMode(document.documentElement.classList.contains('theme-night'));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Mapping from simplified product name to the base part of the CSS variable name
  const colorMap = {
    Mild: 'salsa-mild',
    Med: 'salsa-med',
    Hot: 'salsa-hot',
    Fire: 'salsa-fire',
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Heirloom Salsas</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, i) => {
          const productColors = rawColorData[product.name];
          
          // Card gradient and outline opacity
          // Night mode (dark background): subtle glow, lower opacity gradient
          // Day mode (light background): more visible border, higher opacity gradient
          const cardGradientAlpha = isNightMode ? 0.3 : 0.7; // Lower opacity for night, higher for day
          const cardBorderAlpha = isNightMode ? 0.5 : 0.8; // More subtle border at night

          const cardStartColorRgba = hexToRgba(productColors.dark, cardGradientAlpha);
          const cardEndColorRgba = hexToRgba(productColors.light, cardGradientAlpha);
          const cardBorderColorRgba = hexToRgba(productColors.light, cardBorderAlpha); // Border from light color

          return (
            <button
              key={i}
              onClick={() => setSelected(product)}
              className="p-4 shadow-sm rounded backdrop-blur-md text-left transition hover:scale-[1.01] hover:shadow-md
                         flex flex-col" 
              style={{
                // Apply the gradient background
                background: `linear-gradient(to top, ${cardStartColorRgba}, ${cardEndColorRgba})`,
                // Apply the border dynamically
                border: `1px solid ${cardBorderColorRgba}`,
                // Apply a subtle glow/box-shadow
                boxShadow: `0 0 10px ${cardBorderColorRgba}`,
              }}
            >
              <div className="flex-grow"> 
                <h3 
                  className="font-bold text-lg mb-2"
                  style={{ 
                    color: `var(--${colorMap[product.name]}-${isNightMode ? 'light' : 'dark'})` 
                  }}
                >
                    {product.name}
                </h3>
                <p className="text-sm text-[var(--scene-text)] opacity-80 mb-4">
                  {product.description}
                </p>
              </div>
              <HeatScale heatLevel={product.heatLevel} />
            </button>
          );
        })}
      </div>
      <ProductModal 
          product={selected} 
          onClose={() => setSelected(null)} 
          isNightMode={isNightMode} 
          colorMap={colorMap}       
          rawColorData={rawColorData} // Pass the raw hex color data to the modal
      />
    </section>
  );
}
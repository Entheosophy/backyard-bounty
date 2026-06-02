// /Users/entheos/Documents/Backyard Bounty/components/ProductModal.jsx

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import HeatScale from "./HeatScale";
import { hexToRgba } from "../lib/color";

export default function ProductModal({ product, onClose, salsaColors }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!product) return undefined;

    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      previouslyFocused?.focus?.();
    };
  }, [onClose, product]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!product) return null;

  const productColors = salsaColors[product.name];
  const accentOutline = hexToRgba(productColors.accent, 0.62);
  const accentGlow = hexToRgba(productColors.accent, 0.28);
  const accentWash = hexToRgba(productColors.light, 0.16);
  const titleId = `product-modal-${product.name.toLowerCase()}`;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/55 px-4 backdrop-blur-sm"
      onClick={handleBackdrop}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-md border-2 bg-[#fff7df] p-6 text-stone-950 shadow-2xl outline-none theme-night:bg-stone-950 theme-night:text-stone-50"
        style={{
          borderColor: accentOutline,
          backgroundImage: `linear-gradient(180deg, ${accentWash}, transparent 34%)`,
          boxShadow: `0 0 0 4px ${accentGlow}, 0 24px 70px ${hexToRgba(productColors.dark, 0.3)}`,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full border border-stone-900/20 px-2.5 py-1 text-lg font-bold opacity-70 transition hover:opacity-100 theme-night:border-stone-100/20"
        >
          x
        </button>

        <div className="pr-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] opacity-65">
            Backyard Bounty Salsa
          </p>
          <h3 id={titleId} className="mt-2 text-4xl font-black" style={{ color: productColors.accent }}>
            {product.name}
          </h3>
          <p className="mt-2 text-lg font-semibold italic">{product.tagline}</p>
        </div>

        <div
          className="my-5 h-1.5 rounded-full"
          style={{ backgroundColor: productColors.accent }}
        />

        <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] opacity-65">Flavor</p>
            <p className="mt-2 leading-relaxed">{product.description}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] opacity-65">Heat</p>
            <HeatScale heatLevel={product.heatLevel} className="mt-3" />
          </div>
        </div>

        <div
          className="mt-6 rounded border bg-white/40 p-4 theme-night:bg-white/5"
          style={{ borderColor: hexToRgba(productColors.accent, 0.28) }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] opacity-65">Pepper blend</p>
          <p className="mt-2 text-sm">{product.pepperBlend}</p>
        </div>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] opacity-65">Ingredients</p>
          <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
            {product.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic opacity-70">*Organic</p>
        </div>

        <div
          className="mt-6 border-t border-stone-900/15 pt-4 text-sm opacity-90 theme-night:border-stone-100/15"
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

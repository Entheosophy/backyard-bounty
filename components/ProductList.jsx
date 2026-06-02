// /Users/entheos/Documents/Backyard Bounty/components/ProductList.jsx
import { useState, useEffect } from "react";
import HeatScale from "./HeatScale";
import ProductModal from "./ProductModal";
import { products, salsaColors } from "../data/products";
import { hexToRgba } from "../lib/color";
import { siteLinks } from "../data/siteLinks";

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

  return (
    <section className="mx-auto max-w-5xl px-0 py-4">
      <div className="mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-900 theme-night:text-red-200">
          Small-batch salsa
        </p>
        <h2 className="mt-2 text-3xl font-bold">Heirloom Salsas</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm opacity-80">
          Four garden-grown heat levels, built around heirloom tomatoes, organic garlic,
          and peppers that taste like they came from real soil.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const productColors = salsaColors[product.name];
          const accent = productColors.accent;
          const accentWash = hexToRgba(productColors.light, isNightMode ? 0.18 : 0.22);

          return (
            <button
              key={product.name}
              onClick={() => setSelected(product)}
              className="product-card-outline group flex min-h-[270px] flex-col rounded-md border border-stone-800/15 bg-[#fff7df]/92 p-4 text-left shadow-[0_16px_35px_rgba(73,44,20,0.14)] transition hover:-translate-y-1 theme-night:border-stone-100/15 theme-night:bg-stone-950/82"
              style={{
                "--card-accent": accent,
                backgroundImage: `linear-gradient(180deg, ${accentWash}, transparent 38%)`,
              }}
            >
              <div
                className="mb-4 h-1.5 w-full rounded-full"
                style={{ backgroundColor: accent }}
              />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] opacity-65">
                    Backyard Bounty
                  </p>
                  <h3 className="mt-2 text-3xl font-black leading-none" style={{ color: accent }}>
                    {product.name}
                  </h3>
                </div>
                <img
                  src="/backyard-bounty-logo-small.png"
                  alt=""
                  className="h-11 w-11 rounded object-contain"
                  draggable={false}
                />
              </div>

              <p className="mt-3 text-sm font-semibold italic opacity-80">{product.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed opacity-82">{product.description}</p>

              <div className="mt-5 border-t border-stone-900/15 pt-4 theme-night:border-stone-100/15">
                <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] opacity-70">
                  Heat
                </p>
                <HeatScale heatLevel={product.heatLevel} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-md border border-red-950/15 bg-[#fff7df]/88 px-5 py-4 text-center shadow-sm theme-night:border-red-200/20 theme-night:bg-stone-950/70">
        <p className="text-sm font-semibold">
          Available locally at{" "}
          <a
            href={siteLinks.redBarnFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-red-900 underline decoration-red-900/30 underline-offset-4 transition hover:text-red-700 theme-night:text-red-200 theme-night:hover:text-red-100"
          >
            Red Barn Produce in Fruitland
          </a>
          , Idaho.
        </p>
        <a
          href="#where-to-buy"
          className="mt-3 inline-flex rounded-full bg-red-800 px-4 py-2 text-sm font-bold !text-white transition hover:bg-red-700 hover:!text-white"
        >
          Find it locally
        </a>
      </div>

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
        salsaColors={salsaColors}
      />

      <style jsx>{`
        .product-card-outline:hover,
        .product-card-outline:focus-visible {
          border-color: var(--card-accent);
          box-shadow:
            0 0 0 3px color-mix(in srgb, var(--card-accent) 34%, transparent),
            0 24px 48px rgba(73, 44, 20, 0.22);
          outline: none;
        }
      `}</style>
    </section>
  );
}

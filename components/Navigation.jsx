// /Users/entheos/Documents/Backyard Bounty/components/Navigation.jsx
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { path: "about", label: "About" },
  { path: "products", label: "Products" },
  { path: "where-to-buy", label: "Where to Buy" },
  { path: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); // close mobile menu
  };

  const renderLinks = (mobile = false) => (
    <div
      className={`flex ${mobile ? "flex-col items-center space-y-4" : "items-center gap-6"}`}
    >
      {navItems.map(({ path, label }) => (
        <button
          type="button"
          key={path}
          onClick={() => scrollToSection(path)}
          className={`text-sm font-bold transition hover:text-red-800 theme-night:hover:text-red-200 ${
            mobile ? "text-base" : ""
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="fixed left-0 top-0 z-40 w-full border-b border-stone-900/10 bg-[#fff7df]/52 backdrop-blur-md theme-night:border-stone-100/10 theme-night:bg-stone-950/45">
      <div className="max-w-7xl mx-auto h-16 px-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-full">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <img
              src="/backyard-bounty-logo-small.png"
              className="h-8 w-auto max-h-10 object-contain"
              alt="Backyard Bounty"
            />
            <span className="text-sm font-black uppercase tracking-[0.18em]">
              Backyard Bounty
            </span>
          </button>

          {renderLinks()}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden grid grid-cols-3 items-center h-full">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1 min-w-0"
          >
            <img
              src="/backyard-bounty-logo-small.png"
              alt="Backyard Bounty"
              className="h-8 w-auto max-h-10 object-contain flex-shrink-0"
            />
          </button>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded border border-stone-900/25 bg-white/35 p-2 backdrop-blur-md theme-night:border-stone-100/25 theme-night:bg-stone-900/45"
              aria-label="Toggle menu"
            >
              <span className="text-xl text-[var(--scene-text)]">
                {isOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden backdrop-blur-lg border-t border-gray-300/50 dark:border-gray-700/50 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {renderLinks(true)}
      </div>
    </nav>
  );
}

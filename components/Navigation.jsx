// components/Navigation.jsx
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { path: "about", label: "About" },
  { path: "products", label: "Products" },
  { path: "where-to-buy", label: "Where to Buy" },
  { path: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
          key={path}
          onClick={() => scrollToSection(path)}
          className={`text-sm font-medium transition hover:text-amber-500 ${
            mobile ? "text-base" : ""
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-transparent backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto h-16 px-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-full">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
            <img
              src="/backyard-bounty-logo.png"
              className="h-8 w-auto max-h-10 object-contain"
              alt="Backyard Bounty"
            />
          </button>

          {renderLinks()}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden grid grid-cols-3 items-center h-full">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-1 min-w-0">
            <img
              src="/backyard-bounty-logo.png"
              alt="Backyard Bounty"
              className="h-8 w-auto max-h-10 object-contain flex-shrink-0"
            />
          </button>

          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded border border-gray-400 dark:border-gray-600 backdrop-blur-md"
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

// components/Navigation.jsx
import { useState } from "react";
import Link from "next/link";
import { useBasket } from "../context/BasketContext";
import BasketIcon from "./BasketIcon";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/router";


const navItems = [
  { path: "/products", label: "Products" },
  { path: "/where-to-buy", label: "Where to Buy" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  const router = useRouter();
  const location = router.pathname;
    const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useBasket();

  const renderLinks = (isMobile = false) => (
    <div className={`flex ${isMobile ? "flex-col items-center space-y-4" : "items-center gap-6"}`}>
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          onClick={() => setIsOpen(false)}
          className={`text-sm font-medium transition hover:text-amber-500 ${
            location.pathname === path
              ? "text-amber-600 underline"
              : "text-[var(--scene-text)]"
          } ${isMobile ? "text-base" : ""}`}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  const renderBasket = (
    <Link href="/basket" onClick={() => setIsOpen(false)} className="relative">
      <BasketIcon className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 text-xs font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full leading-none shadow">
          {totalItems}
        </span>
      )}
    </Link>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-transparent backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto h-16 px-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img src="/BackyardBountyLogo.png" className="h-8 w-auto max-h-10 object-contain" />
          </Link>
          {renderLinks()}
          <div className="flex items-center gap-4">
            {renderBasket}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Top Row */}
        <div className="md:hidden grid grid-cols-3 items-center h-full">
          <Link href="/" className="flex items-center gap-1 min-w-0" onClick={() => setIsOpen(false)}>
            <img
              src="/BackyardBountyLogo.png"
              alt="Backyard Bounty"
              className="h-8 w-auto max-h-10 object-contain flex-shrink-0"
            />
          </Link>

          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded bg-[var(--scene-bg)]/60 border border-gray-400 dark:border-gray-600 backdrop-blur-md"
              aria-label="Toggle menu"
            >
              <span className="text-xl text-[var(--scene-text)]">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 justify-end">
            {renderBasket}
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-[var(--scene-bg)]/70 backdrop-blur-lg border-t border-gray-300 dark:border-gray-700 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {renderLinks(true)}
      </div>
    </nav>
  );
}

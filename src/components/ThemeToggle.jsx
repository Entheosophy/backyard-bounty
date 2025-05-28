// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() =>
      localStorage.theme === "night" ||
      (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  
    useEffect(() => {
      const html = document.documentElement;
      html.classList.toggle("theme-night", dark);
      html.classList.toggle("theme-day", !dark);
      localStorage.theme = dark ? "night" : "day";
    }, [dark]);
  
    return (
      <button
        onClick={() => setDark(!dark)}
        className={`
          px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-semibold
          rounded-full shadow border backdrop-blur-md transition
          bg-yellow-200 text-yellow-900 border-yellow-400
          theme-night:bg-gray-900 theme-night:text-sky-100 theme-night:border-gray-600
          hover:border-gray-400 theme-night:hover:border-sky-300
        `}
      >
        {dark ? "🌙" : "☀️"}
      </button>
    );
  }
  
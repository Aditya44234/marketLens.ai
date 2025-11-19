import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-navy text-blue-700 dark:text-white px-3 py-2 rounded shadow
                 focus:outline-none hover:ring-2 hover:ring-blue-500 transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Navy" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;

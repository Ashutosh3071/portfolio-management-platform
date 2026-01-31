import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-6 py-3
                    bg-gray-200 dark:bg-gray-800
                    text-black dark:text-white">
      <h3 className="font-bold">Portfolio Management Platform</h3>

      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-blue-600 text-white"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

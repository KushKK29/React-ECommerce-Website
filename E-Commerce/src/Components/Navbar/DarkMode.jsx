import React from "react";
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";
import { useState, useEffect } from "react";
const DarkMode = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Light Button"
        onClick={() => {
          settheme(theme === "light" ? "dark" : "light");
        }}
        className={`w-12 cursor-ponter drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "placeholder-opacity-100"
        }`}
      />
      <img
        src={DarkButton}
        alt="Dark Button"
        onClick={() => {
          settheme(theme === "dark" ? "light" : "dark");
        }}
        className={`w-12 cursor-ponter drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300`}
      />
    </div>
  );
};

export default DarkMode;

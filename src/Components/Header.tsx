// Header.tsx
import React, { useEffect, useState } from 'react';
import { type Theme, getSavedTheme, setTheme } from '../ThemeSwitcherLogic/theme';

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getSavedTheme());

  // Apply theme on initial load
  useEffect(() => {
    setTheme(currentTheme);
  },);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as Theme;
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <header
      className="fixed top-0 w-full h-[4rem]  z-10 grid grid-cols-3 items-center  px-[4%]  shadow-md"
    >
      {/* Left: Logo */}
      <a className="text-xl font-bold border-none w-fit" href='/'>MyApp</a>

      {/* Center: Dropdown */}
      <div className="flex justify-center">
        <select
          value={currentTheme}
          onChange={handleThemeChange}
          className="bg-transparent border rounded px-3 py-1"
        >
          <option value="theme1">Minimalist</option>
          <option value="theme2">Dark Sidebar</option>
          <option value="theme3">Colorful Cards</option>
        </select>
      </div>

      {/* Right: Navigation */}
      <nav className="flex justify-end gap-[1%] ">

        <a href="/products" className="text-base no-underline hover:underline font-bold">
          Product
        </a>
      </nav>
    </header>

  );
};

export default Header;
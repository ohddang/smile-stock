"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Navbar() {
  // const [theme, setTheme] = useState("");
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="fixed content-center w-full h-16 bg-white text-gray-800 dark:bg-gray-800 dark:text-white border-b-[1px] border-gray-200 dark:border-gray-600 p-1">
      <div className="flex flex-row justify-between items-center">
        <Link href="/korea" className="text-xl font-bold">
          Smile Stock
        </Link>
        <button onClick={handleToggleTheme}>Light & Dark</button>
        <Menu>
          <MenuButton className="p-2">Theme</MenuButton>
          <MenuItems className="p-2 border bg-gray-200 dark:bg-gray-800 rounded border-gray-400 dark:border-gray-600" anchor="bottom">
            <MenuItem>
              <p className="p-2 text-gray-800 dark:text-white" onClick={() => setTheme("light")}>
                Light
              </p>
            </MenuItem>
            <MenuItem>
              <p className="p-2 text-gray-800 dark:text-white" onClick={() => setTheme("dark")}>
                Dark
              </p>
            </MenuItem>
            <MenuItem>
              <p className="p-2 text-gray-800 dark:text-white" onClick={() => setTheme("system")}>
                System
              </p>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}

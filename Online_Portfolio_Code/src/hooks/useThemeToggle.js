import { useEffect, useState } from "react";

export const useThemeToggle = () => {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setThemeState] = useState(getSystemTheme);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!document.documentElement.hasAttribute("data-theme")) {
        setThemeState(e.matches ? "dark" : "light");
      }
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const setTheme = (value) => {
    document.documentElement.setAttribute("data-theme", value);
    setThemeState(value);
  };

  return [theme, setTheme];
};

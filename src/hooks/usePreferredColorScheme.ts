import { useEffect, useState } from "react";

/**
 * A hook to observe the currently matching prefers-color scheme policy.
 *
 * @param defaultTheme The default theme to set for the first rendering
 * @returns The current theme
 */
const usePreferredColorScheme = (defaultTheme: "light" | "dark") => {
  const mediaQuery = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme);

  useEffect(() => {
    setTheme(window.matchMedia(mediaQuery).matches ? "dark" : "light");
  }, []);

  window.matchMedia(mediaQuery).addEventListener("change", (event) => {
    setTheme(event.matches ? "dark" : "light");
  });

  return theme;
};

export default usePreferredColorScheme;

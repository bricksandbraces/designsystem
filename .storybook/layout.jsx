import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import baseTheme from "../src/theme";

import "../src/styles/index.css";
import "./storybook.css";

const Layout = ({ children }) => {
  const isDark = useDarkMode();

  // TODO: Remove the placeholder variable definitions as soon as the light is defined.
  const currentTheme = !isDark
    ? { ...baseTheme.light, "color-app-background": "#F2F2F3" }
    : { ...baseTheme.dark, "color-app-background": "#0C0C0D" };

  useEffect(() => {
    Object.keys(currentTheme).forEach((token) => {
      document.body.style.setProperty("--" + token, currentTheme[token]);
    });
  }, [currentTheme]);

  return <>{children}</>;
};

export default Layout;

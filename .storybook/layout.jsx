import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";

import "../src/styles/index.css";
import "./storybook.css";

const Layout = ({ children }) => {
  const isDark = useDarkMode();

  // TODO: use modules themes light & dark
  const currentTheme = !isDark
    ? { "color-app-background": "#fff" }
    : { "color-app-background": "#000" };

  useEffect(() => {
    Object.keys(currentTheme).forEach((token) => {
      document.body.style.setProperty("--" + token, currentTheme[token]);
    });
  }, [currentTheme]);

  return <>{children}</>;
};

export default Layout;

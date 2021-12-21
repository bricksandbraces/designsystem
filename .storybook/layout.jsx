import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";

import "../src/styles/index.css";
import "./storybook.css";

const Layout = ({ children }) => {
  const isDark = useDarkMode();

  const currentTheme = !isDark
    ? { "--color-app-background": "#fff" }
    : { "--color-app-background": "#000" };

  useEffect(() => {
    Object.keys(currentTheme).forEach((token) => {
      document.body.style.setProperty(token, currentTheme[token]);
    });

    console.log("New theme is ");
    console.log(currentTheme);
  }, [currentTheme]);

  return <>{children}</>;
};

export default Layout;

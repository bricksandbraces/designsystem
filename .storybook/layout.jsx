import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { defaultTheme } from "../src/theme";

import "../src/styles/index.css";
import "./storybook.css";

const Layout = ({ children }) => {
  const isDark = useDarkMode();

  // TODO: Remove the placeholder variable definitions as soon as the light is defined.
  const currentTheme = !isDark
    ? {
        ...defaultTheme.light,
        "color-app-background": "#F2F2F3",
        "color-gradient-background":
          "linear-gradient(to right, rgba(242,242,243,1), rgba(242,242,243,0.3)), url(https://user-images.githubusercontent.com/33894877/148248519-75db1e37-e195-4d23-aac6-b0f94a2905c8.png)"
      }
    : {
        ...defaultTheme.dark,
        "color-app-background": "#0C0C0D",
        "color-gradient-background":
          "linear-gradient(to right, rgba(13,13,13,1), rgba(13,13,13,0.3)), url(https://user-images.githubusercontent.com/33894877/148248514-6499eccf-2aae-4ebc-ab1a-7b033138df19.png)"
      };

  useEffect(() => {
    Object.keys(currentTheme).forEach((token) => {
      document.body.style.setProperty("--" + token, currentTheme[token]);
    });
  }, [currentTheme]);

  return <>{children}</>;
};

export default Layout;

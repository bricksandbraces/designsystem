import React from "react";
import { addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import { configureActions } from "@storybook/addon-actions";

import Layout from "./layout";
import LogoWhite from "./public/logo-white.svg";
import LogoBlack from "./public/logo-black.svg";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

configureActions({
  depth: 3,
  // Limit the number of items logged into the actions panel
  limit: 15,
  allowFunction: false
});

export const parameters = {
  controls: { disabled: true },
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "app-bg",
    values: [
      { name: "white", value: "#ffffff" },
      { name: "app-bg", value: "#0c0c0d" },
      {
        name: "random-lynx",
        value: 'url("https://luchs.hobbytes.de/image?width=1920&height=1080")'
      }
    ]
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: "#0C0C0D",
      colorSecondary: "#884DFF",
      textColor: "#fff",
      textInverseColor: "#fff",
      barTextColor: "#fff",
      barSelectedColor: "#DDCCFF",
      brandImage: LogoWhite
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: "#F2F2F3",
      colorSecondary: "#5400ff",
      textColor: "#000",
      textInverseColor: "#000",
      barTextColor: "#000",
      barSelectedColor: "#5400ff",
      brandImage: LogoBlack
    }
  }
};

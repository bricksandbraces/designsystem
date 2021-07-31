import React from "react";
import { addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";

import Layout from "./layout";
import LogoWhite from "./public/logo-white.svg";
import LogoBlack from "./public/logo-black.svg";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "black",
    values: [
      { name: "white", value: "#ffffff" },
      { name: "dark", value: "#808080" },
      { name: "black", value: "#000000" },
      {
        name: "random-img-background",
        value: 'url("https://picsum.photos/seed/picsum/1920/1080")'
      }
    ]
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: "#0c0c0e",
      colorSecondary: "#aa80ff",
      textColor: "#fff",
      textInverseColor: "#fff",
      barTextColor: "#fff",
      barSelectedColor: "#aa80ff",
      brandImage: LogoWhite
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: "#e3e4e8",
      colorSecondary: "#5400ff",
      textColor: "#000",
      textInverseColor: "#000",
      barTextColor: "#000",
      barSelectedColor: "#5400ff",
      brandImage: LogoBlack
    }
  }
};

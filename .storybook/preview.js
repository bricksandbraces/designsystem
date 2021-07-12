import React from "react";
import { addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";

import Layout from "./layout";
import LogoWhite from "./public/logo-white.svg";
import LogoBlack from "./public/logo-black.svg";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
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
      appBg: "#060606",
      colorSecondary: "#4a00e0",
      brandImage: LogoWhite
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      colorSecondary: "#4a00e0",
      brandImage: LogoBlack
    }
  }
};

import React from "react";
import type { Preview } from "@storybook/react";
import Layout from "./layout";
import { themes } from "@storybook/theming";

export const decorators = [(storyFn: any) => <Layout>{storyFn()}</Layout>];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      disabled: true
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
        brandImage: "./logo-white.svg"
      },
      // Override the default light theme
      light: {
        ...themes.normal,
        appBg: "#ffffff",
        colorSecondary: "#5400ff",
        textColor: "#000",
        textInverseColor: "#000",
        barTextColor: "#000",
        barSelectedColor: "#5400ff",
        brandImage: "./logo-black.svg"
      }
    }
  }
};

export default preview;

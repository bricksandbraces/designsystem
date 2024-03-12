import React from "react";
import type { Preview } from "@storybook/react";
import Layout from "./layout";

export const decorators = [(storyFn: any) => <Layout>{storyFn()}</Layout>];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(tsx)", "./components/**/*.stories.@(tsx)"],
  staticDirs: ["./assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 }
              },
              {
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") }
              }
            ]
          }
        ]
      }
    },
    "@storybook/addon-a11y",
    "@storybook/preview-api",
    "storybook-dark-mode"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;

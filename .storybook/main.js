module.exports = {
  core: {
    builder: "webpack5"
  },
  staticDirs: [{ from: "./assets", to: "/assets" }],
  stories: ["./components/**/*.stories.tsx", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss")
        }
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.devtool = configType === "DEVELOPMENT" ? "source-map" : undefined;

    // Return the altered config
    return config;
  }
};

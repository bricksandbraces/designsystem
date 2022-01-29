/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const {
  addMatchImageSnapshotPlugin
} = require("cypress-image-snapshot/plugin");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  on("before:browser:launch", (browser, launchOptions) => {
    console.log(
      "launching browser %s is headless? %s",
      browser.name,
      browser.isHeadless
    );

    if (browser.name !== "chrome") throw new Error("Must use Chrome");

    launchOptions.args.push("--force-device-scale-factor=1");
    launchOptions.args.push("--disable-gpu");
    launchOptions.args.push("--force-color-profile=srgb");

    // IMPORTANT: return the updated browser launch options
    return launchOptions;
  });

  return {
    browsers: config.browsers.filter((b) => {
      return b.name === "chrome";
    })
  };
};

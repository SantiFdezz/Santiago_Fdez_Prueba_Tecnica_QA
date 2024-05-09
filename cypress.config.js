const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/features/**/*.feature",
    baseUrl: "https://google.com/",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 1000000, 
  },
});

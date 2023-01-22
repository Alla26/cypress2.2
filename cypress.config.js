const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "1bo7nn",
    baseUrl: "https://petstore.swagger.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

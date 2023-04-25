const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "{{project_baseurl}}",
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        }
      });
    },
  },
});

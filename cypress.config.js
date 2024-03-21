const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    chromeWebSecurity: false,
    pageLoadTimeout: 150000,  
  },
});
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = {
  e2e: {
    baseUrl: "https://www.nba.com/", 
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },
  },
};








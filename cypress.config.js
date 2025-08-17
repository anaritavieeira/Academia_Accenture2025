const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    video: true, 
    viewportWidth: 1200,
    viewportHeight: 720,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature', 
    baseUrl: 'https://demoqa.com/webtables/', 
    pageLoadTimeout: 60000, 

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});

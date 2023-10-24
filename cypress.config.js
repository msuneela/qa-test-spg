const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    apiUrl: 'https://dummy.restapiexample.com/api/v1/',
    baseUrl: 'https://the-internet.herokuapp.com/',

    setupNodeEvents(on, config) {
        }, 
  },
});

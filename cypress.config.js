const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // e2e options here    
    setupNodeEvents(on, config) {     
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});

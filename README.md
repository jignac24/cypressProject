# Cypress Automation Project

- This is automation scripts in Cypress & JavaScripts

## Installation

To get started with Cypress, follow these steps:

1. Install Node.js if you haven't already. You can download it from [nodejs.org](https://nodejs.org/).

2. Install Cypress via npm:

    ```bash
    npm install cypress --save-dev
    ```

## Running Tests

To run your Cypress tests, use the following command:

In terminal : npx cypress open

## Generate HTML Report
- install cypress-mochawesome-reporter
      npm i --save-dev cypress-mochawesome-reporter

- Edit cypress.config.js
      const { defineConfig } = require('cypress');

      module.exports = defineConfig({
      reporter: 'cypress-mochawesome-reporter',
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        },     },     });
  
- Add to cypress/support/e2e.js
      import 'cypress-mochawesome-reporter/register';

       if using cypress-cucumber-preprocessor
          import 'cypress-mochawesome-reporter/cucumberSupport';

  Terminal : npx cypress run --browser chrome --headed --spec "cypress\e2e\UITests\loginTest.cy.js"


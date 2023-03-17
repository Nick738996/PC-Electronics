const cypress = require('cypress');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'http://localhost/pcelectronics/',
    excludeSpecPattern: [
      '**/1-getting-started/**',
      '**/2-advanced-examples/**',
    ],
    chromeWebSecurity: false,
    pageLoadTimeout: 5000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    theme: 'dark',
    darkMediaQuery: true,
  },
});

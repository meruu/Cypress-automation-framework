const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(config.env.configFile);
      const file = config.env.configFile || ''

  //return getConfigurationByFile(file)
    },
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
    pageLoadTimeout:120000,
    excludeSpecPattern:"cypress/e2e/4-other/*.js",
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns:true,
    video:false,
    env:{
      feedback:"Test automation framework",
      webdriveruni_homepage:"https://webdriveruniversity.com",
      configFile:'staging'
    },
    baseUrl:"https://webdriveruniversity.com",
  },
});

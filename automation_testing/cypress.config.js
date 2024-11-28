const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");



async function setupNodeEvents(on,config){
  await addCucumberPreprocessorPlugin(on, config);
 on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  return config;
}

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
 
  e2e: {
    setupNodeEvents,
    experimentalSessionAndOrigin:true,

    specPattern:'cypress/e2e/Features/*.feature'
     

      
     
   
  },
});

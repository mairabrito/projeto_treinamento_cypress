const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
      usuarioValido: 'standard_user',
      senhaValida: 'secret_sauce',
    },
    chromeWebSecurity: false, 
    setupNodeEvents(on, _config) {
      on('before:browser:launch', (_browser = {}, launchOptions) => {
        return launchOptions;
      });
    },
    reporter: 'mochawesome', // Configurar o mochawesome como reporter
    reporterOptions: {
      reportDir: 'cypress/reports', // Diretório onde os relatórios serão salvos
      overwrite: false, // Não sobrescreve relatórios antigos
      html: true, // Gera arquivo HTML
      json: true, // Gera arquivo JSON
    },
  },
});

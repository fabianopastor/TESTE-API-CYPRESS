const { defineConfig } = require('cypress');

module.exports = defineConfig({
<<<<<<< HEAD
  e2e: {
    baseUrl: "http://localhost:3000/",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: false,
      json: true
    }
  }
=======
    e2e: {
      baseUrl: "http://localhost:3000/"
    },
>>>>>>> ff94dbfab72f0ebe32d402777398dd6dae764951
});

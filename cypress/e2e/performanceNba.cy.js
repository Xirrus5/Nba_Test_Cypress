Cypress.on('uncaught:exception', (err, runnable) => {
    // ignore the error
    return false   
});
it ("LightHouse", () => {
    
  cy.visit("https://www.nba.com/", {
    timeout: 80000 // increase the default command timeout
  });
    cy.viewport(1920, 1080)
    cy.lighthouse(
      {
        performance: 80,
        accessibility: 80,
        "best-practices": 80,
        seo: 65,
        pwa: 31
      }
      ),
      {
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          disabled: true
        }
      }
});






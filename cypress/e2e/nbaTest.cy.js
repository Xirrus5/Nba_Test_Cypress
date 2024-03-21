import homeNbaPage from '../pageNba/homeNbaPage';
Cypress.on('uncaught:exception', (err, runnable) => {
  // ignore the error because the deployment of the page is failing
  return false   
});

  describe('NBA Test', () => {
    //const homeNbaPage = new homeNbaPage(); // Instanciamos la página fuera de beforeEach para reutilizarla

    beforeEach(() => {
        cy.visit('https://www.nba.com/')
        cy.viewport(1920, 1080)
        cy.screenshot('NBA-home-page');
    });
       

    it('should login to NBA', () => {
       // We click on "Sign in" and then on "Sign in with NBA ID"
        homeNbaPage.clickSignIn();
        homeNbaPage.clicktogo();
        homeNbaPage.typeEmail('testautomationcy1@gmail.com');
        homeNbaPage.typePassword('6y.8bcYynh#7Sux');
        homeNbaPage.submitLogin();
        cy.get('[data-id="nba:navigation:home:logo"]', { timeout: 10000 })
        cy.screenshot('Home-page');
    });

    it('should fail login to NBA', () => {
      // We entered the wrong credentials and sent the login form
      homeNbaPage.clickSignIn();
      homeNbaPage.clicktogo();
      homeNbaPage.typeEmail('testautomationcy1@gmail.com');
      homeNbaPage.typePassword('DummyPassword123!');
      homeNbaPage.submitLogin();
      cy.get('.SubmitErrorText_errorText__mYbZC', { timeout: 10000 }).should('have.text', 'Correo electrónico o contraseña incorrectos. Inténtalo de nuevo.');
      cy.screenshot('login-failed');
      //Then verify that the captcha container has been made visible.
      cy.get('.SignIn_captchaContainer__Lfm4N').should('be.visible');

  it('should click on League Pass and verify the SKU wrapper on the new page', () => {
    homeNbaPage.goToLeague();
    homeNbaPage.skuWrapper();
    homeNbaPage.takeScreenshot('league-pass-sku-wrapper');
  });

  it('should click on Instagram icon and take a screenshot', () => {
    homeNbaPage.clickInstagramIcon();
    // The new tab or window cannot be tested with Cypress directly, so we validate the href
    homeNbaPage.elements.instagramIcon().should('have.attr', 'href', 'https://instagram.com/nba/?hl=en');
    cy.screenshot('instagram-page');
});
  it('should click on Facebook icon and take a screenshot', () => {
    homeNbaPage.clickFacebookIcon();
    homeNbaPage.elements.instagramIcon().should('have.attr', 'href', 'https://Facebook.com/nba/?hl=en');
    cy.screenshot('Facebook-page');
});

  });
  it('should display the games dropdown on hover and contain "Home" ', () => {
    homeNbaPage.hoverOverMenuItem('Games');
    homeNbaPage.verifyDropdownVisible();
    homeNbaPage.verifyDropdownItemVisible('Home');
    homeNbaPage.takeScreenshot('games-dropdown-visible');
  });
  it('should display the dropdown on hover and contain "2023-24 Season Schedule"', () => {
    homeNbaPage.hoverOverMenuItem('Schedule');
    homeNbaPage.verifyDropdownVisible();
    homeNbaPage.verifyDropdownItemVisible('2023-24 Season Schedule');
    homeNbaPage.takeScreenshot('Schedule-dropdown-visible');
  });
  it('should display the dropdown on hover and contain "Featured"', () => {
    homeNbaPage.hoverOverMenuItem('Watch');
    homeNbaPage.verifyDropdownVisible();
    homeNbaPage.verifyDropdownItemVisible('Featured');
    homeNbaPage.takeScreenshot('Featured-dropdown-visible');
  });
  it('should display the dropdown on hover and contain "Draft"', () => {
    homeNbaPage.hoverOverMenuItem('News');
    homeNbaPage.verifyDropdownVisible();
    homeNbaPage.verifyDropdownItemVisible('Draft');
    homeNbaPage.takeScreenshot('Draft-dropdown-visible');
  });
  
  it('should display "Game Charts" on hover and navigate on click', () => {
    const scoreIndex = 0; 
    homeNbaPage.hoverOverScore(scoreIndex);
    homeNbaPage.takeScreenshot('game-charts-hover');
    homeNbaPage.clickOnGameCharts(scoreIndex);
    //Wait for the new page to load
    cy.url().should('include', '/game-charts');
    cy.get('.GameHeroBackground_overlay__TTlG1',{ timeout: 50000 }).should('be.visible');
    homeNbaPage.takeScreenshot('game-charts-page');
  });


});




  
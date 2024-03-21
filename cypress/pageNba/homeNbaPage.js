class homeNbaPage {
  elements = {
      emailInput: () => cy.get('[data-testid="email"]'),
      passwordInput: () => cy.get('[data-testid="password"]'),
      submitButton: () => cy.get('[data-testid="submit"]'),
      expandButton: () => cy.get('#nav-controls'),
      instagramIcon: () => cy.get('a[title="Instagram"]'),
      instagramIcon: () => cy.get('a[title="Facebook"]'),
      clickiti: () =>cy.get('[data-id="nba:navigation:nba-sign-in:link"]'),
    //navbar elements
    menuItem: (itemName) => cy.get('li.NavItem_item__Gokj_').contains(itemName),
    dropdownContent: () => cy.get('div.NavDropdown_dropdown__HuIep'),
    dropdownItem: (itemName) => cy.get('div.NavDropdown_dropdown__HuIep').find('a').contains(itemName),
    
    //score elements
    // Definir el selector para los scores. Este selector puede cambiar dependiendo de la estructura exacta de la página.
    score: () => cy.get('.CarouselDynamic_slide__EX9PK .ScoreStripGame_gameContainer__6Wbxw'),
    gameChartsLink: () => cy.get('a').contains('Game Charts'),

    // New elements for the "League Pass" test
   goToLeague:()=> cy.get('[data-text="League Pass"]').click(),
    skuWrapper: () => cy.get('.LeaguePassStreamView_lp_sku_wrapper__btmdT'),

      //Login methods
  }
  typeEmail(email) {
      this.elements.emailInput().clear().type(email);
  }
  typePassword(password) {
      this.elements.passwordInput().clear().type(password);
  }
  submitLogin() {
      this.elements.submitButton().click();
  }
    clickSignIn() {
        this.elements.expandButton().click();
    }
    clicktogo() {
        this.elements.clickiti().click();
    }
    //Navbar methods
    hoverOverMenuItem(itemName) {
        this.elements.menuItem(itemName).trigger('mouseover');
      }
    
      verifyDropdownVisible() {
        this.elements.dropdownContent().should('be.visible');
      }
    
      verifyDropdownItemVisible(itemName) {
        this.elements.dropdownItem(itemName).should('be.visible');
      }
    
      takeScreenshot(filename) {
        cy.screenshot(filename);
      }
      //score methods
      hoverOverScore(index) {
        this.elements.score().eq(index).trigger('mouseover');
      }
    
      clickOnGameCharts(index) {
        this.elements.gameChartsLink().eq(index).click();
      }
    
      takeScreenshot(filename) {
        cy.screenshot(filename);
      }
    // New method to click on the "League Pass"    
      goToLeague() {
       this.elements.goToLeague().click();
      }
      skuWrapper() {
        this.elements.goToLeague().click();
       }
    //social methods
       clickInstagramIcon() {
        this.elements.instagramIcon();
    }
      clickFacebookIcon() {
      this.elements.facebookIcon();
      }
}
module.exports = new homeNbaPage();


  

  


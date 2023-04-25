/// <reference types="cypress" />

describe('{{name_your_test_suit}}', () => {

  const url = '{{project_baseurl}}';

  context('{{name_your_homepage}}', () => {

    beforeEach(() => {
      cy.visit(url);
      cy.injectAxe();
    })
    it('{{name_your_test_scenario}}', () => {
      cy.checkA11y(null, null, cy.violations);
      cy.checkA11y(null, null, cy.terminallog);
    });
  });
});

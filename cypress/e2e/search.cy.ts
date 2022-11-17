describe('Given an internal search app', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host'));
    cy.get('[data-cy="search-field"]').type("yahoo");
  });

  describe('When user type "yahoo" in a search box', () => {
    it('Then different kinds of search results are displayed', () => {
      cy.get('[data-cy="search-results"]').should('be.visible');
    });

    it('Then a contact result is shown', () => {
      cy.get('[data-cy="search-result-contact"]').should('be.visible');
    });

    it('Then a Google drive result is shown', () => {
      cy.get('[data-cy="search-result-gdrive"]').should('be.visible');
    });

    it('Then a image result is shown', () => {
      cy.get('[data-cy="search-result-image"]').should('be.visible');
    });

    it('Then a slack result is shown', () => {
      cy.get('[data-cy="search-result-slack"]').should('be.visible');
    });

    it('Then a tweet result is shown', () => {
      cy.get('[data-cy="search-result-tweet"]').should('be.visible');
    });
  })
})
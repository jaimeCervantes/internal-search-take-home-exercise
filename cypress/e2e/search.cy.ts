describe('Given an internal search app', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host'));
    cy.get('[data-cy="search-field"]').type("Sheldon Cooper");
  });

  describe('When user type "Sheldon Cooper" in a search box', () => {
    it('Then different kinds of search results are displayed', () => {
      cy.get('[data-cy="search-results"]').should('be.visible');
    });
  })
})
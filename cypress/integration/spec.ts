describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has app title, shows proper command by default and reacts on command changes', () => {
    cy.contains('Willkommen in deiner Fact-Checking Community!');
    cy.contains('Einloggen');
    cy.contains('Fall einreichen').click();
  });
});

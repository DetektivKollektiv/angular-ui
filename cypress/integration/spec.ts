describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport(1920,1080);
    cy.visit('/');
  });

  it('has app title, shows proper command by default and reacts on command changes', () => {
    cy.contains('Willkommen in deiner Trust-Checking Community!');
    cy.contains('Einloggen');
    cy.contains('Fall einreichen').click();
  });
});

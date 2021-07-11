Cypress.Commands.add('loadDashboard', () => {
  cy.visit('http://localhost:3000')
  cy.get('.nav-links > li > a').click()
})
describe('Roomie Requests', () => {
  beforeEach(() => {
    cy.fetchHarrison()
    cy.fetchRoomies()
    cy.visit("http://localhost:3000");
    cy.logInHarrison()
  })

  it('Should navigate to Roomie Requests when link is clicked', () => {
    cy.get('.roomie-requests').should('contain', 'Roomie Requests').click()
      .url().should('eq', 'http://localhost:3000/requests')
  })

it("Should display a message if the user has not requested any roomies", () => {
    cy.get('.roomie-requests').click()
    cy.get('.no-roomies-msg').should('contain', 'Sorry, you don\'t have any roomies yet!')
});

  it('Should display requests sent if the user has requested contact', () => {
    cy.postRoomieRequest()
      .get(".dashboard").should("contain", "Dashboard").click()
      .get("div > article").should("have.length", 1)
      .get(".card").eq(0).should("contain", "Wyatt", "Denver, CO", "male", "30")
      .get(".req-contact").should("be.visible").click()
      .get('.contact-message').should('contain', 'Contact Sent!')
      .get('.roomie-requests').should('contain', 'Roomie Requests').click()
  
    })

})
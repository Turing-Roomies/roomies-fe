describe('Roomie Requests', () => {
  beforeEach(() => {
    cy.fetchHarrison()
    cy.fetchRoomies()
    cy.visit("http://localhost:3000")
    cy.logInHarrison()
  })

  it('Should navigate to Connections when link is clicked', () => {
    cy.get('.connections').should('contain', 'Connections').click()
      .url().should('eq', 'http://localhost:3000/requests')
  })

  it("Should display a message if the user has not requested any roomies", () => {
      cy.get('.connections').click()
      cy.get('.no-roomies-msg').should('contain', 'Sorry, you don\'t have any roomies yet!')
  });

  it('Should display requests sent if the user has requested contact', () => {
    cy.postRoomieRequest()
      .get(".dashboard").should("contain", "Dashboard").click()
      .get("div > article").should("have.length", 1)
      .get(".card").eq(0).should("contain", "Wyatt", "Denver, CO", "male", "30")
      .get(".req-contact").should("be.visible").click()
      .get('.contact-message').should('contain', 'Contact Sent!')
      .get('.connections').should('contain', 'Connections').click()
      .get('.contact-message').should('contain', 'Contact Sent!')
    })

    it('Should allow the receiver roomie to ACCEPT the request', () => {
      cy.harrisonRequestsWyatt()
      cy.acceptRoomieRequest()
      cy.logout()
      cy.fetchWyatt()
      cy.visit("http://localhost:3000")
      cy.logInWyatt()
      cy.get('.dashboard').click()
        .get('.card').should('have.length', 1)
          .should('contain', 'Harrison', '26', 'Denver, CO', 'male', 'Accept', 'Decline')
        .get('.accept').click()
        .get('.card').should('contain', 'harrison@email.com')
        .get('.connections').click()
        .get('.card').should('contain', 'harrison@email.com')

    })

    it('Should allow the receiver roomie to REJECT the request', () => {
      cy.harrisonRequestsWyatt()
      cy.deleteRoomieRequest()
      cy.logout()
      cy.fetchWyatt()
      cy.visit("http://localhost:3000")
      cy.logInWyatt()
      cy.get('.dashboard').click()
        .get('.card').should('have.length', 1)
          .should('contain', 'Harrison', '26', 'Denver, CO', 'male', 'Accept', 'Decline')
           .get('.decline').click()
           .get('.card').should('contain', 'Request Contact')
        .get('.connections').click()
        .get('.no-roomies-msg').should('contain', 'Sorry, you don\'t have any roomies yet!')

    })
})


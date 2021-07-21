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

    it.only('Should allow the receiver roomie to accept the request', () => {
      cy.harrisonRequestsWyatt()
      cy.logout()
      cy.fetchWyatt()//doesn't exist yet
      cy.visit("http://localhost:3000")//do i need this?
      cy.logInWyatt()
      // then make a command to sign in as wyatt and to fetch Wyatt's info
      // then accept the friend request and assert the text is correct
    })

    it('Should allow the receiver roomie to accept the request', () => {
      //make a command for harrison to friend wyatt
      // then log out
      // then make a command to sign in as wyatt
      // then delete the friend request and assert the text is correct
    })
})


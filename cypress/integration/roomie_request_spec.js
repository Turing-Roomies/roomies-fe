describe('Roomie Requests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.fetchRoomies()
    cy.logInHarrison()
  })

  it('Should navigate to Roomie Requests when link is clicked', () => {
    cy.get('.nav-links > div > li').eq(1).should('contain', 'Roomie Requests')
      .click()
  })

  it('Should display requests sent if the user has requested contact', () => {
    cy.get('.nav-links > div > li').eq(1).click()
      .get('div > article').should('have.length', 2)
      .get('.card').eq(0).should('contain', 'Wyatt','Denver, CO', 'male', '30')
      .get('.card > button').should('be.visible')
      .get('.card').eq(1).should('contain', 'Sarah', 'Denver, CO', 'female', '33')
      .get('.card > button').should('be.visible')
  })

  it('Should display a message if the user has not requested any roomies', () => {
    
  })
})
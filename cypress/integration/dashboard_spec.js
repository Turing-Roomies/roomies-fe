describe('Dashboard', () => {
    beforeEach( () => {
        cy.fetchRoomies()
        cy.loadDashboard()
    })

    it('Should display the nav bar', () => {
        cy.get('nav').should('be.visible')
          .get('nav > a').should('contain', 'Roomies')
          .get('.nav-links > li').should('have.length', 1)
          .get('.nav-links > li > a').eq(0).should('contain', 'Dashboard')
    })

    it('Should display the feed with possible roomies', () => {
        cy.url().should('eq', 'http://localhost:3000/dashboard')
          .get('.cards-container').should('be.visible')
          .get('.card').should('have.length', 5)

          .get('.card').eq(0).should('contain', 'Harrison', 'Denver, CO', 'male', '26')
          .get('.card').eq(1).should('contain', 'Wyatt', 'Denver, CO', 'male', '30')
          .get('.card').eq(2).should('contain', 'Andrew', 'West Palm Beach, FL', 'male', '25')
          .get('.card').eq(3).should('contain', 'Sarah', 'Denver, CO', 'female', '33')
          .get('.card').eq(4).should('contain', 'Michann', 'Denver, CO', 'female', '27')
    })

})
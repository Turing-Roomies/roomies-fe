describe('Dashboard', () => {
    beforeEach( () => {
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
          .get('.card').should('have.length', 5)

          .get('.card').eq(0).should('contain', 'Harrison', 'whatever@example.com', 'Denver', 'male', '26')
          .get('.card').eq(1).should('contain', 'Wyatt', 'someother@example.com', 'Denver', 'male', '30')
          .get('.card').eq(2).should('contain', 'Andrew', 'emailme@example.com', 'West Palm Beach', 'male', '25')
          .get('.card').eq(3).should('contain', 'Sarah', 'email@example.com', 'Denver', 'female', '33')
          .get('.card').eq(4).should('contain', 'Michann', 'somebodysemail@example.com', 'Denver', 'female', '27')
    })



})
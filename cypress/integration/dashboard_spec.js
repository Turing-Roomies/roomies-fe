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
    })



})
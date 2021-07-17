describe('Home', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })

    it('Should display the nav bar', () => {
        cy.get('nav').should('be.visible')
          .get('nav > a').should('contain', 'Roomies')
          .get('.nav-links > li').should('have.length', 1)
          .get('.nav-links > li > a').eq(0).should('contain', 'Dashboard')
    })

    it('Should display a log in form', () => {
        cy.get('form').should('be.visible')
          .get('input').should('have.length', 2)
          .get('input[name=userName]').should('have.attr', 'type', 'text')
          .get('input[name=password]').should('have.attr', 'type', 'password')
          .get('button').should('contain', 'Login')
    })

    it('Should display the welcome message and image', () => {
        cy.get('.welcome-section').should('be.visible')
          .get('.welcome-container').should('be.visible')
          .get('.welcome-message').should('contain', 'Find your', 'perfect', ' match')
    })
    
})
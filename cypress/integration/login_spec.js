describe('Home', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })

    it('Should display an error if a user\'s credentials aren\'t found', () => {
        cy.get('input[name=userName]').type('John').should('have.value', 'John')
          .get('input[name=password]').type('john@example.com').should('have.value', 'john@example.com')
          .get('.submit-button').click()
          .get('h1').should('contain', 'Could not find login credentials! Please create an account or try again!')
    })

    it('Should display a welcome message if a user\'s credentials are found', () => {
        cy.get('input[name=userName]').type('Harrison')
          .get('input[name=password]').type('harrison@example.com')
          .get('.submit-button').click()
          .get('h1').should('contain', 'Welcome, Harrison!')
          .get('.nav-links > li').eq(0).should('contain', 'Logout')
    })
})
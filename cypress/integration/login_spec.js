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


})
describe('Home', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })

    it('Should display an error if a user\'s credentials aren\'t found', () => {
        cy.logInWrongUser()
          .get('p').should('contain', 'Could not find login credentials. Please create an account or try again!')
          .get('.nav-links > li').should('have.length', '1')
          .get('.nav-links > li').eq(0).should('contain', 'Dashboard')
          .get('input[name=userName]').should('have.value', '')
          .get('input[name=password]').should('have.value', '')
    })

    it('Should display a welcome message if a user\'s credentials are found', () => {
        cy.logInHarrison()
          .get('h3').should('contain', 'Welcome, Harrison Blake!')
          .get('form').should('not.exist')
    })

    it('Should display additional nav-links if a user is logged in', () => {
        cy.logInHarrison()
          .get('.nav-links > div > li').should('have.length', '2')
          .get('.nav-links > div > li').eq(0).should('contain', 'Logout')
          .get('.nav-links > div > li').eq(1).should('contain', 'Roomie Requests')
          .get('.nav-links > li').eq(0).should('contain', 'Dashboard')
    })
})
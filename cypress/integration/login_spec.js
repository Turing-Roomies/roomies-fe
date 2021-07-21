describe('LogInSpec', () => {
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
      cy.get('.nav-links > li').should('have.length', '1')
        .get('.dashboard').should('contain', 'Dashboard')
      cy.logInHarrison()
          .get('.nav-links > li').should('have.length', '2')
          .get('.connections').should('contain', 'Connections')
          .get('.logout').should('contain', 'Logout')
    })

    it('Should allow a user to log out', () => {
        cy.logInHarrison()
          .get('.logout').click()
          .get('.nav-links > li').should('have.length', '1')
          .get(".nav-links > li").eq(0).should("contain", "Dashboard")
          .get("form").should("be.visible")
          .get('h3').should('not.exist')
    })
})
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

    it('Should display the feed with possible roomies before being logged in', () => {
        cy.url().should('eq', 'http://localhost:3000/dashboard')
          .get('.cards-container').should('be.visible')
          .get('.card').should('have.length', 2)

          .get('.card').eq(0).should('contain', 'Harrison', 'Denver, CO', 'male', '26')
          .get('.card').eq(1).should('contain', 'Wyatt', 'Denver, CO', 'male', '30')
    })

    it('Should not display Request Contact button if user is not logged in', () => {
        cy.get('.card > .req-contact').should('not.exist')
    })
})

describe('Dashboard with a user', () => {
     beforeEach( () => {
        cy.fetchHarrison()
        cy.fetchRoomies()
        cy.visit('http://localhost:3000')
        cy.logInHarrison()
    })

      it("Should display Request Contact button if user is logged in", () => {
        cy.get(".nav-links > li > a").eq(0).click()
          .get(".card")
          .eq(0)
          .get(".req-contact")
          .should("be.visible");
      })
})

Cypress.Commands.add('loadDashboard', () => {
  cy.visit('http://localhost:3000')
  cy.get('.nav-links > li > a').click()
})

Cypress.Commands.add('logInWrongUser', () => {
    cy.get('input[name=userName]').type('john@email.com').should('have.value', 'john@email.com')
      .get('input[name=password]').type('john@example.com').should('have.value', 'john@example.com')
      .get('.submit-button').click()
})

Cypress.Commands.add('logInHarrison', () => {
    cy.get('input[name=userName]').type('harrison@email.com').should('have.value', 'harrison@email.com')
      .get('input[name=password]').type('test').should('have.value', 'test')
      .get('.submit-button').click()
})


Cypress.Commands.add("fetchHarrison", () => {
  cy.intercept( 'POST', 'https://turing-roomies-be.herokuapp.com/api/v1/sessions',
    {
      statusCode: 200,
      body: {
          "data": {
         "type": "users",
        "id": "1",
        "attributes": {
          "email": "harrison@email.com",
          "name": "Harrison",
          "location": {
            "city": "Denver",
            "state": "CO",
        },
        "gender": "male",
        "age": 26,
        "roomie_requests_sent": [],
        "roomie_requests_received": [],
        "roomies": []
        }
        }
      }
  })
})  


Cypress.Commands.add("fetchRoomies", () => {
  cy.intercept("https://turing-roomies-be.herokuapp.com/api/v1/users", {
    "data": [{
        "type": "users",
        "id": "1",
        "attributes": {
            "email": "harrison@email.com",
            "name": "Harrison",
            "location": {
                "city": "Denver",
                "state": "CO"
            },
            "gender": "male",
            "age": 26,
            "roomie_requests_sent": [],
            "roomie_requests_received": [],
            "roomies": []
        }
    },
    {
        "type": "users",
        "id": "2",
        "attributes": {
            "email": "someother@example.com",
            "name": "Wyatt",
            "location": {
                "city": "Denver",
                "state": "CO"
            },
            "gender": "male",
            "age": 30,
            "roomie_requests_sent": [],
            "roomie_requests_received": [],
            "roomies": []
        }
    }]

  });
}); 



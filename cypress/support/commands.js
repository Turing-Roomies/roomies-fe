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

Cypress.Commands.add('harrisonRequestsWyatt', () => {
    cy.get('.dashboard').click()
      .get('.req-contact').click()
})

Cypress.Commands.add('logInWyatt', () => {
    cy.get('input[name=userName]').type('wyatt@email.com').should('have.value', 'wyatt@email.com')
      .get('input[name=password]').type('test').should('have.value', 'test')
      .get('.submit-button').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.logout').click()
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

Cypress.Commands.add("fetchWyatt", () => {
  cy.intercept( 'POST', 'https://turing-roomies-be.herokuapp.com/api/v1/sessions',
    {
      statusCode: 200,
      body: {
          "data": {
         "type": "users",
        "id": "2",
        "attributes": {
          "email": "wyatt@email.com",
          "name": "Wyatt",
          "location": {
            "city": "Denver",
            "state": "CO",
        },
        "gender": "male",
        "age": 30,
        "roomie_requests_sent": [],
        "roomie_requests_received": [{
          "requestor_id": 1,
          "receiver_id": 2
    }],
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
            "email": "wyatt@email.com",
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


Cypress.Commands.add("postRoomieRequest", () => {
  cy.intercept( 'POST', 'https://turing-roomies-be.herokuapp.com/api/v1/roomie_requests',
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
        "roomie_requests_sent": [{
            "requestor_id": 1,
            "receiver_id": 2
        }],
        "roomie_requests_received": [],
        "roomies": []
        }
        }
      }
  })
})

Cypress.Commands.add("acceptRoomieRequest", () => {
  cy.intercept( 'POST', 'https://turing-roomies-be.herokuapp.com/api/v1/roomies',
    {
      statusCode: 200,
      body: {
          "data": {
         "type": "users",
        "id": "2",
        "attributes": {
          "email": "wyatt@email.com",
          "name": "Wyatt",
          "location": {
            "city": "Denver",
            "state": "CO",
        },
        "gender": "male",
        "age": 30,
        "roomie_requests_sent": [],
        "roomie_requests_received": [],
        "roomies": [{
          "id": 1,
          "requestor_id": 1,
          "receiver_id": 2,
        }]
        }
        }
      }
  })
})

Cypress.Commands.add("deleteRoomieRequest", () => {
  cy.intercept( 'DELETE', ' https://turing-roomies-be.herokuapp.com/api/v1/roomie_requests/2',
    {
      statusCode: 200,
      body: {
          "data": {
         "type": "users",
        "id": "2",
        "attributes": {
          "email": "wyatt@email.com",
          "name": "Wyatt",
          "location": {
            "city": "Denver",
            "state": "CO",
        },
        "gender": "male",
        "age": 30,
        "roomie_requests_sent": [],
        "roomie_requests_received": [],
        "roomies": []
        }
        }
      }
  })
})
Cypress.Commands.add('loadDashboard', () => {
  cy.visit('http://localhost:3000')
  cy.get('.nav-links > li > a').click()
})

Cypress.Commands.add(fetchRoomies', () => {
    cy.intercept('https://vote-local-fe.herokuapp.com/api/v1/users',
    {
        "data": [{
            "type": "users",
            "id": "1",
            "attributes": {
                "email": "whatever@example.com",
                "name": "Harrison",
                "location": "Denver",
                "gender": "male",
                "age": 26,
                "roomies": [{
                    "name": "Wyatt",
                    "location": "Denver",
                }]
            }
        },
        {
            "type": "users",
            "id": "2",
            "attributes": {
                "email": "someother@example.com",
                "name": "Wyatt",
                "location": "Denver",
                "gender": "male",
                "age": 30,
                "roomies": [
                    {
                        "name": "Harrison",
                        "location": "Denver",
                    },
                    {
                        "name": "Michann",
                        "location": "Denver"
                    }
                ]
            }
        },
        {
            "type": "users",
            "id": "3",
            "attributes": {
                "email": "emailme@example.com",
                "name": "Andrew",
                "location": "West Palm Beach",
                "gender": "male",
                "age": 25,
                "roomies": [
                    {
                        "name": "Dustin",
                        "location": "Orlando",
                    }
                ]
            }
        },
        {
            "type": "users",
            "id": "4",
            "attributes": {
                "email": "email@example.com",
                "name": "Sarah",
                "location": "Denver",
                "gender": "female",
                "age": 33,
                "roomies": [
                    {
                        "name": "Michann",
                        "location": "Denver",
                    },
                ]
            }
        },
        {
            "type": "users",
            "id": "5",
            "attributes": {
                "email": "somebodysemail@example.com",
                "name": "Michann",
                "location": "Denver",
                "gender": "female",
                "age": 27,
                "roomies": [
                    {
                        "name": "Sarah",
                        "location": "Denver",
                    },
                    {
                        "name": "Wyatt",
                        "location": "Denver",
                    }
                ]
            }
        }
        ]
    })
})
describe('App', () => {
  beforeEach(() => {
    cy.intercept("GET", `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    // cy.intercept("POST", 'http://localhost:3001/api/v1/orders/', { fixture: "newOrder.json"})
    cy.visit('http://localhost:3000/')
  });

  it('user should see home section articles on pageload', () => {
    cy.get('.App').within(() => {
      cy.get('.header').within(() => {
      })
      cy.get('form').within(() => {
      })
      cy.get('.article-cards-container > :nth-child(1)')
    })
  });

  // it('if the database is not connected, user should see an error message', () => {
  //     cy.intercept("GET", 'http://localhost:3001/api/v1/orders/', { fixture: "noOrdersError.json" })
  //     cy.visit('http://localhost:3000')
  //     cy.get('.order-list').should("contain", "No orders yet!")
  //   })
  //   it('if the database is not connected, user should see an error message', () => {
  //     cy.intercept("GET", 'http://localhost:3001/api/v1/orders/', { fixture: "noOrdersError.json" })
  //     cy.visit('http://localhost:3000')
  //     cy.get('.order-list').should("contain", "No orders yet!")
  //   })
  //   it('user should see prepopulated orders on the page', () => {
  //     cy.get('.App').within(() => {
  //       cy.get('.order-list > :nth-child(1)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(2)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(3)').should("have.length", '1')
  //     })
  //   })
  //   it('user should see a form for adding new orders to the list', () => {
  //     cy.get('form').within(() => {
  //       cy.get('input')}).should('exist')
  //   })
  //   it('user should be able to input a name and choose ingredients to create a new order', () => {
  //     cy.get('input').first().type('Randy').should('have.attr', 'value', 'Randy')
  //     cy.get('button.ingredient-choice').first().click()
  //     cy.get('header p').first().should('contain', 'Order: beans')
  //   })
  //   it('user should be able to click more than one ingredient to add to their order', () => {
  //     cy.get('button.ingredient-choice').first().click().next().next().next().next().next().next().next().next().click().next().click()
  //     cy.wait(1000)
  //     cy.get('header p').first().should('contain', 'Order: beans, guacamole, jalapenos')
  //   })

  //   it('user should be able to click the submit button and add an order', () => {
  //     cy.get('input').first().type('Randy')
  //     cy.get('button.ingredient-choice').first().click().next().next().next().next().next().next().next().next().click().next().click()
  //     cy.wait(1000)
  //     cy.get('button.submit-button').click()
  //     cy.wait(1000)
  //     cy.get('.App').within(() => {
  //       cy.get('.order-list > :nth-child(1)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(2)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(3)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(4)').should('have.length', '1')
  //       .last().should('contain', 'Randy')
  //       .and('contain', 'beans')
  //       .and('contain', 'guacamole')
  //       .and('contain', 'jalapenos')
  //     })
  //   })
  //   it('user should be not be able to add an order without ingredients chosen', () => {
  //     cy.get('input').first().type('Maia')
  //     cy.get('button.submit-button').click()
  //     cy.wait(1000)
  //     cy.get('.App').within(() => {
  //       cy.get('.order-list > :nth-child(1)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(2)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(3)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(4)').should('not.exist')
  //     })
  //   })
  //   it('user should not be able to add an order without a name entered', () => {
  //     cy.get('button.ingredient-choice').first().click().next().next().next().next().next().next().next().next().click().next().click()
  //     cy.wait(1000)
  //     cy.get('button.submit-button').click()
  //     cy.wait(1000)
  //     cy.get('.App').within(() => {
  //       cy.get('.order-list > :nth-child(1)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(2)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(3)').should('have.length', '1')
  //       cy.get('.order-list > :nth-child(4)').should('not.exist')
  //     })
  // })
});
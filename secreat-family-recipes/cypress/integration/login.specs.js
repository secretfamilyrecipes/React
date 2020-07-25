/// <reference types="Cypress" />
describe('Input and submit form', () => {
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000/login')
        cy.url().should('include', 'localhost')
    })
   
})

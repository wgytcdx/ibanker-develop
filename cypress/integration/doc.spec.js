/// <reference types="cypress" />
context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/ibanker-develop/')
    })
    it('Click', () => {
        cy.get('.nav-item').click({ multiple: true })
    })

})
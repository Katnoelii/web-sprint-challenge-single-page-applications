describe('Pizza Tests', () => {
    it('can navigate to the order form', () => {
        cy.visit("http://localhost:3000/pizza")
        cy.url().should('include','pizza')
    })
    it('can add text to the name box', () => {
        cy.get('input[name="name"]')
        .type('kate')
        .should('have.value', 'kate')
    })
    it('can select multiple toppings', () => {
        cy.get('input[name="onions"]')
        .check()
        .should('be.checked')
        cy.get('input[name="pepperoni"]')
        .check()
        .should('be.checked')

    })
    it('can submit the form', () => {
        cy.get('.orderBtn')
        .click()
    })
})
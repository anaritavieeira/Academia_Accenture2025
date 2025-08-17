import { selectors } from "../selectors"

Cypress.Commands.add('realizarCadastroInvalido', () => {
  cy.get(selectors.BTN_ADD).click()
  cy.get(selectors.BTN_SUBMIT).click()
})

Cypress.Commands.add('verificarErrosDeValidacao', () => {
  Object.values(selectors).forEach(selector => {
    if (selector.includes('INPUT_')) {
      cy.get(selector)
        .should('have.class', 'is-invalid')  
        .and('have.css', 'border-color', 'rgb(220, 53, 69)')
    }
  })
})
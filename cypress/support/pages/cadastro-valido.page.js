import { gerarDadosCadastro } from "../fakerData"
import { selectors } from "../selectors"

const TYPE_DELAY = 50
const TEMPO_ESPERA = 1000

Cypress.Commands.add("realizarCadastro", () => {
  const dadosCadastro = gerarDadosCadastro()
  cy.wrap(dadosCadastro).as("usuarioAtual")

  cy.get(selectors.BTN_ADD).should("be.visible").click();
  cy.get(selectors.INPUT_FIRST_NAME).should("be.visible").type(dadosCadastro.firstName, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_LAST_NAME).should("be.visible").type(dadosCadastro.lastName, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_EMAIL).should("be.visible").type(dadosCadastro.email, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_AGE).should("be.visible").type(dadosCadastro.age, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_SALARY).should("be.visible").type(dadosCadastro.salary, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_DEPARTMENT).should("be.visible").type(dadosCadastro.department, { delay: TYPE_DELAY })

  cy.get(selectors.BTN_SUBMIT).should("be.visible").click()

  cy.get(selectors.TABLE_BODY, { timeout: 10000 }).should("be.visible")
  cy.wait(TEMPO_ESPERA)
})

Cypress.Commands.add("validarRegistroNaTabela", () => {
  cy.get("@usuarioAtual").then((usuario) => {
    cy.get(selectors.TABLE_BODY, { timeout: 10000 })
      .should("be.visible")
      .contains(usuario.firstName)
      .parent()
      .should("be.visible")
      .within(() => {
        cy.get(".rt-td").eq(1).should("contain.text", usuario.lastName)
        cy.get(".rt-td").eq(3).should("contain.text", usuario.email)
      })
  })
})
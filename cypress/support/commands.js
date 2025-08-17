import { faker } from '@faker-js/faker'
import { gerarDadosCadastro } from './fakerData'
import { selectors } from './selectors'

const TYPE_DELAY = 50
const TEMPO_ESPERA = 1000
const TIMEOUT = 10000  

Cypress.Commands.add('realizarCadastro', () => {
  const dadosCadastro = gerarDadosCadastro()
  cy.wrap(dadosCadastro).as('nomeAtual')  

  cy.get(selectors.BTN_ADD, { timeout: TIMEOUT }).should('be.visible').click()

  cy.get(selectors.INPUT_FIRST_NAME, { timeout: TIMEOUT }).should('be.visible').type(dadosCadastro.firstName, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_LAST_NAME, { timeout: TIMEOUT }).should('be.visible').type(dadosCadastro.lastName, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_EMAIL, { timeout: TIMEOUT }).should('be.visible').type(dadosCadastro.email, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_AGE, { timeout: TIMEOUT }).should('be.visible').type(dadosCadastro.age, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_SALARY, { timeout: TIMEOUT }).should('be.visible').type(dadosCadastro.salary, { delay: TYPE_DELAY })
  cy.get(selectors.INPUT_DEPARTMENT, { timeout: TIMEOUT }).should('be.visible').type(dadosCadastro.department, { delay: TYPE_DELAY })

  cy.get(selectors.BTN_SUBMIT, { timeout: TIMEOUT }).should('be.visible').click()
  cy.get(selectors.TABLE_BODY, { timeout: TIMEOUT }).should('contain', dadosCadastro.firstName)  
})

Cypress.Commands.add('validarRegistroNaTabela', () => {
  cy.get('@nomeAtual').then((usuario) => {  
    cy.get('.rt-tr-group', { timeout: TIMEOUT })
      .contains(usuario.firstName)
      .parent()
      .should('be.visible')  
      .within(() => {
        cy.get('.rt-td').eq(1).should('contain.text', usuario.lastName)
        cy.get('.rt-td').eq(3).should('contain.text', usuario.email)
      })
  })
})

Cypress.Commands.add('realizarEdicao', () => {
  cy.get('@nomeAtual').then((usuarioOriginal) => {  
    const dadosEditados = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email()
    }
    cy.wrap({ ...usuarioOriginal, ...dadosEditados }).as('nomeEditado')  
    cy.get(selectors.TABLE_BODY, { timeout: TIMEOUT })
      .contains('.rt-tr-group', usuarioOriginal.firstName)
      .find('[id^="edit-record-"]')
      .should('be.visible')  
      .click()

    cy.get(selectors.INPUT_FIRST_NAME, { timeout: TIMEOUT }).should('be.visible').clear().type(dadosEditados.firstName, { delay: TYPE_DELAY })
    cy.get(selectors.INPUT_LAST_NAME, { timeout: TIMEOUT }).should('be.visible').clear().type(dadosEditados.lastName, { delay: TYPE_DELAY })
    cy.get(selectors.INPUT_EMAIL, { timeout: TIMEOUT }).should('be.visible').clear().type(dadosEditados.email, { delay: TYPE_DELAY })

    cy.get(selectors.BTN_SUBMIT, { timeout: TIMEOUT }).should('be.visible').click()
    cy.get(selectors.TABLE_BODY, { timeout: TIMEOUT }).should('contain', dadosEditados.firstName) 
  })
})

Cypress.Commands.add('validarEdicaoNaTabela', () => {
  cy.get('@nomeEditado').then((usuario) => {  
    cy.get('.rt-tr-group', { timeout: TIMEOUT })
      .contains(usuario.firstName)
      .parent()
      .should('be.visible')  
      .within(() => {
        cy.get('.rt-td').eq(1).should('contain.text', usuario.lastName)
        cy.get('.rt-td').eq(3).should('contain.text', usuario.email)
      })
  })
})

Cypress.Commands.add('realizarExclusao', () => {
  cy.get('@nomeEditado').then((usuario) => {  
    cy.get(selectors.TABLE_BODY, { timeout: TIMEOUT })
      .contains('.rt-tr-group', usuario.firstName)
      .find('[id^="delete-record-"]')
      .should('be.visible')  
      .click()
    cy.get(selectors.TABLE_BODY, { timeout: TIMEOUT }).should('not.contain', usuario.firstName)  
  })
})

Cypress.Commands.add('validarExclusaoNaTabela', () => {
  cy.get('@nomeEditado').then((usuario) => {  
    cy.get(selectors.TABLE_BODY, { timeout: TIMEOUT }).should('not.contain', usuario.firstName)
  })
})


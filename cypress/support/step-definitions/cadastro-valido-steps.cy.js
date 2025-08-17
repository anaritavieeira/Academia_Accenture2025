import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('que o usuário acessa a página de Web Tables', () => {
  cy.visit('/')
  cy.wait(1000)
})

When('o usuário realiza o cadastro de um novo registro', () => {
  cy.realizarCadastro()
  cy.wait(2000)
  cy.validarRegistroNaTabela()
})

When('o usuário edita esse registro', () => {
  cy.realizarEdicao()
  cy.wait(2000)
  cy.validarEdicaoNaTabela()
})

When('em seguida o usuário exclui o registro', () => {
  cy.realizarExclusao()
  cy.wait(2000)
  cy.validarExclusaoNaTabela()
})

Then('o registro não deve mais ser encontrado na tabela', () => {
  cy.validarExclusaoNaTabela()  
})
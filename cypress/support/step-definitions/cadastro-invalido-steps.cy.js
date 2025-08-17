import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import '../../support/pages/cadastro-invalido.page.js' 

Given('que o usuário acessa a página de Web Tables', () => {
  cy.visit('/') 
});

When('o usuário realiza o cadastro sem preencher nenhum campo', () => {
  cy.realizarCadastroInvalido()
});

Then('todos os campos devem apresentar bordas vermelhas e mensagens de erro', () => {
  cy.verificarErrosDeValidacao()
});
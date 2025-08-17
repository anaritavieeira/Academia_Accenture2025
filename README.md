# Academia_Accenture2025

## Desafio Técnico Cypress - Academia Accenture 2025

Este projeto foi desenvolvido como parte do **Desafio Técnico da Academia Accenture 2025**. A proposta é automatizar testes para validar o comportamento de uma tabela de dados em uma página de demonstração, utilizando o framework **Cypress**.

## 🟣 Objetivo

Automatizar testes para a página **Web Tables** do **DemoQA**, cobrindo cenários de manipulação de dados como **criação, leitura, atualização e exclusão** de registros. Além disso, foi implementado um teste específico para validar o comportamento do formulário de cadastro quando campos obrigatórios são deixados em branco, garantindo que a mensagem de erro apropriada seja exibida.

## 🟣 Funcionalidades Automatizadas

O projeto inclui dois tipos principais de cenários de teste:

### 🟣 Cenário Positivo:
- **CRUD de Tabela**: Testa a criação, edição e remoção de registros na tabela, utilizando dados dinâmicos gerados por **Faker.js**.

### 🟣 Cenário Negativo:
- **Validação de Formulário**: Verifica se a mensagem de erro é corretamente exibida ao tentar submeter o formulário de cadastro com campos obrigatórios vazios.

## 🟣 Tecnologias Utilizadas

- **Framework de Testes**: **Cypress**
- **Linguagem**: **JavaScript**
- **BDD (Behavior-Driven Development)**: **Gherkin** para a escrita dos testes e **Cucumber** para a integração com o Cypress.
- **Dados Dinâmicos**: **Faker.js** para dados gerados dinamicamente como forma de tratar dados sensíveis.
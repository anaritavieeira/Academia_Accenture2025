## Academia_Accenture2025

## Desafio Técnico Cypress - Academia Accenture 2025

Este projeto foi desenvolvido como parte do **Desafio Técnico da Academia Accenture 2025**. A proposta é automatizar testes para validar o comportamento de uma tabela de dados em uma página de demonstração, utilizando o framework **Cypress**.

### 🟣 Objetivo

Automatizar testes para a página **Web Tables** do **DemoQA**, cobrindo cenários de manipulação de dados como **criação, leitura, atualização e exclusão** de registros. Além disso, foi implementado um teste específico para validar o comportamento do formulário de cadastro quando campos obrigatórios são deixados em branco, garantindo que a mensagem de erro apropriada seja exibida.

### 🟣 Funcionalidades Automatizadas

O projeto inclui dois tipos principais de cenários de teste:

#### Cenário Positivo:
- **CRUD de Tabela**: Testa a criação, edição e remoção de registros na tabela, utilizando dados dinâmicos gerados pela biblioteca **Faker.js**.

#### Cenário Negativo:
- **Validação de Formulário**: Verifica se a mensagem de erro é corretamente exibida ao tentar submeter o formulário de cadastro com campos obrigatórios vazios.

### 🟣 Tecnologias Utilizadas

- **Framework de Testes**: **Cypress**
- **Linguagem**: **JavaScript**
- **BDD (Behavior-Driven Development)**: **Gherkin** para a escrita dos testes e **Cucumber** para a integração com o Cypress.
- **Dados Dinâmicos**: **Faker.js** para dados gerados dinamicamente como forma de tratar dados sensíveis.

### 🟣 Estrutura do Projeto

    ```bash
    Academia_Accenture2025/
    ├── cypress/
    │   ├── e2e/                        # Testes de fluxo e validação
    │   │   ├── cadastro-invalido.feature
    │   │   ├── cadastro-valido.feature
    │   ├── support/                    # Comandos customizados e configuração
    │   │   ├── commands.js
    │   │   ├── e2e.js
    │   │   ├── fakerData.js
    │   │   ├── selectors.js
    │   │   ├── pages/
    │   │   │   ├── cadastro-invalido.page.js
    │   │   │   └── cadastro-valido.page.js
    │   │   ├── step-definitions/
    │   │   │   ├── cadastro-invalido-steps.cy.js
    │   │   │   └── cadastro-valido-steps.cy.js
    │   └── cypress.config.js           # Configurações gerais do Cypress
    ├── .gitignore
    └── package.json

### 🟣 Passos para executar

Para rodar o projeto localmente e executar os testes, siga os passos abaixo:

- **Clone o repositório** e navegue até o diretório:

   ```bash
   git clone https://github.com/anaritavieeira/Academia_Accenture2025.git
   cd Academia_Accenture2025

- **Instale as dependências**:

      ```bash
      npm install
    
- **Abra o Cypress Test Runner**:
  
      ```bash
      npx cypress open

Obrigada por conferir o projeto! :)

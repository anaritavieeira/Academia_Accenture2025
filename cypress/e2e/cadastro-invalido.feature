# utf-8
# language: pt

@cadastro_invalido
Funcionalidade: testeCadastro01 - Validação dos campos do formulário de cadastro

Cenário: O usuário tenta cadastrar um registro sem preencher nenhum campo
  Dado que o usuário acessa a página de Web Tables
  Quando o usuário realiza o cadastro sem preencher nenhum campo
  Então todos os campos devem apresentar bordas vermelhas e mensagens de erro
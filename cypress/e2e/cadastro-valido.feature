# utf-8
# language: pt

@cadastro_valido
Funcionalidade: testeCadastro02 - Fluxo de validação de CRUD na Web Tables

Cenário: Realizar o cadastro, edição e exclusão de registro de usuário
  Dado que o usuário acessa a página de Web Tables
  Quando o usuário realiza o cadastro de um novo registro
  E o usuário edita esse registro
  E em seguida o usuário exclui o registro
  Então o registro não deve mais ser encontrado na tabela


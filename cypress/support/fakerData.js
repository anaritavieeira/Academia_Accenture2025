import { faker } from '@faker-js/faker'

export const gerarDadosCadastro = () => {
  return {
    firstName: faker.person.firstName(), 
    lastName: faker.person.lastName(),  
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 100 }),  
    salary: faker.finance.amount({ min: 1000, max: 10000, dec: 0 }), 
    department: faker.commerce.department(),
  };
};
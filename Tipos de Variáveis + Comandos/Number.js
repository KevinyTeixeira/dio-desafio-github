/* Exemplo: */

const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);
// SAÍDA: "Número transformado em string: string"

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);
// SAÍDA: "Número com duas casas decimais: 12.40"

// Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));
// SAÍDA: "String parseada para float: 13.22"

// Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));
// SAÍDA: "String parseada para int: 13"
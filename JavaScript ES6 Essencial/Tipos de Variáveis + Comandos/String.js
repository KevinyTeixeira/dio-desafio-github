/* Exemplo: */

// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log('Quantidade de letras:' ${textSize});
// SAÍDA: "Quantidade de letras: 5"

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);
// SAÍDA: "Array com as posições separadas pelo delimitador: [ 'Te', 'to ]"

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replacedText);
// SAÍDA: "Substituição de valor: txeTo"

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);
// SAÍDA: "Última letra de uma string: o"

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeita letra menos a última:', allWithoutLastChar);
// SAÍDA: "Valor da string da primeita letra menos a última: Text"

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);
// SAÍDA: "Valor da string da segunda letra até a última:: exto"

//Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras a partir da posição 0 são:', twoCharsBeforeFirstPos);
// SAÍDA: "As duas primeiras letras a partir da posição 0 são: Te"
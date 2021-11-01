/* Exemplo: */

/* Cenário sem o uso do CURRYING */
function soma(a, b) {
    return a + b;
}

console.log(soma (2, 2));
console.log(soma (2, 3));
console.log(soma (2, 4));
console.log(soma (2, 5));
console.log(soma (2, 6));

/* Cenário com o uso do CURRYING */
function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
console.log(soma2(6));
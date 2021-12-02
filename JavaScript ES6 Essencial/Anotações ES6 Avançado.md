# :books: Desenv. Avançado JavaScript ES6

Muito conteúdo prático, vamos praticar truques de refatoração e metodologias desenvolvimento!



## :bookmark_tabs: 1. Uso de Arrow Functions

No ES6, as `arrow functions ` substituem os modelos tradicionais de função para um modelo que permite um retorno implícito.

```javascript
// Modelo Tradicional de uma Função	
function nome(value) { // O nome da função é opcional!
    console.log(value);
}

// Modelo Tradicional, na qual uma variável aponta para uma Função	
var nome = function(value) { // O nome da função é opcional!
    console.log(value);
}

// Modelo c/ Arrow Function (RETURN IMPLÍCITO)
var nome = value => console.log(value); // O "RETURN" é implícito em uma Arrow Function

// Modelo c/ Arrow Function (RETURN EXPLÍCITO)
var nome = (a, b) => { // No caso de um único argumento, você pode omitir os parênteses
    return a + b; // em casos em que o retorno não for simples, é necessário declarar o "RETURN"
}
```

```javascript
// Outros exemplos com o uso de Arrow Function

//Criação de objetos
var obj = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
```



## :school_satchel: 2. DEFAULT ARGUMENTS

Entender como as implementações se comportam, faz parte do que faz um **excelente desenvolvedor**. Com isso em mente, vamos abaixo analisar o comportamento dos argumentos passados em uma função em diferentes cenários:

```javascript
/* CENÁRIO 1: função comum com 2 parâmetros */
function multiply( a, b) {
    return a * b;
}

console.log(multiply(5,5));
//RETORNO: 25;
```

```javascript
/* CENÁRIO 2: o parâmetro b não é repassado */
function multiply( a, b) {
    return a * b;
}

console.log(multiply(5));
//RETORNO: NaN, Not a Number; | Quando um parâmetro não é definido, o JavaScript atribui "Undefined". Como consequência de não ser possível multiplicar um número por "Undefined", o retorno é NaN;
```

```javascript
/* CENÁRIO 3: tratar o parâmetro b para o caso de não ser definido */
function multiply( a, b) {
    b = b || 1; // Verifica se b é um valor verdadeiro, se não, atribui 1!
    
    return a * b;
}

console.log(multiply(5));
//RETORNO: 5;
```

```javascript
/* CENÁRIO 4: o que acontece se b for 0 */
function multiply( a, b) {
    b = b || 1; // Verifica se b é um valor verdadeiro, se não, atribui 1!
    
    return a * b;
}

console.log(multiply(5, 0));
//RETORNO: 5; Isso ocorre porque o 0 é convertido para o falso no JavaScript ao realizar a validação lógica, o que resulta em atribuir 1 ao valor de b;
```

```javascript
/* CENÁRIO 5: evitar que o 0 seja desconsiderado na validação lógica */
function multiply( a, b) {
    b = typeoff b === 'undefined' ? 1 : b; // Verifica o tipo do parâmetro b, se for "undefined", atribui 1, caso o contrário, mantêm o valor atribuido pela pessoa!
    
    return a * b;
}

console.log(multiply(5, 0));
//RETORNO: 0; Com isso o comportamento esperado ocorreria, ainda que o segundo parâmetro não fosse atribuído pelo usuário;
```

```javascript
/* CENÁRIO 6: fazer a validação utilizando IF */
function multiply( a, b) {
    if (typeof b === 'undefined') { 
        b = 1;
    }
    
    return a * b;
}

console.log(multiply(5));
//RETORNO: 0; Funciona, mas seria muito trabalhoso a depender da quantidade de implementações;
```

```javascript
/* CENÁRIO 7: atribuindo um default para o parâmetro b */
function multiply( a, b = 1) { // Com o ES6, podemos atribuir um valor padrão na própria definição do parâmetro, para o caso do valor não ter sido atribuído pelo usuário. Com isso teríamos o mesmo comportamento de todos os cenários anteriores, com uma simplicidade muito maior do código!
    return a * b;
}

console.log(multiply(5));
//RETORNO: 5; se b não for passado, 
```

```javascript
/* CENÁRIO 8: atribuir o valor de a para o parâmetro b */
function multiply( a, b = a) { // Também podemos atribuir o valor do outro parâmetro como default, no caso de b não ser atribuído pelo usuário!
    return a * b;
}

console.log(multiply(5));
//RETORNO: 25;
```

```javascript
/* CENÁRIO 9: atribuir o valor de b para o parâmetro a */
function multiply( a = b, b) { 
    return a * b;
}

console.log(multiply(5));
//RETORNO: Erro: Cannot Access "b" before initialization; Ocorre porque no momento da atribuição de a, o valor de b ainda não havia sido definido. A ordem faz muita diferença.
```

```javascript
/* CENÁRIO 10: caso b não seja atribuido, b deve receber outra função que fornece um número aleatório */
function randomNumber() {
    return Math.random() * 10;
}

function multiply( a, b = randomNumber) { 
    return a * b;
}

console.log(multiply(5));
//RETORNO: 6.73321567209968; Retorno esperado! É importante observar que a função randomNumber é chamado somente no momento em que a função multiply percebe que b não foi atribuído.
```



## :fireworks: 3. ENHACED OBJECT LITERALS

Vamos trabalhar com objetos e verificar as formas de se trabalhar com propriedades e métodos.

```javascript
/* CENÁRIO 1: criar um objeto, com uma propriedade que possua como valor "Digital Innovation One" */
var obj = {
	prop1: 'Digital Innovation One'
}

console.log(obj);
```

```javascript
/* CENÁRIO 2: criar um objeto, mas para o valor da propriedade deve ser atribuído por uma variável no escopo global */
var prop1 = 'Digital Innovation One';

var obj = {
	prop1: prop1 // funciona, mas você acaba repetindo duas vezes a palavra, caso o método tivesse o mesmo nome da variável!
}

console.log(obj);
//RETORNO: Digital Innovation One;
```

```javascript
/* CENÁRIO 3: fazer a mesma atribuição, mas utilizando o "ShortHand" incluído no ES6 */
var prop1 = 'Digital Innovation One';

var obj = {
	prop1 // o ShortHand permite que a declaração do valor de métodos e propriedades com nomes iguais a varíaveis ou funções sejam implícitos!
}

console.log(obj);
//RETORNO: Digital Innovation One;
```

```javascript
/* CENÁRIO 4: fazer a atribuição de uma função como método de um objeto utilizando o "ShortHand" */
function method1() {
    console.log('method called');
}

var obj = {
    method1
};

obj.method1();
//RETORNO: method called;
```

```javascript
/* CENÁRIO 5: escrever a função diretamente no método do objeto */
var obj = {
	sum: function sum(a, b) {
		return a + b;
	}
};

console.log(obj.sum(1, 5));
//RETORNO: 6;
```

```javascript
/* CENÁRIO 6: a palavra "function" é realmente necessária? */
var obj = {
	sum(a, b) {
		return a + b;
	}
};

console.log(obj.sum); // Retorna informações sobre o método, deixando claro que a declaração aponta para uma função nomeada como "sum";
```

```javascript
/* CENÁRIO 7: tornar o nome de uma propriedade do objeto variável */

var propName = 'test';

var obj = {
	obj[propName] = 'prop value';
}

console.log(obj); 
//RETORNO: {test: "prop value"}; Um objeto com a propriedade "test" e seu valor "prop value";
```

```javascript
/* CENÁRIO 8: concatenar "concat" ao nome da propriedade da variável propName */

var propName = 'test';

var obj = {
	obj[propName + 'concat'] = 'prop value';
}

console.log(obj); 
//RETORNO: {testconcat: "prop value"}; Perceba que operações no nome da propriedade são possíveis;
```

```javascript
/* CENÁRIO 9: replique o mesmo cenário sem utilizar a declaração de obj para a propriedade */

var propName = 'test';

var obj = {
	[propName + 'concat'] = 'prop value' // com o ES6, não é necessário fazer a declaração de "obj" para a propriedade ser dependente da variável;
}

console.log(obj); 
//RETORNO: {testconcat: "prop value"}; Perceba que operações no nome da propriedade são possíveis;
```



##  :sparkler: 4. REST(...) e SPREAD (...) Operator

Os operadores **Rest** e **Spread** permitem trabalhar com múltiplos parâmetro em funções. 

#### **REST OPERATOR**

​	Pega todos os parâmetros de uma função e os transforma em um Array.

```javascript
/* 
OBJETIVO: escrever uma função que seja capaz de receber qualquer quantidade de argumentos */
```

```javascript
/* CENÁRIO 1: escrever utilizando "arguments" */
function sum(a, b) {
	var value = 0;
    
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i]; // Arguments, dentro de uma funçao, retorna uma lista de todos os argumentos passados para uma função. O método length, retorna a quantidade total de argumentos.
    }
    
    return value;
}

console.log(sum(1, 5, 2, 3, 4, 7)); // Nesse caso, arguments retorna: 0: 1, 1: 5, 2: 2, 3: 3, 4: 4, 5: 7;
//RETORNO: 22;
```

```javascript
/* CENÁRIO 2: crie o mesmo cenário, mas desta vez utilizando o rest operator */
function sum(...args) {
    return args.reduce((acc, value)) => acc + value, 0); //com o rest operator, o prototype (que no caso anterior era um objeto), aqui ele é um array, o que nos permite utilizar os métodos de array para manipular os argumentos, como é o caso do método reduce.
    //acc representa o valor acumulado, value representa o valor da interação, 0 é o valor incial.
}

console.log(sum(5, 5, 5, 2, 3));
//RETORNO: 20
```

```javascript
/* CENÁRIO 3: tente acessar a lista de arguments, usando Arrow Functions para ver o comportamento */

const sum = () => {
    console.log(arguments);
    //RETORNO: Erro de referência, o arguments não foi definido. Quando se trabalha com Arrow Functions, devemos utilizar o rest operator para manipular a lista de argumentos.
}
```

```javascript
/* CENÁRIO 4: tente acessar a lista de arguments, usando Arrow Functions mas desta vez com o rest operator para ver o comportamento */

const sum = (...rest) => {
    console.log(arguments);
}

console.log(sum(1, 5, 2, 3, 4, 7)); // Nesse caso, arguments retorna: 0: 1, 1: 5, 2: 2, 3: 3, 4: 4, 5: 7;
```

```javascript
/* CENÁRIO 5: rest também pode ser usado para retornar o "resto" dos argumentos */

const sum = (a, b, ...rest) => {
    console.log(a, b, rest); // Dessa forma, o rest operator pega o restante dos argumentos!
    //RETORNO: 5 5 > (3) [5, 2, 3] | a b > (qt arg) [...rest]
}

console.log(sum(5, 5, 5, 2, 3)); 
```

#### **SPREAD OPERATOR**

​	Pega todos os itens de um Array e os transforma em parâmetros para uma função. Pode ser utilizado em **strings, arrays, objetos literais e objetos iteráveis**.

```javascript
// SPREAD OPERATOR EM FUNÇÕES
/* CENÁRIO 1: crie duas funções, na qual uma deve receber os argumentos de outra função */

//Vamos repassar os argumentos da função sum, para a função multiply
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1) //valor acumulado, valor da iteração, valor inicial)
}

const sum = (...rest) => {
	return multiply.apply(undefined, rest); //Antes do SPREAD operator, era comum passar os argumentos utilizando o método apply, undefined ou null, seguido do rest. Entretanto esta forma torna-se onerosa, a depender da quantidade de elementos, além dificultar a interpretação.
}

console.log(sum(5, 5, 5, 2, 3)); 
//RETORNO: 750
```

```javascript
// SPREAD OPERATOR EM FUNÇÕES
/* CENÁRIO 2: crie duas funções, na qual uma deve receber os argumentos de outra função. Mas desta vez utilizando o SPREAD OPERATOR! */

//Vamos repassar os argumentos da função sum, para a função multiply
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1) //valor acumulado, valor da iteração, valor inicial)
}

const sum = (...rest) => {
	return multiply(...rest); // utilizando o spread operator, repassamos todos os argumentos de sum para multiply! 
}

console.log(sum(5, 5, 5, 2, 3)); 
//RETORNO: 750
```

```javascript
// SPREAD OPERATOR EM STRINGS
/* CENÁRIO 3: utilize o SPREAD operator em uma string para ver seu comportamento. */

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);

/* 
RETORNO: 
(22) // QT de Argumentos
> ["D", "i", "g", "i", "t", "a", "l", " ", "I", "n", "n", "o", "v", "a", "t", "i", "o", "n", " ", "O", "n", "e"] | Quebrou a String em caracteres e enviou para uma lista!
*/
```

```javascript
// SPREAD OPERATOR EM ARRAYS
/* CENÁRIO 4: utilize o SPREAD operator para passar os parâmetros de um array como argumentos de uma função. */

const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments);
}

logArgs(...arr);

/* 
RETORNO: 
Retorna os 4 argumentos da função logArgs, [1, 2, 3, 4].
```

```javascript
// SPREAD OPERATOR EM ARRAYS
/* CENÁRIO 5: utilizando-se do cenário 4, delimite os argumentos que a função logArgs deve coletar usando o SPREAD OPERATOR. */

const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

logArgs(...arr);

/* 
RETORNO: 
Retorna os 3 argumentos da função logArgs, [1, 2, 3].
```

```javascript
// SPREAD OPERATOR EM ARRAYS
/* CENÁRIO 6: tente concatenar (juntar) dois arrays em um único array. */

const arr = [1, 2, 3, 4];
const arr2 = [5,6, 7].concat(arr); // Criamos o arr2, em seguida concatemos com o arr!

//Também poderia ser escrito desta forma, para deixar a ordem numérica correta
const arr3 = arr.concat([5, 6, 7]); 

console.log(arr2); //RETORNO: [5, 6, 7, 1, 2, 3, 4]
console.log(arr3); //RETORNO: [1, 2, 3, 4, 5, 6, 7]
```

```javascript
// SPREAD OPERATOR EM ARRAYS
/* CENÁRIO 7: tente concatenar (juntar) dois arrays em um único array, mas desta vez utilizando o SPREAD OPERATOR. */

const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7]; //dispensa a necessidade do método "concat"!

// Também poderíamos deixar a ordem ao contrário, ou intermediária caso desejasse.
const arr3 = [5, 6, 7, ...arr];
const arr4 = [5, 6, ...arr, 7];

// Ou ainda, concatenar mais de um Array, ou um mesmo Array mais de uma vez!
const arr5 = [...arr3, ...arr4, ...arr4, ...arr, 0, 0, 0];

console.log(arr2); //RETORNO: [1, 2, 3, 4, 5, 6, 7]
console.log(arr3); //RETORNO: [5, 6, 7, 1, 2, 3, 4]
console.log(arr4); //RETORNO: [5, 6, 1, 2, 3, 4, 7]
console.log(arr5); //RETORNO: [5, 6, 7, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 7, 5, 6, 1, 2, 3, 4, 7, 1, 2, 3, 4, 0, 0, 0]
```

```javascript
// SPREAD OPERATOR EM OBJETOS LITERAIS
/* CENÁRIO 8: crie dois objetos, no qual o segundo objeto copie as chaves do primeiro utilizando o SPREAD OPERATOR e adicionalmente inclua uma segunda propriedade! */

const obj = {
	test: 123
};

const obj2 = {
	...obj,
    test2: 'hello'
}

console.log(obj2);
//RETORNO: {test: 123, test2: "hello"}
```

```javascript
// SPREAD OPERATOR EM OBJETOS LITERAIS
/* CENÁRIO 9: tente criar um array e utilizar o SPREAD operator nas chaves de um objeto para tentar passar as chaves como elementos do array */

const obj = {
	test: 123
};

const arr = [...obj];

console.log(arr);
/*
RETORNO: Error: Object is not interable!
Os objetos literais não são elementos iteráveis, com isso não conseguimos utilizar o SPREAD sem torná-los iteráveis.
*/
```

```javascript
// SPREAD OPERATOR EM OBJETOS LITERAIS
/* CENÁRIO 10: com o cenário 8, tente verificar se é possível sobrescrever a propriedade de obj em obj2, mesmo após ter sido "clonado" com o SPREAD operator */

const obj = {
	test: 123
};

const obj2 = {
	...obj,
    test: 456
}

console.log(obj2);
//RETORNO: {test: 456} | a propriedade foi alterada! 
// Da mesma forma, se o spread fosse utilizado após a alteração do parâmetro
```

```javascript
// SPREAD OPERATOR EM OBJETOS LITERAIS
/* CENÁRIO 10: faça um merge de 2 objetos, substituindo as propriedades do segundo objeto por novos valores!  */

const obj = {
	test1: 891
};

const obj2 = {
    test2: 'Vamos substituir esses valores!'
}

const objMerged = {
	...test1,
	...test2,
	test2: 'O valor foi substituido!'
}

console.log(objMerged);
//RETORNO: {test1: 891, test2: "O valor foi substituido"}
```

```javascript
// SPREAD OPERATOR EM OBJETOS LITERAIS
/* CENÁRIO 11: analise o comportamento ao clonar objetos que contenha subObjetos  */

// Esse tipo de clone é chamado de "Shadow Clone", por ser um clone raso. Isso ocorre porque se o objeto tiver propriedades que sejam outros objetos
const obj = {
	test: 123
    subObj: {
    	test: 123
	}
};

const obj2 = { ...obj};

obj2.subObj.test = 456; // Vamos tentar alterar apenas o subObjeto do objeto2!

console.log(obj);
console.log(obj2);
/*
RETORNO:

console.log(obj);
{test: 123 subObj: {test: 456}}

console.log(obj2);
{test: 123 subObj: {test: 456}}

O nosso primeiro objeto, também foi alterado em função do segundo, por isso o termo "Shadow Clone"!
*/
```

```javascript
// SPREAD OPERATOR EM OBJETOS LITERAIS
/* CENÁRIO 11: resolva o problema do cenário 10!  */

// Para resolver, vamos gerar também um subObj em obj2!
const obj = {
	test: 123
    subObj: {
    	test: 123
	}
};

const obj2 = { ...obj, subObj: { ...obj.subObj } };

obj2.subObj.test = 456; // Vamos tentar alterar apenas o subObjeto do objeto2!

console.log(obj);
console.log(obj2);
/*
RETORNO:

console.log(obj);
{test: 123 subObj: {test: 123}}

console.log(obj2);
{test: 123 subObj: {test: 456}}

Desta vez deu certo, apenas o subObj de obj2 foi alterado!
*/
```

##  :boom::exclamation: 5. Destructuring em ReactJS!

O **Destructuring** é utilizado para destruir arrays e devolver os valores dentro dele. Ao trabalhar com JavaScript, em vários cenários acabamos por pegar parte de variáveis e atribuindo a outras variáveis.

```react
/* CENÁRIO 1: crie um array, no qual variáveis possam se utilizar dos valores desse array para serem definidos, baseados em suas posições  */

var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0]; // Definimos a variável, em seguida atribuímos a posição 0 do array;
var banana = arr[1];
var orange = arr[2];

console.log(apple);

//RETORNO: Apple
```

```react
/* CENÁRIO 2: faça o mesmo código indicado no cenário 1, entratanto usando o DESTRUCTURING ASSIGNMENT  */

var [apple, banana, orange] = ['Apple', 'Banana', 'Orange']; // Dessa forma, em "var []" nós não estamos construindo o array, mas instruindo sobre como deve ser criado. Desta forma ele fará o memso papel do cenário 1, correlacionado a variável/posição do array/valor!

console.log(apple);

//RETORNO: Apple | Mesmo resultado do cenário 1!
```

```react
/* CENÁRIO 4: crie um objeto com a propriedade name, em seguida crie uma variável que receba o valor dessa propriedade  */

var obj = {
    name: 'Celso'
}

var name = obj.name;

console.log(name);
//RETORNO: Celso
```

```react
// DESTRUCTURING EM SUBPROPRIEDADES
/* CENÁRIO 5: agora baseado no cenário 4, faça a mesma declaração utilizando o DESTRUCTURING ASSIGNMENT  */

var obj = {
    name: 'Celso'
}

var { name } = obj; // por haver uma única expressão dentro das chaves, o destructuring entende que 'name', é o nome da propriedade e também o nome da variável na qual será declarada o valor de name.

// Para melhor compreensão, vamos deixar evidente a propriedade a ser "quebrada" do objeto e a variável na qual o valor será armazenado.
var { name: name2 } = obj; // Procura no objeto, a propriedade name, "quebra" esse objeto e retorna o seu valor para a variável name2

console.log(name2);
//RETORNO: Celso
```

```react
// COMPORTAMENTO DO DESCRUCTURING
/* CENÁRIO 6: verifique o comportamento do DESTRUCTURING, no caso de alterar o valor da variável após destruir um objeto e sua propriedade, para verificar se o valor da propriedade em si também é alterada  */

var obj = {
    name: 'Celso'
}

var { name: name2 } = obj;

name2 = 'João';

console.log(obj); //RETORNO: Celso
console.log(name2); //RETORNO: João
// O valor da propriedade name no objeto permanece inalterado!
```

```react
// DESTRUCTURING EM SUBPROPRIEDADES
/* CENÁRIO 7: crie um objeto que contenha uma subPropriedade, em seguida tente obter o valor da subPropriedade e inseri-la numa variável! */

var obj = {
    name: 'Celso',
    props: {
        age: 26 // Nossa subPropriedade
    }
}

// Se fôssemos fazer pelo método convencional seria...
var age = obj.props.age;

//var {props: { age } } = obj;
var { //1. Destruímos o objeto
	props: { age } //2. Acessamos a propriedade props, executa o destructuring de age, e por fim inclui o seu valor em uma variável de mesmo nome!
} = obj;

console.log(age); //RETORNO: 26
```

```react
// DESTRUCTURING EM SUBPROPRIEDADES
/* CENÁRIO 8: faça um destructuring em um subPropriedade que contenha valores dentro de um Array */

var obj = {
    name: 'Celso',
    props: {
        age: 26
        favoriteColors: ['red', 'blue', 'green'] // Nosso array como subPropriedade
    }
}

// Se fôssemos fazer pelo método convencional seria:
var age2 = obj.props.age;
var color1 = obj.props.favoriteColors[0];
var color2 = obj.props.favoriteColors[1];
var color3 = obj.props.favoriteColors[2];

// var {props: { age } } = obj;
var { // 1. Destruímos o objeto
	props: { age: age2, favoriteColors: [color1, color2, color3] } // 2. Acessamos a propriedade props, executa o destructuring de age (incluindo o valor da propriedade em age2), e por fim executa o destructuring de favoriteColors (incluindo os respectivos valores nas variáveis color1, color2 e color3!
} = obj;

name2 = 'João';

var print => {
    console.log(age); //RETORNO: 26
    console.log(color1); //RETORNO: red
    console.log(color2); //RETORNO: blue
    console.log(color3); //RETORNO: green 
};

print;

// O valor da propriedade name no objeto permanece inalterado!
```

```react
// DESTRUCTURING EM FUNÇÕES
/* CENÁRIO 9: faça uma função para somar duas posições de um Array */

function sum(arr) {
	return arr[0] + arr[1]; // Soma os arrays das posições 0 e 1
}

console.log(sum([5, 5]));
//RETORNO: 10
```

```react
// DESTRUCTURING EM FUNÇÕES
/* CENÁRIO 10: faça uma função para somar duas posições de um Array */

function sum([a, b]) { // Desconstrói o array, e simultanemante insere os valores das posições [0] e [1] às variáveis a e b!
	return a + b; // Soma os arrays das posições 0 e 1
}

console.log(sum([5, 5]));
//RETORNO: 10
```

```react
// DESTRUCTURING EM FUNÇÕES
/* CENÁRIO 11: utilize o conceito de DESTRUCTURING junto com o DEFAULT VALUES! */

function sum([a, b] = [0, 0]) { // caso os parâmetros não sejam passados, substitui por 0!
	return a + b;
}

console.log(sum([]));
//RETORNO: 0

console.log(sum([5, 5])); // Dessa forma não pega o nosso valor Deafult
//RETORNO: 10
```

```react
// DESTRUCTURING EM FUNÇÕES
/* CENÁRIO 11: utilize o conceito de DESTRUCTURING, mas ao invés de arrays utilize objetos! */

function sum( {a, b} ) { // caso os parâmetros não sejam passados, substitui por 0!
	return a + b;
}

console.log(sum({ a: 5, b: 5})); // As propriedades precisam necessariamente possuir o mesmo nome dos parâmetros utilizados na função!
//RETORNO: 10
```

##  :cancer::recycle: 6. Symbols e Iterators!

#### SYMBOLS

Symbols é uma maneira de gerar um identificador único, esse identicador é o Symbol.

```javascript
/* CENÁRIO 1: crie um Symbol */

const uniqueId = Symbol();

console.log(uniqueId);
//RETORNO: Symbol()
```

```javascript
/* CENÁRIO 2: compare dois Symbols que possuam valores iguais */

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);
//RETORNO: false | Veja que o JavaScript interpreta como coisas diferentes, ainda que os valores sejam iguais!
```

```javascript
/* CENÁRIO 3: Symbols pode ser utilizado como propriedades privadas de objetos, para deixar claro ao desenvolvedor que o objeto em questão não deve ser utilizado */

const uniqueId = Symbol('Hello');

const obj = {
	[uniqueId]: 'Hello'
}

console.log(obj);
//RETORNO: {Symbol(Hello): "Hello"}
```

Symbols, possuem métodos que permitem manipular seus valores, esses  métodos são conhecidos como **Well Know Symbols**. São eles:

```javascript
// WKS, symbol.iterator: é uma "interface" que pode ser utilizada para consumir, passo a passo, uma lista ou estrutura de dados através do método next.

/* CENÁRIO 1: faça o teste do método Symbol.iterator em um Array!  */

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next()); // RETORNO: {value: 1, done: false}
console.log(it.next()); // RETORNO: {value: 2, done: false}
console.log(it.next()); // RETORNO: {value: 3, done: false}
console.log(it.next()); // RETORNO: {value: 4, done: false}
console.log(it.next()); // RETORNO: {value: undefined, done: true}
```

```javascript
// WKS, symbol.iterator
/* CENÁRIO 2: sabendo-se que quando o iterator termina de percorrer os valores retorna "value: undefined, done: true", utilize essa informação e faça um loop para percorrer todos os valores de um Array */

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while (true) { // Enquanto não for verdadeiro...
    let { value, done } = it.next() // Aplicamos o destruction para isolar o valor de done, e retornar em uma variável por nome "done"
    
    if (done) {
        break;
    }
    
    console.log(value);
}

/* RETORNO:
1
2
3
4 */
```

```
// WKS, symbol.toStringTag
/* CENÁRIO 3: ## */
```


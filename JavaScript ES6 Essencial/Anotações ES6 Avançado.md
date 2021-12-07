# :books: Desenv. Avançado JavaScript ES6

Muito conteúdo prático, vamos praticar truques de refatoração e metodologias desenvolvimento!



## :bookmark_tabs: > 1. Uso de Arrow Functions

No ES6, as `Arrow Functions ` substituem os modelos tradicionais de função para um modelo que permite um retorno implícito.

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



## :school_satchel: > 2. Default Arguments

Entender como as implementações se comportam, faz parte do que faz um **excelente desenvolvedor**. Com isso em mente, vamos abaixo analisar o comportamento dos argumentos passados em uma função em diferentes cenários, bem como analisar formas de refatorá-los.

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



## :fireworks: > 3. Enhaced Object Literals

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



##  :sparkler: > 4. Rest/Spread (...) Operator

Os operadores **`Rest`** e **`Spread`** permitem trabalhar com múltiplos parâmetro em funções. 

#### 4.1 **Rest Operator**

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

#### 4.2 **Spread Operator**

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

##  :boom: > 5. Destructuring

O **`Destructuring`** é utilizado para destruir arrays e devolver os valores dentro dele. Ao trabalhar com JavaScript, em vários cenários acabamos por pegar parte de variáveis e atribuindo a outras variáveis.

```javascript
/* CENÁRIO 1: crie um array, no qual variáveis possam se utilizar dos valores desse array para serem definidos, baseados em suas posições  */

var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0]; // Definimos a variável, em seguida atribuímos a posição 0 do array;
var banana = arr[1];
var orange = arr[2];

console.log(apple);

//RETORNO: Apple
```

```javascript
/* CENÁRIO 2: faça o mesmo código indicado no cenário 1, entratanto usando o DESTRUCTURING ASSIGNMENT  */

var [apple, banana, orange] = ['Apple', 'Banana', 'Orange']; // Dessa forma, em "var []" nós não estamos construindo o array, mas instruindo sobre como deve ser criado. Desta forma ele fará o memso papel do cenário 1, correlacionado a variável/posição do array/valor!

console.log(apple);

//RETORNO: Apple | Mesmo resultado do cenário 1!
```

```javascript
/* CENÁRIO 4: crie um objeto com a propriedade name, em seguida crie uma variável que receba o valor dessa propriedade  */

var obj = {
    name: 'Celso'
}

var name = obj.name;

console.log(name);
//RETORNO: Celso
```

```javascript
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

```javascript
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

```javascript
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

```javascript
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

var print = () => {
    console.log(age); //RETORNO: 26
    console.log(color1); //RETORNO: red
    console.log(color2); //RETORNO: blue
    console.log(color3); //RETORNO: green 
};

print();

// O valor da propriedade name no objeto permanece inalterado!
```

```javascript
// DESTRUCTURING EM FUNÇÕES
/* CENÁRIO 9: faça uma função para somar duas posições de um Array */

function sum(arr) {
	return arr[0] + arr[1]; // Soma os arrays das posições 0 e 1
}

console.log(sum([5, 5]));
//RETORNO: 10
```

```javascript
// DESTRUCTURING EM FUNÇÕES
/* CENÁRIO 10: faça uma função para somar duas posições de um Array */

function sum([a, b]) { // Desconstrói o array, e simultanemante insere os valores das posições [0] e [1] às variáveis a e b!
	return a + b; // Soma os arrays das posições 0 e 1
}

console.log(sum([5, 5]));
//RETORNO: 10
```

```javascript
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

```javascript
// DESTRUCTURING EM FUNÇÕES
/* CENÁRIO 11: utilize o conceito de DESTRUCTURING, mas ao invés de arrays utilize objetos! */

function sum( {a, b} ) { // caso os parâmetros não sejam passados, substitui por 0!
	return a + b;
}

console.log(sum({ a: 5, b: 5})); // As propriedades precisam necessariamente possuir o mesmo nome dos parâmetros utilizados na função!
//RETORNO: 10
```

##  :recycle: > 6. Symbols e Iterators

#### 6.1 Symbols

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

Symbols, possuem métodos que permitem manipular seus valores, esses  métodos são conhecidos como **`Well Know Symbols`**. São eles:

#### 6.2 `symbol.iterator`

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

```javascript
// WKS, symbol.iterator
/* CENÁRIO 3: com o ES¨6, é possível refatorarmos o loop com o conhecido "for of", recrie o loop do CENÁRIO 2 utilizando for of */

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One'

for (let value of arr) {
	console.log(value); // RETORNO: 1 2 3 4
}

for (let value of str) {
	console.log(value); // RETORNO: D I G I T A L  I N  N O V A T I O N  O N E
}
```

```javascript
// WKS, symbol.iterator
/* CENÁRIO 4: com o ES¨6, é possível refatorarmos o loop com o conhecido "for of", recrie o loop do CENÁRIO 2 utilizando for of */

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One'

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        
    }
}
for (let value of arr) {
	console.log(value); // RETORNO: 1 2 3 4
}

for (let value of str) {
	console.log(value); // RETORNO: D I G I T A L  I N  N O V A T I O N  O N E
}
```

```javascript
// WKS, symbol.iterator
/* CENÁRIO 5: objetos literais não são iteráveis, portanto não se pode utilizar loopes em objetos. Tente iterar um objeto de forma que permita o uso do for of */


// console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() { // Para cada uma das minhas iterações, quero retornar um valor da minha lista e se acabou ou não!
        let i = 0; // Índice que inicie 0;
        
        return { // Vamos retornar um outro objeto
            next: () => { // Aqui vamos utilizar o Arrow Function para que possa acessar o this
            i++; // A cada iteração subimos o índice
         		// A cada vez que a iteração acessar o next, faça: 
                return { // O this aqui tem o contexto do obj, portanto é obj!
                    value: this.values[i - 1], // Trata o value retornado pelo iterator 
                    done: i > this.values.length // Trata o done retornado pelo iterator
                };
            }
        };
    }
};

for (let value of obj) {
    console.log(value); // RETORNO: 1 2 3 4
}
```



##  :gem: > 7. Generators

São funções com pausa, podendo pausar e retornar valores utilizando a interface de interação do **`symbol.interator`**. A sequência é acionada pelo comando `next`, e a pausa por `<yield>`.

**Observação: ** a sintaxe para os Generators atualmente não conseguem ser utilizados em arrow functions.

```javascript
// CENÁRIO 1: crie um generator contendo 3 impressões sequenciais, com pausa entre eles. Utilize yield para pausar, e next para avançar;

// Para pausar utilizando funções, você teria que pensar em toda uma lógica que talvez não fosse viável. Para isso existem os generators, controladores de execução.

// No momento da execução da função suspensa, você poderá conferir o PROTOTYPE de um Generator, o qual lhe apresenta as funções next, return e throw que servem para controlar a execução.

function* hello() { // O * ao lado de function, indica que essa função é uma generator
    console.log('Hello');
    yield;
    console.log('From');
    yield;
    console.log('Function');
    yield;
}

const it = hello();

console.log(it); // Nessa execução, não há sequência, a função está suspensa.
// RETORNO: hello{<suspended>}

console.log(it.next()); // O next aciona a sequência de execução
// RETORNO: Hello {value: undefined, done: false}

console.log(it.next()); // O next aciona a sequência de execução
// RETORNO: From {value: undefined, done: false}

console.log(it.next()); // O next aciona a sequência de execução
// RETORNO: Function {value: undefined, done: true}
```

Repare que ao retornar uma execução após o uso do comando `next`, o Generator retorna `{value: undefined, done: false}`. Estas propriedades podem ser utilizadas a seu favor para interagir e controlar o retorno a cada execução.

```javascript
// CENÁRIO 2: utilizando-se do cenário 1, repasse um parâmetro para value;

function* hello() { // O * ao lado de function, indica que essa função é uma generator
    console.log('Hello');
    yield 1; // Desta forma, value terá o valor de 1
    console.log('From');
    yield 2; // Desta forma, value terá o valor de 2
    console.log('Function');
    yield 3; // Desta forma, value terá o valor de 3
}

const it = hello();

console.log(it); // Suspenso
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // 3

/*
RETORNO:
Hello {value: 1, done: false}
From {value: 2, done: false}
Function {value: 3, done: true}
*/
```

```javascript
// CENÁRIO 3: você também pode passar parâmetros para a função next, a fim de executar algo quando yield é acionado. Faça o teste utilizando-se do cenário 2;

function* hello() { // O * ao lado de function, indica que essa função é uma generator
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    
    console.log(value); // você verá que value tem o valor do parâmetro passado a ele.
}

const it = hello();

console.log(it); // Suspenso
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next('Outside')); // 3

/*
RETORNO:
Hello {value: 1, done: false}
From {value: 2, done: false}
Outside {value: undefined, done: true}
*/
```

```javascript
// CENÁRIO 4: crie uma iteração que aplique yield para pausar a execução, e que permita um loop de números infinitos;

// Esse mecanismo é poderoso, porque apesar de termos loops infinitos, podemos iterar quantas vezes quisermos, baseado nos comandos next.

function* naturalNumbers() {
    let number = 0;
    while (true) { // só será acionado com o comando next! 
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next()); // 0
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // 3

/*
RETORNO:
{value: 0, done: false}
{value: 1, done: false}
{value: 2, done: false}
{value: 3, done: false}
*/
```

Agora vamos praticar o uso de Generators na interface do symbol.iterator.

```javascript
// CENÁRIO 5: baseando-se no último exemplo de symbol.iterator, aplique o generator na função!

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() { // Ao inserir o *, as funções de generator podem ser utilizadas!
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]; // não precisamos construir um objeto com next porque o nosso generator faz isso, por isso podemos utilizar os generators como forma de construir iteradores
        }
    }   
}
for (let value of obj) {
    console.log(value); // RETORNO: 1 2 3 4
}

// Tivemos o mesmo comportamento do exemplo anterior, mas com uma refatoração de código muito mais eficaz!
```



## :name_badge: > 8. Callbacks e Promises

Nativamente, no JavaScript, é muito comum utilizar funções de callbacks para executar algo após uma tarefa assíncrona ter sido executada, para exemplificar isso:

```javascript
// CALLBACK
// CENÁRIO 1: 

function doSomething(callback) {
	setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}


function doOtherThing(callback) {
	setTimeout(function() {
        // did something
        callback('Second data');
    }, 1000);
}

function doAll() {
    doSomething(function(data) {
        var processedData = data.split('');
        
    doOtherThing(function(data2)) {
        var processedData = data.split('');
        
        setTimeout(function() {
            console.log(processedData, processedData2);
        }, 1000)
    }
    })
}

doAll();
```



## :space_invader: > 9. Contexto de Programação

Sem entender como o escopo funciona, haverá muitas confusões com o funcionamento do `this`, do hoisting, e por aí vai. Por isso, vamos entender como funciona!

##### 9.1 Entenda o "Escopo" (`Scope`) e o "Contexto" (`Context`)

```javascript
// TEORIA;

// ## 1. Escopo (Scope)
	- **Acesso** ás variáveis, funções e objetos numa parte do código, DURANTE o tempo de execução;
    - Determina a **visibilidade** desses recursos em alguma parte do código;
    - Sempre invocamos uma função, estamos criando um novo 'scope';
    
// ## 2. Contexto (Context)
	- Enquanto o 'scope' se refere às diversas variáveis, o 'context' se refere ao valor 'this' no mesmo 'scope';
    - Pode ser mudado com funções especiais como: .apply(), .call() e .bind();
    - No contexto de execução 'execution context' o contexto já não é mais esse contexto da discussão. O contexto de execução é o 'scope', por isso mencionamentos "DURANTE A EXECUÇÃO" em 'scope';
    
// ## 3. Temos 2 'scopes':
    
    1. 'Global'
		- No momento que começamos a escrever código, estamos nesse contexto;
		- Existe enquanto existir a aplicação;
	2. 'Local'
		- Dentro de alguma função, variáveis estão no escopo (contexto) local;
		- Existe enquanto existir a função ou o objeto;

// ## 4. Modo Estrito (strict mode):
    - Muda a semântica do javascript;
	- É opcional;
	- '"use strict"' para habilitar no contexto;
	- Elimina alguns erros silenciosos;
	- Evita algumas confusões;
	- Proíbe algumas sintaxes;
```

```javascript
// PRÁTICA;
// global scope
this.name = "Diego";

console.log("Este é o escopo global"); // Nesse momento, o this se refere ao "Window" que é o escopo global.

function myLocalScope() {
    // local scope
    console.log("Este é o escopo local"); 
}

sayMyName();
```



##### 9.2 Manipulando o Escopo

Certo, mas e se eu realmente quiser passar os argumentos e o escopo de um elemento para uma função ou objeto? Para isso há comandos que permitem a manipulação do escopo.

**`call.js`**

```javascript
// function.call(this, arg1, arg2)
// Leia-se: "call, chama a função tal e envia o this para dentro dela e os seus argumentos".
// Retorna o this do contexto que eu enviar

// CENÁRIO 1: faça uma função capaz de imprimir e tratar declarações feitas no escopo global e de objeto;

this.name = "Camila"; // .name definida no escopo global;

function sayMyName() {
    console.log(this.name);
}

const dev = {
    name: "Isabela" // .name definida no escopo de objeto;
}

sayMyName.call(this); // Retorno: Camila | Pega o escopo global e o envia para a função.
sayMyName.call(dev);  // Retorno: Isabela |Pega o escopo de dev e o envia para a função.
```

```javascript
// PRÁTICA
// CENÁRIO 2: usando como base o cenário 1, imprima também a idade, que deve ser obtida no escopo global e de objeto;

this.name = "Camila";

function sayMyName(age) {
    this.age = age; // Aplica o escopo recebido na nossa variável age
    console.log(this.name, this.age);
}

const dev = {
    name: "Isabela"
}

sayMyName.call(this, 18); // Retorno: Camila 18 | Pega o escopo global e o envia para a função, adicionalmente também envia o parâmetro age.
sayMyName.call(dev, 19);  // Retorno: Isabela 19 | Pega o escopo de dev e o envia para a função,  adicionalmente também envia o parâmetro age.
```

**`apply.js`**

```javascript
// function.apply(this, [arg1, arg2])
// Leia-se: "apply, chama a função tal e envia o this para dentro dela e um array de argumentos".
// Retorna o this do contexto que eu enviar

// CENÁRIO 1: faça uma função capaz de receber argumentos de uma propriedade global utilizando o .apply, trate e imprima utilizando o comando arguments (interage com os itens de um array);

this.name = "Camila"; // .name definida no escopo global;
this.age = 25;

function sayMyName() { // Agora a função não prevê um parâmetro
    this.age = arguments[0]; // Entretanto, o apply repassa os argumentos do escopo, e com arguments nós o guardamos em uma variável;
    this.likes = arguments[1];
    this.clothes = arguments[2];
    console.log(this.name, this.age, this.likes, this.clothes);
}

sayMyName.apply(this, [18, "banana", "vestido"]); // 
// Retorno: Camila 18 banana vestido 
```

```javascript
// PRÁTICA
// CENÁRIO 2: crie uma função que seja capaz de receber inúmeros argumentos, e repasse esses argumentos para uma function que os converta em Array e os multiplique;

function multiply() {
    const args = Array.from(arguments); // transforma a lista de argumentos em um array (utilizando Array.from(Arguments)), em seguida os guarda em args
    return args.reduce((acc, item)) => { // Aplica a função reduce para iterar sobre cada elemento e gerar um único valor final
        return acc * item; // acc = acumulador
    }, 1); // inicia o acumulador em 1
}

const total = multiply.apply (this, [2, 2, 3, 2]); // Repassa o this, e o LikeArray (porque não é um array de fato, tanto que precisamos transformá-los na função para aplicar o .reduce) de argumentos
console.log(total);
// Retorno: 24
```

**`bind.js`**

```javascript
// function.bind(contexto)
// retorna a função chamada, porém sempre vinculada ao contexto argumentado.
// bound function

// CENÁRIO 1: crie uma variável, que utilize a função sayMyName vinculada ao dev, e outra vinculada ao global);

function sayMyName(age) {
    this.age = age; // Aplica o escopo recebido na nossa variável age
    console.log(this.name, this.age);
}

const dev = {
    name: "Isabela"
}

this.name = "Camila";
this.age = 25;

// Também pode ser escrito como: sayMyName.bind(this)(20)
const boundSayMyName = sayMyName.bind(this) // Ao utilizar essa variável, a função sempre será utilizada considerando o escopo global, porque nesse instante this se refere ao escopo global!
const boundSayMyName2 = sayMyName.bind(dev) // Ao utilizar essa variável, a função sempre será utilizada considerando o escopo do objeto dev, porque nesse instante this se refere ao escopo de objeto!

boundSayMyname(18); // RETORNO: Camila 18
boundSayMyname2(19); // RETORNO: Isabela 19
```

```javascript
// PRÁTICA
// CENÁRIO 2: crie uma variável, que utilize a função sayMyName vinculada ao dev, e outra vinculada ao global);

const dev = {
    name: "Isabela",
    age: 35,
    sayMyAge: function() { // Método sayMyAge dentro do objeto
        console.log(this.name, this.age);
    }
}
/*
const age = dev.sayMyAge;
age(); se focê passar dessa forma, perceberá que o retorno será UNDEFINED UNDEFINED. Isso ocorre porque o método foi tirado do contexto de dev, ele agora está "desligado" sem saber em qual contexto trabalhar. Para resolver isso utilizamos o .bind para religar ao contexto de dev
*/

const age = dev.sayMyAge.bind(dev);
age();
```



##### 9.3 Domine o "`this`"

Sem entendê-lo, por muitas vezes você poderá vivenciar vários problemas silenciosos que não são identificáveis facilmente. E caso não saiba utilizá-lo, também perde a oportunidade de usar suas propriedades.

```javascript
// TEORIA;
// ## 1. O que é "this"?
    
    'this' em inglês significa: 'isto, esta'.

	Automaticamente somos levados a pensar: Isto o que? Esta o que?. Assim, precisamos estar situados em algum contexto para entender o 'this'.
    
    Imagine que você está na sua casa. E você chega na sua família e fala: "Eu amo **esta** casa". Você não diz que ama outra casa, e não está se referindo a outra casa. Aí você toca na mesa e diz: "Eu amo **esta** mesa", "**esse** sofá", "amo **isto** tudo". No contexto da casa, você possui e se refere a estas coisas.
    
    O 'this' em javascript possui a mesma idéia.
    
    O comportamento DEPENDE do contexto ('context') ou do escopo ('scope') na qual 'this' é invocada.
    
    Como no exxemplo da casa, o 'this' pode ser a casa, pode ser o sofá ou a mesa. O que vai dizer o que significa o 'this' é o contexto.
    
	[...] portanto, 'this' depende:
	 - 1. Escopo e Contexto;
     - 2. Modo Estrito 'user strict';
```

```javascript
// PRÁTICA;

// global scope
this.name = "Diego";

console.log(this.name); // Nesse momento, o this no escopo global de um browser, é o mesmo que "Window".

function sayMyName() {
    // local scope
    console.log(this.name); // Nesse momento, o this se refere a function "sayMyName", e como essa função não possui um name definido, resulta em UNDEFINED
}

sayMyName();
```

O **`this`** pode ser tratado de forma diferente dependendo do ambiente em que é executado, veja:

```javascript
// PRÁTICA;
// CENÁRIO 1: Faça a declaração .name no escopo global e tente invocar essa propriedade dentro de uma função.

// 'use strict' | Leia abaixo para entender o que isso significa!

this.name = "Valeska"; // Global Scope

function sayMyName() { // Local Scope
	console.log(this.name); 
}

sayMyName(); // RETORNO: Undefined
```

:warning: **IMPORTANTE:** No `Node.js`, o javascript respeitará a divisão de escopo e retornará `undefined`. Entretanto, no `navegador` ou outros ambientes, o javascript poderá fazer uso do `Hoisting`, buscando a declaração no escopo externo!

Para controlar o uso do `this` em outros ambientes, usamos o **`use strict`**, e dessa forma os escopos serão respeitados em todos os ambientes.

```javascript
// PRÁTICA;
// CENÁRIO 2: Faça a declaração .name no escopo global e tente invocar essa propriedade dentro de um contexto de objeto.

this.name = "Valeska"; // Global Scope

const user = {
    name: "Diego", // Nesse caso name está sendo declarada como propriedade dentro do objeto user, por isso funciona.
    // Entretanto, vale destacar que caso a propriedade name não existisse aqui, o escopo local do objeto é respeitado retornando UNDEFINED, mesmo não tendo "Use Strict"!
    sayMyName: function() {
    	console.log(this.name);
    }
}

user.sayMyName(); // RETORNO: Diego;
```

```javascript
// PRÁTICA;
// CENÁRIO 3: Supondo que o código será executado COM 'use strict', como ele se comportaria?

'use strict'

// Global Scope
this.name = "Valeska";

// Local Function Scope
// - Não pega o escopo global, mas se não tiver no modo estrito, sim!
function sayMyName() { 
	console.log(this.name); 
}

// Local Object Scope
// - Não pega o escopo global, somente do objeto. Independente do modo estrito!
const user = {
    sayMyName: function() {
    	console.log(this.name);
    }
}

console.log(window.name); // Window se refere ao browser em si no escopo global;
user.sayMyName();

/*
RETORNO: 
Valeska		| Global Scope
Undefined	| Local Function Scope
Undefined	| Local Object Scope
Valeska		| Window.name
*/
```

```javascript
// PRÁTICA;
// CENÁRIO 4: Supondo que o código será executado SEM 'use strict', como ele se comportaria?

// Global Scope
this.name = "Valeska";

// Local Function Scope
// - Não pega o escopo global, mas se não tiver no modo estrito, sim!
function sayMyName() { 
	console.log(this.name); 
}

// Local Object Scope
// - Não pega o escopo global, somente do objeto. Independente do modo estrito!
const user = {
    sayMyName: function() {
    	console.log(this.name);
    }
}

console.log(window.name); // Window se refere ao browser em si no escopo global;
user.sayMyName();

/*
RETORNO: 
Valeska		| Global Scope
Valeska		| Local Function Scope
Undefined	| Local Object Scope, o escopo de objeto continua sendo respeitado!
Valeska		| Window.name
*/
```

```javascript
// PRÁTICA;
// CENÁRIO 5: Estude o comportamento do this, quando há uma função dentro de outra função.

// Global Scope
this.name = "Valeska";

// Local Function Scope
function age(age) {
    this.name = "Joshua";
    
    // 2nd Local Function Scope
    function birthYear(age) {
        this.name = "Kyam";
        
        const year = 2019 - age;
        console.log(this.name, year);
    }
    
    birthYear(age);
    
    console.log(this.name);
}

console.log(this.name); // chamando no Global Scope

age(25); // chamando a função, como o parâmetro 25

/*
RETORNO: 
Valeska		| Global Scope
Kyam		| Local Function Scope (Foi alterado por conta da segunda função!)
Kyam		| 2nd Local Function Scope
*/
```

```javascript
// PRÁTICA;
// CENÁRIO 6: refaça o cenário 5, mas desta vez utilizando Arrow Functions e estude seu comportamento.
// Pega o this do escopo anterior

// Global Scope
this.name = "Valeska";

// Local Function Scope
const age = age => {
    const birthYear = age => {
        const year = 2019 - age;
        console.log(this.name, year);
    };
    
    birthYear(age);
};

const dev = {
    sayMyName: () => {
        this.name = "Enzo"; // Se não for declarado, mais uma vez ele usa 
    }
};

age(25);// invoca a função
dev.sayMyName(); // 
console.log(this.name); // chamando no Global Scope

/*
RETORNO: 
Valeska		| Global Scope
Valeska		| Local Function Scope (Foi utilizado o escopo global)
Enzo		| Object dev (É utilizada a declaração do escopo global, em seguida alterada conforme o objeto dev)
*/
```

```javascript
// CONTEXTO DE CLASSE (CONTEXT CLASS)
// PRÁTICA;
// CENÁRIO 6: estude como é o comportamento dos escopos nos casos em que uma classe é instanciada

class Alo {
	constructor() {
        this.hello = "Olá";
    }
    
    sayHello() { // Método
        console.log(this.hello);
    }
}
*/

const hello = new Alo();

hello.sayHello(); // RETORNO: "Olá"
// O this está disponível por toda a classe.
```


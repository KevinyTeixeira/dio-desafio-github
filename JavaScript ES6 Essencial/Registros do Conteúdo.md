# 📚JavaScript ES6 Essencial

Aqui registrarei todos os conteúdos que eu considerar importante nessa disciplina, algo como um bloco de *"Anotações"* para que eu possa retornar futuramente caso considere necessário.

## 📑 Características do JavaScript

Antes de mais nada, JavaScript não é uma variante de Java. Foi criada por Brendan Eich em 1995. Agora vamos começar com as características do Java:

#### 1️⃣ JavaScript, é uma linguagem interpretada!

Aqui você precisa entender os termos **interpretado** e **compilados**, os compilados são as linguagens que precisam converter o código em um arquivo diferente para que seja interpretado, a exemplo do java que gera um bytecode (.class) ou do C++ que converte o código em assembler. No caso do JavaScript, o código não precisa ser transformado.

#### 2️⃣ JavaScript, têm Tipagem Fraca e Dinâmica!

Essas duas características são muito importantes quando se trata de programar nessa linguagem. A **Tipagem Fraca** significa dizer que os "tipos" das variáveis não precisam ser declaradas para que você possa usa-las, essa declaração é feita automaticamente quando a variável recebe um valor. Ou seja, se for um texto, automaticamente ela se tornará "string".

Além disso, o termo **Dinâmico**, refere-se ao fato de que esse "tipo" não é imutável, você pode em um dado momento, declarar que a variável recebe um número, e logo em seguida declarar que ela deve receber uma string.

#### 3️⃣ JavaScript, trabalha com Funções de 1ª Classe e Ordem Maior!

Isso significa dizer, que as funções podem ser atribuídas a uma variável, a uma estrutura de dados (object, array) e podem ser passada por argumentos!

```javascript
/* Exemplo: */
function getName() {
    return 'Keviny Teixeira de Jesus';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
```

#### 4️⃣ JavaScript é capaz de "lembrar" do "escopo" em que a função foi criada!

Sim, e isso se chama **Closure**! Esse conceito nada mais é do que a capacidade do JavaScript em levar em consideração definições que estejam foram da função diretamente mencionada. Isso deve ter ficado bem confuso, mas vamos dar um exemplo:

```javascript
/* Exemplo: */
/* Vamos considerar dois arquivos JavaScript */

/* Arquivo de ESCOPO.js */
let x = 50

function somarXMais3() {
    return x + 3
}

/* Arquivo de MAIN.js */
let x = 100
console.log(somarXMais3())
```

Certo, agora eis a pergunta, em **Main.js** nós definimos o valor de X = 100, e em **Escopo.js** está definido o valor de X = 50, qual dos dois valores de X será considerado na hora de somar o valor de X na função? Poisé, se você acha que é como Java, está enganado. Aqui o resultado **será 53!** 😆

Vamos complicar um pouco mais, veja o cenário abaixo:

```javascript
/* Exemplo: */
/* Vamos somente atualizar nosso ESCOPO.js */

/* Arquivo de ESCOPO.js */
let x = 50

function fora () {

	function somarXMais3() {
		return x + 3
	}
	return somarXMais3
}
```

Certo, a pergunta é a seguinte, até aonde o **Closure** nessa função leva o "Escopo Externo" em consideração, nesse caso ele levará somente até a função fora, ou ainda sim tentará procurar o valor de x fora da função "fora"? Mais uma vez, o resultado **será 53!** 😆

Isso ocorre porque **ao não encontrar o valor de x no escopo da função fora, ele tenta procurar também no escopo subsequente**. Óbviamente isso também significa que caso houvesse um valor de x sendo definido no escopo fora, ele é quem seria considerado!

## 📑Conceitos Importantes do JavaScript

- **Currying:** cria uma outra função dentro de uma função já existente, permitindo que um dos parâmetros utilizados possam usar declarações simplificadas, como o exemplo abaixo:

  ```javascript
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
  ```

- **Hoisting:** permite que uma variável ou função seja utilizada, mesmo que esta ainda não tenha sido "lida" pela execução do código. Isso impede que o código apresente um erro, entretanto o valor da variável é mostrado como "Undefined". O Hoisting **também pode ser aplicado em funções**, com o único diferencial de que para as funções,  Veja o exemplo abaixo:

  ```javascript
  /* Exemplo: */
  
  /* Veja a seguinte função... */
  function fn () {
  	console.log(text);
  	var text = 'Exemplo';
  	console.log(text);
  }
  
  fn();
  
  /* Perceba que a variável text só é declarada no meio da função, sendo que ela já é requisitada antes mesmo de ser declarada! A saída do código será a seguinte: 
  - Undefined
  - Exemplo
  
  Na íntegra, é isso o que acontece: */
  
  function fn () {
     	var text; /* A variável é "Içada" para ser declarada antes mesmo da execução; */
      
  	console.log(text);
      text = 'Exemplo';
     	console.log(text);
  }
  ```

- **Imutabilidade:** é um conceito que prevê a imutabilidade de objetos. Quando você tenta inserir um novo atributo a um objeto, ao invés de acrescentá-lo, o JavaScript cria um novo objeto, cópia do último e inclui o novo atributo. 

  ```javascript
  /* Exemplo: */
  
  /* Veja a seguinte declaração dos atributos name e lastName... */
  const user = {
  	name: 'Keviny',
  	lastName: 'Teixeira de Jesus'
  }
  
  /* Agora com uma função, vamos criar um novo atributo chamado fullName, para que faça parte do objeto user */
  function getUserWithFullName(user) {
  	return {
  		...user, /* para cada user... */
  		fullName: '${user.name} ${user.lastName}' /* adicionar o atributo fullName... */
  	}
  }
  
  const userWithFullName = getUserWithFullName(user);
  
  console.log(userWithFullName, user); /* imprime os dois objetos... */
  
  /* Saída do userWithFullName:
  { name: 'Keviny',
  lastName:'Teixeira de Jesus',
  fullName: 'Keviny Teixeira de Jesus' } { name: 'Keviny', lastName:'Teixeira de Jesus' }
  */
  ```



## :earth_americas: A importância de entender o ESCOPO do JavaScript

Cuidado! Nada do que foi dito acima irá importar, se você não entender o comportamento dos conceitos dentro dos escopos de programação do JavaScript, isso porque na melhor das hipóteses, você simplesmente não entenderá o comportamento do que está sendo executado. Veja como é a definição de escopos:

```javascript
/* DEFINIÇÃO DE ESCOPOS */

var exemplo= "teste"; /* Aqui é o ESCOPO GLOBAL */

{
	console.log = exemplo; /* Aqui é o ESCOPO DE BLOCO */
}

function addText() {
    /* Aqui é o ESCOPO DE FUNÇÃO */
}
```

​	Há 3 tipos de variáveis no JavaScript, são elas: `var`, `let`, `const`. Veja alguns de seus comportamentos:

- O **var**, não respeita um escopo de bloco. Utilizando do conceito de **hoisting**, ele irá procurar a variável no escopo global ou no escopo de função, caso sua declaração não tenha sido encontrada no escopo de bloco;

  ```javascript
  var test = 'exemplo'; 
  
  (() => {
  	console.log('Valor dentro da função "${test}"'); /* Nesse momento, o valor é "undefined", o que significa que a variável foi encontrada, mas o valor não foi definido nesse escopo. */
  	
  	if (true) {
  		test = 'exemplo';
  		console.log('Valor dentro do if "${test}"');
  	}
  	
  	console.log('Valor após a execução do if "${test}"');
  })();
  
  /* SAÍDA */
  Valor dentro da função "undefined"
  Valor dentro da if "example"
  Valor após a execução do if "example"
  ```

- O **let**, respeita todos os escopos, o que significa que a variável só existirá dentro do escopo em que foi definida.

  ```javascript
  (() => {
  	let test = 'valor da função';
  	console.log('Valor dentro da função "${test}"');
  	
  	if (true) {
  		let test = 'valor if';
  		console.log('Valor dentro do if "${test}"');
  	}
  	
  	if (true) {
  		let test = 'valor de outro if';
  		console.log('Valor dentro do if "${test}"');
  	}
  	
  	console.log('Valor após a execução do if "${test}"');
  })();
  
  /* SAÍDA */
  Valor dentro da função "valor função"
  Valor dentro da if "valor if"
  Valor após a execução do if "valor função"
  ```

- O **const**, respeita todos os escopos, o que significa que a variável só existirá dentro do escopo em que foi definida. Entretanto, uma declaração nativa não poderá ter seu valor alterado, salvo que esse valor seja dentro de um objeto.

  ```javascript
  const name = 'Keviny';
  
  // Não podemos alterar o valor
  name = 'Keviny';
  
  const user = {
  	name: 'Keviny'
  };
  
  // Mas se for um objeto, podemos trocar suas propriedades
  user.name = 'Outro nome';
  
  // Não podemos fazer o objeto "apontar" para outro lugar
  user = {
  	name: 'Keviny'
  };
  
  const persons = ['Keviny', 'Keuvyn', 'David'];
  
  //Podemos adicionar novos itens
  persons.push('Ana'); /* ['Keviny', 'Keuvyn', 'David', 'Ana'] */
  
  // Podemos remover algum item
  persons.shift(); /* ['Keviny', 'Keuvyn', 'David'] */
  
  // Podemos alterar diretamente;
  persons[1] = 'Antônio'; /* ['Keviny', 'Antônio', 'David'] */
  
  console.log('/nArray Após as alterações: ', persons);
  
  /* SAÍDA */
  Valor dentro da função "valor função"
  Valor dentro da if "valor if"
  Valor após a execução do if "valor função"
  ```


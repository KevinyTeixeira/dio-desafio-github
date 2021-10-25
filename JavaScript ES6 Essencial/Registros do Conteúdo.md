# :books:JavaScript ES6 Essencial



Aqui registrarei todos os conteúdos que eu considerar importante nessa disciplina, algo como um bloco de *"Anotações"* para que eu possa retornar futuramente caso considere necessário.



## :bookmark_tabs: Características do JavaScript

Antes de mais nada, JavaScript não é uma variante de Java. Foi criada por Brendan Eich em 1995. Agora vamos começar com as características do Java:

#### :one: JavaScript, é uma linguagem interpretada!

Aqui você precisa entender os termos **interpretado** e **compilados**, os compilados são as linguagens que precisam converter o código em um arquivo diferente para que seja interpretado, a exemplo do java que gera um bytecode (.class) ou do C++ que converte o código em assembler. No caso do JavaScript, o código não precisa ser transformado.

#### :two: JavaScript, têm Tipagem Fraca e Dinâmica!

Essas duas características são muito importantes quando se trata de programar nessa linguagem. A **Tipagem Fraca** significa dizer que os "tipos" das variáveis não precisam ser declaradas para que você possa usa-las, essa declaração é feita automaticamente quando a variável recebe um valor. Ou seja, se for um texto, automaticamente ela se tornará "string".

Além disso, o termo **Dinâmico**, refere-se ao fato de que esse "tipo" não é imutável, você pode em um dado momento, declarar que a variável recebe um número, e logo em seguida declarar que ela deve receber uma string.

#### :three: JavaScript, trabalha com Funções de 1ª Classe e Ordem Maior!

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

#### :four: JavaScript é capaz de "lembrar" do "escopo" em que a função foi criada!

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

Certo, agora eis a pergunta, em **Main.js** nós definimos o valor de X = 100, e em **Escopo.js** está definido o valor de X = 50, qual dos dois valores de X será considerado na hora de somar o valor de X na função? Poisé, se você acha que é como Java, está enganado. Aqui o resultado **será 53!** :laughing:

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

Certo, a pergunta é a seguinte, até aonde o **Closure** nessa função leva o "Escopo Externo" em consideração, nesse caso ele levará somente até a função fora, ou ainda sim tentará procurar o valor de x fora da função "fora"? Mais uma vez, o resultado **será 53!** :laughing:

Isso ocorre porque **ao não encontrar o valor de x no escopo da função fora, ele tenta procurar também no escopo subsequente**. Óbviamente isso também significa que caso houvesse um valor de x sendo definido no escopo fora, ele é quem seria considerado!



## :bookmark_tabs:Conceitos Importantes do JavaScript

- **Currying:** cria uma outra função dentro de uma função já existente 

  ```javascript
  /* Exemplo: */
  
  /* Cenário sem o uso do CURRYING */
  function soma(a, b) {
      return a + b;
  }
  
  soma (2, 2);
  soma (2, 3);
  soma (2, 4);
  soma (2, 5);
  soma (2, 6);
  
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

  

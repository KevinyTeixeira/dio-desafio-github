# :books:JavaScript ES6 Essencial



Aqui registrarei todos os conteúdos que eu considerar importante nessa disciplina, algo como um bloco de *"Anotações"* para que eu possa retornar futuramente caso considere necessário.



## :bookmark_tabs: Características e Conceitos Importantes do JavaScript

Antes de mais nada, JavaScript não é uma variante de Java. Foi criada por Brendan Eich em 1995. Agora vamos começar com as características do Java:

#### :bow_and_arrow: 1. JavaScript, é uma linguagem interpretada!

Aqui você precisa entender os termos **interpretado** e **compilados**, os compilados são as linguagens que precisam converter o código em um arquivo diferente para que seja interpretado, a exemplo do java que gera um bytecode (.class) ou do C++ que converte o código em assembler. No caso do JavaScript, o código não precisa ser transformado.

#### :chart_with_downwards_trend: 2. JavaScript, têm Tipagem Fraca e Dinâmica!

Essas duas características são muito importantes quando se trata de programar nessa linguagem. A **Tipagem Fraca** significa dizer que os "tipos" das variáveis não precisam ser declaradas para que você possa usa-las, essa declaração é feita automaticamente quando a variável recebe um valor. Ou seja, se for um texto, automaticamente ela se tornará "string".

Além disso, o termo **Dinâmico**, refere-se ao fato de que esse "tipo" não é imutável, você pode em um dado momento, declarar que a variável recebe um número, e logo em seguida declarar que ela deve receber uma string.

#### :bulb: 3. JavaScript, trabalha com Funções de 1ª Classe e Ordem Maior!

Isso significa dizer, que as funções podem ser atribuídas a uma variável, a uma estrutura de dados (object, array) e podem ser passada por argumentos!

```javascript
/* Exemplo */
function getName() {
    return 'Keviny Teixeira de Jesus';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
```

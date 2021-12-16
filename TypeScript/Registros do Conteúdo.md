# 📚 TYPESCRIPT

Aqui registrarei todos os conteúdos que eu considerar importante nessa disciplina, algo como um bloco de *"Anotações"* para que eu possa retornar futuramente caso considere necessário.

Para complementar informações sobre essa linguagem, consulte os guias e instruções no **[site oficial](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)**!

### 1. O que é TYPESCRIPT :question:

É uma extensão do JavaScript, ele adiciona checagem de tipos, variáveis, features que visam "facilitar" seu processo de desenvolvimento. 

É importante entrar em mais detalhes para esclarecer as Diferenças:

- TypeScript utiliza a **Programação Orientada a Objetos**, o que significa dizer que permite o uso de **classes, interfaces, encapsulamento, herança** e outras coisas a mais;
- TypeScript utiliza a **Tipagem Forte**, o que significa que para utilizar um número por exemplo, você deve definir a variável como `number`, escrevendo algo como `let valor: number;`;
- Apesar do código ser escrito em TypeScript, ele **é convertido em JavaScript** no fim das contas, pois os navegadores só executam o código em JavaScript;
- **Outros pontos fortes:** faz recomendações de preenchimento com caixas flutuantes  de propriedades declaradas em interfaces, dá constantes avisos sobre quais informações são esperadas em determinados pontos da programação, etc.

Um exemplo prático da distinção entre um código em `JavaScript` e o mesmo código em `TypeScript`.

```javascript
// CÓDIGO EM JAVA SCRIPT
// CENÁRIO 1: uma função simples de soma, que só permita sua execução no caso dos parâmetros serem do tipo number;

function soma (a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    else {
        console.log('Os valores repassados não são números!');
    }
}
```

```typescript
// CÓDIGO EM TYPESCRIPT
// CENÁRIO 1: uma função simples de soma, que só permita sua execução no caso dos parâmetros serem do tipo number;

function soma ( a: number, b: number) { // O TypeScript permite que façamos a restrição logo na declaração dos parâmetros
    return a + b;
}

soma('a', 'b'); // Antes mesmo de executar, o TypeScript já informa que o código dará erro, por não ser parâmetros do tipo número!
```



### 2. Interface

São espécies de contratos para implementar as classes ou estruturas. Uma classe que implementa uma interface é obrigada a implementar todos os seus membros.

Assim como as classes abstratas, as interfaces também definem a estrutura das classes que “assinam o contrato” com elas.

A diferença fundamental é que todos os métodos e atributos da interface devem ser implementados nas classes filhas. No entanto, você pode definir atributos como opcional também.

São utilizadas para definir "Contratos", e o "type" utilizamos para juntar diferentes interfaces, 

```typescript
// INTERFACE
// CENÁRIO 2: Simule a execução de uma interface, bem como da extensão de uma e analise seu comportamento no TypeScript;

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(decibeis: number): avoid;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre', // Nesse momento, o TypeScript já lhe questiona qual dos "tipos" definidos na interface será utilizado. Se declarar um tipo que não existe, você será alertado!
    executarRugido: (decibeis) => (`${decibeis}dB`) // Permite repassar o número em uma declaração futura
}

animal.executarRugido('s') // Nesse momento, o TYPESCRIPT já lhe informa que o parâmetro esperado é do tipo number!

// Também é possível 'extender' uma interface primária, utilizando os conceitos comuns de extensão (permitindo ao que recebe a extensão, utilizar as propriedades)

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre', // Por ter sido extendido
    visaoNoturna: true
}
```

```typescript
// TYPE, em TYPESCRIPT
// CENÁRIO 3: a expressão type, tem seu uso focado em permitir a utilização de mais de uma interface. Simule sua execução e analise seu comportamento;

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; // TYPE, está aqui criando uma nova estrutura chamada de IDomestico, que permite o uso, ou das propriedades de IFelino, ou ICanino

// type IDomestico = IFelino & ICanino; // Também pode ser concatenado!

const animal: IDomestico = {
    domestico: true, // de IAnimal
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true,
}
```

### 3. Tag Input

Tratando especificamente sobre as input tags, e como referenciá-las no TYPESCRIPT para manipular o input no HTML. Veja:

```typescript
// TAG INPUT 
// CENÁRIO 4: a expressão type, tem seu uso focado em permitir a utilização de mais de uma interface. Simule sua execução e analise seu comportamento;

const input = document.getElementByID('input') as HTMLInputElement; // É importante verificar como o TYPESCRIPT está interpretando o elemento 'input', na maioria dos casos, ele entenderá como 'HTMLElement', por isso, utilizamos 'as HTMLInputElement'!

input.addEventListener('input', (event) => { // O 'input' mencionado aqui, é a ID de uma <input/> no código HTML!
    const i = event.currentTarget as HTMLInputElement; // para esclarecer que 'event' ocorre no elemento de input, utilizamos o método .currentTarget, e mais uma vez, apontamos que input é um HTMLInputElement!
    console.log(i);
});
```



### 4. Generic Types

Apesar de TypeScript trabalhar com a tipagem forte, é possível utilizar variáveis sem tipos, utilizando declarações genéricas para permitir que o próprio TypeScript interprete qual tipo é. Veja:

```typescript
// GENERIC TYPES 
// CENÁRIO 5: monte um código que receba parâmetros de qualquer tipo no TypeScript. Simule sua execução e analise seu comportamento;

function adicionaApendiceALista<T>(array, T[], valor: T) { // É um padrão em TypeScript, de utilizar a letra maiúscula T, sempre que se tratar de um tipo genérico!
    return array.map(() => valor);
    
}

adicionaApendiceALista([1, 2, 3], 4); // Automaticamente, o TypeScript infere que <T> é um number;
adicionaApendiceALista(['a', 'b', 'c'], 'd'); // Automaticamente, o TypeScript infere que <T> é uma string;
```



### 5. Desenvolvendo Condicionais a partir de Parâmetros

```typescript
// CONDICIONAIS A PARTIR DE PARÂMETROS 
// CENÁRIO 6: em TypeScript, podemos permitir que uma função receba uma interface ou outra, mas há um risco de que as propriedades de uma não sejam "vistas" pela função. Simule sua execução, resolva o problema e analise seu comportamento;

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) { // podemos receber um usuário do tipo IUsuario ou IAdmin, mas a propriedade cargo só existe em IAdmin
    // if(usuario.cargo === 'gerente') { console.log('Gerente'); } // Por isso este código não funcionará, criando a necessidade de 'encadear' um if para a função verifique a existência de 'cargo' em ambas as interfaces
    
    if('cargo' in usuario) {
        // redirecionar para a área de administração
        
    }
    
    // redirecionar para a área do usuário
}
```



### 6. Tornado uma Propriedade OPCIONAL

```typescript
// PROPRIEDADE OPCIONAL 
// CENÁRIO 7: faça uma adaptação do CENÁRIO 6, para excluir a necessidade da interface IAdmin e torne a propriedade cargo opcional.

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'; // o ponto de interrogação ao lado do nome da propriedade, indica que o valor não é obrigatório. Portanto, essa informação não precisará constar ao criar um usuário!
}

function redirecione(usuario: IUsuario) {
	if (usuario.cargo) {
        // redireciona usuario.cargo;
    }
    // redireciona para a área do usuário
}
```



### 7. Utilizando `readonly` e `private`

```typescript
// ReadOnly e Private 
// CENÁRIO 7: crie uma interface, que através do type, torne todas as propriedades obrigatórias, além de atribuir a privacidade ReadOnly.

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string; // Propriedade opcional!
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K]; // K é um índice, e com este índice percorremos todo o "chaveiro" (keyof) da interface cachorro, tornando todas as propriedades obrigatórias | O "-?", torna todas as propriedades obrigatórias!
}

class MeuCachorro implements CachorroSomenteLeitura {
    nome;
    idade;
    
    constructor(nome, idade) { // Com o construtor, podemos instanciar um novo item para a classe MeuCachorro, passando os valores das propriedades como parâmetros
    this.nome = nome;
    this.idade = idade;
	}
}

const cao = new MeuCachorro('Apolo', 14);
```



### 7. Como Importar Bibliotecas com TypeScript

(....)

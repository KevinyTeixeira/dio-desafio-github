/* Exemplo: */

let user = {
	name: 'Keviny'
};

// Alterando a propriedade de um objeto
console.log(user);

user.name = 'Outro nome 1'; // 1ª forma de chamar o objeto;
user[ 'name' ] = 'Outro nome 2'; // 2ª forma de chamar o objeto;

const prop = 'name';
user[prop] = 'Outro nome 3'; // 3ª forma de chamar o objeto;

// Criando uma propriedade
user.lastName = 'Teixeira de Jesus';
console.log(user);

// Deletando uma propriedade
delete user.name;

/* MAIS FUNÇÕES DE OBJECT */

const user2 = {
	name: 'Keviny',
	lastName: 'Teixeira de Jesus'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));
// SAÍDA: "Propriedades do objeto user: [ 'name', 'lastName' ]"

// Recupera os valores das chaves do obetjo
console.log('\nValores das propriedades do objeto user:', Object.value(user));
// SAÍDA: "Valores das propriedades do objeto user: [ 'Keviny', 'Teixeira de Jesus' ]"

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));
// SAÍDA: "Lista de propriedades e valores: [ [ 'name', 'Guilherme' ], [ 'lastName', 'Cabrini da Silva' ] ]"

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Keviny Teixeira de Jesus'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign{}, user, [age: 26}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);
// SAÍDA: "Variável newObj após as alterações: { foo: 'changes', bar: 'foo' }"

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Keviny' };
Object.seal(person);

person.name = 'Keviny Teixeira';
delete person.name;
person.age = 25;

console.log('\nVariável person após as alterações:', person);
// SAÍDA: "Variável person após as alterações: { name: 'Keviny Teixeira' }" Alterar sim, deletar ou criar não.
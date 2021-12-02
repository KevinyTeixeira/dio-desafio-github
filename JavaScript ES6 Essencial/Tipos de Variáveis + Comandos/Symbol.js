/* Exemplo: */

const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol 1 é igual a symbol2:', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
	[nameSymbol1]: 'Keviny',
	[nameSymbol2]: 'João',
	lastName: 'Teixeira de Jesus'
}

console.log(user);

// Symbols criam propriedadesque não são enumberables, não aparece
for (const key in user) {
	if (user.hasOwnProperty(key)) {
		console.log('\nValor da chave' ${key}: ${user[key]});
	}
}

// Symbols também não aparecem com keys
console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades no objeto user:', Object.values(user));

// Exibir symbols de um projeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enum
const directions = {
		UP		: Symbol( 'UP' ),
		DOWN	: Symbol( 'DOWN' ),
		LEFT	: Symbol( 'LEFT' ),
		RIGHT	: Symbol( 'RIGHT' )
};
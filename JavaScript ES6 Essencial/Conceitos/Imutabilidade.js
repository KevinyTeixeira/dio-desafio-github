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
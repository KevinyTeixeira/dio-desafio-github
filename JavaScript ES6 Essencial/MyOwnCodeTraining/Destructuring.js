// Destructuring on a Object

const user = {
	name: 'Keviny',
	age: 25,
	birthday: 07,
	favoriteFood: "Hamburguer"
}

const { name: destructuring } = user;
console.log(destructuring); // this is the name of my new variable with destructuring on user object

// Destructuring on Array

const myNewArray = [1, 2, 3, 4, 5, 6, 7];

const [ destructuring2, destructuring3 ] = myNewArray
const [ , , , , ,destructuring5, destructuring4 ] = myNewArray
console.log(destructuring2, destructuring3);
console.log(destructuring4, destructuring5);

// Let's work with Arrays!

const fruitsList = [
	'Lemon',
	'Strawberry',
	'Banana',
	'Melon',
	'Pear',
	'Orange',
	'Pineapple',
	'Coconut',
]

const printList = () => {
	count = 0;
	console.log("\n**PRINTING LIST:\n");

	for (let i of fruitsList) {
		console.log("[" + count + "]" + " " + i + ";");
		count++;
	}
}

const addOneNewFruit = (fruitName) => {
	fruitsList.push(fruitName);
	console.log("\n**ADDING NEW FRUITS:\n");
	console.log(fruitName + " has been added to the array list!");
	printList();
}

const addMultipleNewFruits = (...fruits) => { // Using rest operator from ES6 JS!
	fruitsList.push(...fruits);
	console.log("\n**ADDING MULTIPLE NEW FRUIT:\n");
	console.log("All new fruits has been added to the array list!");
	printList();
}

const removeOneNewFruit = (fruitName) => {
	fruitFinded = false;
	count = 0;
	console.log("\n**REMOVING A FRUIT:\n");

	while (fruitFinded == false) {

		console.log(" Checkig if " + fruitsList[count] + " it's on Array List...");

		if (fruitsList[count] == fruitName) {
			fruitFinded = true
		} else {
			count++;
		}

	}

	if (fruitFinded == true) {
		fruitsList.splice(count, 1); // remove the fruit!
		console.log(fruitName + " has been removed from the array list!");
	} else {
		console.log(fruitName + " not finded on array list!");
	}

	printList();

}

const removeMultipleFruits = (...fruits) => { // Using rest operator from ES6 JS!
	fruitsToFind = [...fruits]; // Using spread operator from ES6 JS!

	console.log("\n**REMOVING MULTIPLE FRUITS:\n");
	for (let i of fruitsList) {
		
		console.log(" Checkig if " + i + " it's on Array List...");

		for (let t of fruitsToFind) {
			if (i == t) {
				fruitsList.splice(fruitsList.indexOf(i), 1); // remove the fruit!
				console.log(i + " has been removed from the array list!");
				i--;
				console.log(i + " value of i!")
			}
		}

	}

	printList();

}

// Trying results
printList();
//addOneNewFruit('Black Cherry');
//removeOneNewFruit('Strawberry');
//addMultipleNewFruits('Lychee', 'Mango', 'Kiwi');
removeMultipleFruits('Coconut', 'Pear', 'Banana');

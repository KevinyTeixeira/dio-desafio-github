const sumNumbers = (...numbers) => {
	return numbers.reduce(( result, number ) => result + number);
}

const myPromise = new Promise((  Resolve, Reject ) => {

	const result = sumNumbers(5, 5, 2, 2, 1); // expected result = 15;

	if (result == 15) {
		console.log("\nEverything occurs like expected, the sum result in: " + result)
		Resolve(result);
	} else {
		Reject("\nSomething went wrong... the sum result is: " + result);
	}

})

myPromise
	.then((data) => {
		console.log(data);
		return data;
	}).then((data) => {
		console.log('\nSubtracting 5 from result...');
		const newData = data - 5;
		console.log(newData);
	}).catch((err) => {
		console.log("\nWe catch the error! Let's work on it!" + err);
	})

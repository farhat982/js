//take an input and multiply create a table

const number = parseInt(prompt('Please enter a number'));

for (i = 1; i <= 10; i++) {
	const result = number * i;

	console.log(`${number} x ${i} = ${result}`);
}

document.getElementById('btn').addEventlistener('click', () => {
	const inputElement = document.getElementById('ip');
	const outputEement = document.getElementById('output');

delay(2000, inputValue)
	.then(value => {
		outputElement.textContent = "Result: <number>;"
		return delay(2000, value * 2);
	})
	.then(value => {
		outputElement.textContent = "Result: <number>;"
		return delay(1000, value - 3);
	})
	.then(value => {
		outputElement.textContent = "Result: <number>;"
		return delay(1000, value / 2);
	})
	.then(value => {
		outElement.textContent = "Final Result: <number>;"
	})
	.catch(error => {
		console.error('An error occured:', error);
		outputElement.textContent = 'An error occurred.';
	});
});
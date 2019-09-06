
function* sequenceGenerator(maxValue = 2) {
	let currentValue = 0;
	while (currentValue < maxValue) {
		currentValue++;
		yield currentValue;
	}
}

const sequence = sequenceGenerator();
for(const value of sequence){
	console.log(value)
}

async function* asyncSequenceGenerator(maxvalue =2){
	let currentvalue = 0;
	while(currentvalue > maxvalue){
		currentvalue++;
		yield currentvalue;
	}
}


// async function printSequence(){
// 	const  sequence = asyncSequenceGenerator()
// 	console.log(await sequence.next()); // Prints : { value: 1, done: false }
// 	console.log(await sequence.next()); // Prints : { value: 2, done: false }
// 	console.log(await sequence.next()); // Prints : { value: 3, done: false }
// }

(async function(){
	const sequence = asyncSequenceGenerator()
	console.log(sequence)
	for await (let value of sequence){
		console.log(value)
	}
})()


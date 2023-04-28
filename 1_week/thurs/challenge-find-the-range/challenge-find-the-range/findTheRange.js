// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let min = 99;
let max = -1;

for(let i = 0; i < array.length; i++){
	let curr = array[i];
	min = Math.min(min,curr);
	max = Math.max(max,curr);
}

console.log(min);
console.log(max);
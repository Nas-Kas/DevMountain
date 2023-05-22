function sumZero(a, b){ // O(1)
	if(a + b == 0){
		return true;
	}
	return false;
}

function uniqueChars(inputString){ // O(n)
	const set = new Set();
	for(let i = 0; i < inputString.length; i++){
		let curr = inputString[i];
		if(set.contains(curr)){
			return false;
		}
		set.add(curr);
	}
	return true;
}

function pangramSentence(inputString){ // O(n)
	const set = new Set();
	for(let i = 0; i < inputString.length; i++){
		let curr = inputString([i]);
		if((/[a-zA-Z]/).test(char)){
			set.add(curr);
		}
	}
	return set.size() == 26;
}

function longestWord(stringArr){ // O(n)
	let longestLen = 0;
	for(let i = 0; i < stringArr.length; i++){
		let curr = stringArr[i];
		longestLen = Math.max(longestLen,curr.length);
	}
	return longestLen;
}
function countBs(string, ch) {
	let characters = 0;
	for (i = 0; i < string.length; i++) {
		if (string[i] == ch) {
			characters++;
		}
	}
	return characters;
}

console.log(countBs("BuBBles", "B"));
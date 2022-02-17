function countBs(string) {
	let Bs = 0;
	for (i = 0; i < string.length; i++) {
		if (string[i] == "B") {
			Bs++;
		}
	}
	return Bs;
}

console.log(countBs("BuBBles"));
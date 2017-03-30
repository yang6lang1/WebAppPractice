var sum = function(numbers) {
	return (numbers || []).reduce(function(sum, num) {
		return sum += num;
	}, 0);
};

var numbers = process.argv.reduce(function(numberArray, argv) {
	if (!isNaN(parseInt(argv))) {
		numberArray.push(parseInt(argv));
	}
	return numberArray;
}, []);
console.log(sum(numbers));
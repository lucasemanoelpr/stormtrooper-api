const arraySum = (arr) => {
	return arr
		.filter(item => !isNaN(item))
		.reduce((a, b) => a + b);
};

const guid = () => {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const isBiggerThan = (arr, minValue) => arr.filter(item => item >= minValue);

export default {
	arraySum,
	guid,
	isBiggerThan
};

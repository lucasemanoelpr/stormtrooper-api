import createError from 'http-errors';

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

const handleNotFound = (result) => {
	if (!result) {
		throw createError(404, 'Trooper not found.');
	}
	return result;
};

const uuidv4RegexPattern = /^([a-z]|[A-Z]|[0-9]|[-]){36}$/;

export default {
	arraySum,
	guid,
	isBiggerThan,
	handleNotFound,
	uuidv4RegexPattern
};

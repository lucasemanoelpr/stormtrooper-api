import createError from 'http-errors';

const HandleNotFound = (result) => {
	if (!result) {
		throw createError(404, 'Trooper not found.');
	}
	return result;
};

export default HandleNotFound;
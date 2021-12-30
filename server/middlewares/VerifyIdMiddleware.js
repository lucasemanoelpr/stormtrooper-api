import createError from 'http-errors';
import util from '../utils/Util.js';

const { uuidv4RegexPattern } = util;

const VerifyIdMiddleware = (request, response, next) => {
	const id = request.params.id;
	
	if (!uuidv4RegexPattern.test(id)) {
		return next(createError(422, 'Invalid id. Must be a valid uuidv4'));
	}

	next();
};

export default VerifyIdMiddleware;
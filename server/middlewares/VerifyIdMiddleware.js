import createError from 'http-errors';

const VerifyIdMiddleware = (request, response, next) => {
	const id = request.params.id;

	if (!/^[1-9]\d*$/.test(id)) {
		return next(createError(422, 'Invalid id'));
	}

	next();
};

export default VerifyIdMiddleware;
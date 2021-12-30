import createError from 'http-errors';

const VerifyIdMiddleware = (request, response, next) => {
	const id = request.params.id;
	const regexExp = /^([a-z]|[A-Z]|[0-9]|[-]){36}$/;
	
	if (!regexExp.test(id)) {
		return next(createError(422, 'Invalid id'));
	}

	next();
};

export default VerifyIdMiddleware;
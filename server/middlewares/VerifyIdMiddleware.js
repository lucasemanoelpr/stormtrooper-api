import createError from 'http-errors';

const VerifyIdMiddleware = (req, res, next) => {
	const id = req.params.id;

	if (!/^[1-9]\d*$/.test(id)) {
		return next(createError(422, 'Invalid id'));
	}

	next();
};

export default VerifyIdMiddleware;
import createHttpError from 'http-errors';
import Validators from '../validators/index.js';
// import Joi from 'joi';
const ValidatorRequestMiddleware = (validator) => {

	return async function(request, response, next) {
		if (!Validators.hasOwnProperty(validator)) {
			throw new Error(`Validator ${validator} not found`);
		}

		try {
			const validated = await Validators[validator].validateAsync(request.body, { abortEarly: false });
			request.body = validated;
			next();
		} catch (error) {
			if (error.isJoi) {
				const messages = error.details.map(d => d.message).join(', ');
				return next(createHttpError(422, messages));
			}
			next(error);
		}
	};
};

export default ValidatorRequestMiddleware;

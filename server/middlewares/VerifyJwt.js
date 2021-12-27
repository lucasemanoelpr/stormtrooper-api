import createError from 'http-errors';
import jwt from 'jwt-simple';
import moment from 'moment';

const verifyJwt = (request, response, next) => {
	const bearerToken = request.headers['authorization'];
    
	if (!bearerToken) {
		return next(createError(401, 'Unauthorized'));
	}

	const token = bearerToken.split(' ')[1];

	try {
		const decoded = jwt.decode(token, process.env.JWT_SECRET);
		const isExpired = moment(decoded.exp).isBefore(new Date());

		if (isExpired) {
			return next(createError(401, 'Unauthorized'));
		}

		request.user = decoded.user;
		next();
	} catch (error) {
		error.status = 401;
		return next(error);
	}
};

export default verifyJwt;
import createError from 'http-errors';
import jwt from 'jwt-simple';
import moment from 'moment';
import userRepository from '../repositories/User.js';
import bcrypt from 'bcrypt';
import util from '../utils/Util.js';

const { handleNotFound } = util;

const Authentication = {
	async login(request, response, next) {
		const { email, password: requestPassword} = request.body;

		const user = await userRepository.findByEmail(email);
		handleNotFound(user);

		const authenticated = bcrypt.compareSync(requestPassword, user.password);

		if (!authenticated) {
			return next(createError(401, 'Unauthorized'));
		}

		const { password, ...userWithoutPassword } = user;

		const token = jwt.encode({
			user: userWithoutPassword,
			exp: moment().add(7, 'days').valueOf()
		}, process.env.JWT_SECRET);
		return response.json({ token });		
	}
};

export default Authentication;
import createError from 'http-errors';
import jwt from 'jwt-simple';
import moment from "moment";

const Authentication = {
    async login(request, response, next) {
        const { email, password } = request.body;
        if (email === 'admin@admin.com' && password === 'admin') {
            const token = jwt.encode({
                user: email,
                exp: moment().add(7, 'days').valueOf()
            }, process.env.JWT_SECRET);
            return response.json({ token });
        }
        next(createError(401, 'Unauthorized'));
    }
};

export default Authentication;
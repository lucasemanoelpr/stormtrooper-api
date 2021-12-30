import createHttpError from 'http-errors';
import sequelize from '../config/sequelize_mysql.js';

const VerifyIdExists = (table) => {
	return async function(request, response, next) {
		try {
			const result = await sequelize.query(`SELECT COUNT(*) AS count from ${table} where id = '${request.params.id}'`, { type: sequelize.QueryTypes.SELECT });
			if (result[0].count === 0) {
				return next(createHttpError(404, `Register not found for ${table} with id '${request.params.id}'`));
			}
		} catch (error) {
			return next(createHttpError(404, `Id not found in table ${table}`));
		}
		next();
	};
};

export default VerifyIdExists;
import model from '../models/User.js';

const User = {
	async list(q, page = 1) {
		page = parseInt(page - 1) * 3;
		const queryByName = q 
			? {
				where: {
					name: q
				}
			}
			: {};
		return await model.findAll({
			attributes: { exclude: ['password'] },
			limit: 3,
			offset: page,
			...queryByName
		});
	},
	async create({ name, email, password }) {
		return await model.create({ name, email, password });
	},
	async findById(id) {
		return await model.findByPk(id, {
			attributes: { exclude: ['password'] },
		});
	},
	async updateById(id, user) {
		return await model.update(user, {
			where: { id }
		});
	},
	async deleteById(id) {
		return await model.destroy( { where: { id } });
	},
	/** Only used to internal checks, because return the password */
	async findByEmail(email) {
		return await model.findOne( { where: { email } });		
	}
};

export default User;
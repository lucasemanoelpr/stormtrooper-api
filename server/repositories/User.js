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
			limit: 3,
			offset: page,
			...queryByName
		});
	},
	async create({ name, email }) {
		return await model.create({ name, email });
	},
	async findById(id) {
		return await model.findByPk(id);
	},
	async updateById(id, user) {
		return await model.update(user, {
			where: { id }
		});
	},
	async deleteById(id) {
		return await model.destroy( { where: { id } });
	},
};

export default User;
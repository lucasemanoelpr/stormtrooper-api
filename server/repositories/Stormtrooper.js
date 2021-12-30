import Division from '../models/Division.js';
import model from '../models/Stormtrooper.js';
import Patent from '../models/Patent.js';

const Stormtrooper = {
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
			include: [{
				model:Patent,
				attributes: ['id', 'name'],
			}],
			limit: 3, 
			offset: page,
			...queryByName });
	},
	async byId(id) {
		const stormtrooper = await model.findByPk(id);
		return stormtrooper;
	},
	async create({ name, nickname, id_patent, division_id }) {
		const newStormtrooper = await model.create( { name, nickname, id_patent } );
		const division = await Division.findByPk(division_id);
		await newStormtrooper.addDivision(division, { through: { selfGranted: false } });
		return newStormtrooper;
	},
	async updateById(id, trooper) {
		return await model.update(trooper, {
			where: { id	}
		});
	},
	async deleteById(id) {
		return await model.destroy({ where: { id } });
	}
};

export default Stormtrooper;
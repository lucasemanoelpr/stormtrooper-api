import repository from '../repositories/User.js';
import util from '../utils/Util.js';

const { handleNotFound } = util;

const User = {

	async list(request, response, next) {
		repository.list(request.params.q, request.params.page)
			.then(result => response.json(result))
			.catch(next);
	},
	async create(request, response, next) {
		repository.create(request.body)
			.then(result => response.status(201).json(result))
			.catch(next);
	},
	async findById(request, response, next) {
		repository.findById(request.params.id)
			.then(handleNotFound)
			.then(result => response.json(result))
			.then(next);
	},
	async updateById(request, response, next) {
		repository.updateById(request.params.id, request.body)
			.then(result => response.json(result))
			.then(next);
	},
	async deleteById(request, response, next) {
		repository.deleteById(request.params.id)
			.then(result => response.status(204).json(result))
			.catch(next);
	}
};

export default User;
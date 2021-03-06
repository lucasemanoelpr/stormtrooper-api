import repository from '../repositories/Stormtrooper.js';
import util from '../utils/Util.js';

const { handleNotFound } = util;

const Stormtrooper = {
	list (request, response, next) {
		const { q, page } = request.query;
		repository.list(q, page)
			.then(result => response.json(result))
			.catch(next);
	},
	byId (request, response, next) {
		repository.byId(request.params.id)
			.then(handleNotFound)
			.then(result => response.status(200).json(result))
			.catch(next);
	},
	create(request, response, next) {
		repository.create(request.body)
			.then(result => response.status(201).json(result))
			.catch(next);
	},
	updateById(request, response) {
		repository.updateById(request.params.id, request.body)
			.then(result => response.json(result));
	},
	deleteById(request, response) {
		repository.deleteById(request.params.id)
			.then(result => response.status(204).json(result));
	}
};

export default Stormtrooper;

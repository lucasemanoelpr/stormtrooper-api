import { getAsync } from '../config/redis.js';

const FromCacheByIdMiddleware = async (request, response, next) => {
	const base = request.baseUrl.replace('/', '');
	getAsync(`${base}:${request.params.id}`)
		.then(result => { 
			if (!result) { return next(); }
			response.send(JSON.parse(result));
		})
		.catch(() => next);
};

export default FromCacheByIdMiddleware;
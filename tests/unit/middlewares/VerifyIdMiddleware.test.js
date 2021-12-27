import VerifyIdMiddleware from '../../../server/middlewares/VerifyIdMiddleware.js';
import httpErrors from 'http-errors';

let request;
let response;
let next;

beforeEach(() => {
	request = {};
	response = {};
	next = () => {};
});

describe('#VerifiIdMiddleware', () => {
	it('invalid id', () => {
		next = (error) => {
			expect(error).toBeDefined();
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(httpErrors.HttpError);
			expect(error.message).toBe('Invalid id');
			expect(error.status).toBe(422);
			expect(error.stack).toBeDefined();
		};
		request.params = { id: '5ff' };
		VerifyIdMiddleware(request, response, next);
	});

	it('valid id', () => {
		next = (error) => {
			expect(error).toBeUndefined();
		}
		request.params = { id: 5 };
		VerifyIdMiddleware(request, response, next);
	});
});
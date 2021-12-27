import VerifyIdMiddleware from '../../../server/middlewares/VerifyIdMiddleware.js';

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
		request.params = { id: '5ff' };
		VerifyIdMiddleware(request, response, next);
	});

	it('valid id', () => {
		request.params = { id: 5 };
		VerifyIdMiddleware(request, response, next);
	});
});
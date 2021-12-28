import app from '../../server/app.js';
import request from 'supertest';

describe('main routes', () => {
	it('GET /', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		expect(response.text).toBe('Always pass on what you have learned.');
	});

	it('not found', async () => {
		const response = await request(app).get('/not-found');		
		const data = JSON.parse(response.text);
		expect(response.status).toBe(404);
		expect(data.error.message).toBe('Not Found');
	});
});

import app from '../../../server/app.js';
import request from 'supertest';
import Stormtrooper from '../../../server/repositories/Stormtrooper.js';

let id;
beforeEach(() => {
	return Stormtrooper.create({
		name: '00002CT-TEST',
		nickname: 'Aqua Dust TEST',
		id_patent: 2,
		division_id: 1,
	}).then(result => {
		id = result.id;
	});
});

afterEach(() => {
	return Stormtrooper.deleteById(id);
});

describe('stormtrooper controller', () => {
  it('GET /troopers', async () => {
		const response = await request(app).get('/troopers');
		expect(response.status).toBe(200);
		expect(response.body[0]).toHaveProperty('id');
		expect(response.body[0]).toHaveProperty('name');
		expect(response.body[0]).toHaveProperty('nickname');
		expect(response.body[0]).toHaveProperty('id_patent');
		expect(response.body[0]).toHaveProperty('Patent');
		expect(response.body[0]).toHaveProperty('Patent.name');
	});
  
	it('GET /troopers/:id', async () => {
		const response = await request(app).get(`/troopers/${id}`);
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('name');
		expect(response.body).toHaveProperty('nickname');
		expect(response.body.name).toBe('00002CT-TEST');
		expect(response.body.nickname).toBe('Aqua Dust TEST');
  });

  it('POST /troopers', async () => {
		const response = await request(app).post('/troopers').send({
			name: '00003CT-TEST',
			nickname: 'Aqua Dust TEST',
			id_patent: 1,
			division_id: 1,			
		});
		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('name');
		expect(response.body).toHaveProperty('nickname');
		expect(response.body.name).toBe('00003CT-TEST');
  });

  it('PUT /troopers/:id', async () => {
		const response = await request(app).put(`/troopers/${id}`).send({
			name: '00004CT-TEST',
		});
		expect(response.status).toBe(200);
	});

  it('DELETE /troopers/:id', async () => {
		const response = await request(app).delete(`/troopers/${id}`);
		expect(response.status).toBe(204);
  });
});
import { response, Router } from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mysql from '../config/sequelize_mysql.js';

const checkRoutes = Router();

checkRoutes.get('/version', async (request, response) => {
	const packageJsonPath = path.join(dirname(fileURLToPath(import.meta.url)), '../../package.json');
	const str = await fs.readFileSync(packageJsonPath);
	const packageJson = JSON.parse(str.toString());
	response.json({
		applicationName: packageJson.name,
		versionRelease: packageJson.version,
		uptime: process.uptime(),
		nodeVersion: process.version
	});
});

checkRoutes.get('/status', (request, response) => response.send('PONG'));

checkRoutes.get('/status/complete', async (request, response) => {
	const checks = [await mysql.check()];
	const ret = {
		ok: checks.every(item => item.ok),
		checks
	};
	response.json(ret);
});

export default checkRoutes;

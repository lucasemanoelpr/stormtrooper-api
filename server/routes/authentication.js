import { Router } from 'express';
import controller from '../controllers/Authentication.js';

const authenticationRoutes = new Router();

authenticationRoutes.post('/login', controller.login);

export default authenticationRoutes;
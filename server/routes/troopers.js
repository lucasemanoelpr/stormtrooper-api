import { Router } from 'express';
import controller from '../controllers/Stormtrooper.js';
import VerifyIdMiddleware from '../middlewares/VerifyIdMiddleware.js';

const trooperRoutes = new Router();

trooperRoutes.get('/', controller.list);
trooperRoutes.get('/:id', VerifyIdMiddleware, controller.byId);
trooperRoutes.post('/', controller.create);
trooperRoutes.put('/:id', VerifyIdMiddleware, controller.updateById);
trooperRoutes.delete('/:id', VerifyIdMiddleware, controller.deleteById);

export default trooperRoutes;

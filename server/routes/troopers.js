import { Router } from 'express';
import controller from '../controllers/Stormtrooper.js';
import ValidatorRequestMiddleware from '../middlewares/ValidatorRequestMiddleware.js';
import VerifyIdMiddleware from '../middlewares/VerifyIdMiddleware.js';

const trooperRoutes = new Router();

trooperRoutes.get('/', controller.list);
trooperRoutes.get('/:id', VerifyIdMiddleware, controller.byId);
trooperRoutes.post('/', ValidatorRequestMiddleware('CreateStormtrooperSchema'), controller.create);
trooperRoutes.put('/:id', VerifyIdMiddleware, ValidatorRequestMiddleware('UpdateStormtrooperSchema'), controller.updateById);
trooperRoutes.delete('/:id', VerifyIdMiddleware, controller.deleteById);

export default trooperRoutes;

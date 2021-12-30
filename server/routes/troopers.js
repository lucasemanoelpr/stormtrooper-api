import { Router } from 'express';
import controller from '../controllers/Stormtrooper.js';
import ValidatorRequestMiddleware from '../middlewares/ValidatorRequestMiddleware.js';
import VerifyIdExists from '../middlewares/VerifyIdExists.js';
import VerifyIdMiddleware from '../middlewares/VerifyIdMiddleware.js';

const trooperRoutes = new Router();

trooperRoutes.get('/', controller.list);
trooperRoutes.get('/:id', VerifyIdMiddleware, VerifyIdExists('stormtroopers'), controller.byId);
trooperRoutes.post('/', ValidatorRequestMiddleware('CreateStormtrooperSchema'), controller.create);
trooperRoutes.put('/:id', VerifyIdMiddleware, VerifyIdExists('stormtroopers'), ValidatorRequestMiddleware('UpdateStormtrooperSchema'), controller.updateById);
trooperRoutes.delete('/:id', VerifyIdMiddleware, VerifyIdExists('stormtroopers'), controller.deleteById);

export default trooperRoutes;

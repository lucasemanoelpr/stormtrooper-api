import { Router } from 'express';
import controller from '../controllers/Stormtrooper.js';
import ValidatorRequestMiddleware from '../middlewares/ValidatorRequestMiddleware.js';
import VerifyIdExists from '../middlewares/VerifyIdExists.js';
import VerifyIdMiddleware from '../middlewares/VerifyIdMiddleware.js';

const trooperRoutes = new Router();

trooperRoutes.get('/', controller.list);
trooperRoutes.post('/', ValidatorRequestMiddleware('CreateStormtrooperSchema'), controller.create);
/** Group routes :id with Middlwares  */
trooperRoutes.use('/:id', [ VerifyIdMiddleware, VerifyIdExists('stormtroopers') ]);
/** */
trooperRoutes.get('/:id', controller.byId);
trooperRoutes.put('/:id', ValidatorRequestMiddleware('UpdateStormtrooperSchema'), controller.updateById);
trooperRoutes.delete('/:id', controller.deleteById);

export default trooperRoutes;

import { Router } from 'express';
import controller from '../controllers/User.js';
import VerifyIdMiddleware from '../middlewares/VerifyIdMiddleware.js';
import VerifyIdExists from '../middlewares/VerifyIdExists.js';

const userRoutes = new Router();

userRoutes.get('/', controller.list);
userRoutes.post('/', controller.create);

userRoutes.use('/:id', [VerifyIdMiddleware, VerifyIdExists('users')]);

userRoutes.get('/:id', controller.findById);
userRoutes.put('/:id', controller.updateById);
userRoutes.delete('/:id', controller.deleteById);

export default userRoutes;
import { Router } from 'express';
import trooperRoutes from './troopers.js';
import userRoutes from './user.js';
import checkRoutes from './check.js';
import authenticationRoutes from './authentication.js';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import verifyJwt from '../middlewares/VerifyJwt.js';

const routes = Router();

routes.use(passport.initialize());
passport.use(
	new BasicStrategy((username, password, done) => {
		if (username === 'admin' && password === 'admin') {
			return done(null, { name: 'admin' });
		}
		return done(null, false);
	})
);

// routes.use("/troopers", passport.authenticate('basic', { session: false }), trooperRoutes);
routes.use('/users', userRoutes);
routes.use('/troopers', verifyJwt, trooperRoutes);
routes.use('/auth', authenticationRoutes);
routes.use('/checks', checkRoutes);

export default routes;

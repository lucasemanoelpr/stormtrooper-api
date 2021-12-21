import { Router } from "express";
import trooperRoutes from "./troopers.js";
import passport from "passport";
import { BasicStrategy } from "passport-http";

const routes = Router();

routes.use(passport.initialize());
passport.use(
    new BasicStrategy((username, password, done) => {
        if (username === "admin" && password === "admin") {
            return done(null, { name: "admin" });
        }
        return done(null, false);
    })
);

routes.get('/favicon.ico', (request, response, next) => {    
    response.writeHead(200, { 'Content-Type': 'image/x-icon' });
    response.end(); 
});
routes.use("/troopers", passport.authenticate('basic', { session: false }), trooperRoutes);

export default routes;
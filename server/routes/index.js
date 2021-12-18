import { Router } from "express";
import trooperRoutes from "./troopers.js";

const routes = Router();

routes.use("/troopers", trooperRoutes);

routes.get('/favicon.ico', (request, response, next) => {    
    response.writeHead(200, { 'Content-Type': 'image/x-icon' });
    response.end(); 
});

export default routes;
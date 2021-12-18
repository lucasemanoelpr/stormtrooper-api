import { Router } from "express";

const routes = Router();

routes.get('/favicon.ico', (request, response, next) => {    
    response.writeHead(200, { 'Content-Type': 'image/x-icon' });
    response.end(); 
});

export default routes;
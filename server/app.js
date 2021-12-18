import express from "express";
import routes from "./routes/index.js";
import Home from "./controllers/Home.js";
import NotFoundMiddleware from "./middlewares/NotFoundMiddleware.js";
import HandleErrorMidleware from "./middlewares/HandleErrorMiddleware.js";
/**
 * Configuração do App
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**
 * Rotas
 */
app.get('/', Home.index);
app.use(routes);
/**
 * Tratamento de erros
 */
app.use(NotFoundMiddleware);
app.use(HandleErrorMidleware);

export default app;

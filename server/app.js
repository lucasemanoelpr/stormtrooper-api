import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import NotFoundMiddleware from './middlewares/NotFoundMiddleware.js';
import HandleErrorMidleware from './middlewares/HandleErrorMiddleware.js';
import nunjucks from 'nunjucks';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '../');

process.env.NODE_ENV = process.env.NODE_ENV || '';
const envFile = path.resolve(__dirname, `${process.env.NODE_ENV}.env.test`);
dotenv.config({ path: envFile });
/**
 * Configuração do App
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
nunjucks.configure('views', {
	autoescape: true,
	express: app,
	tags: '',
});

app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

/**
 * Rotas
 */
app.get('/', (request, response) => {
	response.send('Always pass on what you have learned.');
});

app.get('/movies', (request, response) => {

	const movies = [
		{ name: 'Episode I: The Phantom Menace', release: 1999 },
		{ name: 'Episode II: Attack of the Clones', release: 2002 },
		{ name: 'Episode III: Revenge of the Sith', release: 2005 },
		{ name: 'Episode IV: A New Hope', release: 1977 },	
		{ name: 'Episode V: The Empire Strikes Back', release: 1980 },
		{ name: 'Episode VI: Return of the Jedi', release: 1983 },
		{ name: 'Episode VII: The Force Awakens', release: 2015 },
		{ name: 'Episode VIII: The Last Jedi', release: 2017 },
		{ name: 'Episode IX: The Rise of Skywalker', release: 2019 },
		{ name: 'Episode X: The Force Awakens', release: 2020 },
		{ name: 'Episode XI: The Last Jedi', release: 2021 },        
	];

	response.render('movies', {
		title: 'movies',
		movies
	});
});

app.use(routes);
/**
 * Tratamento de erros
 */
app.use(NotFoundMiddleware);
app.use(HandleErrorMidleware);

export default app;

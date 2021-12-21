import debug from 'debug';
import mongoist from 'mongoist';

const log = debug('stormtrooper_api:config:mongoist');
const db = mongoist(process.env.MONGO_URI);
console.log(db)
db.on('error', (error) => log('Mongo error: ', error));
export default db;

import db from '../config/mongoist';

const Stormtrooper = {
    list() {
        const query = {};
        return db.stormtroopers.find(query);
    }
}

export default Stormtrooper;
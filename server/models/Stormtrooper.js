import _sequelize from 'sequelize';
import Patent from './Patent.js';
import sequelize from '../config/sequelize_mysql.js';
import Stormtrooper_Division from './Stormtrooper_Division.js';
import Division from './Division.js';
import { v4 as uuidv4 } from 'uuid';

const { DataTypes, Model } = _sequelize;

class Stormtrooper extends Model { }

Stormtrooper.init({
	id: {
		type: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
		defaultValue: () => uuidv4()
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	nickname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	id_patent: {
		type: DataTypes.UUIDV4,
		references: {
			model: Patent,
			key: 'id',
		}
	}
}, {
	sequelize,
	modelName: 'Stormtrooper',
});

Stormtrooper.belongsToMany(Division, { 
	through: Stormtrooper_Division,
	foreignKey: 'id_stormtrooper',
	otherKey: 'id_division',
});

Stormtrooper.belongsTo(Patent, {
	foreignKey: {
		name: 'id_patent',
	}
});

export default Stormtrooper;
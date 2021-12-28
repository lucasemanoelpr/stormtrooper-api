import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';

const { DataTypes, Model } = _sequelize;

class Stormtrooper_Division extends Model { }

Stormtrooper_Division.init({
	id_stormtrooper: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_division: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
}, {
	sequelize,
	modelName: 'Stormtrooper_Division',
	timestamps: false,
	tableName: 'stormtrooper_division',
});

export default Stormtrooper_Division;
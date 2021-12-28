import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';

const { DataTypes, Model } = _sequelize;

class Division extends Model { }

Division.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	sequelize,
	modelName: 'Division',
	timestamps: false,
});

export default Division;
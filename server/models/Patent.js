import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';

const { DataTypes, Model } = _sequelize;

class Patent extends Model { }

Patent.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	sequelize,
	modelName: 'Patent',
	timestamps: false,
});

export default Patent;
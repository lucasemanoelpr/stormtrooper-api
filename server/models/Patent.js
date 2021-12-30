import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';
import { v4 as uuidv4 } from 'uuid';
const { DataTypes, Model } = _sequelize;

class Patent extends Model {}

Patent.init({
	id: {
		type: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
		defaultValue: () => uuidv4()
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {
	sequelize,
	modelName: 'Patent',
	timestamps: false,
});

export default Patent;
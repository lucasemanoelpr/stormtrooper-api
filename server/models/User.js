import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';
import { v4 as uuidv4 } from 'uuid';

const { DataTypes, Model } = _sequelize;

class User extends Model { }

User.init({
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
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
}, {
	sequelize,
	modelName: 'User'
});

export default User;
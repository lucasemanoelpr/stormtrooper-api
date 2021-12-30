import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

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
	password: {
		type: DataTypes.STRING,
		allowNull: false
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

User.addHook('beforeCreate', (user, options) => {
	const salt = 10;
	user.password = bcrypt.hashSync(user.password, salt);
});

export default User;
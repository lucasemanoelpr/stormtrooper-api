import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';
import { v4 as uuidv4 } from 'uuid';

const { DataTypes, Model } = _sequelize;

class Division extends Model {
	constructor() {
		super();
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

Division.init({
	id: {
		type: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
	updatedAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
}, {
	sequelize,
	modelName: 'Division',
	timestamps: true
});

export default Division;
import _sequelize from 'sequelize';
import sequelize from '../config/sequelize_mysql.js';
import { v4 as uuidv4 } from 'uuid';
const { DataTypes, Model } = _sequelize;

class Patent extends Model {
	constructor() {
		super();
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

Patent.init({
	id: {
		type: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
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
	modelName: 'Patent',
	timestamps: true,
});

export default Patent;
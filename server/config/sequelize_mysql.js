import Sequelize from 'sequelize';

const model = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
	host: process.env.MYSQL_HOST,
	dialect: 'mysql',
});

model.check = async () => {
	try {
		await model.authenticate();
		return { 
			name: 'Mysql/Sequelize',
			ok: true,
			message: 'Connection has been established successfully.'
		};
	} catch (error) {
		return { 
			name: 'Mysql/Sequelize',
			ok: false,
			message: error.message
		};
	}
};

export default model;
const { v4: uuidv4 } = require('uuid');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const patents = [];
		const patentsName = ['Soldier', 'Commander', 'Captain', 'Lieutenant', 'Sergeant'];
		patentsName.map((name) => patents.push({ id: uuidv4(), name	}));		
		return await queryInterface.bulkInsert('patents', patents);
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkDelete('patents', null, {});
	}
};

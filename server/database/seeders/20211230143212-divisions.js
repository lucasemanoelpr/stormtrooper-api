const { v4: uuidv4 } = require('uuid');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const divisions = [];
		const divisionsName = ['Breakout Squad', '501st Legion', '35th Infatry', '212th Attack Battalion', 'Squad Seven', '44th Special Operations Division','Lightning Squadron','Coruscant Guard'];
		divisionsName.map((name) => divisions.push({ id: uuidv4(), name	}));		
		return await queryInterface.bulkInsert('divisions', divisions);
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkDelete('divisions', null, {});
	}
};

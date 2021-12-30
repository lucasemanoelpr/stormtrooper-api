'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('stormtrooper_division', {
      id_stormtrooper: {
				type: Sequelize.STRING(36),
				references: {
					model: { 
						tableName: 'stormtroopers',
					},
					key: 'id'
				},
				allowNull: false
			},
      id_division: {
				type: Sequelize.STRING(36),
				references: {
					model: { 
						tableName: 'divisions',
					},
					key: 'id'
				},
				allowNull: false
			}
  });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('stormtrooper_division');
  }
};

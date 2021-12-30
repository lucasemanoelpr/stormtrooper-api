'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable('stormtroopers', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING(36)
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			nickname: {
				type: Sequelize.STRING,
				allowNull: false
			},
			id_patent: {
				type: Sequelize.STRING(36),
				references: {
					model: { 
						tableName: 'patents',
					},
					key: 'id'
				},
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		return await queryInterface.dropTable('stormtroopers');
	}
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('fields', [
      { label: 'Name', key: 'name', category: 'Department Info', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'API key', key: 'apiKey', category: 'Department Info', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'Name', key: 'name', category: 'Department Contact Person', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'Email', key: 'email', category: 'Department Contact Person', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'Telephone', key: 'telephone', category: 'Department Contact Person', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('fields', null, {});
  }
};

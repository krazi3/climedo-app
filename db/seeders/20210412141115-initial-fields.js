'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('fields', [
      { label: 'Name', key: 'name', category: 'main', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'API key', key: 'apiKey', category: 'main', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'Name', key: 'name', category: 'contact', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'Email', key: 'email', category: 'contact', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { label: 'Telephone', key: 'telephone', category: 'contact', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('fields', null, {});
  }
};

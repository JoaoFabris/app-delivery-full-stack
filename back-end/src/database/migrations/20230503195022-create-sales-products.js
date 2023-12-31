'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER,
        field: 'sale_id',
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        }
      },

      productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        },
      },

      quantity: {
        type: Sequelize.INTEGER,
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { allowNull: false, type: Sequelize.STRING(255) },

      email: { allowNull: false, type: Sequelize.STRING(255) },

      password: { allowNull: false, type: Sequelize.STRING(255) },

      role: { allowNull: false, type: Sequelize.STRING(255), defaultValue: 'customer' },

    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  },
};

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "items",
      {
        id: {
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        category_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        status: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.BIGINT.UNSIGNED,
        },
      },
      {
        timestamps: false
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("items");
  },
};

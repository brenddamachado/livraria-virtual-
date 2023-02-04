'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    });
    await queryInterface.createTable ( 'livros', {
      id:{
          type:Sequelize.INTEGER,
          allowNull:false,
          primaryKey: true,
          autoIncrement:true
      },
      titulo:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      ano: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      genero: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      nota: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
  })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

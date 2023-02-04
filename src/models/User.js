const Sequelize = require('sequelize');
const db = require ('../../db/db');

module.exports = db.define('User', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
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
    }
})
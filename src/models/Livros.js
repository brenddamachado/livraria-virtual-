const Sequelize = require('sequelize');
const db2 = require ('../../db/db');

module.exports = db2.define ( 'Livro',{
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
    }
})


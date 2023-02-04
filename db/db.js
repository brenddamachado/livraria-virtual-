const Sequelize = require('sequelize');
const db =new Sequelize('modulo5', 'root', '', {
    host:'localhost',
    dialect: "mysql"
});


db.sync();
module.exports = db;
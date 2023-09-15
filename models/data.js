const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const data = sequelize.define('data',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = data;
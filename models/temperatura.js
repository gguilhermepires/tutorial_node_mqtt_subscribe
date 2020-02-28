const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Temperatura= sequelize.define('temperatura', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  menssagem: Sequelize.STRING
});

module.exports = Temperatura;

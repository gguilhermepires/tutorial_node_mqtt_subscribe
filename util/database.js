const Sequelize = require('sequelize');
//banco,usuario, senha
const sequelize = new Sequelize('projeto_MSPIOT', 'root', '', {
  dialect: 'mysql',
  host: '127.0.0.1',
  dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: '-03:00'
  
});

module.exports = sequelize;

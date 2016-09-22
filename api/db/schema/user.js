const Sequelize = require('sequelize');

module.exports = sequelize =>
  sequelize.define('user', {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

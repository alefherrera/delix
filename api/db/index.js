const Sequelize = require('sequelize');
const sequelize = new Sequelize(require('../config').connection, {});
const Schemas = require('./schema')(sequelize);

const init = () => {
  sequelize
    .authenticate()
    .then(function(err) {
      console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
};
sequelize.sync();

// Schemas.User.create({ email: 'aa@gmail.com', password: 'secreto'});

module.exports = {
  init,
  Schemas
};

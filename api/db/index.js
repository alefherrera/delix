const Sequelize = require('sequelize');
const sequelize = new Sequelize(require('../config').connection, {});
const Models = require('./models')(sequelize, Sequelize);

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

require('./defaults')(Models);

// Schemas.User.create({ email: 'aa@gmail.com', password: 'secreto'});

module.exports = {
  init,
  Models
};

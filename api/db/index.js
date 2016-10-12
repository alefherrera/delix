const Sequelize = require('sequelize');
const sequelize = new Sequelize(require('../config').connection, {});
const Models = require('./models')(sequelize, Sequelize);
require('./relations')(Models);

const init = () => {
    sequelize
        .authenticate()
        .then(function() {
            console.log('Connection has been established successfully.');
        })
        .catch(function(err) {
            console.log('Unable to connect to the database:', err);
        });
};

const sync = sequelize.sync();

const mock = () => {
  sync.then(() => require('./defaults')(Models));
}




// Schemas.User.create({ email: 'aa@gmail.com', password: 'secreto'});

module.exports = {
    init,
    mock,
    Models
};

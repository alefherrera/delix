const util = require('./util');
const { grupoDeMesas } = require('../db').Models;
module.exports = router => {
  util.abml(router, 'sectores', [grupoDeMesas]);
};

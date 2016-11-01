const util = require('./util');
const { pagoTipos } = require('../db').Models;

module.exports = router => {
  util.abml(router, 'pagos', [pagoTipos]);
};

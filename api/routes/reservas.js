const util = require('./util');
const { grupoDeMesas, sectores, franjas } = require('../db').Models;

module.exports = router => {
  util.abml(router, 'reservas', [grupoDeMesas, franjas]);

  router.get('/reservas_mesas', (req, res) => {
    grupoDeMesas.findAll({
      include: {
        model: sectores,
        where: {
          esPrivado: true,
        }
      }
    }).then(result => res.json(result));
  });

};

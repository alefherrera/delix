const { grupoDeMesas } = require('../db').Models;
module.exports = router => {

  router.get('/grupos_mesas', (request, response) => {
    grupoDeMesas.findAll().then(queryResults => response.json(queryResults));
  });

};

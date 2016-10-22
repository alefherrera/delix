const { grupoDeMesas, grupoDeMesasEstado, pedidos } = require('../db').Models;
module.exports = router => {

  router.get('/grupos_mesas', (request, response) => {
    grupoDeMesas.findAll({ include: [grupoDeMesasEstado]}).then(queryResults => response.json(queryResults));
  });

  router.get('/grupos_mesas/:id', (req, res) => {
    grupoDeMesas.findById(req.params.id, { include: [{
      model: pedidos,
      where: {
        pedidoEstadoId: 1
      },
      required: false,
    }]}).then(result => res.json(result));
  })

  router.post('/grupos_mesas', (req, res) => {
    const obj = req.body;
    const callback = r => res.json(r);
    if (!obj.id) {
        grupoDeMesas.create(obj).then(r => callback(r));
    } else {
        grupoDeMesas.findById(obj.id).then(grupo => {
          return grupo.updateAttributes(obj);
        }).then(r => callback(r));
    }
  });

};

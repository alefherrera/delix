const { Models } = require('../db');
module.exports = router => {
  router.post('/comandas', (req, res) => {
    const comanda = req.body;
    Models.comandas.create(comanda).then(r => {
      debugger;
      if (comanda.productos_id) {
        return Models.productosPorComandas.create({
          comandas_id: r.id,
          productos_id: comanda.productos_id,
        }).then(r => res.json(r));
      }
      else if (comanda.promos_id) {
        return Models.promosPorComandas.create({
          comandas_id: r.id,
          promos_id: comanda.promos_id,
        }).then(r => res.json(r));
      }
      else if (comanda.platos_id) {
        return Models.platosPorComandas.create({
          comandas_id: r.id,
          platos_id: comanda.platos_id,
        }).then(r => res.json(r));
      }
    });
  });
}

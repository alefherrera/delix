const { Models } = require('../db');
module.exports = router => {
  router.post('/comandas', (req, res) => {
    const comanda = req.body;
    Models.comandas.create(comanda).then(r => {
      if (comanda.productos_id) {
        return Models.productosPorComandas.create({
          comandas_id: r.id,
          productos_id: comanda.productos_id,
        }).then(r => res.json());
      }
    });
  });
}

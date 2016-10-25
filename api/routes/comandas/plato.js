module.exports = (router, Models, io) => {
  router.post('/comandas/plato/delete', (req, res) => {
    const filter = req.body;
    Models.comandas.findAll({
      where: {
        pedidoId: filter.pedidoId,
      },
      include: [{
        model: Models.platos,
        where: {
          id: filter.id,
        }
      }]
    })
    .then(comandas =>
      Promise.all(comandas.map(comanda => comanda.destroy()))
    )
    .then(result => {
      result.forEach(r => {
        io.emit('delete:command', r);
      });
      res.json(filter);
    });
  });

  router.post('/comandas/plato/status', (req, res) => {
    const filter = req.body;
    Models.comandas.findAll({
      where: {
        pedidoId: filter.pedidoId,
      },
      include: [{
        model: Models.platos,
        where: {
          id: filter.id,
        }
      }]
    })
    .then(comandas =>
      Promise.all(comandas.map(comanda => comanda.update({ comandaEstadoId: Math.min(filter.estado, 2) + 1 })))
    )
    .then(result => {
      result.forEach(r => {
        io.emit('delete:command', r);
      });
      res.json(result);
    });
  });
}

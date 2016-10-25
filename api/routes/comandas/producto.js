module.exports = (router, Models, io) => {
  router.post('/comandas/producto/delete', (req, res) => {
    const filter = req.body;
    Models.comandas.findAll({
      where: {
        pedidoId: filter.pedidoId,
      },
      include: [{
        model: Models.productos,
        where: {
          id: filter.id,
        }
      }]
    })
    .then(comandas =>
      Promise.all(comandas.map(comanda => comanda.destroy()))
    )
    .then(() => res.json(filter));
  });

  router.post('/comandas/producto/status', (req, res) => {
    const filter = req.body;
    Models.comandas.findAll({
      where: {
        pedidoId: filter.pedidoId,
      },
      include: [{
        model: Models.productos,
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

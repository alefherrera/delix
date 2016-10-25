const { Models } = require('../../db');

module.exports = (router, io) => {
  require('./promo')(router, Models, io);
  require('./producto')(router, Models, io);
  require('./plato')(router, Models, io);
  const postParam = {
      include: [
          {
              model: Models.usuarios
          }, {
              model: Models.grupoDeMesas
          }, {
              model: Models.pedidoEstado
          }, {
              model: Models.comandas,
              include: [
                  {
                      model: Models.productos
                  }, {
                      model: Models.platos
                  }, {
                      model: Models.promos
                  }
              ],
          }
      ],
      order: 'updatedAt'
  };

  const getParam = {
      include: [
          {
              model: Models.usuarios
          }, {
              model: Models.grupoDeMesas
          }, {
              model: Models.pedidoEstado
          }, {
              model: Models.comandas,
              include: [
                  {
                      model: Models.productos,
                      where: {
                        esFinal: false,
                      },
                      required: false,
                  }, {
                      model: Models.platos
                  }, {
                      model: Models.promos
                  }
              ],
              where: {
                comandaEstadoId: 1,
              },
          }
      ],
      order: 'updatedAt'
  };

    router.post('/comandas', (req, res) => {
      const comanda = req.body;

      const expand = array => {
        const ret = [];
        array.forEach(item => {
          for (var i = 0; i < item.cant; i++) {
            ret.push(item.id);
          }
        });
        return ret;
      };

      Promise.all(
        [Promise.all(
          expand(comanda.platos).map(plato =>
            Models.comandas.create(comanda).then(newComanda =>
              newComanda.addPlato(plato)
            )
          )
        ),
        Promise.all(
          expand(comanda.productos).map(producto =>
            Models.comandas.create(comanda).then(newComanda =>
              newComanda.addProducto(producto)
            )
          )
        ),
        Promise.all(
          expand(comanda.promos).map(promo =>
            Models.comandas.create(comanda).then(newComanda =>
              newComanda.addPromo(promo)
            )
          )
        )]
      ).then(() =>
        Models.pedidos.findById(comanda.pedidoId, postParam)
      ).then(pedido => {
        Models.pedidos.findById(pedido.id, Object.assign(getParam, { where: { pedidoEstadoId: 1 } })).then(result => {
          io.emit('add', result);
        });
        res.json(pedido);
      })
    });

    router.get('/comandas', (req, res) => {
      Models.pedidos.findAll(Object.assign(getParam, { where: { pedidoEstadoId: 1 } })).then(result => res.json(result));
    });

    router.post('/comandas/promo/status', (req, res) => {
      Models.comandas.findAll().then(r => res.json(r));
    });

};

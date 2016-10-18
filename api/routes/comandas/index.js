const { Models } = require('../../db');

module.exports = (router, io) => {

    const searchParam = {
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
                ]
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
        Models.pedidos.findById(comanda.pedidoId, searchParam)
      ).then(pedido => {
        io.emit('add', pedido);
        res.json(pedido);
      })
    });

    router.get('/comandas', (req, res) => {
      Models.pedidos.findAll(Object.assign(searchParam, { where: { pedidoEstadoId: 1 } })).then(result => res.json(result));
    });

};

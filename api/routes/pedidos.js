const util = require('./util');
const {Models} = require('../db');
const _ = require('lodash');

const searchParam = () => (
  {
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
});

const generateOrderLines = itemArray => {
    return _(itemArray)
      .groupBy('id')
      .map(function(grouped) {
        let result = {};
        result.precioTotal = 0;
        grouped.forEach(prod => result.precioTotal += prod.precio);
        result.cantidad = grouped.length;
        result.precio = grouped[0].precio;
        result.id = grouped[0].id;
        result.descripcion = grouped[0].descripcion || grouped[0].nombre;
        return result;
    }).valueOf();
};

const summarizeOrder = order => {
  const prodsArray = [];
  const platoArray = [];
  const promoArray = [];

  if (!order.comandas) {
    return order;
  }

  order = order.toJSON();

  order.comandas.forEach(current => {
    if (current.productos)
      current.productos.forEach(prod => prodsArray.push(prod));
    if (current.platos)
      current.platos.forEach(plato => platoArray.push(plato));
    if (current.promos)
      current.promos.forEach(promo => promoArray.push(promo));
  });

  order.orderLines = _.concat(generateOrderLines(prodsArray), generateOrderLines(platoArray), generateOrderLines(promoArray));

  order.total = require('lodash').reduce(order.orderLines,(p, c) => {
    return p + c.precioTotal;
  }, 0);

  return order;
};

module.exports = (router, io) => {
    //util.abml(router, 'pedidos');

    router.get('/pedidos', (req, res) => {
        const {pedidoEstadoId} = req.query;
        let param = searchParam();
        if (pedidoEstadoId) {
            param.where = {
                pedidoEstadoId
            };
        }

        Models.pedidos.findAll(param).then(result => {
            res.json(result);
        });
    });

    router.get('/pedidos/:id', (req, res) => {
        Models.pedidos.findById(req.params.id, searchParam()).then(r => res.json(r));
    });

    router.post('/pedidos', (req, res) => {

        if (!req.body.grupoDeMesasId) {
            res.status(500).send('Falta grupoDeMesasId para crear/buscar un pedido.');
        }

        const param = searchParam();
        param.where = {
            grupoDeMesasId: req.body.grupoDeMesasId,
            pedidoEstadoId: 1
        };

        Models.pedidos.findOne(param).then(function finishFind(result) {
            if (result) {
                //hay un pedido abierto para esta mesa
                res.json(result);
            } else {
                if (!req.body.usuarioId)
                    res.status(500).send('Falta usuarioId para crear un pedido.');

                Models.pedidos.create(req.body).then(function createPedidoCallback(result) {
                    Models.pedidos.findById(result.id, searchParam)
                      .then(function finishFind(result) {
                        res.json(result);
                    });
                }).catch(function createError(err) {
                    util.errorHandler(res, err);
                });
            }
        });
    });

    router.put('/pedidos/:pedidoId', (req, res) => {
        Models.pedidos.findById(req.params.pedidoId).then(function finishFind(pedido) {
            if (!pedido) {
              res.status(404).send();
            }
            pedido.update(req.body).then(newPedido => {
              if (newPedido.pedidoEstadoId === 2)
              {
                io.emit('delete', newPedido);
              }
              res.json(newPedido);
            });

        }).catch(function errorHandler(err) {
            util.errorHandler(res, err);
        });
    });

    router.put('/pedidos/:pedidoId/comandas/:comandaId', (req, res) => {
        Models.comandas.findOne({pedidoId: req.params.pedidoId, id: req.params.comandaId})
        .then(function finishFind(comanda) {
            if (!comanda) {
                res.status(404).send();
            }
            comanda.update(req.body).then(newComanda => res.json(newComanda));

        }).catch(function errorHandler(err) {
            util.errorHandler(res, err);
        });
    });


    router.get('/ticket_pedido/', (req, res) => {
        let param = searchParam();
        param.where = {pedidoEstadoId: 2};

        Models.pedidos.findAll(param).then(result => {
            res.json(result.map((pedido) => summarizeOrder(pedido)));
        });
    });


    router.get('/ticket_pedido/:id', (req, res) => {
        let param = searchParam();
        param.where = {pedidoEstadoId: 2, id: req.params.id};

        Models.pedidos.findOne(param).then(pedido => {
          if (!pedido) {
              res.status(404).send();
          }
          res.json(summarizeOrder(pedido));
        });
    });


};

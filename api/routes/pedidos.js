const util = require('./util');
const {Models} = require('../db');

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

module.exports = router => {
    //util.abml(router, 'pedidos');

    router.get('/pedidos', (req, res) => {
        const {pedidoEstadoId} = req.query;
        if (pedidoEstadoId) {
            searchParam.where = {
                pedidoEstadoId
            };
        }

        Models.pedidos.findAll(searchParam).then(result => {
            // const resultArray = [];
            // for (let order of result) {
            //     if (order.comandas && order.comandas.length > 0) {
            //         resultArray.push(order);
            //     }
            // }

            res.json(result);
        });
    });

    router.get('/pedidos/:id', (req, res) => {
        Models.pedidos.findById(req.params.id, searchParam).then(r => res.json(r));
    });

    router.post('/pedidos', (req, res) => {

        if (!req.body.grupoDeMesasId) {
            res.status(500).send('Falta grupoDeMesasId para crear/buscar un pedido.');
        }

        const param = searchParam;
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
                    Models.pedidos.findById(result.id, searchParam).then(function finishFind(result) {
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
            pedido.update(req.body).then(newPedido => res.json(newPedido));

        });
    });

    router.put('/pedidos/:pedidoId/comandas/:comandaId/estado/:comandaEstadoId', (req, res) => {
        Models.comandas.findOne({pedidoId: req.params.pedidoId, id: req.params.comandaId})
        .then(function finishFind(comanda) {

            if (!comanda) {
                res.status(404).send('No se encontro la comanda.');
            }

            comanda.comandaEstadoId = req.params.comandaEstadoId;
            comanda.save().then(() => res.status(200).send());

        }).catch(function errorHandler(err) {
            util.errorHandler(res, err);
        });
    });

};

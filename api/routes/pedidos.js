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
        Models.pedidos.findAll(searchParam).then(result => {
            const resultArray = [];
            for (let order of result) {
                if (order.comandas && order.comandas.length > 0) {
                    resultArray.push(order);
                }
            }

            res.json(resultArray);
        });
    });

    router.get('/pedidos/:id', (req, res) => {
        Models.pedidos.findById(req.params.id).then(r => res.json(r));
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

};

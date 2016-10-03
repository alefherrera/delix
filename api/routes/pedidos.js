//const util = require('./util');
const {Models} = require('../db');

module.exports = router => {
    //util.abml(router, 'pedidos');

    router.get('/pedidos', (req, res) => {
        const param = {
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
                            model: Models.productosPorComandas,
                            include: {
                                model: Models.productos
                            }
                        }, {
                            model: Models.platosPorComandas,
                            include: {
                                model: Models.platos
                            }
                        }, {
                            model: Models.promosPorComandas,
                            include: {
                                model: Models.promos
                            }
                        }
                    ]
                }
            ],
            order: 'updatedAt'
        };

        Models.pedidos.findAll(param).then(result => {
            const resultArray = [];
            for (let order of result) {
              if (order.comandas && order.comandas.length > 0) {
                resultArray.push(order);
              }
            }

            res.json(resultArray);
        });
    });

    router.post('/pedidos', (req, res) => {
        const param = {
            where: req.body,
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
                            model: Models.productosPorComandas,
                            include: {
                                model: Models.productos
                            }
                        }, {
                            model: Models.platosPorComandas,
                            include: {
                                model: Models.platos
                            }
                        }, {
                            model: Models.promosPorComandas,
                            include: {
                                model: Models.promos
                            }
                        }
                    ]
                }
            ]
        };

        Models.pedidos.findOrCreate(param).then(result => res.json(result[0]));

    });

};

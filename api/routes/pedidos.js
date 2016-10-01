//const util = require('./util');
const {pedidos} = require('../db').Models;

module.exports = router => {
    //util.abml(router, 'pedidos');

    router.post('/pedidos', (req, res) => {
        const pedido = req.body;
        pedido.include = [{
            model: Models.productosPorPromos,
            include: [Models.productos]
        }, {
            model: Models.platosPorPromos,
            include: [Models.platos]
        }];

        pedidos.findOrCreate(pedido).then();


    });

};

const {Models} = require('../db');
//const util = require('./util');

module.exports = router => {

    router.post('/comandas', (req, res) => {
        const comanda = req.body;

        // {
        //     pedidoId: 1,
        //     platos: [],
        //     productos: [{id: 1000, cant: 2}],
        //     promos: []
        // }

        const createdComandas = [];

        const createComandaFunc = (comanda, item) => {
            Models.comandas.create(comanda).then(newComanda => {
                if (item.isPlato) {
                    Models.platosPorComandas.create({
                        comandaId: newComanda.id,
                        platoId: item.id
                    }).then(newItem => createdComandas.push(newItem.comandaId));
                } else if (item.isProducto) {
                    Models.productosPorComandas.create({
                        comandaId: newComanda.id,
                        productoId: item.id
                    }).then(newItem => createdComandas.push(newItem.comandaId));
                } else if (item.isPromo) {
                    Models.promosPorComandas.create({
                        comandaId: newComanda.id,
                        promoId: item.id
                    }).then(newItem => createdComandas.push(newItem.comandaId));
                }
            });
        };


        if (comanda.platos && comanda.platos.length > 0) {
            for (const plato of comanda.platos) {
                for (let i = plato.cant; i; i--) {
                    createComandaFunc(comanda, Object.assign(plato, {
                        isPlato: true
                    }));
                }
            }
        }

        if (comanda.productos && comanda.productos.length > 0) {
            for (const producto of comanda.productos) {
                for (let i = producto.cant; i; i--) {
                    createComandaFunc(comanda, Object.assign(producto, {
                        isProducto: true
                    }));
                }
            }
        }

        if (comanda.promos && comanda.promos.length > 0) {
            for (const promo of comanda.promos) {
                for (let i = promo.cant; i; i--) {
                    createComandaFunc(comanda, Object.assign(promo, {
                        isPromo: true
                    }));
                }
            }
        }

        res.json(createdComandas);

    });

};

const {Models} = require('../db');
const util = require('./util');

module.exports = router => {
    util.b(router, 'promos');

    router.post('/promos', (req, res) => {
        const promoToSave = req.body;

        if (!promoToSave.id) {
            Models.promos.create(promoToSave).then(newPromo => {

                const promiseBulk = [];
                if (promoToSave.platos && promoToSave.platos.length > 0) {
                    for (const plato of promoToSave.platos) {
                        for (let i = plato.cant; i; i--) {
                            promiseBulk.push(Models.platosPorPromos.upsert({
                              promoId: newPromo.id,
                              platoId: plato.id
                            }));
                        }
                    }
                }
                if (promoToSave.productos && promoToSave.productos.length > 0) {
                    for (const producto of promoToSave.productos) {
                        for (let i = producto.cant; i; i--) {
                            promiseBulk.push(Models.productosPorPromos.upsert({
                              promoId: newPromo.id,
                              productoId: producto.id
                            }));
                        }
                    }
                }

                Promise.all(promiseBulk).then(() => res.json(newPromo));
            });
        } else {
            Models.promos.upsert(promoToSave).then(() => {

                const promiseBulk = [];
                promiseBulk.push(Models.platosPorPromos.destroy({
                    where: {
                        promoId: promoToSave.id
                    }
                }));
                promiseBulk.push(Models.productosPorPromos.destroy({
                    where: {
                        promoId: promoToSave.id
                    }
                }));

                if (promoToSave.platos && promoToSave.platos.length > 0) {
                    promiseBulk.push(Models.platosPorPromos.bulkCreate(
                      promoToSave.platos.map((obj) => {
                        return {promoId: promoToSave.id, platoId: obj.id};
                    })));
                }
                if (promoToSave.productos && promoToSave.productos.length > 0) {
                    promiseBulk.push(Models.productosPorPromos.bulkCreate(
                      promoToSave.productos.map((obj) => {
                        return {promoId: promoToSave.id, productoId: obj.id};
                    })));
                }

                Promise.all(promiseBulk).then(() => res.json(promoToSave));
            });
        }
    });

    router.get('/promos', (req, res) => {

        Models.promos.findAll({
            include: [
                {
                    model: Models.productosPorPromos,
                    include: [Models.productos]
                }, {
                    model: Models.platosPorPromos,
                    include: [Models.platos]
                }
            ]
        }).then(result => {
            res.json(result);
        });
    });

};

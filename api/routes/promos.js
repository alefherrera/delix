const {Models} = require('../db');
const util = require('./util');

module.exports = router => {
    util.b(router, 'promos');

router.post('/promos', (req, res) => {
    const promoToSave = req.body;
    console.log(promoToSave);

    if (!promoToSave.id) {
      Models.promos.create(promoToSave).then(result => {
        const promo = result;
        Promise.all(
          promo.setPlatos(promoToSave.platos.map((plato) => plato.id)),
          promo.setProductos(promoToSave.productos.map((producto) => producto.id))
        ).then(res.json(promo));
      });
    }
    else
    {
      Models.promos.upsert(promoToSave).then(() => {
        Models.promos.findById(promoToSave.id).then(promo =>{
          Promise.all(
            promo.setPlatos(promoToSave.platos.map((plato) => plato.id)),
            promo.setProductos(promoToSave.productos.map((producto) => producto.id))
          ).then(res.json(promo));
        });
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

router.get('/promos/:id', (req, res) => {
    Models.promos.findById(req.params.id, {
        include: [
            {
                model: Models.platos
            }, {
                model: Models.productos
            }
        ]
    }).then(result => {
        res.json(result);
    });
});

};

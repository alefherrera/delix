const {
    Models
} = require('../db');

module.exports = router => {

    router.post('/promo', (req, res) => {
        res.send('promo');
    });

    router.get('/promo', (req, res) => {

        Models.promos.findAll({
            include: [{
                model: Models.productosPorPromos,
                include: [Models.productos]
            }, {
                model: Models.platosPorPromos,
                include: [Models.platos]
            }]
        }).then(result => {
            res.json(result);
        });
    });

};

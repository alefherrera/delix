const {Models} = require('../db');

module.exports = router => {
    router.get('/estado_mesas', (request, response) => {
        Models.sectores.findAll({
            include: {
                model: Models.grupoDeMesas,
                include: {
                    model: Models.pedidos
                }
            }
        }).then(result => {
            response.json(result);
        });
    });

};

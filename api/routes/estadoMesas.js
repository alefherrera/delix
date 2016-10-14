const {Models} = require('../db');

module.exports = router => {
    router.get('/estado_mesas', (request, response) => {
        Models.sectores.findAll({
            include: {
                model: Models.grupoDeMesas,
                include: [
                    {
                        model: Models.pedidos,
                        limit: 1,
                        order: [
                            ['createdAt', 'DESC']
                        ]
                    }, {
                        model: Models.mesas
                    }
                ]
            }
        }).then(result => {
          // console.log(result);
          //   if (result.gruposDeMesas) {
          //       for (let i = result.gruposDeMesas.length; i; i--) {
          //         result.gruposDeMesas[i].capacidadTotal = result.gruposDeMesas[i].mesas.reduce((prev, actual) => prev + actual.capacidad, 0);
          //         console.log(result.gruposDeMesas[i]);
          //       }
          //   }

            response.json(result);
        });
    });

};

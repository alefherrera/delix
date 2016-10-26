const { Models } = require('../db');
const { reduce } = require('lodash');

module.exports = router => {
    router.get('/estado_mesas', (request, response) => {
        Models.sectores.findAll({
            include: {
                model: Models.grupoDeMesas,
                include: [
                  Models.grupoDeMesasEstado,
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

          const ret = result.map(sector => {
            sector.gruposDeMesas = sector.gruposDeMesas.map(grupo => {
              grupo.setDataValue('capacidad', reduce(grupo.mesas, (p, c) => p + c.capacidad , 0));
              return grupo;
              }
            )
            return sector;
          });

          response.json(ret);
        });
    });

};

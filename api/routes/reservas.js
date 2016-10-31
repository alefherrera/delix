const util = require('./util');
const {grupoDeMesas, sectores, franjas, reservas} = require('../db').Models;

module.exports = router => {
    util.l(router, 'reservas', [grupoDeMesas, franjas]);
    util.b(router, 'reservas');

    router.post('/reservas', (req, res) => {

        // const dateToSave = new Date(req.body.fecha);
        // dateToSave.setHours(0,0,0,0);
        // const today = new Date();
        // today.setHours(0,0,0,0);
        //
        // console.log('dateToSave que viene en el JSON');
        // console.log(dateToSave);
        // console.log('new DateTime');
        // console.log(today);
        //
        //
        // if (dateToSave < today) {
        //   res.status(500).send('La fecha introducida es invalida.');
        // }

        const param = {};
        param.where = {
            franjaId: req.body.franjaId,
            grupoDeMesasId: req.body.grupoDeMesasId,
            fecha: req.body.fecha
        };

        reservas.findOne(param).then(function finishFind(result) {
            if (result) {
                res.status(500).send('Esta mesa ya se encuentra reservada para este dia y franja horaria.');
            } else {
                reservas.create(req.body).then((result) => {
                    res.json(result);
                }).catch(function createError(err) {
                    util.errorHandler(res, err);
                });
            }
        });
    });

    router.get('/reservas', (req, res) => {
      const {fecha, grupoDeMesasId, franjaId} = req.query;
      const param = {
          include: [
              {
                  model: grupoDeMesas
              }, {
                  model: franjas
              }
          ]};
      param.where = {};

      if (fecha) {
        param.where.fecha = fecha;
      }
      if (grupoDeMesasId) {
        param.where.grupoDeMesasId = grupoDeMesasId;
      }
      if (franjaId) {
        param.where.franjaId = franjaId;
      }

      reservas.findAll(param).then((result) => {
          res.json(result);
      });

    });

    router.get('/reservas_mesas', (req, res) => {
        grupoDeMesas.findAll({
            include: {
                model: sectores,
                where: {
                    esPrivado: true
                }
            }
        }).then(result => res.json(result));
    });

};

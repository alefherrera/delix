const util = require('./util');
const {productos} = require('../db').Models;

module.exports = router => {
    util.am(router, 'productos');
    util.b(router, 'productos');

    router.get('/productos', (req, res) => {
        const {esFinal} = req.query;

        if (esFinal) {
          productos.findAll({
              where: {
                  esFinal: (esFinal === 'true' ? true : false)
              }
          }).then(r => res.json(r));
        }
        else
          productos.findAll().then(r => res.json(r));

    });
};

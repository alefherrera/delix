const util = require('./util');
const {Models} = require('../db');
const jsreport = require('jsreport');

const searchParam = () => (
  {
    include: [
        {
            model: Models.usuarios
        }, {
            model: Models.grupoDeMesas
        }, {
            model: Models.pedidoEstado
        }, {
            model: Models.comandas,
            include: [
                {
                    model: Models.productos
                }, {
                    model: Models.platos
                }, {
                    model: Models.promos
                }
            ]
        }
    ],
    order: 'updatedAt'
});

module.exports = router => {
  util.abml(router, 'pagos', [Models.pagoTipos]);

  router.get('/generar_ticket_pago/:id', (req, res) => {
      const fs = require('fs');

      let param = {
          include: {
              model: Models.pagoTipos
          }
      };
      param.where = {
          id: req.params.id
      };

      Models.pagos.findOne(param).then(pago => {
          if (!pago) {
              res.status(404).send();
          }

          Models.pedidos.findById(pago.pedidoId).then(pedido => {
              if (!pedido) {
                  res.status(404).send();
              }

              const order = summarizeOrder(pedido);
              let datosString = '';
              let comandasString = '';
              let pagoString = '';

              datosString += `<tr><td>Mozo</td><td>${order.usuario.nombre + ' ' +  order.usuario.apellido}</td></tr>`;
              datosString += `<tr><td>Mesa</td><td>${order.grupoDeMesas.nombre}</td></tr>`;
              datosString += `<tr><td>Recepcion</td><td>${order.createdAt.toLocaleString()}</td></tr>`;
              datosString += `<tr><td>Cierre</td><td>${order.modifiedAt && order.modifiedAt.toLocaleString() || ''}</td></tr>`;

              comandasString = '<tr><td>Detalle</td><td>Cantidad</td><td>Precio unit.</td><td>Total</td></tr>';
              comandasString += _.reduce(order.orderLines, (prev, current) =>
              {
                return prev += `<tr><td>${current.descripcion}</td><td>${current.cantidad}</td><td>${current.precio}</td><td>${current.precioTotal}</td></tr>`;
              }, '');

              pagoString += `<tr><td>Total</td><td>${order.total}</td></tr>`;
              pagoString += `<tr><td>Medio de pago</td><td>${pago}</td></tr>`;
              pagoString += `<tr><td>Paga con</td><td>${pago.montoRecibido}</td></tr>`;
              pagoString += `<tr><td>Vuelto</td><td>${order.total - pago.montoRecibido}</td></tr>`;

              let template = fs.readFileSync('./htmlTemplate/index.html').toString();
              const result = template
                .replace(/__tbl_Datos__/g, datosString)
                .replace(/__tbl_comandas__/g, comandasString)
                .replace(/__tbl_pagos__/g, pagoString);

              jsreport.render(result).then(function(out) {
                out.stream.pipe(res);
              }).catch(function(e) {
                res.end(e.message);
              });
          });



      });
  });
};

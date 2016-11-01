const util = require('./util');
const {Models} = require('../db');
const jsreport = require('jsreport');
const _ = require('lodash');

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

const generateOrderLines = itemArray => {
    return _(itemArray)
      .groupBy('id')
      .map(function(grouped) {
        let result = {};
        result.precioTotal = 0;
        grouped.forEach(prod => result.precioTotal += prod.precio);
        result.cantidad = grouped.length;
        result.precio = grouped[0].precio;
        result.id = grouped[0].id;
        result.descripcion = grouped[0].descripcion || grouped[0].nombre;
        return result;
    }).valueOf();
};

const summarizeOrder = order => {
  const prodsArray = [];
  const platoArray = [];
  const promoArray = [];

  if (!order.comandas) {
    return order;
  }

  order = order.toJSON();

  order.comandas.forEach(current => {
    if (current.productos)
      current.productos.forEach(prod => prodsArray.push(prod));
    if (current.platos)
      current.platos.forEach(plato => platoArray.push(plato));
    if (current.promos)
      current.promos.forEach(promo => promoArray.push(promo));
  });

  order.orderLines = _.concat(generateOrderLines(prodsArray), generateOrderLines(platoArray), generateOrderLines(promoArray));

  order.total = require('lodash').reduce(order.orderLines,(p, c) => {
    return p + c.precioTotal;
  }, 0);

  return order;
};

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

          Models.pedidos.findById(pago.pedidoId, searchParam()).then(pedido => {
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
              pagoString += `<tr><td>Medio de pago</td><td>${pago.pagoTipo.descripcion || ''}</td></tr>`;
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

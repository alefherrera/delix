module.exports = Models => {
  require('./usuario_tipo')(Models)
  .then(require('./usuarios')(Models))
  .then(require('./pedido_estado')(Models))
  .then(require('./comanda_estado')(Models))
  .then(require('./sectores')(Models))
  .then(require('./grupo_de_mesas_estado')(Models))
  .then(require('./grupo_de_mesas')(Models))
  .then(require('./mesas')(Models))
  .then(require('./rubros')(Models))
  .then(require('./productos')(Models))
  .then(require('./platos')(Models))
  .then(require('./promos')(Models))
  .then(require('./productosPorPromos')(Models))
  .then(require('./platosPorPromos')(Models))
  .then(require('./pago_tipos')(Models));
};

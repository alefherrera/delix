module.exports = Models => {
  require('./usuario_tipo')(Models);
  require('./pedido_estado')(Models);
  //mocks
  require('./sectores')(Models);
  require('./grupo_de_mesas')(Models);
  require('./mesas')(Models);
  require('./usuarios')(Models);
  require('./rubros')(Models);
  require('./productos')(Models);
}

module.exports = ({ usuarioTipo }) => {
  usuarioTipo.upsert({ descripcion: 'Encargado' });
  usuarioTipo.upsert({ descripcion: 'Mozo' });
  usuarioTipo.upsert({ descripcion: 'Cocinero' });
}

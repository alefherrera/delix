module.exports = ({ usuarios }) => {
  usuarios.upsert({ id: 1, Nombre: 'Alejandro', Apellido: 'Herrera', usuario_tipo_id: 1 });
}

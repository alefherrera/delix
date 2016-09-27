module.exports = ({ mesas }) => {
  mesas.upsert({ id: 1, grupo_de_mesas: 1, capacidad: 4 });
  mesas.upsert({ id: 2, grupo_de_mesas: 2, capacidad: 2 });
}

module.exports = ({ mesas }) => {
  mesas.upsert({ id: 1, grupo_de_mesas_id: 1, capacidad: 4 });
  mesas.upsert({ id: 2, grupo_de_mesas_id: 2, capacidad: 2 });
}

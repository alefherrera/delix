module.exports = ({ sectores }) => {
  sectores.upsert({ id: 1, esPrivado: false });
  sectores.upsert({ id: 2, esPrivado: true });
}

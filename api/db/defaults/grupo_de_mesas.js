module.exports = ({ grupoDeMesas }) => {
  grupoDeMesas.upsert({ id: 1, secores_id: 1, esPrivado: false });
  grupoDeMesas.upsert({ id: 2, secores_id: 2, esPrivado: true });
}

module.exports = ({ rubros }) => {
  rubros.upsert({ id: 1, descripcion: 'Carniceria' });
  rubros.upsert({ id: 2, descripcion: 'Verduleria' });
  rubros.upsert({ id: 3, descripcion: 'Bebidas' });
  rubros.upsert({ id: 4, descripcion: 'Reposteria' });
  rubros.upsert({ id: 5, descripcion: 'Lacteos' });
  rubros.upsert({ id: 6, descripcion: 'Panaderia' });
}

module.exports = ({
  usuarios,
  pedidos,
  grupoDeMesas,
  pedidoEstado,
  grupoDeMesasEstado,
  comandas,
  comandaEstado,
  promos,
  platos,
  productos,
  platosPorPromos,
  productosPorPromos,
  productosPorComandas,
  platosPorComandas,
  promosPorComandas,
  sectores,
  mesas,
  reservas,
  franjas,
}) => {

    usuarios.hasMany(pedidos);
    pedidos.belongsTo(usuarios);

    grupoDeMesas.hasMany(pedidos);
    pedidos.belongsTo(grupoDeMesas);

    pedidoEstado.hasMany(pedidos);
    pedidos.belongsTo(pedidoEstado);

    grupoDeMesasEstado.hasMany(grupoDeMesas);
    grupoDeMesas.belongsTo(grupoDeMesasEstado);

    pedidos.hasMany(comandas);
    comandas.belongsTo(pedidos);

    promos.belongsToMany(platos, { through: platosPorPromos });
    platos.belongsToMany(promos, { through: platosPorPromos });
    promos.belongsToMany(productos, { through: productosPorPromos });
    productos.belongsToMany(promos, { through: productosPorPromos });

    comandas.belongsToMany(productos, { through: productosPorComandas });
    productos.belongsToMany(comandas, { through: productosPorComandas });
    comandas.belongsToMany(platos, { through: platosPorComandas });
    platos.belongsToMany(comandas, { through: platosPorComandas });
    comandas.belongsToMany(promos, { through: promosPorComandas });
    promos.belongsToMany(comandas, { through: promosPorComandas });

    comandaEstado.hasMany(comandas);
    comandas.belongsTo(comandaEstado);

    sectores.hasMany(grupoDeMesas);
    grupoDeMesas.belongsTo(sectores);

    grupoDeMesas.hasMany(mesas);
    mesas.belongsTo(grupoDeMesas);

    grupoDeMesas.hasMany(reservas);
    reservas.belongsTo(grupoDeMesas);

    franjas.hasMany(reservas);
    reservas.belongsTo(franjas);

};

module.exports = (models) => {

    models.usuarios.hasMany(models.pedidos);
    models.pedidos.belongsTo(models.usuarios);

    models.grupoDeMesas.hasMany(models.pedidos);
    models.pedidos.belongsTo(models.grupoDeMesas);

    models.pedidoEstado.hasMany(models.pedidos);
    models.pedidos.belongsTo(models.pedidoEstado);

    models.grupoDeMesasEstado.hasMany(models.grupoDeMesas);
    models.grupoDeMesas.belongsTo(models.grupoDeMesasEstado);

    models.pedidos.hasMany(models.comandas);
    models.comandas.belongsTo(models.pedidos);


    models.promos.belongsToMany(models.platos, { through: models.platosPorPromos });
    models.platos.belongsToMany(models.promos, { through: models.platosPorPromos });
    models.promos.belongsToMany(models.productos, { through: models.productosPorPromos });
    models.productos.belongsToMany(models.promos, { through: models.productosPorPromos });

    models.comandas.belongsToMany(models.productos, { through: models.productosPorComandas });
    models.productos.belongsToMany(models.comandas, { through: models.productosPorComandas });
    models.comandas.belongsToMany(models.platos, { through: models.platosPorComandas });
    models.platos.belongsToMany(models.comandas, { through: models.platosPorComandas });
    models.comandas.belongsToMany(models.promos, { through: models.promosPorComandas });
    models.promos.belongsToMany(models.comandas, { through: models.promosPorComandas });

    models.comandaEstado.hasMany(models.comandas);
    models.comandas.belongsTo(models.comandaEstado);

    models.sectores.hasMany(models.grupoDeMesas);
    models.grupoDeMesas.belongsTo(models.sectores);

    models.grupoDeMesas.hasMany(models.mesas);
    models.mesas.belongsTo(models.grupoDeMesas);

};

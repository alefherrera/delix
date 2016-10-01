module.exports = (models) => {

    models.promos.hasMany(models.platosPorPromos);
    models.platosPorPromos.belongsTo(models.promos);
    models.promos.hasMany(models.promosPorComandas);
    models.promosPorComandas.belongsTo(models.promos);

    models.productos.hasMany(models.productosPorPromos);
    models.productosPorPromos.belongsTo(models.productos);
    models.productos.hasMany(models.productosPorComandas);
    models.productosPorComandas.belongsTo(models.productos);

    models.platos.hasMany(models.platosPorPromos);
    models.platosPorPromos.belongsTo(models.platos);
    models.platos.hasMany(models.platosPorComandas);
    models.platosPorComandas.belongsTo(models.platos);

    models.promos.hasMany(models.productosPorPromos);
    models.productosPorPromos.belongsTo(models.promos);

    models.pedidos.belongsTo(models.usuarios);
    models.pedidos.belongsTo(models.grupoDeMesas);
    models.pedidos.belongsTo(models.pedidoEstado);

    models.pedidos.hasMany(models.comandas);
    models.comandas.belongsTo(models.pedidos);

    models.comandas.hasMany(models.productosPorComandas);
    models.productosPorComandas.belongsTo(models.comandas);

    models.comandas.hasMany(models.platosPorComandas);
    models.platosPorComandas.belongsTo(models.comandas);

    models.comandas.hasMany(models.promosPorComandas);
    models.promosPorComandas.belongsTo(models.comandas);


};

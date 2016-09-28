module.exports = ({
    promos,
    platos,
    productos,
    productosPorPromos,
    platosPorPromos,
}) => {

    promos.hasMany(productosPorPromos);
    productosPorPromos.belongsTo(promos);

    promos.hasMany(platosPorPromos);
    platosPorPromos.belongsTo(promos);

    productos.hasMany(productosPorPromos);
    productosPorPromos.belongsTo(productos);

    platos.hasMany(platosPorPromos);
    platosPorPromos.belongsTo(platos);

};

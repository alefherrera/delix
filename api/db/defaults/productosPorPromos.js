module.exports = ({
    productosPorPromos
}) => {
    return Promise.all(
        productosPorPromos.upsert({
            productos_id: 1,
            promos_id: 1
        }),
        productosPorPromos.upsert({
            productos_id: 2,
            promos_id: 2
        })
    );
};

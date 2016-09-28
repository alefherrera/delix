module.exports = ({
    productosPorPromos
}) => {
    return Promise.all(
        productosPorPromos.upsert({
            productoId: 1,
            promoId: 1
        }),
        productosPorPromos.upsert({
            productoId: 2,
            promoId: 2
        })
    );
};

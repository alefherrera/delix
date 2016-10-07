module.exports = ({
    platosPorPromos
}) => {
    return Promise.all(
        platosPorPromos.upsert({
            platoId: 4,
            promoId: 1,
        }),
        platosPorPromos.upsert({
            platoId: 3,
            promoId: 2,
        })
    );
};

module.exports = ({
    platosPorPromos
}) => {
    return Promise.all(
        platosPorPromos.upsert({
            platos_id: 4,
            promos_id: 1,
        }),
        platosPorPromos.upsert({
            platos_id: 3,
            promos_id: 2,
        })
    );
};

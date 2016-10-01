module.exports = ({
    promos
}) => {
    return Promise.all(
        promos.upsert({
            id: 1,
            nombre: 'Menu Kids',
            porcentajeDescuento: 10
        }),
        promos.upsert({
            id: 2,
            nombre: 'Menu Ejecutivo',
            porcentajeDescuento: 15
        })
    );
};

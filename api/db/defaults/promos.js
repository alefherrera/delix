module.exports = ({
    promos
}) => {
    return Promise.all(
        promos.upsert({
            id: 1,
            descripcion: 'Menu Kids',
            porcentajeDescuento: 10
        }),
        promos.upsert({
            id: 2,
            descripcion: 'Menu Ejecutivo',
            porcentajeDescuento: 15
        })
    );
};

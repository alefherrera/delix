module.exports = ({
    promos
}) => {
    return Promise.all(
        promos.upsert({
            id: 1,
            nombre: 'Menu Kids',
            precio: 100
        }),
        promos.upsert({
            id: 2,
            nombre: 'Menu Ejecutivo',
            precio: 110
        })
    );
};

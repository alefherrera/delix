module.exports = ({
    platos
}) => {
    return Promise.all(
        platos.upsert({
            id: 1,
            nombre: 'Fideos con bolognesa',
            descripcion: 'Fideos con bolognesa.',
            precio: 110
        }),
        platos.upsert({
            id: 2,
            nombre: 'Pollo al horno',
            descripcion: 'Pollo al horno.',
            precio: 120
        }),
        platos.upsert({
            id: 3,
            nombre: 'Lomo al champignon',
            descripcion: 'Lomo al champignon.',
            precio: 150
        }),
        platos.upsert({
            id: 4,
            nombre: 'Hamburguesa',
            descripcion: 'Hamburguesa.',
            precio: 75
        })
    );
};

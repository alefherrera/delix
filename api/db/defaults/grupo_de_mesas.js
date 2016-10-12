module.exports = ({
    grupoDeMesas
}) => {
    return Promise.all(
        grupoDeMesas.upsert({
            id: 1,
            nombre: 'Mesa 1',
            sectoreId: 1,
            esPrivado: false
        }),
        grupoDeMesas.upsert({
            id: 2,
            nombre: 'Mesa 2',
            sectoreId: 2,
            esPrivado: true
        })
    );
};

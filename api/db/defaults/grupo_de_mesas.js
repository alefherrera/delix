module.exports = ({
    grupoDeMesas
}) => {
    return Promise.all(
        grupoDeMesas.upsert({
            id: 1,
            nombre: 'Mesa 1',
            sectorId: 1,
            esPrivado: false
        }),
        grupoDeMesas.upsert({
            id: 2,
            nombre: 'Mesa 2',
            sectorId: 2,
            esPrivado: true
        })
    );
};

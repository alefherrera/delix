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
        }),
        grupoDeMesas.upsert({
            id: 3,
            nombre: 'Mesa 3',
            sectorId: 1,
            esPrivado: false
        }),
        grupoDeMesas.upsert({
            id: 4,
            nombre: 'Mesa 4',
            sectorId: 3,
            esPrivado: true
        })
    );
};

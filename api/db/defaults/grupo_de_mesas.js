module.exports = ({
    grupoDeMesas
}) => {
    return Promise.all(
        grupoDeMesas.upsert({
            id: 1,
            sectores_id: 1,
            esPrivado: false
        }),
        grupoDeMesas.upsert({
            id: 2,
            sectores_id: 2,
            esPrivado: true
        })
    );
};

module.exports = ({
    grupoDeMesasEstado
}) => {
    return Promise.all(
        grupoDeMesasEstado.upsert({
            id: 1,
            descripcion: 'Libre'
        }),
        grupoDeMesasEstado.upsert({
            id: 2,
            descripcion: 'Ocupada'
        }),
        grupoDeMesasEstado.upsert({
            id: 3,
            descripcion: 'Reservada'
        })
    );
};

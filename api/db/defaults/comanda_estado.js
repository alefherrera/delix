module.exports = ({
    comandaEstado
}) => {
    return Promise.all(
        comandaEstado.upsert({
            id: 1,
            descripcion: 'Pendiente'
        }),
        comandaEstado.upsert({
            id: 2,
            descripcion: 'Lista para entrega'
        }),
        comandaEstado.upsert({
            id: 3,
            descripcion: 'Entregada'
        })
    );
};

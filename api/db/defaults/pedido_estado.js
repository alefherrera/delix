module.exports = ({
    pedidoEstado
}) => {
    return Promise.all(
        pedidoEstado.upsert({
            id: 1,
            descripcion: 'Libre'
        }),
        pedidoEstado.upsert({
            id: 2,
            descripcion: 'Ocupada'
        }),
        pedidoEstado.upsert({
            id: 3,
            descripcion: 'Reservada'
        })
    );
};

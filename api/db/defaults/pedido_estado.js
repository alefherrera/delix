module.exports = ({
    pedidoEstado
}) => {
    return Promise.all(
        pedidoEstado.upsert({
            id: 1,
            descripcion: 'Abierto'
        }),
        pedidoEstado.upsert({
            id: 2,
            descripcion: 'Cerrado'
        }),
        pedidoEstado.upsert({
            id: 3,
            descripcion: 'Pagado'
        })
    );
};

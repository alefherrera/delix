module.exports = ({
    pagoTipos
}) => {
    return Promise.all(
        pagoTipos.upsert({
            id: 1,
            descripcion: 'Efectivo'
        }),
        pagoTipos.upsert({
            id: 2,
            descripcion: 'Tarjeta de credito'
        })
    );
};

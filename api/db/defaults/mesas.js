module.exports = ({
    mesas
}) => {
    return Promise.all(
        mesas.upsert({
            id: 1,
            grupoDeMesasId: 1,
            capacidad: 4
        }),
        mesas.upsert({
            id: 2,
            grupoDeMesasId: 2,
            capacidad: 2
        })
    );
};
